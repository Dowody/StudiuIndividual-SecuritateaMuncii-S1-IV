import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const NAV = [
  ["#instructaj", "Instructaj"],
  ["#electrosecuritate", "Electrosecuritate"],
  ["#incaperi", "Încăperi"],
];

/* Texte oficiale pe legis.md */
const LAW_186 = "https://www.legis.md/cautare/getResults?doc_id=142427&lang=ro";
const LAW_267 = "https://www.legis.md/cautare/getResults?doc_id=147578&lang=ro";

const TEAM = ["Borș Bogdan", "Bruma Alexandrina", "Covali Alexandr", "Gațcan Cristian", "Mazur Adrian"];

/* Partea 1 — cum facem instructajul */
const STEPS = [
  ["Explicarea riscurilor", "Profesorul verifică mai întâi aparatele. Apoi le spune elevilor ce îi poate răni la calculator: curentul electric, un cablu care se aprinde, ochii obosiți și spatele încordat."],
  ["Regulile de lucru", "Calculatorul se pornește și se oprește doar de la buton, iar carcasa nu se deschide. Pe masă nu ținem apă sau mâncare, iar monitorul îl punem la o lungime de braț."],
  ["Demonstrația practică", "Profesorul nu doar povestește, ci arată unde sunt stingătorul, trusa de prim ajutor și ieșirea. Tot atunci arată cum se închide corect calculatorul."],
  ["Verificarea și semnătura", "La final, elevul răspunde la câteva întrebări. Dacă a înțeles, semnează fișa de instruire și abia din acel moment poate lucra singur."],
];

const QUIZ = [
  ["Ce faci dacă simți miros de plastic ars?", "Opresc calculatorul, mă dau la o parte și îi spun imediat profesorului."],
  ["Ai voie să bei ceai sau cafea lângă tastatură?", "Nu, pentru că dacă se varsă, lichidul poate face scurtcircuit."],
  ["Unde este stingătorul cel mai apropiat?", "Elevul trebuie să poată arăta exact unde se află, în sală sau pe hol."],
  ["Poți deschide carcasa dacă calculatorul nu merge?", "Nu. Îi spun profesorului, iar reparația o face doar un specialist."],
  ["La ce distanță stă monitorul de ochi?", "Cam la o lungime de braț, cu marginea de sus puțin sub nivelul ochilor."],
  ["Unde lași ghiozdanul în laborator?", "Sub masă, ca să nu blocheze culoarul și să nu stea pe cabluri."],
];

/* Partea 2 — exemple de electrosecuritate */
const SITUATIONS = [
  ["Cablul monitorului e tăiat", "Nu mai folosești calculatorul acela și îi spui profesorului, ca să schimbe cablul."],
  ["S-a vărsat apă pe masă", "Nu atingi aparatele ude. Profesorul scoate mai întâi totul din priză și abia apoi se șterge masa."],
  ["Un coleg e prins de curent", "Nu-l apuci cu mâna, pentru că te curentează și pe tine. Mai întâi se oprește curentul de la tablou, apoi se acordă primul ajutor și se sună la 112."],
  ["Prelungitorul s-a încălzit tare", "Scoți din priză aparatele legate la el și îi spui profesorului. Dacă se încălzește, înseamnă că e prea încărcat."],
  ["Vezi scântei la priză", "Nu mai bagi nimic în priza aceea, te dai la o parte și anunți imediat profesorul."],
  ["Calculatorul te „ciupește” când îl atingi", "Nu-l mai atingi și îi spui profesorului. Înseamnă că aparatul are o defecțiune și curentul ajunge pe carcasă."],
];

