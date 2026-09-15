import React, { useState } from 'react';
import Navbar from './components/common/Navbar';
import HeroSection from './components/hero/HeroSection';
import WhyKarurWallcare from './components/usps/WhyKarurWallcare';
import ProductsSection from './components/products/ProductsSection';
import AdhesiveCalculator from './components/calculator/AdhesiveCalculator';
import ApplicationSteps from './components/guide/ApplicationSteps';
import AboutSection from './components/about/AboutSection';
import EnquirySection from './components/enquiry/EnquirySection';
import Footer from './components/common/Footer';
import FloatingContact from './components/common/FloatingContact';
import QuoteModal from './components/enquiry/QuoteModal';

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('K Tile Bond X1 & X2');

  const handleOpenQuote = (productName) => {
    if (typeof productName === 'string') {
      setSelectedProduct(productName);
    } else {
      setSelectedProduct('K Tile Bond X1 & X2');
    }
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
  };

  return (
    <div className="app-layout">
      {/* Navigation Header */}
      <Navbar onOpenQuote={() => handleOpenQuote('K Tile Bond X1 & X2')} />

      {/* Main Page Sections */}
      <main>
        {/* Hero Section with Live Stats & Badges */}
        <HeroSection onOpenQuote={() => handleOpenQuote('Dealer / Wholesale Pricing')} />

        {/* Why Karur Wallcare: 4 Pillars & Certifications */}
        <WhyKarurWallcare />

        {/* Products Showcase (X1 & X2) + Specs Comparison Table */}
        <ProductsSection onOpenQuote={handleOpenQuote} />

        {/* Interactive Tile Adhesive Quantity Calculator */}
        <AdhesiveCalculator onOpenQuote={handleOpenQuote} />

        {/* 4-Step Professional Application Guide */}
        <ApplicationSteps />

        {/* About Karur Wallcare & Munnur Manufacturing Unit */}
        <AboutSection onOpenQuote={handleOpenQuote} />

        {/* Official Contact & Dealership Enquiry Form */}
        <EnquirySection />
      </main>

      {/* Site Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Quick Action Floating Widget (WhatsApp, Call, Calculator) */}
      <FloatingContact />

      {/* Quick Quote Modal Popup */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        defaultProduct={selectedProduct}
      />
    </div>
  );
}

export default App;
