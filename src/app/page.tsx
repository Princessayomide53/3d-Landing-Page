'use client';

import { useEffect, useRef } from 'react';
import Archives from '@/components/Archives';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';
import gsap from 'gsap';
import Lenis from 'lenis';

export default function Home() {
  const modelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setClearColor(0x000000, 0);

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 2.5;
    modelRef.current?.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 7.5);
    mainLight.position.set(0.5, 7.5, 2.5);
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 2.5);
    fillLight.position.set(-15, 0, -5);
    scene.add(fillLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
    hemiLight.position.set(0, 0, 0);
    scene.add(hemiLight);

    const basicAnimate = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(basicAnimate);
    };
    basicAnimate();

    let model: THREE.Group | null = null;
    const loader = new GLTFLoader();
    loader.load('/blackchair.glb', (gltf) => {
      model = gltf.scene;
      model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.material) {
            if (child.material instanceof THREE.MeshStandardMaterial) {
              child.material.metalness = 2;
              child.material.roughness = 3;
              child.material.envMapIntensity = 5;
            }
          }
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      model.position.copy(center);
      scene.add(model);

      const size = box.getSize(new THREE.Vector3());
      const maxDin = Math.max(size.x, size.y, size.z);
      camera.position.z = maxDin * 1.75;

      model.scale.set(0, 0, 0);
      model.rotation.set(0, 0.5, 0);
      const floatAmplitude = 0.2;
      const floatSpeed = 1.5;
      const rotationSpeed = 0.3;
      const isFloating = true;
      let currentScroll = 0;

      const totalScrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const playIntialRotation = () => {
        if (model) {
          gsap.to(model.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 2,
            ease: 'power2.Out',
          });
        }
      };
      playIntialRotation();

      // cancelAnimationFrame(basicAnimate);
      const animate = () => {
        if (model) {
          if (isFloating) {
            const floatOffset =
              Math.sin(Date.now() * 0.001 * floatSpeed) * floatAmplitude;
            model.position.y = floatOffset;
          }
          const scrollProgress = Math.min(currentScroll / totalScrollHeight);
          const baseTilt = 0.5;
          model.rotation.x = scrollProgress * Math.PI * 4 + baseTilt;

          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        }
      };
      animate();

      const lenis = new Lenis();

      lenis.on('scroll', (e: any) => {
        currentScroll = e.scroll;
      });
    });
    // Add your model loading logic here

    return () => {
      modelRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <div ref={modelRef} className='model fixed z-[20]'></div>
      <Nav />
      <Hero />
      <Archives />
      <Footer />
    </>
  );
}
