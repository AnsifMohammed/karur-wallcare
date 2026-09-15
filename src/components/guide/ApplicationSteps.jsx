import React from 'react';
import { APPLICATION_STEPS } from '../../data/productsData';
import { Wrench, Beaker, Brush, Grid3X3, Lightbulb } from 'lucide-react';
import './ApplicationSteps.css';

export default function ApplicationSteps() {
  const stepIcons = [
    <Wrench size={26} className="text-blue" />,
    <Beaker size={26} className="text-blue" />,
    <Brush size={26} className="text-blue" />,
    <Grid3X3 size={26} className="text-blue" />
  ];

  return (
    <section id="application-guide" className="guide-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Site Best Practices</span>
          <h2>How to Apply K Tile Bond Adhesive</h2>
          <p>
            Follow our 4-step professional procedure to achieve 100% mechanical coverage, 
            zero hollow sound, and enduring tile adhesion.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="steps-cards-grid">
          {APPLICATION_STEPS.map((step, idx) => (
            <div key={idx} className="step-card">
              <div className="step-number-watermark">{step.step}</div>
              
              <div className="step-card-header">
                <div className="step-icon-frame">{stepIcons[idx]}</div>
                <span className="step-badge">Phase {step.step}</span>
              </div>

              <h3 className="step-card-title">{step.title}</h3>
              <p className="step-card-desc">{step.desc}</p>

              <div className="step-pro-tip">
                <Lightbulb size={16} className="tip-icon text-blue" />
                <span><strong>Site Tip:</strong> {step.tip}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Important Substrate Note */}
        <div className="curing-note-box">
          <div className="curing-note-left">
            <h4>No Water Curing Needed!</h4>
            <p>
              Unlike traditional sand-cement mortar that demands days of ponding or continuous water spraying, 
              <strong> K Tile Bond X1 and X2 contain internal polymer moisture retainers</strong>. 
              The adhesive self-hydrates perfectly without external watering. Simply leave to set undisturbed for 24 hours before grouting.
            </p>
          </div>
          <div className="curing-badge-pill">
            <span>24 Hours Setting Time</span>
          </div>
        </div>
      </div>
    </section>
  );
}
