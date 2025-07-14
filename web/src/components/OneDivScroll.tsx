// OneDivScroll.tsx
"use client";
import { useEffect, useRef } from "react";

interface Props {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function OneDivScroll({ containerRef }: Props) {
  const currentIndexRef = useRef(0);
  const isScrollingRef = useRef(false);
  const sectionElsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    sectionElsRef.current = Array.from(
      container.querySelectorAll(".scroll-section")
    );
    console.log(sectionElsRef.current);
    

    const handleWheel = (e: WheelEvent) => {
      console.log(isScrollingRef.current);
      
      if (isScrollingRef.current) {
        e.preventDefault();
        return;
      }
      

      const delta = e.deltaY;
      const direction = Math.sign(delta);
      const nextIndex = currentIndexRef.current + direction;

      if (nextIndex < 0 || nextIndex >= sectionElsRef.current.length) return;

      e.preventDefault();
      isScrollingRef.current = true;
      currentIndexRef.current = nextIndex;

      const target = sectionElsRef.current[nextIndex];
      if (target) {
        smoothScrollTo(container ,target.offsetTop, 800).then(() => {
          isScrollingRef.current = false;
        });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [containerRef]);

  return null;
}

// Scroll animation function
function smoothScrollTo(container: HTMLElement ,targetY: number, duration = 800) {
  console.log(container, targetY, duration);
  
  return new Promise<void>((resolve) => {
    const startY = window.scrollY;
    const startTime = performance.now();

    function easeInOutQuad(t: number) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function animate(time: number) {
      console.log(time, startTime, time - startTime);
      
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutQuad(progress);
      // console.log(elapsed, progress, eased);
      
      container.scrollTo(0, startY + (targetY - startY) * eased);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        resolve();
      }
    }

    requestAnimationFrame(animate);
  });
}
