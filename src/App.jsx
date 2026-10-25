import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import ProductSection from "./Components/ProductSection/ProductSection";
import ServicesSection from "./Components/ServicesSection/ServicesSection";
import IndustriesSection from "./Components/IndustriesSection/IndustriesSection";
import WhyChooseUsSection from "./Components/WhyChooseUsSection/WhyChooseUsSection";
import ContactSection from "./Components/ContactSection/ContactSection";
import BrandsSection from "./Components/BrandsSection/BrandsSection";
import BlogSection from "./Components/BlogSection/BlogSection";
import Footer from "./Components/Footer/Footer";
import WhatsAppButton from "./Components/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <ContactSection />
      <BrandsSection />
      <BlogSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;