"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;

    const update = () => {
      lenis?.destroy();
      lenis = null;

      if (reducedMotion.matches) return;

      lenis = new Lenis({
        autoRaf: true,
        lerp: 0.18,
        smoothWheel: true,
        syncTouch: false,
        anchors: { offset: -96 },
      });
    };

    update();
    reducedMotion.addEventListener("change", update);

    return () => {
      reducedMotion.removeEventListener("change", update);
      lenis?.destroy();
    };
  }, []);

  return null;
}
