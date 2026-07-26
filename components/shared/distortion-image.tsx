"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type DistortionImageProps = {
  src: string;
  alt: string;
  className?: string;
  /** CSS object-position equivalents, 0..1 (x from left, y from top) */
  positionX?: number;
  positionY?: number;
};

const VERTEX_SHADER = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  precision highp float;

  uniform sampler2D uTexture;
  uniform vec2 uMouse;      // pointer in plane UV space
  uniform float uIntensity; // 0..1, spikes on movement, decays
  uniform float uTime;
  uniform vec2 uScale;      // cover-crop scale
  uniform vec2 uOffset;     // cover-crop offset
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;

    // Idle liquid breathing — subtle even without the pointer
    uv.x += sin(uv.y * 9.0 + uTime * 0.55) * 0.002;
    uv.y += cos(uv.x * 9.0 + uTime * 0.45) * 0.002;

    // Pointer ripple — push pixels away from the cursor
    float dist = distance(vUv, uMouse);
    float ripple = smoothstep(0.4, 0.0, dist);
    vec2 dir = normalize(vUv - uMouse + vec2(0.0001));
    float wave = sin(dist * 22.0 - uTime * 4.0) * 0.5 + 0.5;
    uv += dir * ripple * wave * uIntensity * 0.05;

    // Map plane UV -> texture UV (object-fit: cover)
    vec2 tuv = uv * uScale + uOffset;

    // Chromatic aberration proportional to distortion
    float shift = ripple * uIntensity * 0.012;
    float r = texture2D(uTexture, tuv + vec2(shift, 0.0)).r;
    float g = texture2D(uTexture, tuv).g;
    float b = texture2D(uTexture, tuv - vec2(shift, 0.0)).b;

    gl_FragColor = vec4(r, g, b, 1.0);
  }
`;

/**
 * Three.js liquid-hover distortion (lusion.io style): the image lives on a
 * WebGL plane; moving the pointer over it ripples the pixels with a wave +
 * chromatic aberration that eases back to rest.
 *
 * Falls back to a plain <img> for reduced motion / no WebGL.
 */
export function DistortionImage({
  src,
  alt,
  className,
  positionX = 0.5,
  positionY = 0.5,
}: DistortionImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || reducedMotion) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    } catch {
      setFallback(true);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0.1, 10);
    camera.position.z = 1;

    const uniforms = {
      uTexture: { value: null as THREE.Texture | null },
      uMouse: { value: new THREE.Vector2(-1, -1) },
      uIntensity: { value: 0 },
      uTime: { value: 0 },
      uScale: { value: new THREE.Vector2(1, 1) },
      uOffset: { value: new THREE.Vector2(0, 0) },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      transparent: true,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);
    scene.add(mesh);

    let imageAspect = 1;
    let disposed = false;

    const updateCoverMapping = () => {
      const { clientWidth: w, clientHeight: h } = container;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      const containerAspect = w / h;

      let sx = 1;
      let sy = 1;
      if (imageAspect > containerAspect) {
        sx = containerAspect / imageAspect; // crop left/right
      } else {
        sy = imageAspect / containerAspect; // crop top/bottom
      }
      const offsetLeft = positionX * (1 - sx);
      const offsetTop = positionY * (1 - sy);
      uniforms.uScale.value.set(sx, sy);
      // Texture v runs bottom-up; convert top-based offset
      uniforms.uOffset.value.set(offsetLeft, 1 - offsetTop - sy);
    };

    new THREE.TextureLoader().load(
      src,
      (texture) => {
        if (disposed) {
          texture.dispose();
          return;
        }
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearFilter;
        imageAspect = texture.image.width / texture.image.height;
        uniforms.uTexture.value = texture;
        updateCoverMapping();
      },
      undefined,
      () => setFallback(true)
    );

    // Pointer tracking (smoothed) + movement-driven intensity
    const targetMouse = new THREE.Vector2(-1, -1);
    let targetIntensity = 0;
    let lastX = 0;
    let lastY = 0;

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height;
      targetMouse.set(x, y);
      const speed = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      lastX = e.clientX;
      lastY = e.clientY;
      targetIntensity = Math.min(1, targetIntensity + speed * 0.015);
    };
    const onPointerLeave = () => {
      targetIntensity = 0;
    };
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);

    // Pause rendering when offscreen
    let visible = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(container);

    const resizeObserver = new ResizeObserver(updateCoverMapping);
    resizeObserver.observe(container);

    const clock = new THREE.Clock();
    let frame: number;
    const loop = () => {
      frame = requestAnimationFrame(loop);
      if (!visible) return;
      uniforms.uTime.value = clock.getElapsedTime();
      uniforms.uMouse.value.lerp(targetMouse, 0.08);
      targetIntensity *= 0.96; // natural decay
      uniforms.uIntensity.value +=
        (targetIntensity - uniforms.uIntensity.value) * 0.08;
      renderer.render(scene, camera);
    };
    loop();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      io.disconnect();
      resizeObserver.disconnect();
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
      mesh.geometry.dispose();
      material.dispose();
      uniforms.uTexture.value?.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [src, positionX, positionY, reducedMotion]);

  if (reducedMotion || fallback) {
    return (
      <img
        src={src}
        alt={alt}
        className={cn("h-full w-full object-cover", className)}
        style={{
          objectPosition: `${positionX * 100}% ${positionY * 100}%`,
        }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full w-full", className)}
      role="img"
      aria-label={alt}
    />
  );
}
