import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ShieldCheck, ChevronRight, Calculator, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import logoImg from '../../assets/images/logo.jpg';
import './Navbar.css';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'About & ZED', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Announcement Bar - Full Width Stretched */}
      <div className="top-banner">
        <div className="top-banner-content">
          <div className="top-banner-left">
            <span className="badge-glow-pill">
              <span className="pulse-dot"></span>
              UDYAM: {COMPANY_INFO.registrations.udyam}
            </span>
            <span className="banner-separator">•</span>
            <span className="top-banner-sub">IS 15477 : 2019 Certified</span>
            <span className="banner-separator">•</span>
            <span className="top-banner-tamil">தரம்! நிரந்தரம்!</span>
          </div>
          <div className="top-banner-right">
            <a href={`tel:${COMPANY_INFO.phones[0].link}`} className="top-call-link">
              <Phone size={13} />
              <span>Plant Orders: {COMPANY_INFO.phones[0].number}</span>
            </a>
            <span className="banner-separator">•</span>
            <span className="top-timing">Mon - Sat 8:30 AM - 7:30 PM</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header - Full Width Stretched */}
      <header className={`main-navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Brand Logo with Official Image */}
          <a href="#home" className="nav-brand" onClick={(e) => handleLinkClick(e, '#home')}>
            <img
              src={logoImg}
              alt="Karur Wallcare Industries Pvt. Ltd."
              className="brand-logo-img"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-item-link"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="nav-actions">
            <a
              href="#calculator"
              className="btn-calc-pill"
              onClick={(e) => handleLinkClick(e, '#calculator')}
              title="Calculate adhesive bags required"
            >
              <Calculator size={16} />
              <span>Tile Calculator</span>
            </a>

            <button
              className="btn btn-primary btn-sm btn-quote-trigger"
              onClick={onOpenQuote}
            >
              <span>Get a Quote</span>
              <ChevronRight size={15} />
            </button>

            {/* Mobile menu toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer animate-slide-down">
            <div className="mobile-nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-nav-item"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={16} />
                </a>
              ))}
            </div>

            <div className="mobile-drawer-footer">
              <div className="mobile-quick-call">
                <Phone size={18} className="text-blue" />
                <div>
                  <div className="mobile-call-label">Quick Order / Dealer Desk</div>
                  <a href={`tel:${COMPANY_INFO.phones[0].link}`} className="mobile-call-number">
                    {COMPANY_INFO.phones[0].number}
                  </a>
                </div>
              </div>
              <button
                className="btn btn-primary w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
              >
                Request Quotation / Price List
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
