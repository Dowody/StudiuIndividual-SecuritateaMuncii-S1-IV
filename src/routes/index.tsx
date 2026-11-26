import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const NAV = [
  ["#instructaj", "Instructaj"],
  ["#electrosecuritate", "Siguranța electrică"],
  ["#incaperi", "Încăperi"],
];

/* Texte oficiale pe legis.md */
const LAW_186 = "https://www.legis.md/cautare/getResults?doc_id=142427&lang=ro";
const LAW_267 = "https://www.legis.md/cautare/getResults?doc_id=147578&lang=ro";
const FIRST_AID = "https://www.electricalsafetyfirst.org.uk/safety-advice/home-and-people/house-maintenance/first-aid/";

const TEAM = ["Borș Bogdan", "Bruma Alexandrina", "Covali Alexandr", "Gațcan Cristian", "Mazur Adrian"];

/* Partea 1 — cum facem instructajul */
const STEPS = [
  ["Explicarea riscurilor", "Profesorul verifică starea echipamentelor și le explică elevilor principalele riscuri: electrocutarea, incendiile, oboseala ochilor și durerile de spate."],
  ["Regulile de lucru", "Calculatorul se pornește și se închide corect, iar carcasa nu se deschide fără permisiune. Nu ținem băuturi sau mâncare lângă echipamente și păstrăm monitorul la aproximativ o lungime de braț."],
  ["Demonstrația practică", "Profesorul le arată elevilor unde se află stingătorul, trusa de prim ajutor și ieșirea de urgență. De asemenea, demonstrează cum se folosește și se închide corect calculatorul."],
  ["Verificarea cunoștințelor", "La final, elevii răspund la câteva întrebări pentru a verifica dacă au înțeles regulile. Instruirea se notează în fișa de instruire, iar elevii respectă indicațiile profesorului."],
];

const QUIZ = [
  ["Ce faci dacă simți miros de plastic ars?", "Nu mai folosesc calculatorul, mă îndepărtez și anunț imediat profesorul."],
  ["Ai voie să bei ceai sau cafea lângă tastatură?", "Nu. Lichidul vărsat poate strica echipamentele sau provoca un scurtcircuit."],
  ["Unde este stingătorul cel mai apropiat?", "Arăt locul în care se află stingătorul, în sală sau pe hol."],
  ["Ai voie să deschizi carcasa unui calculator care nu funcționează?", "Nu. Anunț profesorul, iar reparația este efectuată de o persoană calificată."],
  ["La ce distanță trebuie să fie monitorul față de ochi?", "La aproximativ o lungime de braț, cu marginea de sus a ecranului la nivelul ochilor sau puțin mai jos."],
  ["Unde lași ghiozdanul în laborator?", "În locul indicat de profesor, fără să blochez trecerea sau să ating cablurile."],
];

/* Partea 2 — exemple de electrosecuritate */
const SITUATIONS = [
  ["Cablul monitorului este deteriorat", "Nu mai folosesc calculatorul și anunț profesorul. Nu ating firele la vedere."],
  ["S-a vărsat apă pe masă", "Nu ating aparatele, cablurile sau prizele ude. Anunț profesorul, iar alimentarea cu energie trebuie oprită în siguranță înainte de curățare."],
  ["Un coleg suferă un accident electric", "Nu îl ating cât timp este în contact cu sursa de curent. Anunț profesorul și sun la 112. Curentul trebuie oprit în siguranță înainte de acordarea primului ajutor. Urmez indicațiile operatorului 112."],
  ["Prelungitorul s-a încălzit foarte tare", "Nu îl mai folosesc și anunț profesorul. Încălzirea poate indica prea multe aparate conectate sau o defecțiune."],
  ["Vezi scântei la priză", "Nu ating priza și nu conectez alte aparate. Mă îndepărtez și anunț imediat profesorul."],
  ["Simt un șoc electric când ating calculatorul", "Nu mai ating calculatorul și anunț imediat profesorul. Poate exista o problemă electrică sau o defecțiune a protecției."],
];

