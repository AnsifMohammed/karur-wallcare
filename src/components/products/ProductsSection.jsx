import React, { useState } from 'react';
import ProductCard from './ProductCard';
import SpecComparisonTable from './SpecComparisonTable';
import { PRODUCTS } from '../../data/productsData';
import { Layers, FileSpreadsheet, Sparkles, CheckCircle2 } from 'lucide-react';
import './ProductsSection.css';

export default function ProductsSection({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('products'); // 'products' | 'comparison'

  return (
    <section id="products" className="products-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Factory-Engineered Products</span>
          <h2>K Tile Bond Adhesive Range</h2>
          <p>
            Batch-formulated in Karur with with premium-grade aggregates, high-bond polymers, 
            and zero filler quarry dust for long-lasting structural adhesion.
          </p>

          {/* View Switcher Tabs */}
          <div className="products-tab-switcher">
            <button
              className={`tab-btn ${activeTab === 'products' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('products')}
            >
              <Layers size={16} />
              <span>Product Details (X1 & X2)</span>
            </button>
            <button
              className={`tab-btn ${activeTab === 'comparison' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('comparison')}
            >
              <FileSpreadsheet size={16} />
              <span>Side-by-Side Comparison</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'products' ? (
          <div className="products-cards-grid">
            {PRODUCTS.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onOpenQuote={onOpenQuote}
              />
            ))}
          </div>
        ) : (
          <div id="specifications">
            <SpecComparisonTable onOpenQuote={onOpenQuote} />
          </div>
        )}

        {/* Bottom Guarantee Banner */}
        <div className="sand-advantage-card">
          <div className="sand-advantage-content">
            <div className="sand-badge-pill">
              <Sparkles size={16} className="text-blue" />
              <span>Our Material Promise</span>
            </div>
            <h3>Why Premium-Grade Aggregate Outperforms Quarry Powder</h3>
            <p>
              Many local adhesives replace quality aggregate with fine limestone or quarry crusher powder, 
              causing shrink cracks and hollow sounds under tiles within months. 
              <strong> Karur Wallcare uses exclusively washed, graded aggregate</strong>, 
              providing superior structural matrix, high mechanical interlock, and uniform thickness control.
            </p>
            <div className="sand-benefits-row">
              <div className="sand-benefit-item">
                <CheckCircle2 size={18} className="text-emerald" />
                <span>Zero Shrinkage Cracking</span>
              </div>
              <div className="sand-benefit-item">
                <CheckCircle2 size={18} className="text-emerald" />
                <span>No Hollow Sound Under Tile</span>
              </div>
              <div className="sand-benefit-item">
                <CheckCircle2 size={18} className="text-emerald" />
                <span>Uniform Trowel Comb Lines</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
