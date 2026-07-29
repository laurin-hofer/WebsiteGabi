type IconProps = { className?: string };

export function ArrowIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function LinkedInIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.53 8.1H3.16V18.8h3.37V8.1ZM6.75 4.8c0-1.08-.82-1.9-1.9-1.9a1.9 1.9 0 1 0 0 3.8c1.08 0 1.9-.82 1.9-1.9ZM20.84 12.67c0-3.22-1.72-4.72-4.02-4.72-1.85 0-2.68 1.02-3.15 1.73V8.1H10.3c.04 1.05 0 10.7 0 10.7h3.37v-5.98c0-.32.02-.64.12-.87.26-.64.84-1.3 1.82-1.3 1.28 0 1.8.98 1.8 2.42v5.73h3.37l.06-6.13Z" />
    </svg>
  );
}
