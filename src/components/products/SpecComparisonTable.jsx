import React from 'react';
import { Check, X, Shield, Sparkles } from 'lucide-react';

export default function SpecComparisonTable({ onOpenQuote }) {
  const comparisonRows = [
    {
      feature: "IS Standard Conformity",
      x1: "IS 15477 : 2019 Type I",
      x2: "IS 15477 : 2019 Type II",
      advantage: "Official national standard certification"
    },
    {
      feature: "Recommended Tile Types",
      x1: "Ceramic floor & wall, Terracotta, Small clay tiles",
      x2: "Ceramic, Vitrified tiles (up to 4 sq.ft), Gres, Porcelain",
      advantage: "X2 handles dense, low-porosity vitrified bodies"
    },
    {
      feature: "Wet Area Suitability (Bathrooms / Kitchens)",
      x1: "Dry interior areas only",
      x2: "Both Dry & Wet areas (bathrooms, wet utility, kitchens)",
      advantage: "X2 fortified against moisture ingress"
    },
    {
      feature: "Wall Application (Vertical Slip Resistance)",
      x1: "Zero Slip (Standard Ceramic)",
      x2: "Zero Slip (Vitrified & Porcelain up to 4 sq.ft)",
      advantage: "Both prevent tile sagging on vertical surfaces"
    },
    // {
    //   feature: "Sand Matrix",
    //   x1: "100% Graded Natural River Sand",
    //   x2: "100% Graded Natural River Sand",
    //   advantage: "High compressive matrix, zero filler ash"
    // },
    {
      feature: "Tensile Adhesion Strength",
      x1: "≥ 1.00 N/mm² (Dry Condition)",
      x2: "≥ 1.50 N/mm² (High Polymer Fortified)",
      advantage: "X2 provides 50% stronger mechanical adhesion"
    },
    {
      feature: "Open Time Window",
      x1: "20 – 25 minutes",
      x2: "Approx. 30 minutes",
      advantage: "Extended open time aids precision alignment"
    },
    {
      feature: "Pack Size & Packaging",
      x1: "20 kg Moisture-resistant laminated bag",
      x2: "20 kg Moisture-resistant laminated bag",
      advantage: "Easy site handling and long storage shelf life"
    },
    {
      feature: "Bed Thickness",
      x1: "3 mm – 10 mm",
      x2: "3 mm – 10 mm",
      advantage: "Accommodates floor undulations safely"
    }
  ];

  return (
    <div className="spec-table-container">
      <div className="table-intro">
        <h3 className="table-headline">Direct Technical Comparison: X1 vs X2</h3>
        <p className="table-subline">
          Select the optimal adhesive based on your tile dimension, substrate exposure, and moisture conditions.
        </p>
      </div>

      <div className="table-responsive-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th className="th-feature">Technical Parameter</th>
              <th className="th-x1">
                <div className="th-product-title">K Tile Bond X1</div>
                <div className="th-product-badge">Type I · Economy & Dry</div>
              </th>
              <th className="th-x2">
                <div className="th-product-title">K Tile Bond X2</div>
                <div className="th-product-badge th-badge-highlight">Type II · Wet & Vitrified</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'row-even' : 'row-odd'}>
                <td className="td-feature">
                  <strong>{row.feature}</strong>
                  <span className="td-feature-hint">{row.advantage}</span>
                </td>
                <td className="td-x1">{row.x1}</td>
                <td className="td-x2">{row.x2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-action-strip">
        <div className="table-recommendation-note">
          <Sparkles size={18} className="text-blue" />
          <span>
            <strong>Unsure which grade suits your site?</strong> Our Karur technical team evaluates your tile format and substrate free of charge.
          </span>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => onOpenQuote('K Tile Bond Recommendation')}>
          Request Recommendation
        </button>
      </div>
    </div>
  );
}
