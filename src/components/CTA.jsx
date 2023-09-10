import styles from "../style";
import Button from "./Button";
import { bgservices } from "../assets";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className={`flex-1 flex flex-col`}>
      <h1 id="Services" className="text-5xl text-green-600 mb-5">Nos services</h1>
      <h2 className={styles.heading1}>Transformation numérique</h2>
      <p className={`${styles.paragraph} mt-5 mb-5`}>
        La transformation numérique représente une opportunité axée sur l'innovation,
        visant à aider les organisations, qu'elles soient du secteur privé ou public,
        à créer de nouveaux modèles et processus, tout en les incitant à repenser leurs activités
        dans un environnement en constante évolution. Nos services de conseil
        en transformation numérique s'inscrivent dans l'écosystème de l'entité concernée
        et englobent tous les aspects, qu'il s'agisse des interactions avec les parties prenantes,
        des processus internes, des modèles opérationnels, des canaux de distribution, etc.
      </p>
      <h2 className={styles.heading1}>Cybersécurité</h2>
      <p className={`${styles.paragraph} mt-5 mb-5`}>
        La cybersécurité est essentielle pour protéger les actifs, la réputation et la viabilité d'une entreprise
        ou d'une organisation dans un paysage numérique de plus en plus complexe et dangereux. Investir dans des
        mesures de cybersécurité solides est une priorité pour assurer la continuité des activités et la confiance
        des parties prenantes.
      </p>
      <h2 className={styles.heading1}>Stratégie numérique</h2>
      <p className={`${styles.paragraph} mt-5 mb-5`}>
        une stratégie numérique est essentielle pour capitaliser sur les opportunités
        offertes par le monde numérique en constante évolution, pour répondre aux attentes
        des clients modernes et pour rester compétitif sur le marché.
        Elle permet également de faire face aux défis et aux crises de manière plus efficace.
      </p>
      {/* <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={bgservices} alt="" />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
      </a> */}
      <h2 className={styles.heading1}>Gestion de projet agile​</h2>
      <p className={`${styles.paragraph} mt-5 mb-5`}>
        Gérer un projet en utilisant une approche agile permet d'obtenir une meilleure flexibilité, une meilleure qualité,
        une meilleure implication des parties prenantes et une meilleure réactivité aux changements, ce qui en fait une méthode
        de gestion de projet attrayante pour de nombreuses organisations,
        en particulier dans des environnements où l'incertitude et la complexité sont élevées.
      </p>
      <h2 className={styles.heading1}>Accompagnement dans la gouvernance d’un SI​</h2>
      <p className={`${styles.paragraph} mt-5 mb-5`}>
        Une gouvernance efficace du système d'information nécessite un engagement continu de la direction,
        une communication ouverte et une approche holistique qui prend en compte la sécurité,
        la conformité, la gestion des risques et l'alignement sur les objectifs stratégiques de l'organisation
      </p>
      <h2 className={styles.heading1}>Architecture réseaux sécurisée​​</h2>
      <p className={`${styles.paragraph} mt-5 mb-5`}>
        Une architecture réseau sécurisée doit être conçue en tenant compte de la défense en profondeur, ce qui signifie
        que plusieurs couches de sécurité sont mises en place pour protéger le réseau. Il est également essentiel
        de rester à jour avec les dernières menaces et les meilleures pratiques
        de sécurité pour maintenir un réseau sécurisé dans un paysage de cybermenaces en constante évolution
      </p>
      <h2 className={styles.heading1}>Accompagnement dans la Migration vers le cloud​​</h2>
      <p className={`${styles.paragraph} mt-5 mb-5`}>
        La migration vers le cloud est un processus complexe qui nécessite une planification minutieuse, une gestion de projet
        rigoureuse et une collaboration étroite entre les équipes informatiques et métier. En suivant ces étapes et
        en étant attentif aux besoins spécifiques de votre organisation,
        vous pouvez maximiser les avantages du cloud tout en minimisant les risques potentiels.
      </p>
      <h2 className={styles.heading1}>Développement de solutions sur mesure (web, mobile, client lourd)​</h2>
      <p className={`${styles.paragraph} mt-5 mb-5`}>
        Qui dit développement sur mesure dit : Adaptation aux besoins spécifiques,
        Optimisation de l'efficacité, Meilleure expérience utilisateur, Sécurité accrue, Évolutivité, Propriété intellectuelle,
        Intégration avec des systèmes existants, Indépendance vis-à-vis des fournisseurs, Conformité réglementaire, Avantage concurrentiel      </p>
      <h2 className={styles.heading1}>Exploitation des solutions offertes par l'intelligence artificielle​</h2>
      <p className={`${styles.paragraph} mt-5 mb-5`}>
        Le machine learning offre un potentiel significatif pour améliorer les opérations, prendre des décisions plus éclairées
        et innover dans divers domaines. Cependant, il est important de noter que le succès de l'exploitation
        des solutions de machine learning dépend de la qualité des données,
        de la conception des modèles et de la compréhension des besoins spécifiques de l'entreprise.
      </p>
      <h2 className={styles.heading1}>...​</h2>
      <p className={`${styles.paragraph} mt-5 mb-5`}>
      </p>
    </div>











    {/* <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div> */}
  </section>
);

export default CTA;
