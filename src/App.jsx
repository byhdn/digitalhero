const problemCards = [
  "Le digital avance vite, mais beaucoup de talents n'ont pas encore de methode claire pour s'en servir.",
  "Un smartphone, des idees et de la motivation ne suffisent pas sans cadre, pratique et accompagnement.",
  "L'IA change deja l'apprentissage, le travail, l'entrepreneuriat et la creation de contenu.",
];

const promiseCards = [
  {
    title: 'Apprendre plus vite',
    text: "Apprendre plus vite avec des outils numeriques et IA utiles au quotidien.",
  },
  {
    title: 'Mieux se rendre visible',
    text: "Ameliorer son employabilite avec un portfolio visible, un CV mieux structure et une presence digitale claire.",
  },
  {
    title: "Passer a l'action",
    text: 'Creer, communiquer et entreprendre avec des methodes simples, concretes et locales.',
  },
];

const audiences = [
  'Etudiants qui veulent se demarquer.',
  "Demandeurs d'emploi qui veulent renforcer leur profil.",
  'Jeunes entrepreneurs qui veulent mieux vendre et mieux s organiser.',
  'Creatifs, associations et talents qui veulent produire plus vite et mieux.',
];

const pathway = [
  {
    step: '01',
    title: 'Comprendre',
    text: "Decouvrir les bases du digital, de l'IA, des outils numeriques et des opportunites qui comptent vraiment.",
  },
  {
    step: '02',
    title: 'Pratiquer',
    text: 'Creer des contenus, utiliser des prompts utiles, ameliorer son CV, organiser son travail et structurer un projet.',
  },
  {
    step: '03',
    title: 'Produire',
    text: 'Construire un mini-portfolio, lancer une page simple et presenter un projet de facon claire et credible.',
  },
  {
    step: '04',
    title: 'Saisir les opportunites',
    text: 'Decouvrir des missions, concours, stages, formations, challenges et opportunites locales ou en ligne.',
  },
];

const cities = ['Korhogo', 'Abidjan', 'Yamoussoukro', 'Bouake', 'Sakassou', 'Autres villes a venir'];
const chapters = ['Digital Hero Korhogo', 'Digital Hero Abidjan', 'Digital Hero Yamoussoukro', 'Digital Hero Bouake', 'Digital Hero Sakassou'];

const communityUses = [
  'Recevoir les annonces de lancement.',
  'Decouvrir des outils, ressources et astuces utiles.',
  "Rencontrer d'autres talents motives par le digital et l'IA.",
  'Se preparer aux premieres cohortes.',
];

const communityResources = [
  "Prompts utiles pour mieux apprendre avec l'IA.",
  'Mini-guides pour ameliorer ton profil digital.',
  'Conseils pour utiliser ton telephone comme outil de travail.',
  'Annonces sur les cohortes Digital Hero.',
  'Challenges, ateliers et sessions live.',
];

const conversionSteps = [
  "La personne comprend l'offre en quelques secondes.",
  "Elle rejoint la liste d'attente.",
  'Elle est dirigee vers la communaute.',
  'Ses donnees sont pretes pour une segmentation par ville.',
];

const faqs = [
  {
    question: 'Le programme est-il deja ouvert ?',
    answer: "Pas encore. La liste d'attente permet d'etre informe en priorite au lancement.",
  },
  {
    question: 'Est-ce gratuit ?',
    answer: 'Les modalites seront annoncees selon les villes, les partenaires et les formats. Certaines ressources communautaires pourront etre gratuites.',
  },
  {
    question: 'Faut-il deja savoir coder ?',
    answer: "Non. Digital Hero commence par les usages utiles du digital et de l'IA avant d'aller vers des competences plus avancees.",
  },
  {
    question: 'Pourquoi rejoindre la communaute ?',
    answer: "Pour recevoir les annonces, ressources, dates, opportunites et premiers contenus avant l'ouverture officielle.",
  },
];

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

