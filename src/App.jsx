import Jump from 'react-reveal/Jump';
import Rotate from 'react-reveal/Rotate';
import styles from "./style";
import { bgVidNum } from "./assets";
import { Billing, Business, CardDeal, Clients, CTA, CTA2, Footer, Navbar, Testimonials, Hero, Contact } from "./components";

const App = () => (
  <div className="app bg-primary w-full overflow-hidden">

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
        {/*  <Business />
        <Billing />
        <CardDeal /> */}
        <Jump>
          <Testimonials />
        </Jump>

        {/*   <Clients /> */}
        <CTA />
        <CTA2 />
        <Rotate right>
          <Contact />
        </Rotate>


        {/*  <Footer /> */}
      </div>
    </div>

  </div>
);

export default App;
