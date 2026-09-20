import React, { useState } from 'react';
import { Building2, Factory, Award, CheckCircle2, ShieldAlert, FileText, Phone, MapPin, ZoomIn, X } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import zedCertImg from '../../assets/images/zed-certificate.png';
import flyerImg from '../../assets/images/product-flyer.jpg';
import './AboutSection.css';

export default function AboutSection({ onOpenQuote }) {
  const [certModalOpen, setCertModalOpen] = useState(false);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-layout-grid">
          {/* Left Column: Story & Mission */}
          <div className="about-narrative">
            <div className="about-badge-pill">
              <span>About Karur Wallcare</span>
            </div>
            <h2 className="about-title">
              Engineered in Karur. <br />
              <span className="text-blue">Trusted by Builders Across South India.</span>
            </h2>
            <p className="about-lead">
              <strong>Karur Wallcare Industries Pvt. Ltd.</strong> was established with a singular objective: 
              to manufacture dependable, scientific construction chemicals at an honest manufacturer-direct price.
            </p>
            <p className="about-body">
              Too many contractors experience debonding tiles, hollow echoing sounds, and costly callbacks 
              due to cheap quarry dust adhesives. Our in-house manufacturing unit in Munnur, Karur enforces 
              batch-by-batch QA/QC testing for polymer distribution, open time, and shear tensile strength. 
              We work hand-in-hand with dealers, builders, engineers, and independent tile layers.
            </p>

            {/* Feature Bullets */}
            <div className="about-pillars-list">
              <div className="about-pillar-item">
                <div className="pillar-bullet-check">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong>Our Mission:</strong> To provide foolproof, correctly formulated building adhesives 
                  at fair prices with zero dilution or compromise on quality.
                </div>
              </div>

              <div className="about-pillar-item">
                <div className="pillar-bullet-check">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong>Batch-Wise QC:</strong> Every production batch is inspected in our quality lab 
                  prior to dispatch, guaranteeing identical on-site workability every bag.
                </div>
              </div>

              <div className="about-pillar-item">
                <div className="pillar-bullet-check">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong>On-Site Demonstration:</strong> Our regional technical officers provide direct substrate 
                  inspection, notched trowel training, and site mockups on request.
                </div>
              </div>
            </div>

            <div className="about-cta-row">
              <button className="btn btn-primary" onClick={() => onOpenQuote('Site Demonstration / Dealer Enquiry')}>
                <span>Schedule Site Visit or Demo</span>
              </button>
              <a href={`tel:${COMPANY_INFO.phones[0].link}`} className="btn btn-outline">
                <Phone size={16} className="text-blue" />
                <span>Call Plant Desk</span>
              </a>
            </div>
          </div>

          {/* Right Column: Factory, ZED Certificate & Institutional Credentials */}
          <div className="about-credentials-col">
            {/* ZED Certification with Actual Certificate Thumbnail */}
            <div className="credential-highlight-card zed-card">
              <div className="zed-header-split">
                <div className="zed-text-wrap">
                  <div className="zed-icon-frame">
                    <Award size={26} className="text-white" />
                  </div>
                  <div>
                    <span className="zed-tag">National MSME Recognition</span>
                    <h3 className="zed-title">ZED Bronze Certified</h3>
                  </div>
                </div>

                {/* Certificate Thumbnail Preview Button */}
                <button
                  type="button"
                  className="cert-thumbnail-btn"
                  onClick={() => setCertModalOpen(true)}
                  title="Click to inspect official ZED Certificate"
                >
                  <img
                    src={zedCertImg}
                    alt="Official ZED Bronze Certificate"
                    className="cert-thumb-img"
                  />
                  <span className="cert-zoom-overlay">
                    <ZoomIn size={16} />
                    <span>View Cert</span>
                  </span>
                </button>
              </div>

              <p className="zed-desc">
                Awarded under the Government of India MSME Sustainable (ZED) Scheme to 
                <strong> Karur Wallcare Industries Private Limited</strong> (UDYAM-TN-10-0056913, Munnur Unit), 
                certifying zero defect orientation and sustainable manufacturing practices.
              </p>
            </div>

            {/* Corporate & Factory Address Details */}
            <div className="facilities-card">
              <div className="facility-block">
                <div className="facility-icon-wrap">
                  <Building2 size={20} className="text-blue" />
                </div>
                <div className="facility-info">
                  <span className="facility-label">Registered Office</span>
                  <div className="facility-address">
                    {COMPANY_INFO.registeredOffice.address}, {COMPANY_INFO.registeredOffice.city} – {COMPANY_INFO.registeredOffice.pincode}, {COMPANY_INFO.registeredOffice.state}
                  </div>
                </div>
              </div>

              <div className="facility-divider"></div>

              <div className="facility-block">
                <div className="facility-icon-wrap">
                  <Factory size={20} className="text-blue" />
                </div>
                <div className="facility-info">
                  <span className="facility-label">Manufacturing Plant Unit</span>
                  <div className="facility-address">
                    {COMPANY_INFO.factoryUnit.address}, {COMPANY_INFO.factoryUnit.taluk}, {COMPANY_INFO.factoryUnit.city} – {COMPANY_INFO.factoryUnit.pincode}, {COMPANY_INFO.factoryUnit.state}
                  </div>
                </div>
              </div>

              <div className="facility-divider"></div>

              {/* Legal Registrations Strip */}
              <div className="registration-tags-grid">
                <div className="reg-tag-item">
                  <span className="reg-lbl">UDYAM Regn:</span>
                  <span className="reg-val">{COMPANY_INFO.registrations.udyam}</span>
                </div>
                <div className="reg-tag-item">
                  <span className="reg-lbl">GSTIN:</span>
                  <span className="reg-val">{COMPANY_INFO.registrations.gstin}</span>
                </div>
                <div className="reg-tag-item">
                  <span className="reg-lbl">Standard:</span>
                  <span className="reg-val">IS 15477 : 2019</span>
                </div>
                <div className="reg-tag-item">
                  <span className="reg-lbl">Material:</span>
                  <span className="reg-val">100% Graded River Sand</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Fullscreen Modal */}
      {certModalOpen && (
        <div className="modal-overlay" onClick={() => setCertModalOpen(false)}>
          <div className="cert-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setCertModalOpen(false)}>
              <X size={20} />
            </button>
            <div className="cert-modal-header">
              <h3>Ministry of MSME — ZED Bronze Certificate</h3>
              <p>Awarded to Karur Wallcare Industries Private Limited (Munnur Plant)</p>
            </div>
            <div className="cert-modal-img-wrap">
              <img
                src={zedCertImg}
                alt="Ministry of MSME ZED Bronze Certificate"
                className="cert-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