function BulletList({ items }) {
  return (
    <ul className="clean-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
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
            <small>Programme d'impact HDN</small>
          </span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#programme">Programme</a>
          <a href="#parcours">Parcours</a>
          <a href="#communaute">Communaute</a>
          <a href="#waitlist">Liste d'attente</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button button--dark" href="#waitlist">Rejoindre</a>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="hero-kicker"><span /> Programme d'impact de Holistic Digital Nation</p>
            <h1>Deviens un Digital Hero.</h1>
            <p className="hero-lead">
              Apprends a utiliser le digital et l'intelligence artificielle pour apprendre, travailler,
              entreprendre, creer et saisir de nouvelles opportunites.
            </p>
            <p className="hero-note">
              Digital Hero est un programme d'apprentissage et d'activation locale pour les jeunes, etudiants,
              demandeurs d'emploi, entrepreneurs et talents qui veulent transformer leur telephone, leur ordinateur
              et les outils IA en veritables leviers d'action.
            </p>
            <div className="hero-actions">
              <a className="button button--orange" href="#waitlist">Rejoindre la liste d'attente</a>
              <a className="button button--light" href="#communaute">Entrer dans la communaute</a>
            </div>
            <div className="hero-chips" aria-label="Informations de lancement">
              <span>Premieres cohortes bientot ouvertes</span>
              <span>Places limitees par ville</span>
              <span>campus.digitalhero.pro en support</span>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Vision Digital Hero">
            <div className="hero-panel__top">
              <span>Vision claire</span>
              <strong>Action locale</strong>
            </div>
            <p className="panel-lead">Un cadre d'apprentissage utile, local et oriente action.</p>
            <div className="stat-stack">
              <div>
                <strong>04</strong>
                <span>etapes: comprendre, pratiquer, produire, saisir les opportunites</span>
              </div>
              <div>
                <strong>05+</strong>
                <span>villes pretes a accueillir des declinaisons locales</span>
              </div>
              <div>
                <strong>1</strong>
                <span>communaute pour capter, informer et mobiliser les talents</span>
              </div>
            </div>
            <div className="mission-card mission-card--dark">
              <small>Mission</small>
              <strong>Transformer les talents locaux en acteurs capables d'apprendre, travailler, entreprendre et creer avec le digital.</strong>
            </div>
            <div className="tag-grid">
              <span>IA utile au quotidien</span>
              <span>Employabilite numerique</span>
              <span>Creation de contenu</span>
              <span>Communaute et opportunites</span>
            </div>
          </aside>
        </section>

        <section id="programme" className="content-band content-band--light">
          <SectionHeading
            eyebrow="Le probleme"
            title="Beaucoup de talents ont le potentiel. Il leur manque le bon cadre."
            text="Le digital avance vite. L'IA transforme deja le travail, les metiers, la creation, l'entrepreneuriat et l'apprentissage. Pourtant, beaucoup de jeunes et de porteurs de projets ne savent pas encore comment utiliser ces outils de maniere concrete."
          />
          <div className="proof-grid proof-grid--three">
            {problemCards.map((item) => (
              <article className="proof-card" key={item}>{item}</article>
            ))}
          </div>
        </section>

        <section className="content-band content-band--white">
          <SectionHeading
            eyebrow="La promesse"
            title="Digital Hero transforme les talents locaux en acteurs du digital."
            text="Le programme aide les participants a passer de la simple utilisation des reseaux sociaux a une utilisation productive du digital: apprendre plus vite, mieux communiquer, creer du contenu, utiliser l'IA, structurer un projet, ameliorer son employabilite et construire un portfolio visible."
          />
          <div className="promise-grid">
            {promiseCards.map((item) => (
              <article className="promise-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="signature-line">Du talent local au heros digital.</p>
        </section>

        <section className="content-band content-band--light">
          <SectionHeading
            eyebrow="Pour qui ?"
            title="Digital Hero est fait pour toi si tu veux avancer avec le digital."
            text="Le programme s'adresse aux jeunes, etudiants, demandeurs d'emploi, entrepreneurs, creatifs, associations locales et talents qui veulent mieux utiliser le digital et l'IA."
          />
          <div className="audience-grid">
            {audiences.map((item) => (
              <article className="audience-card" key={item}>{item}</article>
            ))}
          </div>
          <a className="button button--orange section-action" href="#waitlist">Je veux etre informe du lancement</a>
        </section>

        <section id="parcours" className="content-band content-band--navy">
          <SectionHeading
            eyebrow="Parcours"
            title="Ce que tu vas apprendre progressivement"
            text="Le programme commence par les usages utiles du digital et de l'IA avant de monter en puissance vers la production, le portfolio et les opportunites."
            inverse
          />
          <div className="pathway-grid">
            {pathway.map((item) => (
              <article className="pathway-card" key={item.step}>
                <span>Bloc {item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="villes" className="content-band content-band--white deployment-grid">
          <div>
            <SectionHeading
              eyebrow="Deploiement"
              title="Un programme qui peut se deployer ville par ville."
              text="Digital Hero n'est pas limite a une seule ville. Le programme peut etre decline localement selon les besoins des territoires."
            />
          </div>
          <div className="city-panel">
            <h3>Villes prioritaires</h3>
            <div className="city-tags">
              {cities.map((city) => <span key={city}>{city}</span>)}
            </div>
            <h3>Declinaisons</h3>
            <div className="chapter-grid chapter-grid--compact">
              {chapters.map((chapter) => (
                <article className="chapter-card" key={chapter}>
                  <small>Digital Hero</small>
                  <strong>{chapter.replace('Digital Hero ', '')}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="communaute" className="content-band content-band--light community-section">
          <SectionHeading
            eyebrow="Communaute"
            title="La communaute commence maintenant."
            text="Avant meme le lancement officiel du programme, la communaute Digital Hero permet de recevoir des ressources, poser des questions, decouvrir des outils et suivre les annonces."
          />
          <div className="community-grid">
            <article className="list-panel">
              <h3>A quoi elle sert</h3>
              <BulletList items={communityUses} />
            </article>
            <article className="list-panel list-panel--orange">
              <h3>Ce que tu recevras en attendant</h3>
              <BulletList items={communityResources} />
              <a className="button button--orange" href="#waitlist">Entrer dans la communaute Digital Hero</a>
            </article>
          </div>
        </section>

        <section id="waitlist" className="cta-section waitlist-section">
          <div>
            <p className="eyebrow">Pourquoi maintenant</p>
            <h2>Le cadre arrive avant les cohortes.</h2>
            <p>
              On installe la vision, on collecte les personnes interessees et on construit la communaute avant
              l'ouverture officielle des premieres cohortes.
            </p>
            <ol className="conversion-list">
              {conversionSteps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>
          <form className="waitlist-form" action="mailto:contact@digitalhero.pro" method="post" encType="text/plain">
            <h3>Rejoins la premiere vague Digital Hero</h3>
            <p>Inscris-toi pour recevoir les annonces de lancement, les ressources gratuites et les premieres invitations communautaires.</p>
            <div className="form-grid">
              <label>Prenom<input name="prenom" required /></label>
              <label>Nom<input name="nom" required /></label>
              <label>Ville<input name="ville" required /></label>
              <label>Pays<input name="pays" defaultValue="Cote d'Ivoire" required /></label>
              <label>WhatsApp<input name="whatsapp" required /></label>
              <label>Email<input name="email" type="email" required /></label>
              <label>Profil
                <select name="profil" defaultValue="Etudiant">
                  <option>Etudiant</option>
                  <option>Demandeur d'emploi</option>
                  <option>Entrepreneur</option>
                  <option>Creatif</option>
                  <option>Association</option>
                </select>
              </label>
              <label>Interet principal
                <select name="interet" defaultValue="IA">
                  <option>IA</option>
                  <option>Employabilite</option>
                  <option>Creation de contenu</option>
                  <option>Entrepreneuriat</option>
                  <option>Portfolio</option>
                </select>
              </label>
            </div>
            <label className="checkbox-line">
              <input type="checkbox" name="consentement" required />
              <span>J'accepte de recevoir les informations liees a Digital Hero, y compris les ressources, annonces et invitations communautaires.</span>
            </label>
            <button className="button button--orange" type="submit">Je rejoins la liste d'attente</button>
            <small>Reponse rapide. Aucune date de lancement n'est promise tant que les premieres cohortes ne sont pas ouvertes.</small>
          </form>
        </section>

        <section id="faq" className="content-band content-band--white">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions frequentes"
            text="Reponses rapides aux points les plus importants avant l'ouverture."
          />
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <strong>DIGITAL HERO</strong>
        <span>Programme d'impact porte par Holistic Digital Nation. Campus et ressources: campus.digitalhero.pro.</span>
        <nav aria-label="Liens secondaires">
          <a href="#faq">Confidentialite</a>
          <a href="#communaute">Communaute</a>
          <a href="#top">Digitalhero.pro</a>
        </nav>
      </footer>
    </div>
  );
}
