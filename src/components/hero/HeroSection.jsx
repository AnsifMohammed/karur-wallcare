import React from 'react';
import { ShieldCheck, Award, Layers, Sparkles, ArrowRight, Calculator, PhoneCall, CheckCircle2, Star } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import productShowcaseImg from '../../assets/images/product-showcase.jpg';
import productsLineupImg from '../../assets/images/products-lineup.jpg';
import './HeroSection.css';

export default function HeroSection({ onOpenQuote }) {
  const marqueeStats = [
    { value: "100%", label: "Batch Quality Checks", subtext: "Pre-dispatch tested" },
    { value: "Type I, II, III", label: "IS 15477 : 2019", subtext: "Strict BIS compliance" },
    { value: "20 KG", label: "Pack Size", subtext: "Moisture-proof bags" },
    { value: "Zero Sag", label: "Vertical Slip Resistance", subtext: "High initial grab" },
    { value: "ZED Bronze", label: "MSME Sustainable", subtext: "Govt. of India certified" },
    { value: "UDYAM", label: "TN-10-0056913", subtext: "Own Karur manufacturing" },
  ];

  return (
    <section id="home" className="hero-section">
      <div className="hero-shape hero-shape-1"></div>
      <div className="hero-shape hero-shape-2"></div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Authentic Tamil Quality Badge & National Sand Badge */}
          <div className="hero-badge-group">
            <span className="hero-tamil-badge">
              <Star size={13} fill="currentColor" />
              தரம்! நிரந்தரம்!
            </span>
            <span className="hero-pill-badge">
              <span className="pill-dot"></span>
              <span>IS 15477 : 2019 Certified • Own Karur Plant</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title">
            Next-Gen Polymer Tile Adhesives built for{' '}
            <span className="hero-highlight">permanent bond strength</span>
          </h1>

          {/* Slogan */}
          <div className="hero-sub-slogan">
            <span className="strong-text">STRONG</span>
            <span className="divider-slash">/</span>
            <span>Reliable and Professional</span>
          </div>

          {/* Subheading */}
          <p className="hero-description">
            <strong>Karur Wallcare Industries Pvt. Ltd.</strong> manufactures 
            <strong> K Tile Bond X1, X2, and X3</strong> polymer-modified tile adhesives 
            conforming to <strong>IS 15477 : 2019</strong>. Engineered with 100% washed river sand for 
            zero vertical slip, durable bond strength, and no surface hacking needed.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <a href="#products" className="btn btn-primary btn-lg">
              <span>Explore Products</span>
              <ArrowRight size={18} />
            </a>

            <a href="#calculator" className="btn btn-outline btn-lg">
              <Calculator size={18} className="text-blue" />
              <span>Tile Bag Calculator</span>
            </a>

            <button onClick={onOpenQuote} className="btn-inline-talk">
              <PhoneCall size={16} className="text-blue" />
              <span>Request Dealer Pricing</span>
            </button>
          </div>

          {/* Certification Strip */}
          <div className="hero-cert-strip">
            <div className="cert-item">
              <div className="cert-icon-wrap">
                <ShieldCheck className="cert-icon" size={18} />
              </div>
              <div>
                <div className="cert-title">IS 15477 : 2019</div>
                <div className="cert-sub">Type I, II & III Certified</div>
              </div>
            </div>

            <div className="cert-item">
              <div className="cert-icon-wrap">
                <Award className="cert-icon" size={18} />
              </div>
              <div>
                <div className="cert-title">ZED Bronze</div>
                <div className="cert-sub">MSME Sustainable</div>
              </div>
            </div>

            <div className="cert-item">
              <div className="cert-icon-wrap">
                <Layers className="cert-icon" size={18} />
              </div>
              <div>
                <div className="cert-title">UDYAM Regd.</div>
                <div className="cert-sub">TN-10-0056913</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual: Real Product Images Display */}
        <div className="hero-visual">
          <div className="hero-image-card">
            {/* 3D Rendered Product Bags Display */}
            <div className="product-image-frame">
              <img
                src={productsLineupImg}
                alt="K Tile Bond X1, X2, X3 Tile Adhesive Bags"
                className="hero-product-img"
              />
            </div>

            {/* Overlay Feature Badges */}
            <div className="hero-card-floating-badges">
              <div className="float-feature-pill">
                <CheckCircle2 size={16} className="text-emerald" />
                <span>Water-Resistant</span>
              </div>
              <div className="float-feature-pill">
                <CheckCircle2 size={16} className="text-emerald" />
                <span>Zero Vertical Slip</span>
              </div>
              <div className="float-feature-pill">
                <CheckCircle2 size={16} className="text-emerald" />
                <span>20 Kg Grey Adhesive</span>
              </div>
            </div>

            {/* Bottom floating banner */}
            <div className="hero-image-bottom-bar">
              <div className="k-series-text">
                <span className="k-tag">K-SERIES</span>
                <span className="k-sub">K Tile Bond X1, X2 & X3</span>
              </div>
              <a href="#products" className="hero-view-all-btn">
                <span>View Range</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Running Marquee Stats Bar - Stretched Full Width */}
      <div className="hero-stats-bar">
        <div className="stats-marquee-track">
          {/* Primary Track */}
          <div className="stats-marquee-group">
            {marqueeStats.map((stat, idx) => (
              <div key={`track1-${idx}`} className="stat-box">
                <div className="stat-number">{stat.value}</div>
                <div className="stat-info">
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-sub">{stat.subtext}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicate Track for Seamless Infinite Scrolling */}
          <div className="stats-marquee-group" aria-hidden="true">
            {marqueeStats.map((stat, idx) => (
              <div key={`track2-${idx}`} className="stat-box">
                <div className="stat-number">{stat.value}</div>
                <div className="stat-info">
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-sub">{stat.subtext}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
