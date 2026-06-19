const pathway = [
  {
    step: '01',
    title: 'Fondations digitales',
    text: 'Apprendre les outils essentiels, organiser son travail et construire une base numerique solide.',
  },
  {
    step: '02',
    title: 'Productivite & IA',
    text: 'Utiliser l IA comme copilote pour chercher, structurer, produire et verifier plus vite.',
  },
  {
    step: '03',
    title: 'Communication & contenu',
    text: 'Creer des messages clairs, des supports utiles et une presence digitale professionnelle.',
  },
  {
    step: '04',
    title: 'Employabilite digitale',
    text: 'Transformer les competences en portfolio, preuves, offres et opportunites concretes.',
  },
];

const proofItems = [
  'Formation pratique, mobile-first et orientee livrables',
  'Parcours utilisable en atelier, campus tour et bootcamp',
  'Identite navy/orange coherente avec Digital Hero Campus',
  'Passerelle claire vers la communaute et les programmes HDN',
];

const chapters = ['Korhogo', 'Abidjan', 'Yamoussoukro', 'Bouake', 'Sakassou', 'Cote d Ivoire'];

function BrandMark() {
  return (
    <div className="brand-mark" aria-label="Digital Hero">
      <div className="brand-mark__shield">
        <span className="brand-mark__rocket">DH</span>
        <span className="brand-mark__pixels" />
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, text, inverse = false }) {
  return (
    <div className={inverse ? 'section-heading section-heading--inverse' : 'section-heading'}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Digital Hero accueil">
          <BrandMark />
          <span>
            <strong>DIGITAL HERO</strong>
            <small>Du talent local au heros digital</small>
          </span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#programme">Programme</a>
          <a href="#parcours">Parcours</a>
          <a href="#villes">Villes</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button--dark" href="#contact">Rejoindre</a>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="hero-kicker"><span /> DIGITAL HERO</p>
            <h1>Deviens un heros digital.</h1>
            <p className="hero-lead">
              Digital Hero forme les talents locaux aux outils numeriques, a l IA et a l employabilite digitale.
            </p>
            <p className="hero-note">
              Un mouvement d apprentissage pratique pour apprendre, pratiquer, produire des preuves et acceder a plus
              d autonomie professionnelle.
            </p>
            <div className="hero-actions">
              <a className="button button--orange" href="#contact">Rejoindre le programme</a>
              <a className="button button--light" href="#villes">Decouvrir les villes</a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Parcours Digital Hero">
            <div className="hero-panel__top">
              <span>Parcours</span>
              <strong>Launch path</strong>
            </div>
            <div className="launch-line" />
            <div className="mission-card mission-card--dark">
              <small>Promesse</small>
              <strong>Du talent local au heros digital</strong>
            </div>
            <div className="mission-grid">
              <div>
                <strong>4</strong>
                <span>fondations</span>
              </div>
              <div>
                <strong>6</strong>
                <span>chapitres</span>
              </div>
            </div>
            <div className="brand-emblem">
              <BrandMark />
              <span>Formation digitale, IA et employabilite numerique.</span>
            </div>
          </aside>
        </section>

        <section id="programme" className="content-band content-band--light">
          <SectionHeading
            eyebrow="Programme"
            title="Une structure serieuse, pratique et facile a deployer"
            text="Digital Hero n est pas une ecole traditionnelle. C est un cadre d activation des talents: apprendre, pratiquer, produire et partager."
          />
          <div className="proof-grid">
            {proofItems.map((item) => (
              <article className="proof-card" key={item}>{item}</article>
            ))}
          </div>
        </section>

        <section id="parcours" className="content-band content-band--navy">
          <SectionHeading
            eyebrow="Chemin"
            title="Du potentiel a la competence"
            text="Un parcours lisible pour les jeunes, les campus, les partenaires et les formateurs."
            inverse
          />
          <div className="pathway-grid">
            {pathway.map((item) => (
              <article className="pathway-card" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="villes" className="content-band content-band--white">
          <SectionHeading
            eyebrow="Chapitres territoriaux"
            title="DIGITAL HERO reste la marque dominante"
            text="Chaque ville est secondaire: la force du systeme vient de la coherence nationale et de l energie locale."
          />
          <div className="chapter-grid">
            {chapters.map((city) => (
              <article className="chapter-card" key={city}>
                <small>Digital Hero -</small>
                <strong>{city}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="cta-section">
          <div>
            <p className="eyebrow">Activation</p>
            <h2>Construire la prochaine cohorte Digital Hero</h2>
            <p>
              Le site doit servir les inscriptions, les ateliers, les partenariats et les campus tours sans diluer
              l identite Digital Hero.
            </p>
          </div>
          <a className="button button--orange" href="mailto:contact@digitalhero.pro">Lancer le contact</a>
        </section>
      </main>

      <footer className="site-footer">
        <strong>DIGITAL HERO</strong>
        <span>digitalhero.pro - Du talent local au heros digital</span>
      </footer>
    </div>
  );
}
