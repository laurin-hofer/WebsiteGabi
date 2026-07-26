"use client";

import { useEffect, useState } from "react";
import { ArrowIcon } from "@/components/icons";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > window.innerHeight * 0.75);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Zurück zum Seitenanfang"
      className={`fixed bottom-7 right-7 z-40 hidden h-12 w-12 items-center justify-center rounded-full border border-white/55 bg-[#173b3a] text-white shadow-[0_14px_35px_rgba(23,59,58,.22)] transition-[opacity,transform,background] duration-300 hover:-translate-y-1 hover:bg-[#6c8c8b] lg:flex ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
    >
      <ArrowIcon className="h-5 w-5 -rotate-90" />
    </a>
  );
}
