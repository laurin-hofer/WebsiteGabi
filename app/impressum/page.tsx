import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Website von Gabriele Schauer.",
};

export default function Impressum() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen bg-[#fbfcf9] pb-24 pt-32 sm:pb-32 sm:pt-40">
        <div className="container-shell">
          <p className="eyebrow mb-5">Rechtliche Informationen</p>
          <h1 className="text-[clamp(3.2rem,7vw,6.5rem)] font-medium leading-[.95] tracking-[-.045em]">Impressum</h1>

          <div className="mt-16 grid max-w-5xl gap-x-20 gap-y-14 md:grid-cols-2">
            <section aria-labelledby="anbieter">
              <h2 id="anbieter" className="text-2xl font-medium">Medieninhaberin und Diensteanbieterin</h2>
              <div className="mt-5 space-y-2 leading-7 text-[#173b3a]/75">
                <p className="font-medium text-[#173b3a]">Mag. Dr. Gabriele Schauer</p>
                <p>Lendgasse 7<br />6060 Hall in Tirol<br />Österreich</p>
              </div>
            </section>

            <section aria-labelledby="kontakt-impressum">
              <h2 id="kontakt-impressum" className="text-2xl font-medium">Kontakt</h2>
              <div className="mt-5 space-y-2 leading-7 text-[#173b3a]/75">
                <p>E-Mail: <a className="underline decoration-[#d7c370] decoration-2 underline-offset-4" href="mailto:office@gabrieleschauer.at">office@gabrieleschauer.at</a></p>
                <p>Telefon: <a className="underline decoration-[#d7c370] decoration-2 underline-offset-4" href="tel:+4369917132093">+43 699 17132093</a></p>
              </div>
            </section>

            <section aria-labelledby="unternehmen">
              <h2 id="unternehmen" className="text-2xl font-medium">Unternehmensangaben</h2>
              <dl className="mt-5 space-y-3 leading-7 text-[#173b3a]/75">
                <div><dt className="font-medium text-[#173b3a]">Unternehmensgegenstand</dt><dd>Supervision, Coaching, Beratung und Organisationsentwicklung</dd></div>
                <div><dt className="font-medium text-[#173b3a]">GISA-Zahl</dt><dd>39797209</dd></div>
              </dl>
            </section>

            <section aria-labelledby="gewerbe">
              <h2 id="gewerbe" className="text-2xl font-medium">Berufs- und Gewerbeangaben</h2>
              <dl className="mt-5 space-y-3 leading-7 text-[#173b3a]/75">
                <div><dt className="font-medium text-[#173b3a]">Mitgliedschaft</dt><dd>ÖVS</dd></div>
                <div><dt className="font-medium text-[#173b3a]">Aufsichts- oder Gewerbebehörde</dt><dd>Bezirkshauptmannschaft Innsbruck</dd></div>
                <div><dt className="font-medium text-[#173b3a]">Berufsbezeichnung</dt><dd>Supervisor und Coach</dd></div>
                <div><dt className="font-medium text-[#173b3a]">Anwendbare Vorschriften</dt><dd>Feststellung der individuellen Befähigung gemäß § 19 GewO 1994</dd></div>
              </dl>
            </section>

            <section aria-labelledby="medienrecht">
              <h2 id="medienrecht" className="text-2xl font-medium">Angaben nach dem Mediengesetz</h2>
              <div className="mt-5 space-y-3 leading-7 text-[#173b3a]/75">
                <p><span className="font-medium text-[#173b3a]">Medieninhaberin und Herausgeberin:</span><br />Mag. Dr. Gabriele Schauer, Lendgasse 7, 6060 Hall in Tirol</p>
                <p><span className="font-medium text-[#173b3a]">Grundlegende Richtung:</span><br />Darstellung des Einzelunternehmens von Gabriele Schauer im Bereich Supervision, Coaching und Organisationsentwicklung sowie Bereitstellung von Informationen zum Angebot und zu Kontaktmöglichkeiten.</p>
              </div>
            </section>

            <section aria-labelledby="streitbeilegung">
              <h2 id="streitbeilegung" className="text-2xl font-medium">Verbraucherstreitbeilegung</h2>
              <p className="mt-5 leading-7 text-[#173b3a]/75">Die Betreiberin dieser Website erklärt, nicht an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
