import React from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import logoImg from '../../assets/images/logo.jpg';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp, Award } from 'lucide-react';
import './Footer.css';

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: "Facebook",
      url: "#", // User will provide link
      color: "#1877F2",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      url: COMPANY_INFO.socials.instagram,
      color: "#E4405F",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "#", // User will provide link
      color: "#0A66C2",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "#", // User will provide link
      color: "#FF0000",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: "X (Twitter)",
      url: "#", // User will provide link
      color: "#ffffff",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: "WhatsApp",
      url: `https://wa.me/${COMPANY_INFO.whatsappNumber}`,
      color: "#25D366",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="site-footer">
      <div className="footer-container-fluid">

        {/* Main Footer Columns - Full Width Stretched */}
        <div className="footer-main-grid">
          {/* Brand & Mission */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-lockup">
              <img
                src={logoImg}
                alt="Karur Wallcare Industries"
                className="footer-logo-img"
              />
            </div>
            <p className="footer-about-p">
              Manufacturers of K Tile Bond X1, X2, and X3 polymer-modified adhesives, conforming to IS 15477 : 2019. 
              Supplying dealers, residential projects, and commercial contractors throughout Tamil Nadu and neighboring states.
            </p>
            <div className="footer-badges-row">
              <span className="footer-cert-pill">IS 15477 : 2019</span>
              <span className="footer-cert-pill">ZED Bronze MSME</span>
              <span className="footer-cert-pill">UDYAM Regd.</span>
            </div>

            {/* Social Media Links Group */}
            <div className="footer-social-wrapper">
              <span className="social-group-label">Connect With Us:</span>
              <div className="social-icons-strip">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">K Tile Bond X1 & X2</a></li>
              <li><a href="#specifications">Technical Specifications</a></li>
              <li><a href="#calculator">Adhesive Bag Calculator</a></li>
              <li><a href="#application-guide">How to Apply (4 Steps)</a></li>
              <li><a href="#why-us">Why Karur Wallcare</a></li>
              <li><a href="#about">About & Munnur Plant</a></li>
              <li><a href="#contact">Contact & Enquiry</a></li>
            </ul>
          </div>

          {/* Key Product Offerings */}
          <div className="footer-col">
            <h4 className="footer-heading">Product Lines</h4>
            <div className="footer-products-list">
              <div className="footer-prod-item">
                <div className="footer-prod-name">K Tile Bond X1</div>
                <div className="footer-prod-sub">IS 15477 Type I · Ceramic Floors & Walls · 20 kg</div>
              </div>
              <div className="footer-prod-item">
                <div className="footer-prod-name">K Tile Bond X2</div>
                <div className="footer-prod-sub">IS 15477 Type II · Vitrified & Wet Areas · 20 kg</div>
              </div>
              <div className="footer-prod-item">
                <div className="footer-prod-name">Premium-Grade Aggregate</div>
                <div className="footer-prod-sub">Kiln processed, washed & mechanical grade</div>
              </div>
            </div>
          </div>

          {/* Contact Details & Addresses */}
          <div className="footer-col">
            <h4 className="footer-heading">Reach Karur Headquarters</h4>
            <div className="footer-contact-items">
              <div className="footer-c-item">
                <MapPin size={16} className="text-blue" />
                <span>
                  <strong>Office:</strong> {COMPANY_INFO.registeredOffice.address}, {COMPANY_INFO.registeredOffice.city} – {COMPANY_INFO.registeredOffice.pincode}
                </span>
              </div>
              <div className="footer-c-item">
                <MapPin size={16} className="text-blue" />
                <span>
                  <strong>Factory:</strong> {COMPANY_INFO.factoryUnit.address}, {COMPANY_INFO.factoryUnit.taluk}, {COMPANY_INFO.factoryUnit.city} – {COMPANY_INFO.factoryUnit.pincode}
                </span>
              </div>
              <div className="footer-c-item">
                <Phone size={16} className="text-blue" />
                <div>
                  <a href={`tel:${COMPANY_INFO.phones[0].link}`}>{COMPANY_INFO.phones[0].number}</a> / <a href={`tel:${COMPANY_INFO.phones[1].link}`}>{COMPANY_INFO.phones[1].number}</a>
                </div>
              </div>
              <div className="footer-c-item">
                <Mail size={16} className="text-blue" />
                <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar - Full Width Stretched */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <div>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</div>
            <div className="legal-codes">
              UDYAM: {COMPANY_INFO.registrations.udyam} | GSTIN: {COMPANY_INFO.registrations.gstin}
            </div>
          </div>

          <div className="footer-bottom-right">
            <button onClick={scrollToTop} className="btn-back-to-top" aria-label="Scroll back to top">
              <span>Back to top</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
