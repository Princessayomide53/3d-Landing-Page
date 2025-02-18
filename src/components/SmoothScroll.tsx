'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust smoothness
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Cleanup when unmounting
  }, []);

  return <>{children}</>;
}
