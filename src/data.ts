import { Service, Feature, Stat, Project, ProcessStep, EquipmentItem, Testimonial, TeamMember, SafetyPoint } from './types';

export const HERO_DATA = {
  logoText: "Royal Legacy",
  logoTagline: "Engineering & Construction",
  title: "Building Strong Foundations for Tomorrow",
  tagline: "Building Excellence. Delivering the Future.",
  description: "We deliver world-class construction, engineering, renovation, and infrastructure solutions with quality, safety, and innovation at the core of every project.",
  images: {
    hero: "/src/assets/images/construction_hero_1783008758961.jpg",
    residential: "/src/assets/images/residential_render_1783008775113.jpg",
    road: "/src/assets/images/road_construction_1783008793193.jpg",
    executive: "/src/assets/images/ceo_executive_director_1783017818669.jpg",
    casting: "/src/assets/images/concrete_casting_1783008827252.jpg",
  }
};

export const ABOUT_DATA = {
  headline: "Who We Are",
  subheadline: "A Legacy of Structural Brilliance and Engineering Integrity",
  description1: "Royal Legacy Engineering construction is a premier multi-disciplinary construction and infrastructure development firm. Founded on the principles of engineering excellence and uncompromising quality, we have grown to handle multi-million-dollar landmark projects across the nation.",
  description2: "We specialize in state-of-the-art developments, ranging from towering commercial skyscrapers to expansive road networks and modern residential luxury properties. Our approach integrates sustainable building materials, advanced BIM (Building Information Modeling), and rigorous safety protocols to deliver future-proof results.",
  mission: "To construct enduring structures that empower communities, drive economic growth, and exceed architectural limits through precision engineering, innovation, and client-centric solutions.",
  vision: "To be the globally recognized benchmark for engineering sophistication, sustainable construction practices, and reliable project delivery.",
  values: [
    { title: "Engineering Excellence", desc: "Pushing the boundaries of design and engineering to deliver structurally sound, beautiful edifices." },
    { title: "Safety First", desc: "An unyielding commitment to the health, protection, and safety of our workers, clients, and partners." },
    { title: "Uncompromising Integrity", desc: "Honesty, transparency, and high ethical standards in all commercial contracts and actions." },
    { title: "Sustainable Building", desc: "Utilizing eco-friendly technologies, materials, and processes to minimize our carbon footprint." }
  ],
  image: "/src/assets/images/concrete_casting_1783008827252.jpg"
};

export const SERVICES_DATA: Service[] = [
  {
    id: "commercial",
    icon: "Building2",
    title: "Commercial Construction",
    description: "State-of-the-art office spaces, skyscrapers, corporate centers, and retail complexes designed with modern architectural excellence and intelligent spatial utilization."
  },
  {
    id: "residential",
    icon: "Home",
    title: "Residential Construction",
    description: "Premium luxury condominiums, private estates, and multi-family residential projects constructed with bespoke finishes and tailored spatial design."
  },
  {
    id: "renovation",
    icon: "Briefcase",
    title: "Building Renovation",
    description: "Turnkey architectural retrofitting, structural reinforcement, historical restoration, and modern energy-efficiency upgrades for commercial and private properties."
  },
  {
    id: "civil",
    icon: "HardHat",
    title: "Civil Engineering",
    description: "Complex structural designs, bridges, utility networks, water treatment facilities, and structural analyses designed to withstand environmental and loading demands."
  },
  {
    id: "road",
    icon: "Hammer",
    title: "Road Construction",
    description: "High-load arterial highway systems, asphalt paving, grading, urban road networks, and sustainable drainage solutions engineered for optimal transit safety."
  },
  {
    id: "industrial",
    icon: "Factory",
    title: "Industrial Projects",
    description: "Heavy-duty manufacturing plants, automated logistics warehouses, thermal plants, and process facilities featuring custom heavy structural steelwork."
  }
];

export const FEATURES_DATA: Feature[] = [
  {
    id: "certified-engineers",
    icon: "Award",
    title: "Certified Engineers",
    description: "Our elite team comprises fully licensed, board-certified civil, structural, and electrical engineers with decades of cumulative global field experience."
  },
  {
    id: "on-time-delivery",
    icon: "Clock",
    title: "On-Time Delivery",
    description: "Using advanced scheduling tools, agile logistics networks, and round-the-clock shift structures, we consistently complete projects within designated delivery timelines."
  },
  {
    id: "quality-materials",
    icon: "ShieldCheck",
    title: "Quality Materials",
    description: "We source cement, structural steel, aggregates, and polymers exclusively from certified producers meeting rigorous ISO tensile and yield thresholds."
  },
  {
    id: "competitive-pricing",
    icon: "DollarSign",
    title: "Competitive Pricing",
    description: "Through deep supply-chain relationships and waste mitigation strategies, we provide premium structural quality at optimized, value-driven rates."
  }
];

