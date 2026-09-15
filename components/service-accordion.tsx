"use client";

import { Fragment, useEffect, useState } from "react";
import { ArrowIcon, PlusIcon } from "@/components/icons";

type ServiceDetail =
  | { kind: "list"; label: string; items: [string, string][] }
  | { kind: "quote"; text: string }
  | { kind: "tags"; label: string; text: string }
  | { kind: "cta"; label: string; href: string };

export type Service = {
  id: string;
  number: string;
  title: string;
  text: string;
  eyebrow: string;
  heading: string;
  body: string;
  detail: ServiceDetail;
};

function Detail({ detail }: { detail: ServiceDetail }) {
  switch (detail.kind) {
    case "list":
      return (
        <ul className="space-y-4 text-[.96rem] leading-7 text-[#173b3a]/75" aria-label={detail.label}>
          {detail.items.map(([title, text]) => (
            <li key={title} className="border-b border-[#6c8c8b]/20 pb-4">
              <strong className="block font-semibold text-[#173b3a]">{title}</strong>{text}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="self-center border-l-2 border-[#d7c370] pl-6 text-2xl font-medium leading-snug tracking-[-.02em] text-[#173b3a]/90">
          {detail.text}
        </blockquote>
      );
    case "tags":
      return (
        <div className="self-center rounded-[1.5rem] bg-[#c7ce9d]/45 p-7">
          <p className="text-xs font-semibold uppercase tracking-[.16em] text-[#6c8c8b]">{detail.label}</p>
          <p className="mt-4 leading-7 text-[#173b3a]/75">{detail.text}</p>
        </div>
      );
    case "cta":
      return (
        <a href={detail.href} className="group inline-flex w-fit items-center gap-4 self-center rounded-full border border-[#6c8c8b]/40 px-6 py-4 text-sm font-semibold transition-colors hover:bg-[#173b3a] hover:text-white">
          {detail.label} <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      );
  }
}

export function ServiceAccordion({ services }: { services: Service[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (services.some((service) => service.id === id)) setOpenId(id);
  }, [services]);

  return (
    <div className="service-grid mt-16 grid border-l border-t border-[#6c8c8b]/25">
      {services.map((service, index) => {
        const isOpen = openId === service.id;
        return (
          <Fragment key={service.id}>
            <h3 data-service-trigger={index} className="flex">
              <button
                type="button"
                id={`${service.id}-trigger`}
                aria-expanded={isOpen}
                aria-controls={service.id}
                onClick={() => setOpenId(isOpen ? null : service.id)}
                className={`service-card group relative flex w-full flex-col border-b border-r border-[#6c8c8b]/25 p-6 text-left transition-[background,box-shadow] duration-500 sm:min-h-80 sm:p-8 ${isOpen ? "bg-white shadow-[0_25px_70px_rgba(23,59,58,.1)]" : "bg-white/70 hover:bg-white/90"}`}
              >
                <span className="block text-xs font-semibold tracking-[.12em] text-[#6c8c8b]">{service.number}</span>
                <span className="mt-7 block text-3xl font-medium tracking-[-.025em] sm:mt-10">{service.title}</span>
                <span className="mt-5 block text-[.96rem] leading-7 text-[#173b3a]/65">{service.text}</span>
                <span className="mt-auto inline-flex items-center gap-3 pt-6 text-sm font-semibold sm:pt-8">
                  {isOpen ? "Schließen" : "Mehr erfahren"}
                  <PlusIcon className={`h-5 w-5 shrink-0 text-[#6c8c8b] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                </span>
              </button>
            </h3>

            <div
              id={service.id}
              data-service-panel={index}
              role="region"
              aria-labelledby={`${service.id}-trigger`}
              hidden={!isOpen}
              className="service-panel border-b border-r border-[#6c8c8b]/25 bg-white p-6 sm:p-10"
            >
              <p className="eyebrow">{service.eyebrow}</p>
              <div className="mt-6 grid gap-10 md:grid-cols-[1.05fr_.95fr] md:gap-16">
                <div>
                  <p className="display-balance text-3xl font-medium leading-[1.08] tracking-[-.035em] sm:text-4xl">{service.heading}</p>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-[#173b3a]/66">{service.body}</p>
                </div>
                <Detail detail={service.detail} />
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
