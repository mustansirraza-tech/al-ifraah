import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSections";
import HighlightsSection from "../components/HighlightsSection";
import ProcessSection from "../components/ProcessSection";
import ServicesSection from "../components/ServicesSection";
import PackagesSection from "../components/PackagesSection";
// import StatsCounter from "../components/StatsCounter";
import TrustStrip from "../components/TrustStrip";
import UpcomingDepartures from "../components/UpcomingDepartures";
import WhyChooseUs from "../components/WhyChooseUs";
import SpiritualQuoteSection from "../components/SpiritualQuoteSection";
import GalleryPreview from "../components/GalleryPreview";
import GoogleReviewsSection from "../components/GoogleReviewsSection";
import FAQSection from "../components/FAQSection";
import FinalCTASection from "../components/FinalCTASection";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <AboutSection/>

      
      {/* What we do & What's coming up */}
      <ServicesSection/>
      <UpcomingDepartures/>
      <PackagesSection/>
      <TrustStrip/>
      
      {/* Who we are & Why trust us */}
      <WhyChooseUs/>
      <HighlightsSection/>
      
      {/* How it works */}
      <ProcessSection/>
      
      {/* Social Proof & Visuals */}
      <GalleryPreview/>
      <SpiritualQuoteSection />
      <GoogleReviewsSection/>
      
      {/* Objections & Final Push */}
      <FAQSection/>
      <FinalCTASection/>
      <Footer/>
    </div>
  )
}

export default Home;