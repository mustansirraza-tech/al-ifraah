import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import UmrahPackages from "./pages/UmrahPackages";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import HajjPackagesPage from "./pages/services/HajjPackagesPage";
import BaghdadZiyaratPage from "./pages/services/BaghdadZiyaratPage";
import VisaAssistancePage from "./pages/services/VisaAssistancePage";
import HotelTransportPage from "./pages/services/HotelTransportPage";
import WhatsAppFloat from "./components/WhatsAppFloat";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <WhatsAppFloat />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/umrah-packages" element={<UmrahPackages />} />
        <Route path="/hajj-packages" element={<HajjPackagesPage />} />
        <Route path="/baghdad-ziyarat" element={<BaghdadZiyaratPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/hajj-packages" element={<HajjPackagesPage />} />
        <Route path="/services/umrah-packages" element={<UmrahPackages />} />
        <Route path="/services/baghdad-ziyarat" element={<BaghdadZiyaratPage />} />
        <Route path="/services/visa-assistance" element={<VisaAssistancePage />} />
        <Route path="/services/hotel-transport" element={<HotelTransportPage />} />
      </Routes>
    </Router>
  )
}

export default App
