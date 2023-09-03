import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading1}>Transformation numérique</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        La transformation numérique représente une opportunité axée sur l'innovation,
        visant à aider les organisations, qu'elles soient du secteur privé ou public,
        à créer de nouveaux modèles et processus, tout en les incitant à repenser leurs activités
        dans un environnement en constante évolution. Nos services de conseil
        en transformation numérique s'inscrivent dans l'écosystème de l'entité concernée
        et englobent tous les aspects, qu'il s'agisse des interactions avec les parties prenantes,
        des processus internes, des modèles opérationnels, des canaux de distribution, etc.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
