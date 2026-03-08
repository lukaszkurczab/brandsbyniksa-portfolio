import ContactForm from "./components/ContactForm";
import styles from "./page.module.scss";

const services = [
  {
    title: "Strategia marki osobistej",
    description:
      "Buduję pozycjonowanie, ton komunikacji i fundament narracji, która wspiera sprzedaż usług premium.",
  },
  {
    title: "Identyfikacja wizualna",
    description:
      "Projektuję system wizualny: logo, typografię, paletę i komponenty, które porządkują wizerunek na wszystkich kanałach.",
  },
  {
    title: "Kierunek contentowy",
    description:
      "Tworzę ramy publikacji i estetyki treści, aby ekspercka obecność była spójna, rozpoznawalna i profesjonalna.",
  },
];

const projects = [
  {
    name: "Rebranding mentorki biznesowej",
    outcome: "Wzrost liczby zapytań o współpracę o 62% w 3 miesiące.",
  },
  {
    name: "Launch marki eksperckiej UX",
    outcome: "Spójna identyfikacja i nowa strona z ofertą 1:1 oraz warsztatami.",
  },
  {
    name: "Repozycjonowanie konsultantki HR",
    outcome: "Silniejszy przekaz premium i wyraźne odróżnienie od konkurencji.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.navbar}>
        <a className={styles.brand} href="#start">
          Brands by Niksa
        </a>
        <nav className={styles.navLinks}>
          <a href="#o-mnie">O mnie</a>
          <a href="#oferta">Oferta</a>
          <a href="#realizacje">Realizacje</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className={styles.navCta} href="#kontakt">
          Umów konsultację
        </a>
      </header>

      <main className={styles.main}>
        <section className={styles.hero} id="start">
          <p className={styles.eyebrow}>Design i personal branding</p>
          <h1>
            Buduję marki osobiste kobiet, które chcą być widoczne,
            rozpoznawalne i zapamiętywane.
          </h1>
          <p className={styles.heroLead}>
            Łączę strategię, estetykę i komunikację, by Twoja marka działała
            spójnie od pierwszego kontaktu po decyzję zakupową.
          </p>
          <div className={styles.heroActions}>
            <a href="#kontakt" className={styles.primaryAction}>
              Zacznijmy współpracę
            </a>
            <a href="#realizacje" className={styles.secondaryAction}>
              Zobacz projekty
            </a>
          </div>
        </section>

        <section className={styles.about} id="o-mnie">
          <h2>O mnie</h2>
          <p>
            Nazywam się Niksa i wspieram ekspertki, mentorki i właścicielki
            biznesów usługowych w budowie marki osobistej, która wygląda
            profesjonalnie i komunikuje realną wartość.
          </p>
          <p>
            Moje podejście opiera się na strategicznej prostocie: najpierw
            porządek, potem estetyka, na końcu skalowanie komunikacji.
          </p>
        </section>

        <section className={styles.services} id="oferta">
          <h2>Oferta</h2>
          <div className={styles.cardGrid}>
            {services.map((service) => (
              <article className={styles.card} key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.projects} id="realizacje">
          <h2>Wybrane realizacje</h2>
          <div className={styles.projectList}>
            {projects.map((project) => (
              <article className={styles.project} key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.contact} id="kontakt">
          <div>
            <h2>Kontakt</h2>
            <p>
              Napisz, na jakim etapie jest Twoja marka i czego potrzebujesz.
              Odpowiem z propozycją najlepszego kierunku współpracy.
            </p>
            <p className={styles.contactDetails}>
              Preferujesz mail? kontakt@brandsbyniksa.pl
            </p>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Brands by Niksa. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}