export const STATS_DATA: Stat[] = [
  { id: "projects", value: 500, suffix: "+", label: "Completed Projects" },
  { id: "clients", value: 250, suffix: "+", label: "Happy Clients" },
  { id: "experience", value: 20, suffix: "+", label: "Years Experience" },
  { id: "workers", value: 150, suffix: "+", label: "Professional Workers" },
  { id: "awards", value: 25, suffix: "", label: "Industry Awards" }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "legacy-heights",
    title: "The Legacy Heights Tower",
    category: "Commercial",
    image: "/src/assets/images/construction_hero_1783008758961.jpg",
    location: "Metropolis Financial Center",
    year: "2025",
    description: "A 45-story commercial skyscraper featuring column-free interior floor plates, double-glazed energy-saving low-E glass facade, and premium gold-accented lobby columns."
  },
  {
    id: "royal-gardens",
    title: "Royal Gardens Residence",
    category: "Residential",
    image: "/src/assets/images/residential_render_1783008775113.jpg",
    location: "Elite Coast Residential District",
    year: "2026",
    description: "A highly prestigious, modern 3-story multi-family residential development showcasing deep navy accents, concrete grey walls, expansive glass balustrades, and native gardens."
  },
  {
    id: "expressway-rehab",
    title: "Interstate Expressway Overpass",
    category: "Roads",
    image: "/src/assets/images/road_construction_1783008793193.jpg",
    location: "Central Expressway Corridor",
    year: "2024",
    description: "Rehabilitation and grading of an 8-lane expressway including pre-stressed concrete girder installations, heavy asphalt compaction, and retrofitted rainwater collectors."
  },
  {
    id: "river-bridge",
    title: "Sovereign Suspension Bridge",
    category: "Bridges",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    location: "Sovereign Delta Estuary",
    year: "2023",
    description: "A modern structural suspension bridge designed to accommodate heavy shipping lane channels below while enduring Category-5 wind loadings."
  },
  {
    id: "eco-industrial-park",
    title: "Aero Logistics Warehouse Center",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=1200&q=80",
    location: "International Gateway Transit Hub",
    year: "2025",
    description: "An fully automated eco-industrial distribution hub utilizing heavy portal structural frames, solar roofs, and reinforced heavy-load concrete flooring slab systems."
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    step: 1,
    title: "Consultation",
    description: "We conduct detailed structural site investigations, feasibility assessments, budget modeling, and comprehensive client vision interviews.",
    icon: "Users"
  },
  {
    step: 2,
    title: "Planning",
    description: "Drafting rigorous engineering workflows, resource schedules, strict safety checklists, and procurement blueprints with critical path methods.",
    icon: "FileText"
  },
  {
    step: 3,
    title: "Design",
    description: "Creating premium 3D BIM models, structural shear calculations, aesthetic rendering blueprints, and environmental compatibility layouts.",
    icon: "Layout"
  },
  {
    step: 4,
    title: "Construction",
    description: "Mobilizing heavy structural machinery, driving foundational piles, pouring custom high-tensile concrete, and framing floor structures.",
    icon: "Wrench"
  },
  {
    step: 5,
    title: "Quality Inspection",
    description: "Conducting continuous ultrasonic steel testing, concrete cylinder compression trials, thermal leak surveys, and compliance approvals.",
    icon: "Eye"
  },
  {
    step: 6,
    title: "Project Delivery",
    description: "Performing site detailing, systems commissioning, operations training, and handing over the keys of the engineered masterpiece on-time.",
    icon: "CheckCircle"
  }
];

