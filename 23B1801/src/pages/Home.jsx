import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Doctors from "../components/home/Doctors";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";

import Footer from "../components/common/Footer";

function Home() {
  return (
    <>
      <Hero />

      <Services />

      <WhyChooseUs />

      <Doctors />

      <Stats />

      <Testimonials />

      <CTA />

      <Footer />
    </>
  );
}

export default Home;