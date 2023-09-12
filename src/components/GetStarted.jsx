import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[150px] h-[150px] md:ml-16 rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <a className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`} href="#contact">
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Commencez</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Maintenant</span>
      </p>
    </a>
  </div>
);

export default GetStarted;