const ELECTRO_PHOTOS = [
  ["/priza.jpg", "Priză cu un cablu deteriorat", "Cablul are izolația ruptă și firele la vedere, așa că nu se mai folosește."],
  ["/prize-impamantare.jpg", "Prize cu contact de împământare", "Contactul metalic din priză duce curentul în pământ dacă aparatul se strică."],
  ["/triplu.jpg", "Triplu-ștecher", "Dacă bagi prea multe aparate într-un triplu, se încălzește și poate lua foc."],
  ["/cabluri-incurcate.jpg", "Birou cu multe cabluri încurcate", "Cablurile încurcate se agață ușor și nu observi la timp dacă unul s-a rupt."],
  ["/disjunctor.jpg", "Disjunctor diferențial", "Disjunctorul diferențial oprește curentul imediat ce acesta trece prin om."],
  ["/tablou.jpg", "Tablou electric cu disjunctoare", "La tabloul electric umblă doar electricianul, niciodată elevii."],
];

/* Partea 3 — categorii și exemple */
const ROOMS = [
  {
    bg: "bg-safe",
    level: 1,
    label: "Fără pericol major",
    danger: "Aerul e uscat, podeaua e din lemn sau linoleum, iar temperatura e obișnuită.",
    protect: "Ajung prizele cu împământare și un stingător aproape.",
  },
  {
    bg: "bg-warn",
    level: 2,
    label: "Cu pericol majorat",
    danger: "Apare o singură problemă: umezeală, căldură mare, praf sau o podea de beton ori gresie.",
    protect: "Disjunctorul diferențial devine obligatoriu, iar prelungitoarele nu stau pe jos.",
  },
  {
    bg: "bg-danger",
    level: 3,
    label: "Foarte periculoase",
    danger: "Apa e peste tot, se folosesc substanțe chimice sau apar două probleme în același timp.",
    protect: "Lângă apă nu se folosește niciun aparat din priză, iar în încăperile tehnice intră doar personalul.",
  },
];

