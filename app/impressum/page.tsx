import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Website von Gabriele Schauer.",
};

const Placeholder = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded bg-[#e4da7b]/45 px-1.5 py-0.5 font-medium text-[#173b3a]">[{children}]</span>
);

export default function Impressum() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen bg-[#fbfcf9] pb-24 pt-32 sm:pb-32 sm:pt-40">
        <div className="container-shell">
          <p className="eyebrow mb-5">Rechtliche Informationen</p>
          <h1 className="text-[clamp(3.2rem,7vw,6.5rem)] font-medium leading-[.95] tracking-[-.045em]">Impressum</h1>

          <div className="mt-10 max-w-3xl rounded-2xl border border-[#d7c370]/60 bg-[#e4da7b]/20 p-5 text-sm leading-7">
            <strong className="block font-semibold">Entwurf mit Platzhaltern</strong>
            Die markierten Angaben müssen vor der Veröffentlichung durch die tatsächlichen Daten ersetzt und rechtlich geprüft werden.
          </div>

          <div className="mt-16 grid max-w-5xl gap-x-20 gap-y-14 md:grid-cols-2">
            <section aria-labelledby="anbieter">
              <h2 id="anbieter" className="text-2xl font-medium">Medieninhaberin und Diensteanbieterin</h2>
              <div className="mt-5 space-y-2 leading-7 text-[#173b3a]/75">
                <p className="font-medium text-[#173b3a]">Mag. Dr. Gabriele Schauer</p>
                <p><Placeholder>Straße und Hausnummer</Placeholder><br /><Placeholder>PLZ und Ort</Placeholder><br />Österreich</p>
              </div>
            </section>

            <section aria-labelledby="kontakt-impressum">
              <h2 id="kontakt-impressum" className="text-2xl font-medium">Kontakt</h2>
              <div className="mt-5 space-y-2 leading-7 text-[#173b3a]/75">
                <p>E-Mail: <a className="underline decoration-[#d7c370] decoration-2 underline-offset-4" href="mailto:gabrieleschauer@gmail.com">gabrieleschauer@gmail.com</a></p>
                <p>Telefon: <Placeholder>Telefonnummer</Placeholder></p>
              </div>
            </section>

            <section aria-labelledby="unternehmen">
              <h2 id="unternehmen" className="text-2xl font-medium">Unternehmensangaben</h2>
              <dl className="mt-5 space-y-3 leading-7 text-[#173b3a]/75">
                <div><dt className="font-medium text-[#173b3a]">Unternehmensgegenstand</dt><dd><Placeholder>Unternehmensgegenstand</Placeholder></dd></div>
                <div><dt className="font-medium text-[#173b3a]">UID-Nummer, falls vorhanden</dt><dd><Placeholder>UID-Nummer</Placeholder></dd></div>
                <div><dt className="font-medium text-[#173b3a]">Firmenbuchnummer, falls vorhanden</dt><dd><Placeholder>Firmenbuchnummer und Firmenbuchgericht</Placeholder></dd></div>
                <div><dt className="font-medium text-[#173b3a]">GISA-Zahl, falls vorhanden</dt><dd><Placeholder>GISA-Zahl</Placeholder></dd></div>
              </dl>
            </section>

            <section aria-labelledby="gewerbe">
              <h2 id="gewerbe" className="text-2xl font-medium">Berufs- und Gewerbeangaben</h2>
              <dl className="mt-5 space-y-3 leading-7 text-[#173b3a]/75">
                <div><dt className="font-medium text-[#173b3a]">Mitgliedschaft</dt><dd><Placeholder>Zuständige Kammer oder Berufsverband</Placeholder></dd></div>
                <div><dt className="font-medium text-[#173b3a]">Aufsichts- oder Gewerbebehörde</dt><dd><Placeholder>Zuständige Behörde</Placeholder></dd></div>
                <div><dt className="font-medium text-[#173b3a]">Berufsbezeichnung</dt><dd><Placeholder>Berufsbezeichnung und Staat der Verleihung</Placeholder></dd></div>
                <div><dt className="font-medium text-[#173b3a]">Anwendbare Vorschriften</dt><dd><Placeholder>Berufs- oder gewerberechtliche Vorschriften und Fundstelle</Placeholder></dd></div>
              </dl>
            </section>

            <section aria-labelledby="medienrecht">
              <h2 id="medienrecht" className="text-2xl font-medium">Angaben nach dem Mediengesetz</h2>
              <div className="mt-5 space-y-3 leading-7 text-[#173b3a]/75">
                <p><span className="font-medium text-[#173b3a]">Medieninhaberin und Herausgeberin:</span><br />Mag. Dr. Gabriele Schauer, <Placeholder>vollständige Anschrift</Placeholder></p>
                <p><span className="font-medium text-[#173b3a]">Grundlegende Richtung:</span><br /><Placeholder>Kurze Beschreibung des Zwecks und der inhaltlichen Ausrichtung der Website</Placeholder></p>
              </div>
            </section>

            <section aria-labelledby="streitbeilegung">
              <h2 id="streitbeilegung" className="text-2xl font-medium">Verbraucherstreitbeilegung</h2>
              <p className="mt-5 leading-7 text-[#173b3a]/75"><Placeholder>Erklärung zur Teilnahme oder Nichtteilnahme an einem Streitbeilegungsverfahren, sofern erforderlich</Placeholder></p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