const ELECTRO_PHOTOS = [
  ["/priza.jpg", "Cablu electric deteriorat lângă priză", "Cablurile cu firele la vedere nu trebuie folosite."],
  ["/prize-impamantare.jpg", "Prize cu contact de împământare", "Contactul de împământare al prizei contribuie la protecția împotriva electrocutării."],
  ["/triplu.jpg", "Adaptor cu mai multe prize", "Conectarea prea multor aparate la un prelungitor poate provoca supraîncălzire și incendii."],
  ["/cabluri-incurcate.jpg", "Birou cu multe cabluri încurcate", "Cablurile trebuie aranjate astfel încât să nu împiedice trecerea și să poată fi verificate ușor."],
  ["/disjunctor.jpg", "Întrerupător de protecție împotriva pierderilor de curent", "Întrerupătorul de protecție poate opri automat curentul când detectează o pierdere de curent."],
  ["/tablou.jpg", "Panou electric cu întrerupătoare de protecție", "Doar personalul autorizat poate interveni la panoul electric."],
];

/* Partea 3 — categorii și exemple */
const ROOMS = [
  {
    bg: "bg-safe",
    level: 1,
    label: "Fără pericol sporit (risc redus)",
    danger: "Nu există factori care să mărească riscul de electrocutare, precum umezeala ridicată sau podelele care conduc curentul.",
    protect: "Folosim echipamente în stare bună și respectăm regulile de siguranță electrică și de prevenire a incendiilor.",
  },
  {
    bg: "bg-warn",
    level: 2,
    label: "Cu pericol sporit (risc mai mare)",
    danger: "Există un factor de risc, cum ar fi umezeala, mult praf, căldura ridicată sau o podea care poate conduce curentul, de exemplu din metal ori beton armat.",
    protect: "Se folosesc echipamente și protecții electrice potrivite încăperii. Cablurile și aparatele sunt ferite de apă.",
  },
  {
    bg: "bg-danger",
    level: 3,
    label: "Deosebit de periculoase (risc foarte mare)",
    danger: "Umezeala este foarte ridicată, există substanțe care pot deteriora echipamentele electrice sau sunt prezenți mai mulți factori de risc în același timp.",
    protect: "Se folosesc numai aparate și instalații potrivite acestor condiții. Accesul în încăperile tehnice este permis doar personalului autorizat.",
  },
];

