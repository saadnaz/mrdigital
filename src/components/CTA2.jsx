import styles from "../style";
import Button from "./Button";
import { bgVidNum } from "../assets"

const CTA2 = () => (
  <section className={`${styles.flexCenter} sm:flex-row videoparent m-5`}>
    <div className="videoparent">
      <video autoPlay loop muted id='video' className="rounded-[20px] box-shadow">
        <source src={bgVidNum} type="video/mp4" />
      </video>
      <p className={`upVideo ${styles.paragraph} text-xl md:text-2xl lg:text-3xl xl:text-5xl `}>
        mrDigital, votre cabinet de conseil
        en Cybersécurité et Stratégie Digitale

      </p>
    </div>


  </section>
);

export default CTA2;
