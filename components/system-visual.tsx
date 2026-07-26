"use client";

import { useEffect, useRef } from "react";

export function SystemVisual() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => { node.dataset.active = String(entry.isIntersecting); },
      { rootMargin: "120px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="system-visual" aria-label="Animierte Darstellung des systemischen Zusammenspiels von Person, Team und Organisation" role="img">
      <div className="system-ambient system-ambient-one" aria-hidden="true" />
      <div className="system-ambient system-ambient-two" aria-hidden="true" />

      <svg className="system-map" viewBox="0 0 640 640" fill="none" aria-hidden="true">
        <circle cx="320" cy="320" r="238" stroke="currentColor" strokeOpacity=".13" />
        <circle cx="320" cy="320" r="174" stroke="currentColor" strokeOpacity=".16" strokeDasharray="4 12" />
        <circle cx="320" cy="320" r="104" stroke="currentColor" strokeOpacity=".2" />

        <path className="system-flow" d="M126 230C213 123 404 103 515 217C604 309 566 476 439 534C320 588 168 531 111 406" stroke="url(#flowGradient)" strokeWidth="2" strokeLinecap="round" strokeDasharray="8 13" />
        <path className="system-flow system-flow-reverse" d="M204 485C128 409 145 276 229 205C321 127 470 171 510 281C540 363 492 463 404 493" stroke="url(#flowGradient)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="5 15" />

        <g className="system-orbit system-orbit-slow">
          <line x1="320" y1="320" x2="320" y2="82" stroke="currentColor" strokeOpacity=".12" />
          <circle cx="320" cy="82" r="15" fill="#e4da7b" />
          <circle cx="320" cy="82" r="25" stroke="#e4da7b" strokeOpacity=".28" />
        </g>
        <g className="system-orbit system-orbit-medium">
          <line x1="320" y1="320" x2="494" y2="320" stroke="currentColor" strokeOpacity=".12" />
          <circle cx="494" cy="320" r="13" fill="#7acfc6" />
          <circle cx="494" cy="320" r="22" stroke="#7acfc6" strokeOpacity=".28" />
        </g>
        <g className="system-orbit system-orbit-reverse">
          <line x1="320" y1="320" x2="238" y2="387" stroke="currentColor" strokeOpacity=".14" />
          <circle cx="238" cy="387" r="11" fill="#c7ce9d" />
          <circle cx="238" cy="387" r="19" stroke="#c7ce9d" strokeOpacity=".3" />
        </g>

        <circle className="system-pulse" cx="320" cy="320" r="66" fill="#fbfcf9" fillOpacity=".08" stroke="#c2e3dc" strokeOpacity=".35" />
        <circle cx="320" cy="320" r="47" fill="#173b3a" fillOpacity=".66" />
        <defs>
          <linearGradient id="flowGradient" x1="111" y1="103" x2="558" y2="550" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e4da7b" />
            <stop offset=".48" stopColor="#7acfc6" />
            <stop offset="1" stopColor="#c7ce9d" />
          </linearGradient>
        </defs>
      </svg>

      <div className="system-core" aria-hidden="true">
        <span>Neue</span>
        <strong>Sicht</strong>
      </div>
      <div className="system-label system-label-person"><span />Person</div>
      <div className="system-label system-label-team"><span />Team</div>
      <div className="system-label system-label-org"><span />Organisation</div>
      <div className="system-caption glass-surface">
        <span className="system-caption-dot" aria-hidden="true" />
        Muster erkennen
        <span className="system-caption-line" aria-hidden="true" />
        Handlungsspielraum öffnen
      </div>
    </div>
  );
}