const EXAMPLES: [string, string, 0 | 1 | 2, string, string][] = [
  ["Colegiu", "Sală de clasă", 0, "E uscată și are podea de linoleum.", "/sala-clasa.jpg"],
  ["Colegiu", "Laborator de informatică", 0, "E uscat, dar are multe cabluri și prize, așa că fiecare cablu trebuie verificat.", "/lab.jpg"],
  ["Colegiu", "Atelier, subsol", 1, "Podeaua e de beton, se adună praf și uneori e umed.", "/subsol.jpg"],
  ["Colegiu", "Tablou electric, centrală termică", 2, "E tensiune mare și căldură, așa că intră doar personalul.", "/tablou.jpg"],
  ["Cămin", "Camera de locuit", 0, "E uscată, dar sunt multe încărcătoare și prelungitoare.", "/camera-camin.jpg"],
  ["Cămin", "Bucătăria comună", 1, "Chiuveta e chiar lângă prize, iar țevile sunt din metal.", "/camin.jpg"],
  ["Cămin", "Dușurile și spălătoria", 2, "Aerul e aproape tot timpul umed și pe jos e apă.", "/dus.jpg"],
];

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8 lg:py-6">
          <a href="#top" className="flex items-center gap-3 sm:gap-4">
            <img src="/ceiti-logo.png" alt="CEITI" className="h-7 w-auto sm:h-9" />
            <span className="border-l border-dark/20 pl-3 text-base font-semibold leading-tight tracking-tight sm:pl-4 sm:text-xl">Securitatea Muncii</span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map(([href, label]) => (
              <a key={href} href={href} className="text-lg hover:underline hover:decoration-brand hover:decoration-4 hover:underline-offset-4">
                {label}
              </a>
            ))}
            <a href="#concluzii" className="rounded-2xl border border-dark px-6 py-3 text-lg transition-colors hover:bg-dark hover:text-white">
              Concluzii
            </a>
          </nav>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl border border-dark lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Meniu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <div id="mobile-menu" hidden={!open} className="px-4 pb-4 lg:hidden">
          <div className="pop bg-white p-3">
            {[...NAV, ["#concluzii", "Concluzii"]].map(([href, label]) => (
              <a key={href} href={href} className="block rounded-xl px-4 py-3 text-lg hover:bg-brand" onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* HERO */}
        <section className="grid items-center gap-10 pb-12 pt-6 lg:grid-cols-2 lg:pt-10">
          <div>
            <h1 className="text-4xl font-medium leading-[1.1] sm:text-6xl">Instructajul la locul de muncă și electrosecuritatea</h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed sm:text-xl">
              În acest studiu vom prezenta pe înțeles ce trebuie să știe un elev înainte să se așeze la calculator și de ce unele încăperi din colegiu și din cămin sunt mai periculoase decât altele.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a href="#instructaj" className="inline-flex items-center gap-2 rounded-2xl bg-dark px-8 py-4 text-lg text-white transition-colors hover:bg-black">
                Începe <ArrowUpRight className="h-5 w-5 text-brand" />
              </a>
              <div className="leading-snug">
                <p className="text-lg font-semibold">Studiul Individual</p>
                <p className="text-muted">Grupul 3 · P-2341</p>
              </div>
            </div>
          </div>
          <Slideshow
            className="photo aspect-[4/3]"
            images={[
              ["/hero-1.jpg", "Elevi la ora de informatică într-un laborator modern"],
              ["/hero-2.jpg", "Laborator IT cu monitoare noi și scaune verzi"],
              ["/hero-3.jpg", "Elevi care lucrează la calculatoare lângă fereastră"],
              ["/hero-4.jpg", "Sală de calculatoare luminoasă cu mese de lucru"],
              ["/hero-5.jpg", "Rând de calculatoare pe un birou alb"],
              ["/hero-6.jpg", "Laborator de informatică cu multe calculatoare"],
            ]}
          />
        </section>

        {/* Names strip */}
        <section className="flex flex-wrap justify-between gap-x-8 gap-y-3 border-y border-dark/10 py-8 text-lg font-semibold text-dark/60 sm:text-xl">
          {TEAM.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </section>

        {/* Project map */}
        <section className="py-12 sm:py-16">
          <h2 className="mb-10 text-3xl font-medium leading-snug sm:text-4xl">
            <span className="tag bg-brand">Ce cuprinde studiul</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <PartCard href="#instructaj" n="01" tone="gray" title="Instructajul la locul de muncă">
              Ce află elevul de la profesor înainte să lucreze prima dată la calculator.
            </PartCard>
            <PartCard href="#electrosecuritate" n="02" tone="brand" title="Asigurarea electrosecurității">
              Cum ne ferim de curentul electric și de incendiile pornite de la aparate.
            </PartCard>
            <PartCard href="#incaperi" n="03" tone="dark" title="Compararea încăperilor">
              De ce o sală de clasă și un duș din cămin nu sunt la fel de periculoase.
            </PartCard>
          </div>
        </section>

        {/* ───────── PARTEA 1 ───────── */}
        <Section id="instructaj" part="Partea 1" title="Instructajul la locul de muncă">
          <Block label="Ce este">
            <div className="grid overflow-hidden rounded-[2rem] bg-gray md:grid-cols-2 md:rounded-[2.8rem]">
              <div className="p-8 sm:p-12">
                <p className="text-xl leading-relaxed sm:text-2xl">
                  Este discuția în care profesorul îi explică elevului <b className="tag bg-brand font-medium">ce îl poate răni</b> la locul lui de lucru și cum să evite asta.
                </p>
                <ul className="mt-8 space-y-4 text-lg">
                  <Li>Are loc după instruirea introductiv-generală, unde se vorbește despre regulile valabile în tot colegiul.</Li>
                  <Li>Îl ține profesorul care conduce ora în laborator, pentru că el cunoaște cel mai bine sala și aparatele.</Li>
                  <Li>Se repetă când apare un calculator nou, când elevul trece la alt loc de lucru sau după un accident.</Li>
                </ul>
              </div>
              <Slideshow
                className="h-full min-h-72"
                images={[
                  ["/ergonomie.jpg", "Post de lucru cu monitor, tastatură și scaun"],
                  ["/lab.jpg", "Laborator de informatică"],
                  ["/primajutor.jpg", "Trusă de prim ajutor și plan de evacuare"],
                  ["/stingator.jpg", "Stingător pe perete, lângă ieșire"],
                  ["/evacuare.jpg", "Hol cu indicatoare de evacuare"],
                ]}
              />
            </div>
          </Block>

          <Block label="Ce spune legea">
            <LawQuote
              source="Legea nr. 186/2008, art. 17 alin. (1)"
              href={LAW_186}
              plain="Legea obligă instituția să-l instruiască pe fiecare om înainte să înceapă lucrul și din nou de fiecare dată când se schimbă locul de lucru sau aparatele."
            >
              <p>„Angajatorul trebuie să asigure condiţii pentru ca fiecare lucrător [...] să primească o instruire suficientă, adecvată, teoretică şi practică în domeniul securităţii şi sănătăţii în muncă [...]:</p>
              <p>a) la angajare, care include instruirea introductiv-generală şi instruirea la locul de muncă;</p>
              <p>b) în cazul schimbării locului de muncă, transferului sau permutării;</p>
              <p>c) la introducerea unui nou echipament de lucru sau la modificarea echipamentului de lucru existent;”</p>
            </LawQuote>
          </Block>

          <Block label="Cum facem">
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map(([t, d], i) => (
                <li key={t} className={`pop flex flex-col p-6 ${i === 3 ? "bg-brand" : "bg-gray"}`}>
                  <span className="text-4xl font-medium">0{i + 1}</span>
                  <h4 className="mt-4 border-b border-dark pb-3 text-xl font-medium leading-snug">{t}</h4>
                  <p className="mt-3 text-base leading-relaxed">{d}</p>
                </li>
              ))}
            </ol>
          </Block>

          <Block label="Exemple">
            <div className="pop bg-white p-8 sm:p-10">
              <h3 className="text-2xl font-medium">Întrebări la verificare</h3>
              <dl className="mt-6 grid gap-x-12 md:grid-cols-2">
                {QUIZ.map(([q, a], i) => (
                  <div key={q} className={`flex gap-4 border-t border-dark/20 py-5 ${i < 2 ? "md:border-t-0 md:pt-0" : ""} ${i === 0 ? "border-t-0 pt-0" : ""}`}>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-sm font-semibold">{i + 1}</span>
                    <div>
                      <dt className="text-lg font-medium">{q}</dt>
                      <dd className="mt-1 text-lg text-muted">{a}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </Block>
        </Section>

        {/* ───────── PARTEA 2 ───────── */}
        <Section id="electrosecuritate" part="Partea 2" title="Asigurarea electrosecurității">
          <Block label="Ce este">
            <div className="grid rounded-[2rem] bg-dark p-8 text-white sm:p-12 md:grid-cols-2 md:divide-x md:divide-white/30 md:rounded-[2.8rem]">
              <div className="pb-8 md:pb-0 md:pr-10">
                <p className="text-xl leading-relaxed sm:text-2xl">
                  Înseamnă tot ce facem ca <span className="tag bg-brand text-dark">să nu ne curenteze</span> și ca niciun aparat electric să nu ia foc.
                </p>
              </div>
              <ElectroList
                title="Ce se poate întâmpla"
                items={[
                  "Curentul trece prin corp și te electrocutează.",
                  "Pielea se arde în locul unde ai atins firul.",
                  "Mușchii mâinii se strâng și nu mai poți da drumul firului.",
                  "Un scurtcircuit poate aprinde cablul și apoi lucrurile din jur.",
                ]}
                className="border-t border-white/30 pt-8 md:border-t-0 md:pl-10 md:pt-0"
              />
            </div>
          </Block>

          <Block label="Ce spune legea">
            <LawQuote
              source="Legea nr. 186/2008, art. 19 alin. (2) lit. d)"
              href={LAW_186}
              plain="Dacă vezi ceva periculos, de exemplu un cablu rupt sau o priză care scânteiază, ești obligat să spui imediat. Nu e pârâre, e ceea ce cere legea."
            >
              <p>„Lucrătorii sînt obligaţi: [...]</p>
              <p>d) să comunice imediat angajatorului şi/sau lucrătorilor desemnaţi orice situaţie de muncă pe care au motive întemeiate să o considere un pericol grav pentru securitate şi sănătate, precum şi orice defecţiuni ale sistemelor de protecţie;”</p>
            </LawQuote>
          </Block>

          <Block label="Cum facem">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Cabluri întregi", "Ne uităm la cablu înainte să-l folosim. Dacă are fisuri sau i se văd firele, nu-l mai băgăm în priză."],
                ["Priza cu împământare", "Are un contact metalic în plus. Dacă aparatul se strică, curentul pleacă prin acest contact în pământ, nu prin mâna ta."],
                ["Disjunctorul diferențial", "Este un întrerupător din tabloul electric. Când observă că o parte din curent trece prin om, oprește totul într-o fracțiune de secundă."],
                ["Grija noastră", "Atingem aparatele doar cu mâinile uscate, nu legăm prelungitoare unul în altul și nu umblăm niciodată la tabloul electric."],
              ].map(([t, d], i) => (
                <article key={t} className={`pop flex flex-col p-7 ${i === 1 ? "bg-brand" : "bg-gray"}`}>
                  <span className="text-4xl font-medium">0{i + 1}</span>
                  <h3 className="mt-4 text-xl font-medium">{t}</h3>
                  <p className="mt-2 text-lg leading-relaxed">{d}</p>
                </article>
              ))}
            </div>
          </Block>

          <Block label="Exemple">
            <div className="pop bg-white p-8 sm:p-10">
              <h3 className="text-2xl font-medium">Ce faci dacă…</h3>
              <dl className="mt-6 grid gap-x-12 md:grid-cols-2">
                {SITUATIONS.map(([s, a], i) => (
                  <div key={s} className={`flex gap-4 border-t border-dark/20 py-5 ${i < 2 ? "md:border-t-0 md:pt-0" : ""} ${i === 0 ? "border-t-0 pt-0" : ""}`}>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-sm font-semibold">{i + 1}</span>
                    <div>
                      <dt className="text-lg font-medium">{s}</dt>
                      <dd className="mt-1 text-lg text-muted">{a}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
              {ELECTRO_PHOTOS.map(([src, alt, note]) => (
                <figure key={src} tabIndex={0} className="photo group relative aspect-[4/3] outline-none">
                  <img src={src} alt={alt} className="h-full w-full object-cover" />
                  <figcaption className="absolute inset-0 flex items-end bg-dark/75 p-4 text-sm leading-snug text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100 sm:p-6 sm:text-lg">
                    {note}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Block>
        </Section>

        {/* ───────── PARTEA 3 ───────── */}
        <Section id="incaperi" part="Partea 3" title="Compararea încăperilor">
          <Block label="Ce este">
            <p className="max-w-3xl text-xl leading-relaxed sm:text-2xl">
              Nu toate încăperile sunt la fel de periculoase. După cât de ușor te poate curenta și cât de repede poate izbucni un incendiu, le împărțim în <span className="tag bg-brand">trei categorii</span>.
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {ROOMS.map((r) => (
                <article key={r.label} className="pop flex flex-col bg-white p-8">
                  <div className="flex items-center justify-between gap-3 border-b border-dark pb-6">
                    <h3 className="text-2xl font-medium leading-tight">
                      <span className={`tag ${r.bg}`}>{r.label}</span>
                    </h3>
                    <Dots level={r.level} />
                  </div>
                  <dl className="mt-6 space-y-5">
                    <RoomRow k="De ce e periculoasă" v={r.danger} />
                    <RoomRow k="Ce măsuri luăm" v={r.protect} />
                  </dl>
                </article>
              ))}
            </div>
          </Block>

          <Block label="Ce spune legea">
            <div className="space-y-8">
              <LawQuote
                source="Legea nr. 267/1994, art. 13"
                href={LAW_267}
                plain="Colegiul e obligat prin lege să ne învețe regulile de apărare împotriva incendiilor și ce facem dacă izbucnește un foc."
              >
                <p>„În instituţiile de învățământ de toate treptele trebuie să fie organizată însuşirea reglementărilor de apărare împotriva incendiilor, instruirea privind modul de intervenţie la incendiu, conform unor programe speciale.”</p>
              </LawQuote>
              <LawQuote
                source="Legea nr. 267/1994, art. 12 alin. (1)"
                href={LAW_267}
                plain="Regulile contra incendiilor le respectăm nu doar la colegiu, ci și acasă sau în cămin. Dacă vedem foc, anunțăm imediat și, dacă se poate, îl stingem cât e mic."
              >
                <p>„Fiecare cetăţean este obligat să cunoască şi să îndeplinească reglementările de apărare împotriva incendiilor la locul de muncă şi la domiciliu, să acorde ajutorul posibil la prevenirea incendiilor, de asemenea să anunţe, prin orice mijloc, serviciile de urgenţă, primarul sau poliţia şi să ia măsuri, după posibilităţile sale, pentru limitarea răspândirii şi stingerea incendiului în faza iniţială.”</p>
              </LawQuote>
            </div>
          </Block>

          <Block label="Cum facem">
            <p className="mb-6 text-lg">Când vrei să afli din ce categorie face parte o încăpere, îți pui pe rând aceste întrebări:</p>
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                ["Umezeala", "Este apă, abur sau condens pe pereți?"],
                ["Podeaua", "E din lemn sau linoleum, ori din beton sau gresie?"],
                ["Temperatura", "E o căldură obișnuită sau e foarte cald?"],
                ["Praf și chimicale", "Se adună praf sau se lucrează cu substanțe chimice?"],
                ["Ce poate arde", "Sunt multe hârtii, haine, ulei sau cabluri?"],
              ].map(([t, q], i) => (
                <li key={t} className="rounded-[2rem] border border-dark p-6">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-dark text-sm font-semibold text-white">{i + 1}</span>
                  <h3 className="mt-4 text-xl font-medium">{t}</h3>
                  <p className="mt-1 text-lg text-muted">{q}</p>
                </li>
              ))}
            </ol>
            <Callout label="Regula">Dacă nu găsești nicio problemă, încăperea e fără pericol major. Dacă găsești una, are pericol majorat. Dacă găsești două sau e apă peste tot, e foarte periculoasă.</Callout>
          </Block>

          <Block label="Exemple din CEITI și cămin">
            <RoomSlider />
          </Block>
        </Section>

        {/* ───────── CONCLUZII ───────── */}
        <section id="concluzii" className="py-12 sm:py-16">
          <h2 className="mb-10 text-3xl font-medium leading-snug sm:text-4xl">
            <span className="tag bg-brand">Concluzii</span>
          </h2>
          <div className="rounded-[2rem] bg-dark p-8 text-white sm:p-12 md:rounded-[2.8rem]">
            <ol className="grid gap-6 md:grid-cols-3">
              {[
                ["Instructajul", "Nimeni nu lucrează singur la calculator până nu a trecut prin instructaj și nu a semnat fișa."],
                ["Electrosecuritatea", "Cele mai multe accidente se evită simplu: cablu întreg, mâini uscate și o priză cu împământare."],
                ["Încăperile", "Cu cât e mai multă apă într-o încăpere, cu atât e mai periculoasă și cu atât trebuie să fim mai atenți."],
              ].map(([t, d], i) => (
                <li key={t} className="rounded-[2rem] border border-brand p-6">
                  <span className="text-3xl font-medium text-brand">0{i + 1}</span>
                  <h3 className="mt-3 text-xl font-medium">{t}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-white/85">{d}</p>
                </li>
              ))}
            </ol>
          </div>
          <Slideshow
            className="photo mt-8 aspect-[4/3] w-full sm:aspect-[21/9]"
            images={[
              ["/hero-1.jpg", "Elevi la ora de informatică într-un laborator modern"],
              ["/hero-2.jpg", "Laborator IT cu monitoare noi și scaune verzi"],
              ["/hero-3.jpg", "Elevi care lucrează la calculatoare lângă fereastră"],
              ["/hero-4.jpg", "Sală de calculatoare luminoasă cu mese de lucru"],
              ["/hero-5.jpg", "Rând de calculatoare pe un birou alb"],
              ["/hero-6.jpg", "Laborator de informatică cu multe calculatoare"],
            ]}
          />
          <div className="pop mt-8 bg-white p-8 sm:p-10">
            <h3 className="text-2xl font-medium">Sursele care ne-au ajutat la crearea studiului</h3>
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                ["Legea nr. 186/2008 privind securitatea și sănătatea în muncă.", LAW_186],
                ["Legea nr. 267/1994 privind apărarea împotriva incendiilor.", LAW_267],
                ["Materialele de curs SSM despre instruire și modelul de instructaj la locul de muncă.", ""],
              ].map(([s, href]) => (
                <li key={s} className="text-lg">
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="group flex gap-3 underline decoration-brand decoration-2 underline-offset-4 hover:decoration-dark">
                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      {s}
                    </a>
                  ) : (
                    <span className="flex gap-3">
                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0" />
                      {s}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ---------- building blocks ---------- */

function Section({ id, part, title, children }: { id: string; part: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="border-t border-dark/10 py-12 sm:py-16">
      <p className="text-lg font-medium text-muted">{part}</p>
      <h2 className="mt-2 text-3xl font-medium leading-snug sm:text-5xl">
        <span className="tag bg-brand">{title}</span>
      </h2>
      <div className="mt-10 space-y-14">{children}</div>
    </section>
  );
}

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="mb-6 flex items-center gap-4 text-xl font-medium sm:text-2xl">
        {label}
        <span className="h-px flex-1 bg-dark/20" />
      </h3>
      {children}
    </div>
  );
}

function PartCard({ href, n, tone, title, children }: { href: string; n: string; tone: "gray" | "brand" | "dark"; title: string; children: ReactNode }) {
  const bg = tone === "gray" ? "bg-gray" : tone === "brand" ? "bg-brand" : "bg-dark text-white";
  const tag = tone === "brand" ? "bg-white" : tone === "dark" ? "bg-white text-dark" : "bg-brand";
  return (
    <a href={href} className={`pop press flex flex-col p-8 sm:p-10 ${bg}`}>
      <span className="text-5xl font-medium">{n}</span>
      <h3 className="mt-6 text-2xl font-medium leading-snug">
        <span className={`tag ${tag}`}>{title}</span>
      </h3>
      <p className="mt-4 flex-1 text-lg leading-relaxed">{children}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-lg font-medium">
        Vezi partea <ArrowUpRight className="h-5 w-5" />
      </span>
    </a>
  );
}

function Li({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-dark" />
      <span>{children}</span>
    </li>
  );
}

function ElectroList({ title, items, className }: { title: string; items: string[]; className?: string }) {
  return (
    <div className={className}>
      <h4 className="text-xl font-medium">{title}</h4>
      <ul className="mt-5 space-y-3">
        {items.map((t) => (
          <li key={t} className="flex gap-3 text-lg leading-relaxed">
            <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function RoomSlider() {
  const scrollBy = (dir: number) => {
    const el = document.getElementById("room-slider");
    if (el) el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };
  return (
    <div>
      <div id="room-slider" className="flex snap-x pb-2 snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {EXAMPLES.map(([place, room, lvl, why, src], i) => {
          const r = ROOMS[lvl];
          return (
            <article key={room} className="w-full shrink-0 snap-start">
              <div className="pop grid overflow-hidden bg-white md:grid-cols-[1.3fr_1fr]">
                <div className="relative aspect-[4/3] border-b border-dark md:aspect-auto md:h-[26rem] md:border-b-0 md:border-r">
                  <img src={src} alt={room} className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                    {place} · {i + 1} / {EXAMPLES.length}
                  </p>
                  <h4 className="mt-3 text-3xl font-medium leading-tight">{room}</h4>
                  <span className={`tag mt-4 w-fit text-base font-medium ${r.bg}`}>{r.label}</span>
                  <p className="mt-5 text-lg leading-relaxed">{why}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="mt-5 flex justify-end gap-3">
        <button type="button" data-slider-prev="room-slider" onClick={() => scrollBy(-1)} aria-label="Înapoi" className="grid h-12 w-12 place-items-center rounded-full border border-dark bg-white transition-colors hover:bg-brand">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button type="button" data-slider-next="room-slider" onClick={() => scrollBy(1)} aria-label="Înainte" className="grid h-12 w-12 place-items-center rounded-full border border-dark bg-dark text-white transition-colors hover:bg-black">
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function Slideshow({ images, className = "" }: { images: string[][]; className?: string }) {
  const n = images.length;
  const period = n * 5;
  return (
    <div className={`slideshow relative ${className}`}>
      {images.map(([src, alt], i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          // -1s offset so the first image is fully visible on load; then 5s per image
          style={{ animationName: `slide-fade-${n}`, animationDuration: `${period}s`, animationDelay: `-${(((1 - 5 * i) % period) + period) % period}s` }}
        />
      ))}
    </div>
  );
}

function LawQuote({ source, href, plain, children }: { source: string; href: string; plain: string; children: ReactNode }) {
  return (
    <figure className="pop grid overflow-hidden bg-white md:grid-cols-[1.4fr_1fr]">
      <blockquote className="p-8 sm:p-10">
        <div className="space-y-2 border-l-4 border-brand pl-5 text-lg italic leading-relaxed">{children}</div>
        <figcaption className="mt-6">
          <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium not-italic underline decoration-brand decoration-2 underline-offset-4 hover:decoration-dark">
            {source} <ArrowUpRight className="h-4 w-4" />
          </a>
        </figcaption>
      </blockquote>
      <div className="flex flex-col justify-center border-t border-dark bg-gray p-8 sm:p-10 md:border-l md:border-t-0">
        <span className="tag w-fit bg-brand text-base font-medium">Pe înțeles</span>
        <p className="mt-4 text-lg leading-relaxed">{plain}</p>
      </div>
    </figure>
  );
}

function Callout({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="pop mt-8 flex flex-col gap-3 bg-white p-6 sm:flex-row sm:items-center sm:gap-6 sm:px-10">
      <span className="tag w-fit shrink-0 bg-brand text-lg font-medium">{label}</span>
      <p className="text-lg leading-relaxed">{children}</p>
    </div>
  );
}

function Dots({ level }: { level: number }) {
  return (
    <span className="flex gap-1" aria-label={`Nivel ${level} din 3`}>
      {[1, 2, 3].map((i) => (
        <span key={i} className={`h-3 w-3 rounded-full border border-dark ${i <= level ? "bg-dark" : "bg-white"}`} />
      ))}
    </span>
  );
}

function RoomRow({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-sm font-semibold uppercase tracking-wide text-muted">{k}</dt>
      <dd className="mt-1 text-lg leading-relaxed">{v}</dd>
    </div>
  );
}

