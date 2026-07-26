import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { ArrowIcon, PlusIcon } from "@/components/icons";
import { SystemVisual } from "@/components/system-visual";
import { AnimationVisibility } from "@/components/animation-visibility";
import { BackToTop } from "@/components/back-to-top";

const services = [
  {
    number: "01",
    title: "Supervision",
    text: "Berufliche Situationen reflektieren, Dynamiken verstehen und das eigene Handeln sicher ausrichten.",
    href: "#supervision",
  },
  {
    number: "02",
    title: "Coaching",
    text: "Rollen klären, Entscheidungen fundiert treffen und Führung mit Haltung gestalten.",
    href: "#coaching",
  },
  {
    number: "03",
    title: "Teamentwicklung",
    text: "Zusammenarbeit stärken, Spannungen produktiv bearbeiten und gemeinsame Verbindlichkeit schaffen.",
    href: "#teamentwicklung",
  },
  {
    number: "04",
    title: "Leitbildentwicklung",
    text: "Werte verdichten, Orientierung geben und Identität im Alltag erlebbar machen.",
    href: "#leitbild",
  },
];

const topics = [
  "Rolle & Führung",
  "Konflikte & Kommunikation",
  "Veränderung & Übergänge",
  "Teamkultur & Zusammenarbeit",
  "Belastung & Resilienz",
  "Entscheidungen & Prioritäten",
];

