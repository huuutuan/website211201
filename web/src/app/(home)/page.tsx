"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Navbar } from "./Navbar";
import styles from "./page.module.css";
import { useSectionScroll } from "@/hooks/useSectionScroll";

export default function Home1() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  useSectionScroll(containerRef, 1000, setActiveSection);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-hidden "
    >
      <div className="sections-wrapper">
        <div className="relative w-full scroll-section h-screen">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            src="/output2.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          {/* Overlay làm mờ giảm dần từ trên xuống dưới phía sau navbar */}
          <div
            className={cn(
              "absolute top-0 left-0 w-full h-20 z-0 pointer-events-none"
            )}
          >
            <div className={cn("w-full h-20 backdrop-blur-lg", styles.maskedBlur)}></div>
          </div>
          <div className="relative z-10">
            <Navbar />
            {/* Nội dung trang chủ ở đây */}
          </div>
        </div>

        <div className="h-screen scroll-section flex items-center justify-center">
          <h3 className={cn("text-3xl md:text-5xl font-bold text-center px-4") }>
            {"giá trị truyền thống văn hóa được lưu truyền!".split("").map((char, index) => (
              <span
                key={index}
                className={cn(activeSection === 1 ? styles.wordFadeIn: "inline-block")}
                style={{ animationDelay: `${index * 50}ms` }}
                >
                  {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h3>
        </div>
        <div className="h-screen scroll-section flex items-center justify-center">
          <h1 className={cn("text-3xl md:text-5xl font-bold text-center px-4")}>
            Section 3
          </h1>
        </div>
      </div>
    </div>
  );
}
