import { Rotate } from 'react-reveal';
import styles from "../style";
import { discount, bgVidNum, bgImgNum } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      <div className={`flex-1 ${styles.flexStart} flex-col ${styles.paddingX}`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Mettez-vous à l'heure <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Du numérique</span>{" "}
          </h1>
          <Rotate>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </Rotate>

          {/* <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer w-full">
            <a href="#" class="block w-full h-full">
              <img alt="bureau" src={desk} class="object-cover w-full max-h-40" />
              <div class="w-full p-4 bg-white dark:bg-gray-800">
                <p class="font-medium text-indigo-500 text-md">
                </p>
                <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                  Concevons ensemble !
                </p>
                <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                  dgrgrfg
                </p>
              </div>
            </a>
          </div> */}
        </div>




      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={bgImgNum} rounded className="rounded-[20px] sm:w-5/6  lg:w-4/5 xl:w-full xl:h-full relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
