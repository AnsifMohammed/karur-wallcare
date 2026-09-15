import React, { useState } from 'react';
import { Check, Info, FileSpreadsheet, Send, ShieldCheck, Layers, ChevronDown, ChevronUp, Droplets, Clock, Hammer, Award } from 'lucide-react';
import productX1Img from '../../assets/images/product-x1.jpg';
import productX2Img from '../../assets/images/product-x2.jpg';

export default function ProductCard({ product, onSelectProduct, onOpenQuote }) {
  const [showFullSpecs, setShowFullSpecs] = useState(false);

  const bagImg = product.id === 'x1' ? productX1Img : productX2Img;

  return (
    <div className={`full-product-card product-theme-${product.id}`}>
      {/* Top Header Bar */}
      <div className="product-top-bar">
        <span className="product-tag badge-blue">
          {product.badge}
        </span>
        <span className="product-pack-pill">{product.packSize} · Grey</span>
      </div>

      {/* Main Card Content with Real Bag Image */}
      <div className="product-card-body-split">
        {/* Left: Product Real Bag Image */}
        <div className="product-bag-visual">
          <div className="product-bag-frame">
            <img
              src={bagImg}
              alt={`${product.name} 20kg Bag`}
              className="product-actual-img"
            />
          </div>
          <div className="bag-sand-tag">
            <span>100% Natural Sand</span>
          </div>
        </div>

        {/* Right: Details & Checklist */}
        <div className="product-details-content">
          {/* Title & Tagline */}
          <div className="product-title-group">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-tagline">{product.tagline}</p>
          </div>

          {/* Summary */}
          <p className="product-summary">{product.summary}</p>

          {/* Key Advantages Checklist */}
          <div className="product-highlights">
            <div className="highlights-title">Core Performance Features:</div>
            <div className="features-badge-list">
              <div className="feature-pill-item">
                <span className="bullet-dot"></span>
                <span>Water-Resistant Formulation</span>
              </div>
              <div className="feature-pill-item">
                <span className="bullet-dot"></span>
                <span>Durable & Long-Lasting Matrix</span>
              </div>
              <div className="feature-pill-item">
                <span className="bullet-dot"></span>
                <span>No Hacking of Surface Required</span>
              </div>
              <div className="feature-pill-item">
                <span className="bullet-dot"></span>
                <span>No Vertical Slip (3mm to 10mm)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Spec Matrix */}
      <div className="quick-spec-grid">
        <div className="quick-spec-item">
          <span className="spec-item-label">Standard</span>
          <span className="spec-item-val">{product.specifications.standard}</span>
        </div>
        <div className="quick-spec-item">
          <span className="spec-item-label">Bed Thickness</span>
          <span className="spec-item-val">{product.specifications.bedThickness}</span>
        </div>
        <div className="quick-spec-item">
          <span className="spec-item-label">Open Time</span>
          <span className="spec-item-val">{product.specifications.openTime}</span>
        </div>
        <div className="quick-spec-item">
          <span className="spec-item-label">Est. Coverage</span>
          <span className="spec-item-val">{product.specifications.coverage}</span>
        </div>
      </div>

      {/* Suitable Applications */}
      <div className="suitable-tiles-box">
        <div className="suitable-title">Recommended Applications:</div>
        <div className="suitable-pills">
          {product.suitableFor.map((item, idx) => (
            <span key={idx} className="suitable-pill">{item}</span>
          ))}
        </div>
      </div>

      {/* Collapsible Full Specs */}
      {showFullSpecs && (
        <div className="full-specs-accordion animate-fade-in">
          <div className="accordion-title">Full Technical Parameters:</div>
          <table className="mini-spec-table">
            <tbody>
              <tr>
                <td>Standard Classification</td>
                <td>{product.specifications.standard}</td>
              </tr>
              <tr>
                <td>Pot Life</td>
                <td>{product.specifications.potLife}</td>
              </tr>
              <tr>
                <td>Adjustability Time</td>
                <td>{product.specifications.adjustabilityTime}</td>
              </tr>
              <tr>
                <td>Tensile Bond Strength</td>
                <td>{product.specifications.shearBondStrength}</td>
              </tr>
              <tr>
                <td>Foot Traffic / Grouting</td>
                <td>{product.specifications.walkInTime}</td>
              </tr>
              <tr>
                <td>Recommended Trowel</td>
                <td>{product.idealTrowel}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Action Footer */}
      <div className="product-card-footer">
        <button
          className="btn-spec-toggle"
          onClick={() => setShowFullSpecs(!showFullSpecs)}
        >
          <span>{showFullSpecs ? 'Hide Technical Data' : 'Full Technical Specifications'}</span>
          {showFullSpecs ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </button>

        <button
          className="btn btn-primary btn-product-enquiry"
          onClick={() => onOpenQuote(product.name)}
        >
          <Send size={15} />
          <span>Enquire for {product.name}</span>
        </button>
      </div>
    </div>
  );
}
