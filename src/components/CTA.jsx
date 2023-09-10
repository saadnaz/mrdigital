import styles from "../style";
import Button from "./Button";
import { bgservices } from "../assets";
console.log('fdgfg', bgservices);

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
      <h2 className={styles.heading1}>Agilité</h2>
      <p className={`${styles.paragraph} mt-5 mb-5`}>
      </p>
      <h2 className={styles.heading1}>Accompagnement dans la gouvernance d’un SI​</h2>
      <p className={`${styles.paragraph} mt-5 mb-5`}>
      </p>
      <h2 className={styles.heading1}>Architecture réseaux sécurisée​​</h2>
      <p className={`${styles.paragraph} mt-5 mb-5`}>
      </p>
      <h2 className={styles.heading1}>Accompagnement dans la Migration vers le cloud​​</h2>
      <p className={`${styles.paragraph} mt-5 mb-5`}>
      </p>
      <h2 className={styles.heading1}>Développement de solutions sur mesure (web, mobile, client lourd)​</h2>
      <p className={`${styles.paragraph} mt-5 mb-5`}>
      </p>
      <h2 className={styles.heading1}>Exploitation des solutions Machine Learning​</h2>
      <p className={`${styles.paragraph} mt-5 mb-5`}>
      </p>
      <h2 className={styles.heading1}>...​</h2>
      <p className={`${styles.paragraph} mt-5 mb-5`}>
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
