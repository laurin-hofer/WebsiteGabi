"use client";

import { useEffect } from "react";

export function AnimationVisibility() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-animate-when-visible]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          (entry.target as HTMLElement).dataset.inView = String(entry.isIntersecting);
        }
      },
      { rootMargin: "120px 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}
