import React from 'react';
import { Factory, Sparkles, CheckCheck, Truck, ShieldCheck, Award, Building2, MapPin } from 'lucide-react';
import { CERTIFICATIONS } from '../../data/productsData';
import './WhyKarurWallcare.css';

export default function WhyKarurWallcare() {
  const pillars = [
    {
      icon: <Factory size={28} className="pillar-icon text-blue" />,
      title: "Own Manufacturing Plant",
      subtitle: "Munnur, Karur",
      desc: "Unlike brands that outsource packing, our dedicated automated manufacturing plant in Karur gives us complete batch-wise control over polymer blend, sand grading, and consistency.",
      tag: "Batch-Wise Control"
    },
    {
      icon: <Sparkles size={28} className="pillar-icon text-blue" />,
      title: "100% Graded Natural Sand",
      subtitle: "Zero Quarry Powder Fillers",
      desc: "We exclusively use washed, graded natural river sand. Natural sand particles have natural angular interlocking that enhances shear bond strength and prevents hollow tile sound over time.",
      tag: "Permanent Bond"
    },
    {
      icon: <CheckCheck size={28} className="pillar-icon text-blue" />,
      title: "Tested Tensile & Non-Slip",
      subtitle: "Laboratory Verified",
      desc: "Every production batch undergoes strict quality checks for tensile adhesion strength, open time window, pot life, and zero vertical slip before passing for dispatch.",
      tag: "Zero Defect QA"
    },
    {
      icon: <Truck size={28} className="pillar-icon text-blue" />,
      title: "Dealer & Site Direct Supply",
      subtitle: "Tamil Nadu & South India",
      desc: "Reliable, uncompromised logistics supplying retail dealer networks, prominent construction builders, and regional tile contractors directly from our central plant.",
      tag: "Prompt Dispatch"
    }
  ];

  return (
    <section id="why-us" className="why-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">The Karur Wallcare Advantage</span>
          <h2>Why Contractors & Dealers Choose K Tile Bond</h2>
          <p>
            Manufactured with pride in Karur using 100% natural sand, delivering 
            uncompromising bond strength for homes, commercial complexes, and modern architecture.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="pillar-card">
              <div className="pillar-header">
                <div className="pillar-icon-box">{pillar.icon}</div>
                <span className="pillar-tag">{pillar.tag}</span>
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <div className="pillar-subtitle">{pillar.subtitle}</div>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Certifications Row */}
        <div className="cert-banner-wrapper">
          <div className="cert-banner-header">
            <h3 className="cert-banner-title">
              <ShieldCheck className="text-blue" size={26} />
              <span>Certified Standards & Institutional Recognition</span>
            </h3>
            <p className="cert-banner-desc">
              Karur Wallcare operates in full compliance with national building codes and sustainable manufacturing directives.
            </p>
          </div>

          <div className="cert-cards-grid">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="cert-badge-card">
                <div className="cert-card-tag">{cert.tag}</div>
                <h4 className="cert-card-title">{cert.title}</h4>
                <div className="cert-card-sub">{cert.subtitle}</div>
                <p className="cert-card-desc">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
