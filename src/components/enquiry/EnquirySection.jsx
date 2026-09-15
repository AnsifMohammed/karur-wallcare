import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle, Clock, Building2, User, HelpCircle } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import confetti from 'canvas-confetti';
import './EnquirySection.css';

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    userType: 'Contractor / Builder',
    product: 'Both X1 and X2',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number.");
      return;
    }

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Karur Wallcare! I would like to enquire about K Tile Bond.\n` +
      `• Name: ${formData.name || 'Not specified'}\n` +
      `• Phone: ${formData.phone || 'Not specified'}\n` +
      `• Location: ${formData.city || 'Tamil Nadu'}\n` +
      `• Category: ${formData.userType}\n` +
      `• Product: ${formData.product}\n` +
      `• Notes: ${formData.message || 'Please send product catalog, dealer margin, and pricing.'}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Get in Touch Directly</span>
          <h2>Contact & Dealership Enquiry</h2>
          <p>
            Tell us what you need — product samples, dealership opportunities, 
            contractor pricing, or bulk project supply.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Plant & Office Contact Information */}
          <div className="contact-info-col">
            <div className="contact-card primary-contact-card">
              <h3 className="card-heading">Direct Manufacturer Support</h3>
              <p className="card-subtext">
                Connect with our Karur sales and technical plant desk. Fast turnaround for orders, dealer accounts, and site demos.
              </p>

              {/* Direct Numbers List */}
              <div className="contact-item-group">
                <div className="contact-item-header">
                  <Phone size={18} className="text-blue" />
                  <span>Key Mobile & WhatsApp Numbers</span>
                </div>
                <div className="phone-numbers-grid">
                  {COMPANY_INFO.phones.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone.link}`} className="phone-badge-link">
                      <span className="phone-role">{phone.label}</span>
                      <span className="phone-num">{phone.number}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Office Landline / Desk */}
              <div className="contact-item-group">
                <div className="contact-item-header">
                  <Building2 size={18} className="text-blue" />
                  <span>Karur Plant & Office Desk</span>
                </div>
                <div className="office-desk-numbers">
                  {COMPANY_INFO.officePhones.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone.link}`} className="desk-link">
                      {phone.label}: <strong>{phone.number}</strong>
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="contact-item-group">
                <div className="contact-item-header">
                  <Mail size={18} className="text-blue" />
                  <span>Official Email</span>
                </div>
                <a href={`mailto:${COMPANY_INFO.email}`} className="email-link">
                  {COMPANY_INFO.email}
                </a>
              </div>

              {/* Addresses */}
              <div className="contact-item-group">
                <div className="contact-item-header">
                  <MapPin size={18} className="text-blue" />
                  <span>Office & Plant Addresses</span>
                </div>
                <div className="address-box">
                  <div className="address-entry">
                    <span className="addr-tag">Registered Office:</span>
                    <div>{COMPANY_INFO.registeredOffice.address}, {COMPANY_INFO.registeredOffice.city} – {COMPANY_INFO.registeredOffice.pincode}, {COMPANY_INFO.registeredOffice.state}</div>
                  </div>
                  <div className="address-entry">
                    <span className="addr-tag">Manufacturing Unit:</span>
                    <div>{COMPANY_INFO.factoryUnit.address}, {COMPANY_INFO.factoryUnit.taluk}, {COMPANY_INFO.factoryUnit.city} – {COMPANY_INFO.factoryUnit.pincode}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="contact-form-col">
            <div className="contact-card form-card">
              <div className="form-card-header">
                <h3>Send Us an Enquiry</h3>
                <p>Fill out the form below and our team will get back to you within 2 hours.</p>
              </div>

              {submitted ? (
                <div className="form-success-state animate-fade-in">
                  <div className="success-icon-wrap">
                    <CheckCircle size={48} className="text-emerald" />
                  </div>
                  <h3>Thank You, {formData.name}!</h3>
                  <p>
                    Your enquiry for <strong>{formData.product}</strong> has been received. 
                    Our Karur sales team will contact you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <div className="success-actions">
                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className="btn btn-primary"
                    >
                      <MessageSquare size={16} />
                      <span>Instant Connect via WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn btn-outline btn-sm"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="enquiry-form">
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="enq-name">Full Name *</label>
                      <input
                        id="enq-name"
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="enq-phone">Mobile Number *</label>
                      <input
                        id="enq-phone"
                        type="tel"
                        required
                        placeholder="e.g. 94422 29296"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="enq-email">Email Address</label>
                      <input
                        id="enq-email"
                        type="email"
                        placeholder="e.g. ramesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="enq-city">City / District in Tamil Nadu *</label>
                      <input
                        id="enq-city"
                        type="text"
                        placeholder="e.g. Karur, Trichy, Coimbatore, Salem"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="enq-type">I Am A:</label>
                      <select
                        id="enq-type"
                        value={formData.userType}
                        onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                      >
                        <option value="Contractor / Builder">Tile Contractor / Civil Builder</option>
                        <option value="Hardware / Tile Dealer">Hardware & Tile Retail Dealer</option>
                        <option value="Architect / Consultant">Architect / Structural Consultant</option>
                        <option value="Homeowner">Individual Home Builder</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label htmlFor="enq-product">Product Interest:</label>
                      <select
                        id="enq-product"
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      >
                        <option value="Both X1 and X2">Both K Tile Bond X1 & X2</option>
                        <option value="K Tile Bond X1 (Type I)">K Tile Bond X1 (Type I)</option>
                        <option value="K Tile Bond X2 (Type II)">K Tile Bond X2 (Type II)</option>
                        <option value="Dealer Territory Dealership">Dealer Territory Dealership</option>
                        <option value="Sample Bags for Testing">Sample Bags for Testing</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="enq-message">Message / Project Requirement</label>
                    <textarea
                      id="enq-message"
                      rows="3"
                      placeholder="Specify your expected quantity (bags/sq.ft), project location, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <div className="form-buttons">
                    <button type="submit" className="btn btn-primary w-full">
                      <Send size={16} />
                      <span>Submit Official Enquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className="btn btn-outline w-full btn-whatsapp-direct"
                    >
                      <MessageSquare size={16} className="text-emerald" />
                      <span>Chat Immediately on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
