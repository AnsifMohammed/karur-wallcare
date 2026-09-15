import React, { useState } from 'react';
import { X, Send, MessageSquare, CheckCircle, Package } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import confetti from 'canvas-confetti';
import './QuoteModal.css';

export default function QuoteModal({ isOpen, onClose, defaultProduct = "K Tile Bond X1 & X2" }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [product, setProduct] = useState(defaultProduct);
  const [quantity, setQuantity] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please fill your name and phone number.');
      return;
    }

    try {
      confetti({ particleCount: 70, spread: 60 });
    } catch (err) {}

    setSubmitted(true);
  };

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `Hello Karur Wallcare! I would like to request a quotation:\n` +
      `• Name: ${name || 'Prospective Customer'}\n` +
      `• Mobile: ${phone}\n` +
      `• City: ${city || 'Tamil Nadu'}\n` +
      `• Product: ${product}\n` +
      `• Est. Quantity: ${quantity || 'Standard dealer lot'}\n` +
      `Please provide the lowest factory-direct rates.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="quote-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success-content">
            <div className="success-circle">
              <CheckCircle size={44} className="text-emerald" />
            </div>
            <h3>Quotation Request Sent!</h3>
            <p>
              Thank you, <strong>{name}</strong>. Our Karur sales manager will contact you at <strong>{phone}</strong> with the technical data sheet and wholesale quote.
            </p>
            <div className="modal-actions">
              <button onClick={handleWhatsAppQuote} className="btn btn-primary w-full">
                <MessageSquare size={16} />
                <span>Instant Reply on WhatsApp</span>
              </button>
              <button onClick={onClose} className="btn btn-outline w-full">
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="modal-form-content">
            <div className="modal-header">
              <div className="modal-icon-badge">
                <Package size={22} className="text-amber" />
              </div>
              <div>
                <h3 className="modal-title">Request Quotation & Technical Data</h3>
                <p className="modal-sub">Direct pricing from Karur Wallcare Industries Pvt. Ltd.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="modal-input-field">
                <label>Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="modal-input-field">
                <label>Contact Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 94422 29296"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="modal-grid-2">
                <div className="modal-input-field">
                  <label>City / Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Karur, Erode, Trichy"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="modal-input-field">
                  <label>Est. Bags Needed</label>
                  <input
                    type="text"
                    placeholder="e.g. 50 bags (20kg)"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal-input-field">
                <label>Selected Product</label>
                <select value={product} onChange={(e) => setProduct(e.target.value)}>
                  <option value="Both K Tile Bond X1 & X2">Both K Tile Bond X1 & X2</option>
                  <option value="K Tile Bond X1 (Type I)">K Tile Bond X1 (Type I - Dry Interior)</option>
                  <option value="K Tile Bond X2 (Type II)">K Tile Bond X2 (Type II - Wet/Vitrified)</option>
                  <option value="Dealership Enquiry">Dealership & Distributorship</option>
                </select>
              </div>

              <div className="modal-submit-group">
                <button type="submit" className="btn btn-primary w-full">
                  <Send size={16} />
                  <span>Submit Price Request</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppQuote}
                  className="btn btn-outline w-full"
                >
                  <MessageSquare size={16} className="text-emerald" />
                  <span>Direct Quote via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
