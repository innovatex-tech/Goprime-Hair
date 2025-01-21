import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import TrustSection from './components/TrustSection'
import ServicesGrid from './components/ServicesGrid'
import WhyChooseUs from './components/WhyChooseUs'
import ProcessSection from './components/ProcessSection'
import ResultsGallery from './components/ResultsGallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Blogs from './pages/Blogs';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <TrustSection />
              <ServicesGrid />
              <WhyChooseUs />
              <ProcessSection />
              <ResultsGallery />
              <Testimonials />
              <FAQ />
              <ContactSection />
              <Footer />
              <FloatingButtons />
            </>
          } />
          <Route path="/blogs" element={
            <>
              <Blogs />
              <Footer />
              <FloatingButtons />
            </>
          } />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App