export const EQUIPMENT_DATA: EquipmentItem[] = [
  {
    id: "excavator",
    name: "CAT 336 Heavy Excavator",
    category: "Earthmoving",
    image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=600&q=80",
    specs: [
      { label: "Operating Weight", value: "37,200 kg" },
      { label: "Net Power", value: "234 kW (314 HP)" },
      { label: "Max Dig Depth", value: "7.53 meters" }
    ]
  },
  {
    id: "crane",
    name: "Liebherr LTM 1120 Mobile Crane",
    category: "Lifting",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80",
    specs: [
      { label: "Max Lift Capacity", value: "120 tons" },
      { label: "Telescopic Boom", value: "66 meters" },
      { label: "Drive Chassis", value: "8 x 6 x 8" }
    ]
  },
  {
    id: "bulldozer",
    name: "Komatsu D65EX Bulldozer",
    category: "Earthmoving",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    specs: [
      { label: "Operating Weight", value: "22,100 kg" },
      { label: "Blade Capacity", value: "5.6 cubic meters" },
      { label: "Engine Power", value: "162 kW (217 HP)" }
    ]
  },
  {
    id: "mixer",
    name: "Putmeister P715 Concrete Pump & Mixer",
    category: "Concrete",
    image: "/src/assets/images/road_construction_1783008793193.jpg",
    specs: [
      { label: "Max Output", value: "17.4 cubic meters/hr" },
      { label: "Delivery Pressure", value: "68 bar" },
      { label: "Max Aggregate Size", value: "16 mm" }
    ]
  },
  {
    id: "dump-truck",
    name: "Volvo FMX 8x4 Heavy Tipper",
    category: "Transport",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80",
    specs: [
      { label: "Payload Capacity", value: "32 tons" },
      { label: "Gross Weight", value: "48,000 kg" },
      { label: "Engine displacement", value: "12.8 liters" }
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "client-1",
    name: "Engr. Alhaji Muhammad",
    role: "Managing Director",
    company: "Legacy Holdings West Africa Ltd.",
    content: "Royal Legacy Engineering construction is unmatched in structural precision. They successfully built our 45-story commercial skyscraper, delivering on-time, strictly within budget, and with outstanding architectural quality. Their executive team's attention to detail is remarkable.",
    rating: 5,
    image: "/src/assets/images/ceo_executive_director_1783017818669.jpg"
  },
  {
    id: "client-2",
    name: "Victoria Sterling",
    role: "VP of Infrastructure Projects",
    company: "Metropolitan Transit Union",
    content: "Our expressway overpass and highway rehabilitation required flawless execution without disrupting surrounding traffic. Royal Legacy Engineering brought state-of-the-art machinery and working shifts that delivered ahead of schedule. Truly professional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "client-3",
    name: "Dr. Arthur Pendelton",
    role: "Board Chairman",
    company: "Beacon Real Estate Syndicate",
    content: "From the initial 3D design models to the final stone details, Royal Legacy showed the expertise of a world-class firm. The 3-story modern apartment units are a masterpiece of construction. Clients are absolutely thrilled.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80"
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: "team-1",
    name: "Engr. Alhaji Muhammad",
    role: "Founder & Chief Executive Officer",
    image: "/src/assets/images/ceo_executive_director_1783017818669.jpg",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "ceo@royallegacy.com"
    }
  },
  {
    id: "team-2",
    name: "Elena Rostova",
    role: "Senior Architectural Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
    socials: {
      linkedin: "https://linkedin.com",
      email: "e.rostova@royallegacy.com"
    }
  },
  {
    id: "team-3",
    name: "Marcus Vance",
    role: "Chief Structural Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "m.vance@royallegacy.com"
    }
  },
  {
    id: "team-4",
    name: "David Kalu",
    role: "Director of Workplace Safety & ISO Compliance",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80",
    socials: {
      linkedin: "https://linkedin.com",
      email: "d.kalu@royallegacy.com"
    }
  }
];

export const SAFETY_COMMITMENT_DATA: SafetyPoint[] = [
  {
    id: "worker-safety",
    icon: "ShieldAlert",
    title: "Worker Safety",
    description: "Zero Incident Goal: Continuous OSHA-compliant on-site briefings, heavy safety netting, custom harness systems, and automated proximity sensors on all cranes."
  },
  {
    id: "env-protection",
    icon: "Leaf",
    title: "Environmental Protection",
    description: "Strict on-site aggregate recycling, silt fencing to prevent river runoff, low-carbon geo-polymer cements, and optimized truck routing to reduce emissions."
  },
  {
    id: "quality-assurance",
    icon: "ClipboardCheck",
    title: "Quality Assurance",
    description: "Multi-point testing loops for concrete compression (ASTM standards) and structural weld checking via ultrasonic testing prior to slab loads."
  },
  {
    id: "iso-standards",
    icon: "Award",
    title: "ISO Standards",
    description: "Proudly certified in ISO 9001 (Quality Management), ISO 14001 (Environmental Management), and ISO 45001 (Occupational Health & Safety)."
  },
  {
    id: "sustainable-construction",
    icon: "Cpu",
    title: "Sustainable Construction",
    description: "Incorporating state-of-the-art building science, thermal modeling, green roof technologies, and advanced solar collection units into active designs."
  }
];

export const BLOG_DATA = [
  {
    id: "blog-1",
    title: "The Future of Structural Steel in Modern High-Rise Designs",
    date: "June 25, 2026",
    category: "Engineering",
    excerpt: "Explore how high-yield steel and pre-engineered steel frames are revolutionizing office towers' spatial flexibility and earthquake resistance.",
    image: "/src/assets/images/construction_hero_1783008758961.jpg"
  },
  {
    id: "blog-2",
    title: "Best Practices in High-Tensile Concrete Casting & Curing",
    date: "May 18, 2026",
    category: "Tech",
    excerpt: "Curing time determines the long-term reliability of concrete slabs. Learn how sensor-based hydration trackers ensure pristine ISO results on complex stairwells.",
    image: "/src/assets/images/concrete_casting_1783008827252.jpg"
  },
  {
    id: "blog-3",
    title: "How Sustainable Road Compaction Reduces Future Potholes",
    date: "April 02, 2026",
    category: "Infrastructure",
    excerpt: "Integrating smart asphalt compaction monitoring can double highway pavement lifetimes while reducing maintenance and environmental costs.",
    image: "/src/assets/images/road_construction_1783008793193.jpg"
  }
];
