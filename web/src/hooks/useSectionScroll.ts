"use client";
import { useEffect, useRef } from "react";

export function useSectionScroll(containerRef: React.RefObject<HTMLDivElement | null>, delay: number = 800) {
  const isScrolling = useRef(false);
  const currentIndex = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const wrapper = container.querySelector('.sections-wrapper') as HTMLElement | null;
    if (!wrapper) return;
    const sections = Array.from(wrapper.querySelectorAll('.scroll-section')) as HTMLElement[];
    if (sections.length === 0) return;
    console.log(sections);
    

    // Set initial transform
    // wrapper.style.transition = 'transform 0.7s cubic-bezier(0.77,0,0.18,1)';
    wrapper.style.transition = 'transform 1s ease-in-out'; // chậm hơn, mượt hơn
    wrapper.style.willChange = 'transform';

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;
      e.preventDefault();
      const dir = Math.sign(e.deltaY);
      let nextIndex = currentIndex.current + dir;
      if (nextIndex < 0) nextIndex = 0;
      if (nextIndex >= sections.length) nextIndex = sections.length - 1;
      if (nextIndex === currentIndex.current) return;
      isScrolling.current = true;
      currentIndex.current = nextIndex;
      wrapper.style.transform = `translate3d(0, -${nextIndex * 100}vh, 0)`;
      console.log(`Scrolling to section ${nextIndex + 1}`);
      console.log(dir);
      
      
      setTimeout(() => {
        isScrolling.current = false;
      }, delay);
    };
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
      wrapper.style.transform = '';
      wrapper.style.transition = '';
      wrapper.style.willChange = '';
    };
  }, [containerRef, delay]);
}
