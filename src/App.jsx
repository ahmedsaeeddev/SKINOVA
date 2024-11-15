import Navbar from './components/Navbar.jsx';
import AboutUs from './components/AboutUs.jsx';
import OurImpact from './components/Impact.jsx';
import VisionAndValues from './components/Visions.jsx';
import CustomDesigns from './components/Customs.jsx';
import FAQSection from './components/Faqs.jsx';
import Footer from './components/Footer.jsx';
import './App.css'

const App = () => {
  return (
    <div className="">
      <Navbar />

      {/* Each component wrapped in a section with a unique id */}
      <section id="about">
        {/* <div className="about"> */}
        <AboutUs />
        {/* </div> */}
      </section>
      <section id="impact">
        {/* <div className="impact"> */}
        <OurImpact />
        {/* </div> */}
      </section>
      <section id="vision-values">
        <VisionAndValues />
      </section>
      <section id="custom-designs">
        <CustomDesigns />
      </section>
      <section id="faq">
        <FAQSection />
      </section>

      <Footer />
    </div>
  );
};

export default App;
