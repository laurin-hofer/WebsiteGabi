"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon, CloseIcon, MenuIcon } from "@/components/icons";

const links = [
  ["Ansatz", "/#ansatz"],
  ["Systemblick", "/#systemblick"],
  ["Angebot", "/#angebot"],
  ["Über mich", "/#ueber-mich"],
  ["FAQ", "/#faq"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/45 bg-[#fbfcf9]/95 shadow-[0_8px_40px_rgba(23,59,58,.06)]">
      <a href="#main" className="fixed left-4 top-3 z-[60] -translate-y-24 rounded-full bg-[#173b3a] px-5 py-3 text-sm font-semibold text-white transition-transform focus:translate-y-0">
        Zum Inhalt springen
      </a>
      <nav className="container-shell flex h-20 items-center justify-between" aria-label="Hauptnavigation">
        <Link href="/" aria-label="Gabriele Schauer – Startseite" className="relative z-50 block w-[152px] sm:w-[176px]">
          <Image src="/images/gabriele-schauer-logo.png" alt="Gabriele Schauer – Supervision und Coaching" width={1200} height={548} priority className="h-auto w-full" />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-[.84rem] font-medium tracking-[.04em] text-[#173b3a]/80 transition-colors hover:text-[#173b3a]">{label}</Link>
          ))}
          <Link href="/#kontakt" className="group inline-flex items-center gap-3 rounded-full bg-[#173b3a] px-5 py-3 text-[.82rem] font-semibold text-white transition-colors hover:bg-[#6c8c8b]">
            Erstgespräch <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <button type="button" className="relative z-50 grid h-11 w-11 place-items-center rounded-full border border-[#6c8c8b]/30 lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Menü schließen" : "Menü öffnen"} onClick={() => setOpen((value) => !value)}>
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      <div id="mobile-menu" className={`fixed inset-0 z-40 bg-[#fbfcf9] px-4 pt-28 transition-[opacity,visibility] duration-300 lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div className="container-shell flex flex-col">
          {links.map(([label, href], index) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-[#6c8c8b]/20 py-5 text-3xl font-medium">
              <span><span className="mr-4 align-middle text-xs text-[#6c8c8b]">0{index + 1}</span>{label}</span>
              <ArrowIcon className="h-5 w-5" />
            </Link>
          ))}
          <Link href="/#kontakt" onClick={() => setOpen(false)} className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#173b3a] px-6 py-4 font-semibold text-white">Erstgespräch anfragen <ArrowIcon className="h-4 w-4" /></Link>
        </div>
      </div>
      <div ref={progressRef} className="scroll-progress absolute inset-x-0 bottom-[-1px] h-[2px] bg-gradient-to-r from-[#d7c370] via-[#7acfc6] to-[#6c8c8b]" aria-hidden="true" />
    </header>
  );
}
