export const PRODUCTS = [
  {
    id: "x1",
    name: "K Tile Bond X1",
    tagline: "Standard Polymer-Modified Tile Adhesive",
    badge: "Type I · Economical & Reliable",
    standard: "IS 15477 : 2019 Type I",
    type: "Type I Tile Adhesive",
    packSize: "20 kg Bag",
    color: "Grey Powder",
    accentColor: "#f59e0b",
    summary: "Cement-based polymer-modified tile adhesive designed specifically for fixing ceramic and small vitrified tiles on interior walls and floors in dry environments.",
    description: "Formulated with 100% graded natural sand, specialty polymers, and premium Portland cement. Offers excellent non-slip characteristics, smooth trowel glide, and dependable bond strength without water-curing needed.",
    keyHighlights: [
      "Conforms strictly to IS 15477 : 2019 Type I standard",
      "Manufactured with 100% natural graded sand for superior density",
      "Non-sag formulation: prevents vertical tile slippage on walls",
      "Ready to mix with water — no cumbersome sand/cement mixing on site",
      "Economical cost per square foot for interior residential projects"
    ],
    specifications: {
      standard: "IS 15477 : 2019 Type I",
      packSize: "20 kg laminated HDPE bag",
      bedThickness: "3 mm to 10 mm",
      openTime: "Approx. 20 – 25 minutes",
      adjustabilityTime: "Approx. 15 – 20 minutes",
      potLife: "Approx. 2 to 3 hours at 30°C",
      shearBondStrength: "≥ 1.00 N/mm² (Dry Condition)",
      walkInTime: "24 hours after application",
      coverage: "50 – 55 sq.ft per 20 kg bag (at 3 mm notched trowel bed)"
    },
    suitableFor: [
      "Ceramic floor and wall tiles",
      "Small clay and terracotta tiles",
      "Dry interior floors and residential wall tiling",
      "Cement screed, cement plaster, and concrete substrates"
    ],
    idealTrowel: "6mm x 6mm square notched trowel"
  },
  {
    id: "x2",
    name: "K Tile Bond X2",
    tagline: "High-Performance Polymer-Fortified Tile Adhesive",
    badge: "Type II · Wet & Large Format",
    standard: "IS 15477 : 2019 Type II",
    type: "Type II Tile Adhesive",
    packSize: "20 kg Bag",
    color: "Grey Powder",
    accentColor: "#0284c7",
    summary: "Enhanced polymer-fortified adhesive engineered for fixing ceramic, gres, and vitrified tiles up to 4 sq.ft in both dry and wet interior walls and floors.",
    description: "Features elevated polymer modification delivering superior flexural strength, moisture resistance, and mechanical grip. Built with 100% graded natural sand to resist thermal movement and dampness in bathrooms, kitchens, and high-footfall rooms.",
    keyHighlights: [
      "Conforms strictly to IS 15477 : 2019 Type II standard",
      "Designed for vitrified & porcelain tiles up to 4 sq.ft (600mm x 600mm)",
      "High moisture resistance — perfect for bathrooms, kitchens & utility rooms",
      "Extended open time for larger format alignment accuracy",
      "Enhanced tensile adhesion & shock absorption capability"
    ],
    specifications: {
      standard: "IS 15477 : 2019 Type II",
      packSize: "20 kg laminated HDPE bag",
      bedThickness: "3 mm to 10 mm",
      openTime: "Approx. 30 minutes",
      adjustabilityTime: "Approx. 25 minutes",
      potLife: "Approx. 3 to 4 hours at 30°C",
      shearBondStrength: "≥ 1.50 N/mm² (Enhanced Grip)",
      walkInTime: "24 hours (grouting after 24 hrs)",
      coverage: "45 – 50 sq.ft per 20 kg bag (at 3 mm bed)"
    },
    suitableFor: [
      "Vitrified & semi-vitrified tiles up to 4 sq.ft",
      "Ceramic & porcelain tiles on floor & walls",
      "Bathrooms, kitchen backsplashes, shower wet zones",
      "Interior living rooms, corridors & commercial spaces",
      "Existing tile-on-tile (roughened) & smooth concrete bases"
    ],
    idealTrowel: "8mm x 8mm or 10mm x 10mm notched trowel"
  }
];

export const APPLICATION_STEPS = [
  {
    step: "01",
    title: "Surface Preparation",
    desc: "Ensure the substrate is structurally sound, clean, and free from loose plaster, oils, paint, and efflorescence. Dampen dry, porous substrates lightly with clean water prior to application.",
    tip: "Never lay tile adhesive on dusty or powdery masonry."
  },
  {
    step: "02",
    title: "Water Ratio & Mixing",
    desc: "Gradually add 20 kg of K Tile Bond to approx. 4.5 – 5.5 litres of clean, potable water. Mix with a slow-speed mechanical stirrer for 3–5 minutes until a smooth, lump-free paste is achieved. Allow 5 minutes slake time, then remix.",
    tip: "Do not add extra water after slake time."
  },
  {
    step: "03",
    title: "Notched Trowel Application",
    desc: "Apply the adhesive onto the substrate with the flat side of the trowel first, then comb through with the notched side at a 45° angle. Work in manageable areas that can be tiled within the 20-30 min open time.",
    tip: "Check for 100% adhesive contact on tile backside."
  },
  {
    step: "04",
    title: "Bedding & Alignment",
    desc: "Firmly press the dry tiles into the adhesive bed with a slight twisting motion to collapse the notches and ensure complete coverage. Tap gently with a rubber mallet. Align grout lines using spacers and let cure for 24 hours.",
    tip: "Clean excess adhesive from joints before setting."
  }
];

export const CERTIFICATIONS = [
  {
    title: "IS 15477 : 2019",
    subtitle: "Bureau of Indian Standards",
    desc: "Full conformity for Type I and Type II cementitious tile adhesives testing shear bond, tensile strength, and open time.",
    tag: "National Standard"
  },
  {
    title: "ZED Bronze",
    subtitle: "MSME Sustainable Scheme",
    desc: "Government of India recognized Zero Defect Zero Effect certification ensuring quality manufacturing and sustainable energy use.",
    tag: "Sustainable Govt. Cert"
  },
  {
    title: "UDYAM: TN-10-0056913",
    subtitle: "Ministry of MSME",
    desc: "Official registered enterprise manufacturing construction chemical materials in Tamil Nadu.",
    tag: "Recognized Enterprise"
  },
  {
    title: "100% Natural River Sand",
    subtitle: "In-House Graded",
    desc: "Kiln-processed and graded natural sand offering superior interlocking matrix compared to cheap quarry dust/filler.",
    tag: "Core Material Advantage"
  }
];
