import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#173b3a] text-white/70">
      <div className="container-shell grid gap-12 py-14 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Image src="/images/gabriele-schauer-logo.png" alt="" width={1200} height={548} className="mb-7 h-auto w-48 brightness-0 invert" />
          <p className="max-w-md text-sm leading-7">Supervision, Coaching und Organisationsentwicklung in Tirol und online – klar, zugewandt und wirksam.</p>
        </div>
        <div className="grid gap-3 text-sm md:text-right">
          <Link className="transition-colors hover:text-white" href="/#angebot">Angebot</Link>
          <Link className="transition-colors hover:text-white" href="/#ueber-mich">Über mich</Link>
          <Link className="transition-colors hover:text-white" href="/#kontakt">Kontakt</Link>
        </div>
      </div>
      <div className="container-shell flex flex-col gap-2 border-t border-white/10 py-6 text-xs sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Mag. Dr. Gabriele Schauer</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
          <Link className="transition-colors hover:text-white" href="/impressum">Impressum</Link>
          <p>Fotografie: Andreas Friedle</p>
        </div>
      </div>
    </footer>
  );
}
