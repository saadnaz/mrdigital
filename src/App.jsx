import Jump  from 'react-reveal/Jump';
import styles from "./style";
import { bgVidNum } from "./assets";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* <video autoPlay loop muted id='video'>
      <source src={bgVidNum} type="video/mp4" />
    </video> */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        {/*  <Business />
        <Billing />
        <CardDeal /> */}
        <Jump>
          <Testimonials />
        </Jump>

        {/*   <Clients /> */}
        <CTA />
        {/*  <Footer /> */}
      </div>
    </div>
  </div>
);

export default App;
