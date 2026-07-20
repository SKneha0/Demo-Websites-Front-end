import Navbar from "@/components/home/Navbar";
import Header from "@/components/home/Header";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PropertyTypes from "@/components/home/PropertyTypes";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";
import PropertyAgents from "@/components/home/propertiesagent";
import Footer from "@/components/home/Footer";
import ScrollToTop from "@/components/home/scrooltotop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <PropertyTypes />
      <WhyChooseUs />
      <CtaBanner />
      <FeaturedProperties />
      <PropertyAgents/>
      <Testimonials />
      <Footer/>
      <ScrollToTop />
    </main>
  );
}