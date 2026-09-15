import React, { useState } from 'react';
import { Phone, MessageSquare, Calculator, X } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import './FloatingContact.css';

export default function FloatingContact() {
  const [collapsed, setCollapsed] = useState(false);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hello Karur Wallcare! I am visiting your website and have an enquiry about K Tile Bond adhesives."
  )}`;

  return (
    <aside className="floating-action-widget" aria-label="Quick contact shortcuts">
      {/* Floating Buttons Group */}
      <div className="floating-buttons-stack">
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="float-btn float-btn-whatsapp"
          aria-label="Chat on WhatsApp"
          title="Chat with Karur Wallcare on WhatsApp"
        >
          <MessageSquare size={22} />
          <span className="float-label">WhatsApp</span>
        </a>

        {/* Call Button */}
        <a
          href={`tel:${COMPANY_INFO.phones[0].link}`}
          className="float-btn float-btn-call"
          aria-label="Call Karur Wallcare directly"
          title={`Call ${COMPANY_INFO.phones[0].number}`}
        >
          <Phone size={20} />
          <span className="float-label">Call Direct</span>
        </a>

        {/* Scroll to Calculator shortcut */}
        <a
          href="#calculator"
          className="float-btn float-btn-calc"
          aria-label="Tile Bag Calculator"
          title="Calculate tile adhesive bags required"
        >
          <Calculator size={20} />
          <span className="float-label">Calculator</span>
        </a>
      </div>
    </aside>
  );
}
