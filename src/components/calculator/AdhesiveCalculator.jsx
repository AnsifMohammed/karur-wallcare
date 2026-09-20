import React, { useState } from 'react';
import { Calculator, Package, Check, ArrowRight, RefreshCw, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import './AdhesiveCalculator.css';

export default function AdhesiveCalculator({ onOpenQuote }) {
  const [area, setArea] = useState(350); // in sq.ft
  const [unit, setUnit] = useState('sqft'); // 'sqft' | 'sqm'
  const [tileType, setTileType] = useState('vitrified'); // 'ceramic' | 'vitrified'
  const [areaType, setAreaType] = useState('wet'); // 'dry' | 'wet'
  const [bedThickness, setBedThickness] = useState(4); // mm
  const [wastage, setWastage] = useState(10); // percentage

  const normalizedSqFt = unit === 'sqm' ? area * 10.7639 : area;
  const baseCoveragePerBag = 50 * (3 / Math.max(bedThickness, 2.5));
  const effectiveAreaWithWastage = normalizedSqFt * (1 + wastage / 100);
  const totalBags = Math.max(1, Math.ceil(effectiveAreaWithWastage / baseCoveragePerBag));
  const totalWeightKg = totalBags * 20;
  const estimatedWaterLitres = (totalBags * 5).toFixed(1);

  const recommendedProduct = (areaType === 'wet' || tileType === 'vitrified') 
    ? 'K Tile Bond X2 (Type II)' 
    : 'K Tile Bond X1 (Type I)';

  const resetCalculator = () => {
    setArea(350);
    setUnit('sqft');
    setTileType('vitrified');
    setAreaType('wet');
    setBedThickness(4);
    setWastage(10);
  };

  const generateWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `Hello Karur Wallcare! I calculated my adhesive requirements on your website:\n` +
      `• Area: ${area} ${unit === 'sqft' ? 'sq.ft' : 'sq.m'}\n` +
      `• Tile Type: ${tileType === 'vitrified' ? 'Vitrified/Large Format' : 'Ceramic'}\n` +
      `• Area Zone: ${areaType === 'wet' ? 'Wet (Bathroom/Kitchen)' : 'Dry Interior'}\n` +
      `• Bed Thickness: ${bedThickness} mm\n` +
      `• Estimated Requirement: ${totalBags} bags (20 kg) of ${recommendedProduct}\n` +
      `Please provide the best dealer/contractor price and delivery time to my location.`
    );
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="calculator" className="calc-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Smart Site Estimator</span>
          <h2>Tile Adhesive Quantity Calculator</h2>
          <p>
            Estimate exactly how many 20 kg bags of <strong>K Tile Bond X1 or X2</strong> you need 
            for your floor or wall tiling, eliminating costly site shortages and over-ordering.
          </p>
        </div>

        <div className="calc-card-wrapper">
          {/* Left: Input Controls */}
          <div className="calc-inputs-pane">
            <div className="calc-pane-title">
              <Calculator size={20} className="text-blue" />
              <span>Project Parameters</span>
            </div>

            {/* Area & Unit */}
            <div className="calc-field-group">
              <div className="field-header">
                <label htmlFor="area-input">Tiling Surface Area</label>
                <div className="unit-switch">
                  <button
                    type="button"
                    className={`unit-btn ${unit === 'sqft' ? 'active' : ''}`}
                    onClick={() => setUnit('sqft')}
                  >
                    Sq. Ft
                  </button>
                  <button
                    type="button"
                    className={`unit-btn ${unit === 'sqm' ? 'active' : ''}`}
                    onClick={() => setUnit('sqm')}
                  >
                    Sq. Meters
                  </button>
                </div>
              </div>
              <div className="input-number-wrap">
                <input
                  id="area-input"
                  type="number"
                  min="10"
                  max="100000"
                  value={area}
                  onChange={(e) => setArea(Math.max(1, Number(e.target.value)))}
                  className="calc-input"
                />
                <span className="input-unit-label">{unit === 'sqft' ? 'sq.ft' : 'm²'}</span>
              </div>
            </div>

            {/* Tile Type Selector */}
            <div className="calc-field-group">
              <label>Tile Type</label>
              <div className="choice-pill-group">
                <button
                  type="button"
                  className={`choice-pill ${tileType === 'ceramic' ? 'choice-selected' : ''}`}
                  onClick={() => setTileType('ceramic')}
                >
                  <span>Ceramic / Terracotta</span>
                  <span className="choice-sub">Dry Interior Floors/Walls</span>
                </button>
                <button
                  type="button"
                  className={`choice-pill ${tileType === 'vitrified' ? 'choice-selected' : ''}`}
                  onClick={() => setTileType('vitrified')}
                >
                  <span>Vitrified / Porcelain</span>
                  <span className="choice-sub">Up to 4 sq.ft / Low Porosity</span>
                </button>
              </div>
            </div>

            {/* Dry vs Wet Area */}
            <div className="calc-field-group">
              <label>Application Zone</label>
              <div className="choice-pill-group">
                <button
                  type="button"
                  className={`choice-pill ${areaType === 'dry' ? 'choice-selected' : ''}`}
                  onClick={() => setAreaType('dry')}
                >
                  <span>Dry Area</span>
                  <span className="choice-sub">Living room, Bedrooms, Hall</span>
                </button>
                <button
                  type="button"
                  className={`choice-pill ${areaType === 'wet' ? 'choice-selected' : ''}`}
                  onClick={() => setAreaType('wet')}
                >
                  <span>Wet Area</span>
                  <span className="choice-sub">Bathrooms, Kitchen, Balcony</span>
                </button>
              </div>
            </div>

            {/* Bed Thickness Slider */}
            <div className="calc-field-group">
              <div className="field-header">
                <label>Adhesive Bed Thickness</label>
                <span className="field-value-badge">{bedThickness} mm</span>
              </div>
              <input
                type="range"
                min="3"
                max="8"
                step="1"
                value={bedThickness}
                onChange={(e) => setBedThickness(Number(e.target.value))}
                className="calc-range-slider"
              />
              <div className="range-labels">
                <span>3 mm (Smooth Screed)</span>
                <span>5-6 mm (Standard)</span>
                <span>8 mm (Uneven Floor)</span>
              </div>
            </div>

            {/* Wastage Factor */}
            <div className="calc-field-group">
              <div className="field-header">
                <label>Site Wastage & Cut Buffer</label>
                <span className="field-value-badge">+{wastage}% Buffer</span>
              </div>
              <div className="wastage-buttons">
                {[5, 10, 15].map((pct) => (
                  <button
                    key={pct}
                    type="button"
                    className={`wastage-btn ${wastage === pct ? 'active' : ''}`}
                    onClick={() => setWastage(pct)}
                  >
                    +{pct}%
                  </button>
                ))}
              </div>
            </div>

            <button type="button" className="btn-reset-calc" onClick={resetCalculator}>
              <RefreshCw size={14} />
              <span>Reset to Defaults</span>
            </button>
          </div>

          {/* Right: Results Display */}
          <div className="calc-results-pane">
            <div className="results-inner-card">
              <div className="results-header">
                <span className="results-eyebrow">Estimated Requirement</span>
                <h3 className="results-product-rec">{recommendedProduct}</h3>
              </div>

              {/* Huge Bag Count Counter */}
              <div className="big-bag-display">
                <div className="bag-icon-frame">
                  <Package size={36} className="text-white" />
                </div>
                <div className="bag-number-block">
                  <span className="big-number">{totalBags}</span>
                  <span className="big-number-unit">Bags (20 kg each)</span>
                </div>
              </div>

              {/* Key Quantitative Metrics */}
              <div className="metrics-summary-grid">
                <div className="metric-box">
                  <span className="metric-lbl">Total Material Weight</span>
                  <span className="metric-val">{totalWeightKg} kg</span>
                </div>
                <div className="metric-box">
                  <span className="metric-lbl">Est. Water for Mixing</span>
                  <span className="metric-val">{estimatedWaterLitres} Litres</span>
                </div>
                <div className="metric-box">
                  <span className="metric-lbl">Coverage with Buffer</span>
                  <span className="metric-val">{Math.round(effectiveAreaWithWastage)} sq.ft</span>
                </div>
                <div className="metric-box">
                  <span className="metric-lbl">Standard Compliance</span>
                  <span className="metric-val">{recommendedProduct.includes('X2') ? 'IS 15477 Type II' : 'IS 15477 Type I'}</span>
                </div>
              </div>

              {/* Natural sand badge note */}
              <div className="calc-guarantee-note">
                <Check size={16} className="text-white" />
                <span>
                  Made with <strong>Premium Grade Materials</strong> for maximum mechanical grip and zero shrinkage hollows.
                </span>
              </div>

              {/* Actions */}
              <div className="calc-actions">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp-order w-full"
                >
                  <MessageSquare size={18} />
                  <span>Send Requirement on WhatsApp</span>
                </a>

                <button
                  className="btn btn-secondary-white w-full"
                  onClick={() => onOpenQuote(`${totalBags} bags of ${recommendedProduct}`)}
                >
                  <span>Request Official Quotation</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
