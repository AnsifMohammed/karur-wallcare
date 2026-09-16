import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Phone, Clock, Factory, Building, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import './LocationMapSection.css';

export default function LocationMapSection() {
  const [activeLocation, setActiveLocation] = useState('factory'); // 'factory' | 'office'

  const locations = {
    factory: {
      name: "Manufacturing Plant & Dispatch Unit",
      tag: "Factory & Heavy Loading Bay",
      address: COMPANY_INFO.factoryUnit.address,
      area: `${COMPANY_INFO.factoryUnit.taluk}, ${COMPANY_INFO.factoryUnit.city} - ${COMPANY_INFO.factoryUnit.pincode}`,
      state: COMPANY_INFO.factoryUnit.state,
      hours: "Mon - Sat: 8:00 AM - 7:30 PM",
      phone: COMPANY_INFO.phones[0].number,
      phoneLink: COMPANY_INFO.phones[0].link,
      mapQuery: "Munnur,+Pugalur,+Karur,+Tamil+Nadu,+India",
      directionsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Munnur, Pugalur Taluk, Karur, Tamil Nadu 639111")}`,
      badge: "Direct Site Batch Dispatches"
    },
    office: {
      name: "Registered Corporate Office",
      tag: "Admin & Dealer Accounts",
      address: COMPANY_INFO.registeredOffice.address,
      area: `${COMPANY_INFO.registeredOffice.city} - ${COMPANY_INFO.registeredOffice.pincode}`,
      state: COMPANY_INFO.registeredOffice.state,
      hours: "Mon - Sat: 9:00 AM - 6:30 PM",
      phone: COMPANY_INFO.officePhones[0].number,
      phoneLink: COMPANY_INFO.officePhones[0].link,
      mapQuery: "Manmangalam,+Karur,+Tamil+Nadu,+India",
      directionsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("1/96-J, Kilakkur, Manmangalam, Karur, Tamil Nadu 639006")}`,
      badge: "Commercial Inquiries"
    }
  };

  const current = locations[activeLocation];

  return (
    <section id="location" className="location-map-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Factory Direct Manufacturing</span>
          <h2>Visit Our Plant & Offices in Karur</h2>
          <p>
            Conveniently located in Karur, Tamil Nadu with immediate logistical access to 
            state highways for prompt bulk dispatches across South India.
          </p>
        </div>

        {/* Location Selector Tabs */}
        <div className="location-tabs-bar">
          <button
            type="button"
            className={`loc-tab-btn ${activeLocation === 'factory' ? 'active' : ''}`}
            onClick={() => setActiveLocation('factory')}
          >
            <Factory size={18} />
            <span>Manufacturing Unit (Munnur)</span>
          </button>

          <button
            type="button"
            className={`loc-tab-btn ${activeLocation === 'office' ? 'active' : ''}`}
            onClick={() => setActiveLocation('office')}
          >
            <Building size={18} />
            <span>Registered Office (Manmangalam)</span>
          </button>
        </div>

        {/* Map Layout: Left Info Card + Right Embedded Interactive Map */}
        <div className="map-showcase-card">
          {/* Details Sidebar Card */}
          <div className="map-info-panel">
            <div className="map-badge-pill">
              <span className="pill-pulse"></span>
              <span>{current.tag}</span>
            </div>

            <h3 className="location-name">{current.name}</h3>

            <div className="location-details-list">
              <div className="loc-detail-item">
                <div className="loc-icon-circle">
                  <MapPin size={18} className="text-blue" />
                </div>
                <div>
                  <div className="loc-detail-label">Address</div>
                  <div className="loc-detail-text">
                    <strong>{current.address}</strong><br />
                    {current.area}<br />
                    {current.state}
                  </div>
                </div>
              </div>

              <div className="loc-detail-item">
                <div className="loc-icon-circle">
                  <Clock size={18} className="text-blue" />
                </div>
                <div>
                  <div className="loc-detail-label">Operating & Dispatch Hours</div>
                  <div className="loc-detail-text">{current.hours}</div>
                </div>
              </div>

              <div className="loc-detail-item">
                <div className="loc-icon-circle">
                  <Phone size={18} className="text-blue" />
                </div>
                <div>
                  <div className="loc-detail-label">Direct Contact</div>
                  <a href={`tel:${current.phoneLink}`} className="loc-phone-link">
                    {current.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="loc-actions-group">
              <a
                href={current.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-directions"
              >
                <Navigation size={16} />
                <span>Get Driving Directions</span>
                <ExternalLink size={14} />
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Karur Wallcare! I would like to visit your ${current.name} in Karur.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-visit-wa"
              >
                <span>Notify Visit on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right: Embedded Google Map */}
          <div className="map-frame-wrapper">
            <iframe
              title={`Google Map - ${current.name}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(current.mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="google-map-iframe"
            ></iframe>

            <div className="map-overlay-chip">
              <MapPin size={14} className="text-blue" />
              <span>Karur, Tamil Nadu • IS 15477 : 2019 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