const EXAMPLES = [
  { place: "Colegiu", room: "Sală de clasă", lvl: 0 as const, tag: "De regulă, fără pericol sporit", why: "Dacă sala este uscată și nu prezintă alți factori de risc, riscul de electrocutare este mai redus.", src: "/sala-clasa.jpg" },
  { place: "Colegiu", room: "Laborator de informatică", lvl: 0 as const, tag: "De regulă, fără pericol sporit", why: "Într-un laborator uscat, folosirea mai multor calculatoare nu înseamnă automat un risc electric sporit. Cablurile și prizele trebuie să fie în stare bună.", src: "/lab.jpg" },
  { place: "Colegiu", room: "Atelier sau subsol", lvl: 1 as const, tag: "Posibil pericol sporit", why: "Umezeala, praful și anumite tipuri de podea pot mări riscul de electrocutare. Mai mulți factori pot impune o categorie superioară.", src: "/subsol.jpg" },
  { place: "Colegiu", room: "Încăperi tehnice", lvl: 2 as const, tag: "Acces restricționat", why: "Aici se află echipamente care pot prezenta riscuri electrice sau termice. Categoria depinde de condițiile reale, iar accesul este rezervat personalului autorizat.", src: "/tablou.jpg" },
  { place: "Cămin", room: "Cameră de locuit", lvl: 0 as const, tag: "De regulă, fără pericol sporit", why: "Într-o cameră uscată, riscul electric este mai redus, însă încărcătoarele și prelungitoarele trebuie folosite corect.", src: "/camera-camin.jpg" },
  { place: "Cămin", room: "Bucătărie comună", lvl: 1 as const, tag: "Posibil pericol sporit", why: "Apa, aburul și aparatele electrice pot crește riscul de accidente. Categoria exactă depinde de condițiile din încăpere.", src: "/camin.jpg" },
  { place: "Cămin", room: "Dușuri și spălătorie", lvl: 2 as const, tag: "Posibil pericol sporit sau foarte mare", why: "Apa și umezeala ridicată cresc riscul de electrocutare. Categoria exactă depinde de condițiile din încăpere și de instalația electrică.", src: "/dus.jpg" },
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
            <span className="border-l border-dark/20 pl-3 text-base font-semibold leading-tight tracking-tight sm:pl-4 sm:text-xl">Securitatea în muncă</span>
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
            <h1 className="text-4xl font-medium leading-[1.1] sm:text-6xl">Instructajul la locul de muncă și siguranța electrică</h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed sm:text-xl">
              În acest studiu prezentăm regulile de siguranță pe care elevii trebuie să le respecte în laboratorul de informatică. De asemenea, explicăm ce pericole pot apărea în diferite încăperi ale colegiului și ale căminului.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a href="#instructaj" className="inline-flex items-center gap-2 rounded-2xl bg-dark px-8 py-4 text-lg text-white transition-colors hover:bg-black">
                Începe <ArrowUpRight className="h-5 w-5 text-brand" />
              </a>
              <div className="leading-snug">
                <p className="text-lg font-semibold">Studiu individual</p>
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
              Ce reguli trebuie să cunoască elevii înainte de a lucra la calculator.
            </PartCard>
            <PartCard href="#electrosecuritate" n="02" tone="brand" title="Siguranța electrică">
              Cum prevenim accidentele și incendiile cauzate de aparatele electrice.
            </PartCard>
            <PartCard href="#incaperi" n="03" tone="dark" title="Compararea încăperilor">
              De ce unele încăperi prezintă un risc mai mare de electrocutare decât altele.
            </PartCard>
          </div>
        </section>

        {/* ───────── PARTEA 1 ───────── */}
        <Section id="instructaj" part="Partea 1" title="Instructajul la locul de muncă">
          <Block label="Ce este">
            <div className="grid overflow-hidden rounded-[2rem] bg-gray md:grid-cols-2 md:rounded-[2.8rem]">
              <div className="p-8 sm:p-12">
                <p className="text-xl leading-relaxed sm:text-2xl">
                  Instructajul este o activitate în care profesorul le explică elevilor <b className="tag bg-brand font-medium">regulile de siguranță</b>, riscurile din laborator și modul în care pot preveni accidentele.
                </p>
                <ul className="mt-8 space-y-4 text-lg">
                  <Li>Are loc după instruirea generală, în care sunt prezentate regulile de siguranță din colegiu.</Li>
                  <Li>Este realizat de profesorul responsabil de laborator.</Li>
                  <Li>Regulile sunt explicate din nou atunci când se schimbă locul de lucru, se introduc echipamente noi sau este necesară o instruire suplimentară.</Li>
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
              plain="Angajatorul trebuie să le explice lucrătorilor regulile de siguranță înainte de a începe activitatea și atunci când se schimbă locul de muncă sau echipamentele folosite."
            >
              <p>„Angajatorul trebuie să asigure condiţii pentru ca fiecare lucrător [...] să primească o instruire suficientă, adecvată, teoretică şi practică în domeniul securităţii şi sănătăţii în muncă [...]:</p>
              <p>a) la angajare, care include instruirea introductiv-generală şi instruirea la locul de muncă;</p>
              <p>b) în cazul schimbării locului de muncă, transferului sau permutării;</p>
              <p>c) la introducerea unui nou echipament de lucru sau la modificarea echipamentului de lucru existent;”</p>
            </LawQuote>
          </Block>

          <Block label="Cum se desfășoară instructajul">
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
        <Section id="electrosecuritate" part="Partea 2" title="Siguranța electrică (electrosecuritatea)">
          <Block label="Ce este">
            <div className="grid rounded-[2rem] bg-dark p-8 text-white sm:p-12 md:grid-cols-2 md:divide-x md:divide-white/30 md:rounded-[2.8rem]">
              <div className="pb-8 md:pb-0 md:pr-10">
                <p className="text-xl leading-relaxed sm:text-2xl">
                  Siguranța electrică cuprinde regulile și măsurile care ne protejează de <span className="tag bg-brand text-dark">accidente</span> și de incendiile cauzate de curentul electric.
                </p>
              </div>
              <ElectroList
                title="Principalele pericole"
                items={[
                  "Curentul electric poate trece prin corp și poate provoca răni grave.",
                  "Contactul cu un fir electric neprotejat poate provoca arsuri.",
                  "Curentul electric poate face ca mușchii să se contracte, astfel încât persoana să nu mai poată elibera firul.",
                  "Un scurtcircuit apare atunci când curentul trece pe o cale neprevăzută, cu rezistență foarte mică. Acesta poate încălzi cablurile și provoca un incendiu.",
                ]}
                className="border-t border-white/30 pt-8 md:border-t-0 md:pl-10 md:pt-0"
              />
            </div>
          </Block>

          <Block label="Ce spune legea">
            <LawQuote
              source="Legea nr. 186/2008, art. 19 alin. (2) lit. d)"
              href={LAW_186}
              plain="Dacă observăm un cablu deteriorat, o priză care scoate scântei sau alt pericol, trebuie să anunțăm imediat persoana responsabilă. În laborator, elevii anunță profesorul."
            >
              <p>„Lucrătorii sînt obligaţi: [...]</p>
              <p>d) să comunice imediat angajatorului şi/sau lucrătorilor desemnaţi orice situaţie de muncă pe care au motive întemeiate să o considere un pericol grav pentru securitate şi sănătate, precum şi orice defecţiuni ale sistemelor de protecţie;”</p>
            </LawQuote>
          </Block>

          <Block label="Reguli de siguranță electrică">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Verificarea cablurilor", "Verificăm cablurile înainte de utilizare. Dacă sunt rupte sau au firele la vedere, nu le folosim și anunțăm profesorul."],
                ["Prizele cu protecție (împământare)", "O priză cu împământare are un contact metalic de protecție. Dacă un aparat se defectează, acest contact ajută la trecerea curentului pe o cale de protecție și la oprirea automată a alimentării, reducând riscul de electrocutare."],
                ["Întrerupătorul de protecție", "Este un dispozitiv din panoul electric care detectează dacă o parte din curent ajunge unde nu ar trebui, de exemplu prin corpul unei persoane. În acest caz, poate opri automat alimentarea cu energie. Acest tip de protecție se numește protecție diferențială."],
                ["Folosirea corectă a aparatelor", "Folosim aparatele electrice cu mâinile uscate, nu conectăm prelungitoare unul la altul și nu intervenim la panoul electric."],
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
          <Block label="Cum se clasifică încăperile">
            <p className="max-w-3xl text-xl leading-relaxed sm:text-2xl">
              Riscul de electrocutare diferă de la o încăpere la alta. Umezeala, temperaturile ridicate și alte condiții pot crește acest risc. Încăperile se împart în <span className="tag bg-brand">trei categorii</span>.
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
                    <RoomRow k="Condiții" v={r.danger} />
                    <RoomRow k="Măsuri" v={r.protect} />
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
                plain="Colegiul trebuie să îi învețe pe elevi cum să prevină incendiile și cum să acționeze în cazul unui incendiu."
              >
                <p>„În instituţiile de învățământ de toate treptele trebuie să fie organizată însuşirea reglementărilor de apărare împotriva incendiilor, instruirea privind modul de intervenţie la incendiu, conform unor programe speciale.”</p>
              </LawQuote>
              <LawQuote
                source="Legea nr. 267/1994, art. 12 alin. (1)"
                href={LAW_267}
                plain="Regulile de prevenire a incendiilor trebuie respectate la locul de muncă și acasă. Dacă observăm un incendiu, anunțăm imediat serviciile de urgență la 112. Încercăm să îl stingem doar dacă știm cum și nu ne punem în pericol."
              >
                <p>„Fiecare cetăţean este obligat să cunoască şi să îndeplinească reglementările de apărare împotriva incendiilor la locul de muncă şi la domiciliu, să acorde ajutorul posibil la prevenirea incendiilor, de asemenea să anunţe, prin orice mijloc, serviciile de urgenţă, primarul sau poliţia şi să ia măsuri, după posibilităţile sale, pentru limitarea răspândirii şi stingerea incendiului în faza iniţială.”</p>
              </LawQuote>
            </div>
          </Block>

          <Block label="Cum identificăm riscurile">
            <p className="mb-6 text-lg">Pentru a înțelege ce riscuri există într-o încăpere, analizăm următoarele aspecte:</p>
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                ["Umezeala", "Este aerul umed? Există apă sau picături de apă pe suprafețe?"],
                ["Podeaua", "Este dintr-un material care poate conduce curentul electric, cum ar fi metalul sau betonul armat?"],
                ["Temperatura", "Este temperatura ridicată pentru o perioadă îndelungată?"],
                ["Praful și substanțele chimice", "Există mult praf sau substanțe care pot deteriora echipamentele electrice?"],
                ["Suprafețele metalice", "Pot fi atinse în același timp un aparat electric și o structură metalică legată la pământ?"],
              ].map(([t, q], i) => (
                <li key={t} className="rounded-[2rem] border border-dark p-6">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-dark text-sm font-semibold text-white">{i + 1}</span>
                  <h3 className="mt-4 text-xl font-medium">{t}</h3>
                  <p className="mt-1 text-lg text-muted">{q}</p>
                </li>
              ))}
            </ol>
            <Callout label="Regula">O încăpere fără factori de risc este încadrată în prima categorie. Un singur factor dintre cei specifici pericolului sporit poate duce la încadrarea în a doua categorie. Doi sau mai mulți asemenea factori, umezeala foarte ridicată sau un mediu care deteriorează instalațiile electrice pot duce la încadrarea în a treia categorie. Clasificarea exactă se face de specialiști. Riscul de incendiu se evaluează separat.</Callout>
          </Block>

          <Block label="Exemple posibile din colegiu și cămin">
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
                ["Instructajul", "Instructajul îi ajută pe elevi să cunoască regulile de siguranță înainte de a lucra la calculator și să știe cum să reacționeze în caz de pericol."],
                ["Siguranța electrică", "Verificarea cablurilor, folosirea corectă a aparatelor și protecțiile electrice contribuie la prevenirea accidentelor."],
                ["Încăperile", "Fiecare încăpere poate prezenta riscuri diferite. Măsurile de siguranță trebuie adaptate condițiilor din încăperea respectivă."],
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
            <h3 className="text-2xl font-medium">Surse utilizate</h3>
            <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["Legea nr. 186/2008 privind securitatea și sănătatea în muncă.", LAW_186],
                ["Legea nr. 267/1994 privind apărarea împotriva incendiilor.", LAW_267],
                ["Materialele de curs privind securitatea și sănătatea în muncă și instruirea la locul de muncă.", ""],
                ["ANRE, Normativul privind amenajarea instalațiilor electrice, Hotărârea nr. 783 din 16.12.2025, pct. 7–8.", ""],
                ["Electrical Safety First — First aid tips.", FIRST_AID],
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
        Vezi secțiunea <ArrowUpRight className="h-5 w-5" />
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
        {EXAMPLES.map(({ place, room, lvl, tag, why, src }, i) => {
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
                  <span className={`tag mt-4 w-fit text-base font-medium ${r.bg}`}>{tag}</span>
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