const faqs = [
  {
    question: "Für wen ist Supervision geeignet?",
    answer: "Supervision richtet sich an Fach- und Führungskräfte, Teams sowie Gruppen, die ihre berufliche Praxis reflektieren und weiterentwickeln möchten. Sie ist besonders hilfreich bei komplexen Fällen, Rollenfragen, Konflikten, hoher Belastung oder Veränderungsprozessen.",
  },
  {
    question: "Was unterscheidet Supervision von Coaching?",
    answer: "Supervision nimmt die berufliche Praxis, Beziehungen und das organisationale Umfeld in den Blick. Coaching fokussiert stärker auf ein konkretes Entwicklungsziel, eine Entscheidung oder die Gestaltung einer Rolle. Im Vorgespräch klären wir, welches Format zu Ihrem Anliegen passt.",
  },
  {
    question: "Ist eine Begleitung auch online möglich?",
    answer: "Ja. Einzel- und Gruppensettings können nach Absprache online stattfinden. Bei Teams und Organisationsprozessen entscheiden wir gemeinsam, ob ein Termin vor Ort, online oder in einem hybriden Format am wirksamsten ist.",
  },
  {
    question: "Wie läuft ein Erstgespräch ab?",
    answer: "In einem unverbindlichen Gespräch klären wir Anlass, Ziel, beteiligte Personen und den passenden Rahmen. Danach erhalten Sie einen transparenten Vorschlag zu Format, Dauer und den nächsten Schritten.",
  },
  {
    question: "Bleiben die Inhalte vertraulich?",
    answer: "Ja. Ein geschützter, verlässlicher Rahmen ist die Grundlage jeder Zusammenarbeit. Ziele, Rollen und der Umgang mit Informationen werden zu Beginn eindeutig vereinbart – besonders in Auftragskonstellationen mit Organisationen.",
  },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gabrieleschauer.at";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#business`,
    name: "Gabriele Schauer – Supervision & Coaching",
    url: siteUrl,
    image: `${siteUrl}/images/gabriele-schauer-portrait-wide.jpg`,
    email: "gabrieleschauer@gmail.com",
    telephone: "+4369917132093",
    address: { "@type": "PostalAddress", addressLocality: "Hall in Tirol", addressCountry: "AT" },
    areaServed: [{ "@type": "AdministrativeArea", name: "Tirol" }, { "@type": "Place", name: "Online" }],
    founder: { "@id": `${siteUrl}/#person` },
    knowsAbout: ["Supervision", "Coaching", "Teamentwicklung", "Organisationsentwicklung", "Leitbildentwicklung"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Mag. Dr. Gabriele Schauer",
    jobTitle: "Supervisorin, Coachin und Organisationsentwicklerin",
    url: siteUrl,
    image: `${siteUrl}/images/gabriele-schauer-portrait.jpg`,
    affiliation: { "@type": "CollegeOrUniversity", name: "Universität Innsbruck", url: "https://www.uibk.ac.at/" },
    sameAs: ["https://www.uibk.ac.at/de/ils/mitarbeiter/schauer/"],
    knowsAbout: ["Systemische Beratung", "Supervision", "Coaching", "Pädagogische Beziehungen", "Professionalisierung"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

export default function Home() {
  return (
    <>
      <AnimationVisibility />
      <Header />
      <BackToTop />
      <main id="main">
        <section id="top" aria-labelledby="hero-title" data-animate-when-visible data-in-view="true" className="relative min-h-[100svh] overflow-hidden bg-[#fbfcf9] pt-20">
          <div className="soft-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="hero-aurora hero-aurora-lemon -left-48 top-24" aria-hidden="true" />
          <div className="hero-aurora hero-aurora-mint -right-44 bottom-0 [animation-delay:1.5s]" aria-hidden="true" />
          <div className="container-shell relative grid min-h-[calc(100svh-5rem)] items-center gap-12 py-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-8 lg:py-10">
            <div className="relative z-10 max-w-3xl lg:pb-10">
              <p className="eyebrow mb-7">Supervision · Coaching · Entwicklung</p>
              <h1 id="hero-title" className="display-balance text-[clamp(3.5rem,8vw,7.8rem)] font-medium leading-[.88] tracking-[-.055em] text-[#173b3a]">
                <span className="hero-line">Klar sehen.</span><span className="hero-line">Stimmig handeln.</span>
              </h1>
              <p className="text-pretty mt-8 max-w-xl text-lg leading-8 text-[#173b3a]/72 sm:text-xl sm:leading-9">
                Professionelle Begleitung für Menschen, Teams und Organisationen, die Veränderung bewusst gestalten wollen.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#kontakt" className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#173b3a] px-6 py-4 text-sm font-semibold text-white transition-[background,transform] hover:-translate-y-0.5 hover:bg-[#6c8c8b]">
                  Erstgespräch anfragen <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#angebot" className="inline-flex w-fit items-center gap-3 px-2 py-3 text-sm font-semibold text-[#173b3a] underline decoration-[#d7c370] decoration-2 underline-offset-8">Angebot entdecken</a>
              </div>
            </div>

            <div className="relative min-h-[30rem] overflow-hidden rounded-[2rem] bg-[#c2e3dc] sm:min-h-[38rem] lg:h-[min(76vh,50rem)]">
              <Image
                src="/images/gabriele-schauer-portrait-wide.jpg"
                alt="Mag. Dr. Gabriele Schauer im Portrait"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[46%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173b3a]/25 via-transparent to-transparent" aria-hidden="true" />
              <div className="floating-glass glass-surface absolute left-5 top-5 hidden rounded-2xl px-4 py-3 sm:block lg:left-auto lg:right-5">
                <p className="text-[.62rem] font-semibold uppercase tracking-[.14em] text-[#6c8c8b]">Systemischer Blick</p>
                <p className="mt-1 text-sm font-medium">Mensch · Team · Organisation</p>
              </div>
              <div className="floating-glass-delayed glass-surface absolute bottom-5 left-5 hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex">
                <span className="relative flex h-8 w-12" aria-hidden="true">
                  <span className="absolute left-0 top-1 h-7 w-7 rounded-full bg-[#d7c370]/85" />
                  <span className="absolute right-0 top-1 h-7 w-7 rounded-full bg-[#6c8c8b]/85" />
                </span>
                <span><strong className="block text-sm font-semibold">Perspektiven verbinden</strong><small className="text-[#173b3a]/60">Wirksamkeit entfalten</small></span>
              </div>
              <p className="glass-surface absolute bottom-5 right-5 rounded-full px-4 py-2 text-xs font-medium text-[#173b3a]">Tirol & online</p>
            </div>
          </div>
          <a href="#ansatz" aria-label="Weiter zum Ansatz" className="absolute bottom-7 left-1/4 hidden -translate-x-1/2 flex-col items-center gap-2 text-[.68rem] font-semibold uppercase tracking-[.16em] text-[#173b3a]/55 xl:flex">
            Entdecken <span className="h-10 w-px bg-[#6c8c8b]/50" />
          </a>
        </section>

        <section id="ansatz" className="relative overflow-hidden bg-[#173b3a] py-24 text-white sm:py-32 lg:py-40">
          <div className="pointer-events-none absolute -right-24 -top-20 h-96 w-96 rounded-full border-[5rem] border-[#6c8c8b]/12" aria-hidden="true" />
          <div className="container-shell relative grid gap-12 lg:grid-cols-[.4fr_1fr] lg:gap-20">
            <Reveal><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#c2e3dc]">Mein Ansatz</p></Reveal>
            <Reveal delay={100}>
              <h2 className="display-balance max-w-5xl text-[clamp(2.5rem,5.2vw,5.4rem)] font-medium leading-[1.03] tracking-[-.035em]">
                „Man kann einen Menschen nichts lehren, man kann ihm nur helfen, es in sich selbst zu <span className="text-[#e4da7b]">entdecken.</span>“
                <span className="mt-6 block text-base font-medium tracking-normal text-white/60 sm:text-lg">Galileo Galilei</span>
              </h2>
              <div className="mt-12 grid max-w-4xl gap-8 border-t border-white/15 pt-8 sm:grid-cols-2">
                <p className="text-pretty text-base leading-8 text-white/72">Ich betrachte nicht nur das sichtbare Anliegen, sondern das Zusammenspiel von Person, Beziehung und Organisation. So wird verständlich, was wirkt – und wo Bewegung entstehen kann.</p>
                <p className="text-pretty text-base leading-8 text-white/72">Die Zusammenarbeit verbindet fundierte Reflexion mit konkreter Umsetzung. Wertschätzend im Kontakt. Klar im Prozess. Nah an Ihrer beruflichen Wirklichkeit.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="systemblick" aria-labelledby="system-title" className="relative overflow-hidden bg-[#eef5f1] py-24 sm:py-32 lg:py-40">
          <div className="absolute inset-0 soft-grid opacity-50" aria-hidden="true" />
          <div className="container-shell relative grid items-center gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow mb-5">Systemisch denken</p>
              <h2 id="system-title" className="display-balance text-[clamp(2.8rem,5vw,5.2rem)] font-medium leading-[1] tracking-[-.045em]">Nicht nur das Problem sehen. Das <span className="text-[#6c8c8b]">System verstehen.</span></h2>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#173b3a]/68">In Organisationen wirkt nichts für sich allein. Rollen, Beziehungen, Erwartungen und Strukturen beeinflussen einander. Bewegung an einer Stelle verändert das Ganze.</p>
              <div className="mt-9 grid max-w-xl grid-cols-3 gap-2">
                {[["01", "Wahrnehmen"], ["02", "Verstehen"], ["03", "Verändern"]].map(([number, label]) => (
                  <div key={label} className="glass-surface rounded-2xl p-3 sm:p-4">
                    <span className="block text-[.65rem] font-semibold text-[#6c8c8b]">{number}</span>
                    <strong className="mt-3 block text-xs font-semibold sm:text-sm">{label}</strong>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={140}>
              <SystemVisual />
            </Reveal>
          </div>
        </section>

        <section id="angebot" aria-labelledby="angebot-title" className="py-24 sm:py-32 lg:py-40">
          <div className="container-shell">
            <Reveal className="grid gap-8 lg:grid-cols-[.7fr_1fr] lg:items-end">
              <div>
                <p className="eyebrow mb-5">Angebot</p>
                <h2 id="angebot-title" className="display-balance text-[clamp(2.8rem,5.5vw,5.6rem)] font-medium leading-[.98] tracking-[-.045em]">Was jetzt<br />weiterhilft.</h2>
              </div>
              <p className="max-w-xl text-pretty text-lg leading-8 text-[#173b3a]/65 lg:justify-self-end">Jedes Anliegen braucht einen eigenen Rahmen. Gemeinsam klären wir, welches Format Orientierung schafft und nachhaltig in den Alltag wirkt.</p>
            </Reveal>

            <div className="mt-16 grid border-l border-t border-[#6c8c8b]/25 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={index * 80} className="h-full">
                  <article className="service-card relative flex h-full min-h-80 flex-col border-b border-r border-[#6c8c8b]/25 bg-white/70 p-6 transition-[background,transform,box-shadow] duration-500 hover:z-10 hover:-translate-y-2 hover:bg-white/90 hover:shadow-[0_25px_70px_rgba(23,59,58,.12)] sm:p-8">
                    <p className="text-xs font-semibold tracking-[.12em] text-[#6c8c8b]">{service.number}</p>
                    <h3 className="mt-10 text-3xl font-medium tracking-[-.025em]">{service.title}</h3>
                    <p className="mt-5 text-[.96rem] leading-7 text-[#173b3a]/65">{service.text}</p>
                    <a href={service.href} aria-label={`Mehr über ${service.title}`} className="mt-auto inline-flex w-fit items-center gap-3 pt-8 text-sm font-semibold">Mehr erfahren <ArrowIcon className="h-4 w-4" /></a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="themen-title" className="bg-[#c2e3dc]/55 py-20 sm:py-24">
          <div className="container-shell grid gap-10 lg:grid-cols-[.65fr_1fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow mb-5">Typische Anliegen</p>
              <h2 id="themen-title" className="display-balance text-4xl font-medium leading-tight tracking-[-.035em] sm:text-5xl">Wenn Komplexität Klarheit braucht.</h2>
            </Reveal>
            <Reveal delay={100} className="grid sm:grid-cols-2">
              {topics.map((topic, index) => (
                <div key={topic} className="group flex min-h-20 items-center gap-4 border-b border-[#6c8c8b]/30 py-4 text-lg font-medium transition-transform duration-500 hover:translate-x-2">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#d7c370] text-xs">{index + 1}</span>{topic}
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section aria-label="Leistungen im Detail" className="py-24 sm:py-32 lg:py-40">
          <div className="container-shell space-y-24 sm:space-y-32">
            <Reveal>
              <article id="supervision" className="grid gap-10 border-t border-[#6c8c8b]/30 pt-8 lg:grid-cols-[.36fr_1fr] lg:gap-20">
                <div><p className="eyebrow">01 · Supervision</p></div>
                <div className="grid gap-10 md:grid-cols-[1.05fr_.95fr]">
                  <div>
                    <h2 className="display-balance text-4xl font-medium leading-[1.08] tracking-[-.035em] sm:text-5xl">Berufliche Praxis mit Abstand betrachten.</h2>
                    <p className="mt-6 max-w-xl text-lg leading-8 text-[#173b3a]/66">Supervision schafft einen verlässlichen Reflexionsraum. Fälle, Rollen und Arbeitsbeziehungen werden aus mehreren Blickwinkeln verständlich – damit Sie bewusst, sicher und professionell handeln können.</p>
                  </div>
                  <ul className="space-y-4 text-[.96rem] leading-7 text-[#173b3a]/75" aria-label="Formen der Supervision">
                    {[
                      ["Einzelsupervision", "für Rollenklärung, Orientierung und berufliche Entwicklung"],
                      ["Fallsupervision", "für neue Sichtweisen auf komplexe Situationen"],
                      ["Gruppensupervision", "für fachübergreifende Impulse und kollegiales Lernen"],
                    ].map(([title, text]) => <li key={title} className="border-b border-[#6c8c8b]/20 pb-4"><strong className="block font-semibold text-[#173b3a]">{title}</strong>{text}</li>)}
                  </ul>
                </div>
              </article>
            </Reveal>

            <Reveal>
              <article id="coaching" className="grid gap-10 border-t border-[#6c8c8b]/30 pt-8 lg:grid-cols-[.36fr_1fr] lg:gap-20">
                <div><p className="eyebrow">02 · Coaching</p></div>
                <div className="grid gap-10 md:grid-cols-[1.05fr_.95fr]">
                  <div>
                    <h2 className="display-balance text-4xl font-medium leading-[1.08] tracking-[-.035em] sm:text-5xl">Entscheiden und führen, ohne sich selbst zu verlieren.</h2>
                    <p className="mt-6 max-w-xl text-lg leading-8 text-[#173b3a]/66">Coaching unterstützt Sie dabei, Prioritäten zu ordnen, Ihre Wirkung zu verstehen und einen eigenen, tragfähigen Weg zu entwickeln. Der Fokus bleibt dabei immer auf Ihrem Ziel und Ihrer konkreten Situation.</p>
                  </div>
                  <blockquote className="self-end border-l-2 border-[#d7c370] pl-6 text-2xl font-medium leading-snug tracking-[-.02em] text-[#173b3a]/90">„Nicht die schnelle Antwort zählt, sondern die Frage, die etwas in Bewegung bringt.“</blockquote>
                </div>
              </article>
            </Reveal>

            <Reveal>
              <article id="teamentwicklung" className="grid gap-10 border-t border-[#6c8c8b]/30 pt-8 lg:grid-cols-[.36fr_1fr] lg:gap-20">
                <div><p className="eyebrow">03 · Teams</p></div>
                <div className="grid gap-10 md:grid-cols-[1.05fr_.95fr]">
                  <div>
                    <h2 className="display-balance text-4xl font-medium leading-[1.08] tracking-[-.035em] sm:text-5xl">Zusammenarbeit, die auch unter Druck trägt.</h2>
                    <p className="mt-6 max-w-xl text-lg leading-8 text-[#173b3a]/66">Teamsupervision und Teamentwicklung machen Erwartungen, Rollen und Kommunikationsmuster besprechbar. Das stärkt Vertrauen, Verantwortungsübernahme und eine Kultur, in der gute Arbeit gelingen kann.</p>
                  </div>
                  <div className="rounded-[1.5rem] bg-[#c7ce9d]/45 p-7">
                    <p className="text-xs font-semibold uppercase tracking-[.16em] text-[#6c8c8b]">Mögliche Schwerpunkte</p>
                    <p className="mt-4 leading-7 text-[#173b3a]/75">Standortbestimmung · Rollen und Ziele · Feedbackkultur · Konfliktklärung · Übergänge · Resilienz</p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal>
              <article id="leitbild" className="grid gap-10 border-t border-[#6c8c8b]/30 pt-8 lg:grid-cols-[.36fr_1fr] lg:gap-20">
                <div><p className="eyebrow">04 · Organisation</p></div>
                <div className="grid gap-10 md:grid-cols-[1.05fr_.95fr]">
                  <div>
                    <h2 className="display-balance text-4xl font-medium leading-[1.08] tracking-[-.035em] sm:text-5xl">Ein Leitbild, das nicht nur an der Wand hängt.</h2>
                    <p className="mt-6 max-w-xl text-lg leading-8 text-[#173b3a]/66">Ein tragfähiges Leitbild übersetzt gelebte Werte in klare Orientierung. Ich moderiere den Prozess vom gemeinsamen Erkunden bis zu prägnanten Leitsätzen – partizipativ, strukturiert und anschlussfähig an den Alltag.</p>
                  </div>
                  <a href="#kontakt" className="group self-end inline-flex w-fit items-center gap-4 rounded-full border border-[#6c8c8b]/40 px-6 py-4 text-sm font-semibold transition-colors hover:bg-[#173b3a] hover:text-white">Prozess besprechen <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="ablauf-title" className="bg-[#e4da7b]/55 py-24 sm:py-32">
          <div className="container-shell">
            <Reveal className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="eyebrow mb-5">Zusammenarbeit</p>
                <h2 id="ablauf-title" className="display-balance text-5xl font-medium leading-[1] tracking-[-.04em] sm:text-6xl">Klarer Rahmen.<br />Offener Prozess.</h2>
              </div>
              <p className="max-w-lg self-end text-lg leading-8 text-[#173b3a]/68 lg:justify-self-end">Sie wissen von Anfang an, woran Sie sind. Ziele, Rollen und Vorgehen werden transparent vereinbart und im Prozess regelmäßig überprüft.</p>
            </Reveal>
            <div className="mt-16 grid gap-4 md:grid-cols-3">
              {[
                ["01", "Verstehen", "Im Erstgespräch klären wir Anlass, Ziel und den passenden Rahmen."],
                ["02", "Erkunden", "Wir machen Muster sichtbar, aktivieren Ressourcen und öffnen Perspektiven."],
                ["03", "Verankern", "Erkenntnisse werden zu konkreten, realistischen Schritten für den Alltag."],
              ].map(([number, title, text], index) => (
                <Reveal key={title} delay={index * 90}>
                  <div className="glass-surface min-h-64 rounded-[1.5rem] p-7 transition-transform duration-500 hover:-translate-y-2 sm:p-9">
                    <p className="text-xs font-semibold text-[#6c8c8b]">{number}</p>
                    <h3 className="mt-10 text-3xl font-medium tracking-[-.025em]">{title}</h3>
                    <p className="mt-4 leading-7 text-[#173b3a]/65">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="ueber-mich" aria-labelledby="ueber-title" className="py-24 sm:py-32 lg:py-40">
          <div className="container-shell grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-24">
            <Reveal>
              <div className="relative mx-auto aspect-[3/4] max-w-xl overflow-hidden rounded-[2rem] bg-[#c2e3dc] lg:mx-0">
                <Image src="/images/gabriele-schauer-portrait.jpg" alt="Gabriele Schauer, Supervisorin und Coachin" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
                <div className="absolute bottom-5 left-5 h-16 w-16 rounded-full bg-[#d7c370]/85" aria-hidden="true" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="eyebrow mb-5">Über mich</p>
              <h2 id="ueber-title" className="display-balance text-[clamp(2.8rem,5vw,5.2rem)] font-medium leading-[1] tracking-[-.045em]">Wissenschaftlich fundiert. Menschlich zugewandt.</h2>
              <div className="mt-9 space-y-6 text-lg leading-8 text-[#173b3a]/68">
                <p>Mein beruflicher Weg verbindet pädagogische Praxis, Führung, Forschung und Lehre. Diese Perspektiven prägen meinen Blick auf Menschen in Organisationen: differenziert, systemisch und immer nah an der konkreten Situation.</p>
                <p>Als Senior Lecturer an der Universität Innsbruck beschäftige ich mich unter anderem mit professioneller Haltung, pädagogischen Beziehungen und der Entwicklung beruflicher Handlungskompetenz. In meine Beratung fließen wissenschaftliche Sorgfalt und langjährige Praxiserfahrung gleichermaßen ein.</p>
                <p>Meine Ausbildung in systemischer Supervision und Coaching absolviere ich beim ÖVS-zertifizierten Arbeitskreis ASYS. Leitend ist für mich die Verbindung von Denken, Fühlen und Handeln.</p>
              </div>
              <div className="mt-9 flex flex-wrap gap-2" aria-label="Mitgliedschaften">
                {["ÖVS", "ASYS", "ÖFEB", "DGfE", "IGSP"].map((item) => <span key={item} className="rounded-full border border-[#6c8c8b]/30 px-4 py-2 text-xs font-semibold tracking-[.08em]">{item}</span>)}
              </div>
              <a href="https://www.uibk.ac.at/de/ils/mitarbeiter/schauer/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold underline decoration-[#d7c370] decoration-2 underline-offset-8">Wissenschaftliches Profil <span className="sr-only">(öffnet in neuem Fenster)</span><ArrowIcon className="h-4 w-4" /></a>
            </Reveal>
          </div>
        </section>

        <section id="faq" aria-labelledby="faq-title" className="bg-white py-24 sm:py-32">
          <div className="container-shell grid gap-14 lg:grid-cols-[.55fr_1fr] lg:gap-24">
            <Reveal>
              <p className="eyebrow mb-5">Gut zu wissen</p>
              <h2 id="faq-title" className="display-balance text-5xl font-medium leading-[1] tracking-[-.04em] sm:text-6xl">Häufige<br />Fragen.</h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="border-t border-[#6c8c8b]/30">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group border-b border-[#6c8c8b]/30">
                    <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-lg font-semibold sm:text-xl">
                      {faq.question}<PlusIcon className="h-5 w-5 shrink-0 text-[#6c8c8b] transition-transform group-open:rotate-45" />
                    </summary>
                    <p className="max-w-2xl pb-7 pr-10 leading-7 text-[#173b3a]/68">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="kontakt" aria-labelledby="kontakt-title" data-animate-when-visible data-in-view="false" className="relative overflow-hidden bg-[#6c8c8b] py-24 text-white sm:py-32 lg:py-40">
          <div className="contact-ambient pointer-events-none absolute -bottom-48 -right-32 h-[34rem] w-[34rem] rounded-full bg-[#c2e3dc]/15 [animation:ambient-drift_12s_ease-in-out_infinite_alternate]" aria-hidden="true" />
          <div className="contact-ambient pointer-events-none absolute -bottom-24 -right-4 h-[22rem] w-[22rem] rounded-full bg-[#d7c370]/25 [animation:ambient-drift_9s_1s_ease-in-out_infinite_alternate-reverse]" aria-hidden="true" />
          <div className="container-shell relative">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#e4da7b]">Kontakt</p>
              <h2 id="kontakt-title" className="display-balance mt-6 max-w-5xl text-[clamp(3rem,7vw,7rem)] font-medium leading-[.95] tracking-[-.05em]">Was möchten Sie<br />in Bewegung bringen?</h2>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/78">Erzählen Sie mir kurz, worum es geht. In einem unverbindlichen Erstgespräch finden wir heraus, welcher Rahmen zu Ihrem Anliegen passt.</p>
              <p className="mt-8 text-xl font-semibold text-white">Mag. Dr. Gabriele Schauer</p>
              <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <a href="mailto:gabrieleschauer@gmail.com?subject=Anfrage%20Erstgespr%C3%A4ch" className="group inline-flex items-center gap-4 rounded-full bg-[#fbfcf9] px-7 py-4 font-semibold text-[#173b3a] transition-transform hover:-translate-y-0.5">
                  Erstgespräch anfragen <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center">
                  <a href="mailto:gabrieleschauer@gmail.com" className="text-lg font-medium text-white underline decoration-white/45 underline-offset-8 sm:text-xl">gabrieleschauer@gmail.com</a>
                  <a href="tel:+4369917132093" className="rounded-full bg-[#e4da7b] px-5 py-3 text-base font-semibold text-[#173b3a] transition-transform hover:-translate-y-0.5">+43 699 17132093</a>
                </div>
              </div>
              <p className="mt-8 text-sm text-white/60">Hall in Tirol · Termine nach Vereinbarung · Online-Begleitung möglich</p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
