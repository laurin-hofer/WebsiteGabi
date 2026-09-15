import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Informationen zur Verarbeitung personenbezogener Daten auf der Website von Gabriele Schauer gemäß DSGVO.",
};

const sections = [
  ["ueberblick", "Auf einen Blick"],
  ["verantwortliche", "Verantwortliche"],
  ["logfiles", "Server-Logfiles"],
  ["cookies", "Cookies & Tracking"],
  ["kontakt", "Kontaktaufnahme"],
  ["empfaenger", "Empfänger der Daten"],
  ["speicherdauer", "Speicherdauer"],
  ["rechte", "Ihre Rechte"],
  ["beschwerde", "Beschwerderecht"],
  ["aenderungen", "Änderungen"],
];

const linkClass = "underline decoration-[#d7c370] decoration-2 underline-offset-4 transition-colors hover:text-[#173b3a]";

export default function Datenschutz() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen bg-[#fbfcf9] pb-24 pt-32 sm:pb-32 sm:pt-40">
        <div className="container-shell">
          <p className="eyebrow mb-5">Rechtliche Informationen</p>
          <h1 className="display-balance text-[clamp(3.2rem,7vw,6.5rem)] font-medium leading-[.95] tracking-[-.045em]">Datenschutz&shy;erklärung</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#173b3a]/68">
            Der Schutz Ihrer persönlichen Daten ist mir ein Anliegen. Nachfolgend informiere ich Sie gemäß Art. 13 DSGVO darüber, welche Daten beim Besuch dieser Website verarbeitet werden – und welche nicht.
          </p>

          <div className="mt-20 grid gap-x-20 gap-y-16 lg:grid-cols-[15rem_minmax(0,1fr)]">
            <nav aria-label="Inhalt dieser Seite" className="lg:sticky lg:top-32 lg:self-start">
              <p className="eyebrow mb-5">Inhalt</p>
              <ol className="space-y-3 text-sm leading-6 text-[#173b3a]/65">
                {sections.map(([id, label], index) => (
                  <li key={id}>
                    <a href={`#${id}`} className="transition-colors hover:text-[#173b3a]">
                      <span className="mr-3 text-xs text-[#6c8c8b]">0{index + 1}</span>
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="max-w-3xl space-y-14">
              <section id="ueberblick" aria-labelledby="ueberblick-title" className="glass-surface rounded-[1.5rem] p-7 sm:p-9">
                <h2 id="ueberblick-title" className="text-2xl font-medium">Auf einen Blick</h2>
                <ul className="mt-5 space-y-3 leading-7 text-[#173b3a]/75">
                  <li className="flex gap-3"><span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d7c370]" />Diese Website setzt <strong className="font-medium text-[#173b3a]">keine Cookies</strong> und verwendet <strong className="font-medium text-[#173b3a]">keine Analyse- oder Tracking-Dienste</strong>.</li>
                  <li className="flex gap-3"><span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d7c370]" />Es sind <strong className="font-medium text-[#173b3a]">keine Social-Media-Plugins</strong> eingebunden; Schriften und Bilder werden direkt von dieser Website ausgeliefert.</li>
                  <li className="flex gap-3"><span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d7c370]" />Es gibt <strong className="font-medium text-[#173b3a]">kein Kontaktformular</strong> – eine Kontaktaufnahme erfolgt ausschließlich per E-Mail oder Telefon.</li>
                  <li className="flex gap-3"><span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d7c370]" />Beim Aufruf der Seite werden – technisch bedingt – <strong className="font-medium text-[#173b3a]">Server-Logfiles</strong> inklusive IP-Adresse erstellt und kurzfristig gespeichert.</li>
                </ul>
              </section>

              <section id="verantwortliche" aria-labelledby="verantwortliche-title">
                <h2 id="verantwortliche-title" className="text-2xl font-medium">01 — Verantwortliche</h2>
                <div className="mt-5 space-y-3 leading-7 text-[#173b3a]/75">
                  <p>Verantwortlich für die Datenverarbeitung im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
                  <p>
                    <span className="font-medium text-[#173b3a]">Mag. Dr. Gabriele Schauer</span><br />
                    Lendgasse 7, 6060 Hall in Tirol, Österreich<br />
                    E-Mail: <a className={linkClass} href="mailto:office@gabrieleschauer.at">office@gabrieleschauer.at</a><br />
                    Telefon: <a className={linkClass} href="tel:+4369917132093">+43 699 17132093</a>
                  </p>
                  <p>Weitere Angaben finden Sie im <Link className={linkClass} href="/impressum">Impressum</Link>. Ein Datenschutzbeauftragter ist gesetzlich nicht zu bestellen.</p>
                </div>
              </section>

              <section id="logfiles" aria-labelledby="logfiles-title">
                <h2 id="logfiles-title" className="text-2xl font-medium">02 — Server-Logfiles und IP-Adressen</h2>
                <div className="mt-5 space-y-4 leading-7 text-[#173b3a]/75">
                  <p>Beim Aufruf dieser Website übermittelt Ihr Browser automatisch Daten an den Server des Hosting-Dienstleisters, die dort in sogenannten Logfiles protokolliert werden. Eine IP-Adresse gilt dabei bereits als personenbezogenes Datum.</p>
                  <p>Erfasst werden dabei:</p>
                  <ul className="space-y-2 pl-1">
                    {[
                      "IP-Adresse des zugreifenden Geräts",
                      "Datum und Uhrzeit des Zugriffs",
                      "Name und URL der abgerufenen Datei",
                      "Übertragene Datenmenge und Meldung über den Erfolg des Abrufs",
                      "Verwendeter Browsertyp, Browserversion und Betriebssystem",
                      "Zuvor besuchte Seite (Referrer-URL), sofern übermittelt",
                    ].map((item) => (
                      <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6c8c8b]/50" />{item}</li>
                    ))}
                  </ul>
                  <dl className="space-y-3 border-l-2 border-[#d7c370] pl-6">
                    <div><dt className="font-medium text-[#173b3a]">Zweck</dt><dd>Auslieferung der Website, Gewährleistung eines stabilen und sicheren Betriebs sowie Abwehr und Aufklärung von Angriffen.</dd></div>
                    <div><dt className="font-medium text-[#173b3a]">Rechtsgrundlage</dt><dd>Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse am technisch fehlerfreien und sicheren Betrieb dieser Website.</dd></div>
                    <div><dt className="font-medium text-[#173b3a]">Speicherdauer</dt><dd>Die Logfiles werden nach spätestens 30 Tagen gelöscht, sofern sie nicht zur Aufklärung eines konkreten Sicherheitsvorfalls benötigt werden.</dd></div>
                  </dl>
                  <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen oder eine Auswertung zu Marketingzwecken findet nicht statt.</p>
                </div>
              </section>

              <section id="cookies" aria-labelledby="cookies-title">
                <h2 id="cookies-title" className="text-2xl font-medium">03 — Cookies, Tracking und externe Dienste</h2>
                <div className="mt-5 space-y-4 leading-7 text-[#173b3a]/75">
                  <p>Diese Website setzt <span className="font-medium text-[#173b3a]">keine Cookies</span> – weder technisch notwendige noch solche zu Analyse- oder Marketingzwecken. Eine Einwilligung nach § 165 Abs. 3 TKG 2021 ist daher nicht erforderlich, ein Cookie-Banner entfällt.</p>
                  <p>Ebenso wenig kommen zum Einsatz:</p>
                  <ul className="space-y-2 pl-1">
                    {[
                      "Webanalyse- oder Statistikdienste (z. B. Google Analytics, Matomo)",
                      "Werbe- oder Retargeting-Netzwerke",
                      "Social-Media-Plugins oder eingebettete Inhalte externer Plattformen",
                      "Externe Schriftarten-Dienste – alle Schriften werden vom eigenen Server geladen",
                      "Kartendienste oder eingebettete Buchungs- und Videotools",
                    ].map((item) => (
                      <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6c8c8b]/50" />{item}</li>
                    ))}
                  </ul>
                  <p>Beim Besuch dieser Website werden dadurch keine Daten an Anbieter in Drittländern außerhalb der EU bzw. des EWR übermittelt.</p>
                </div>
              </section>

              <section id="kontakt" aria-labelledby="kontakt-title">
                <h2 id="kontakt-title" className="text-2xl font-medium">04 — Kontaktaufnahme per E-Mail und Telefon</h2>
                <div className="mt-5 space-y-4 leading-7 text-[#173b3a]/75">
                  <p>Diese Website enthält kein Kontaktformular. Wenn Sie mich per E-Mail oder Telefon kontaktieren, verarbeite ich die von Ihnen übermittelten Daten – etwa Name, E-Mail-Adresse, Telefonnummer und den Inhalt Ihrer Nachricht – ausschließlich zur Bearbeitung Ihrer Anfrage.</p>
                  <dl className="space-y-3 border-l-2 border-[#d7c370] pl-6">
                    <div><dt className="font-medium text-[#173b3a]">Zweck</dt><dd>Beantwortung Ihrer Anfrage sowie Vorbereitung und Abwicklung einer möglichen Zusammenarbeit.</dd></div>
                    <div><dt className="font-medium text-[#173b3a]">Rechtsgrundlage</dt><dd>Art. 6 Abs. 1 lit. b DSGVO bei Anfragen zur Anbahnung oder Erfüllung eines Vertrags, andernfalls Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse an der Beantwortung von Anfragen.</dd></div>
                    <div><dt className="font-medium text-[#173b3a]">Speicherdauer</dt><dd>Ihre Anfrage wird gelöscht, sobald sie abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Aufzeichnungen zu abgeschlossenen Aufträgen werden gemäß § 132 BAO sieben Jahre aufbewahrt.</dd></div>
                  </dl>
                  <p>Die Bereitstellung Ihrer Daten ist freiwillig. Ohne Kontaktdaten kann ich Ihre Anfrage jedoch nicht beantworten. Inhalte aus Supervisions-, Coaching- und Beratungsprozessen unterliegen darüber hinaus der beruflichen Verschwiegenheit und werden nicht an Dritte weitergegeben.</p>
                </div>
              </section>

              <section id="empfaenger" aria-labelledby="empfaenger-title">
                <h2 id="empfaenger-title" className="text-2xl font-medium">05 — Empfänger der Daten</h2>
                <div className="mt-5 space-y-4 leading-7 text-[#173b3a]/75">
                  <p>Ihre Daten werden nicht verkauft und nicht zu Werbezwecken weitergegeben. Zugriff auf Daten erhalten ausschließlich folgende Kategorien von Empfängern, die als Auftragsverarbeiter nach Art. 28 DSGVO vertraglich gebunden sind:</p>
                  <ul className="space-y-2 pl-1">
                    {[
                      "Der Hosting-Dienstleister dieser Website, der die Server-Logfiles verarbeitet",
                      "Der E-Mail- und Telekommunikationsanbieter, über den die Korrespondenz läuft",
                      "Die Steuerberatung im Rahmen der gesetzlichen Buchhaltungs- und Aufbewahrungspflichten",
                    ].map((item) => (
                      <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6c8c8b]/50" />{item}</li>
                    ))}
                  </ul>
                  <p>Eine Übermittlung an Behörden erfolgt nur, soweit ich dazu gesetzlich verpflichtet bin. Eine automatisierte Entscheidungsfindung einschließlich Profiling gemäß Art. 22 DSGVO findet nicht statt.</p>
                </div>
              </section>

              <section id="speicherdauer" aria-labelledby="speicherdauer-title">
                <h2 id="speicherdauer-title" className="text-2xl font-medium">06 — Speicherdauer</h2>
                <p className="mt-5 leading-7 text-[#173b3a]/75">Ich speichere personenbezogene Daten nur so lange, wie es für die jeweils genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen es verlangen. Danach werden die Daten gelöscht. Die konkreten Fristen sind bei den einzelnen Verarbeitungen oben angeführt.</p>
              </section>

              <section id="rechte" aria-labelledby="rechte-title">
                <h2 id="rechte-title" className="text-2xl font-medium">07 — Ihre Rechte</h2>
                <div className="mt-5 space-y-4 leading-7 text-[#173b3a]/75">
                  <p>Ihnen stehen hinsichtlich der Sie betreffenden personenbezogenen Daten folgende Rechte zu:</p>
                  <dl className="space-y-3">
                    {[
                      ["Auskunft", "Art. 15 DSGVO – Sie können erfahren, welche Daten ich zu Ihnen verarbeite."],
                      ["Berichtigung", "Art. 16 DSGVO – unrichtige Daten werden korrigiert, unvollständige vervollständigt."],
                      ["Löschung", "Art. 17 DSGVO – Ihre Daten werden gelöscht, sofern keine Aufbewahrungspflicht besteht."],
                      ["Einschränkung", "Art. 18 DSGVO – die Verarbeitung wird auf Ihren Wunsch eingeschränkt."],
                      ["Datenübertragbarkeit", "Art. 20 DSGVO – Sie erhalten Ihre Daten in einem gängigen, maschinenlesbaren Format."],
                      ["Widerspruch", "Art. 21 DSGVO – Sie können der Verarbeitung auf Basis berechtigter Interessen widersprechen."],
                    ].map(([title, text]) => (
                      <div key={title}><dt className="font-medium text-[#173b3a]">Recht auf {title}</dt><dd>{text}</dd></div>
                    ))}
                  </dl>
                  <p>Sofern eine Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt davon unberührt.</p>
                  <p>Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an <a className={linkClass} href="mailto:office@gabrieleschauer.at">office@gabrieleschauer.at</a>.</p>
                </div>
              </section>

              <section id="beschwerde" aria-labelledby="beschwerde-title">
                <h2 id="beschwerde-title" className="text-2xl font-medium">08 — Beschwerderecht</h2>
                <div className="mt-5 space-y-4 leading-7 text-[#173b3a]/75">
                  <p>Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, haben Sie das Recht, sich bei der Aufsichtsbehörde zu beschweren:</p>
                  <p>
                    <span className="font-medium text-[#173b3a]">Österreichische Datenschutzbehörde</span><br />
                    Barichgasse 40–42, 1030 Wien<br />
                    Telefon: <a className={linkClass} href="tel:+43152152">+43 1 52 152-0</a><br />
                    E-Mail: <a className={linkClass} href="mailto:dsb@dsb.gv.at">dsb@dsb.gv.at</a><br />
                    Web: <a className={linkClass} href="https://www.dsb.gv.at" rel="noreferrer noopener" target="_blank">www.dsb.gv.at</a>
                  </p>
                </div>
              </section>

              <section id="aenderungen" aria-labelledby="aenderungen-title">
                <h2 id="aenderungen-title" className="text-2xl font-medium">09 — Änderungen dieser Erklärung</h2>
                <div className="mt-5 space-y-4 leading-7 text-[#173b3a]/75">
                  <p>Diese Datenschutzerklärung wird angepasst, sobald sich die Verarbeitungen auf dieser Website oder die rechtlichen Rahmenbedingungen ändern. Es gilt jeweils die hier veröffentlichte Fassung.</p>
                  <p className="text-sm text-[#173b3a]/55">Stand: September 2026</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
