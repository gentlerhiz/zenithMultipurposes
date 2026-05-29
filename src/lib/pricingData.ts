export type PricingTier = {
  name: string;
  packageName: string;
  price: string;
  summary: string;
  highlights: string[];
};

export type ServicePricing = {
  slug: string;
  name: string;
  tiers: PricingTier[];
};

export const services: ServicePricing[] = [
  {
    slug: "website-design",
    name: "Website Design and Setup",
    tiers: [
      { name: "Single Page Website", packageName: "Single Page Website", price: "₦80,000", summary: "Online CVs, personal brands, portfolios, event pages, one-service businesses", highlights: [] },
      { name: "Landing Page Website", packageName: "Landing Page Website", price: "₦100,000", summary: "Product launches, campaigns, lead generation, ads, promotions", highlights: [] },
      { name: "Small Business Website", packageName: "Small Business Website", price: "₦150,000", summary: "Startups and service businesses that need a clean multi-page online presence", highlights: [] },
      { name: "Standard Business Website", packageName: "Standard Business Website", price: "₦250,000", summary: "Businesses that need stronger branding, structured content, and more pages", highlights: [] },
      { name: "Corporate Website", packageName: "Corporate Website", price: "₦350,000", summary: "Companies, schools, NGOs, institutions, and established organizations", highlights: [] },
      { name: "Blog / News Website", packageName: "Blog / News Website", price: "₦250,000", summary: "Media brands, churches, commentary sites, publishing platforms", highlights: [] },
      { name: "E-commerce Website", packageName: "E-commerce Website", price: "₦500,000", summary: "Businesses selling products online with checkout and payment integration", highlights: [] },
      { name: "Booking Website", packageName: "Booking Website", price: "₦350,000", summary: "Hotels, clinics, salons, consultants, rentals, and reservation-based businesses", highlights: [] },
      { name: "Custom Web Platform", packageName: "Custom Web Platform", price: "₦1,500,000", summary: "Dashboards, portals, internal systems, member areas, custom workflows", highlights: [] },
    ],
  },
  {
    slug: "app-development",
    name: "App Development",
    tiers: [
      { name: "Electronic Menu App", packageName: "Electronic Menu App", price: "₦180,000", summary: "Restaurants, lounges, cafés, clubs, and hotels that want QR-based or digital menus", highlights: [] },
      { name: "Booking / Appointment App", packageName: "Booking / Appointment App", price: "₦300,000", summary: "Clinics, salons, consultants, hotels, and service brands taking bookings", highlights: [] },
      { name: "Delivery / Order App", packageName: "Delivery / Order App", price: "₦600,000", summary: "Food delivery, logistics, dispatch, and order-based businesses", highlights: [] },
      { name: "Customer Portal / Client Dashboard", packageName: "Customer Portal / Client Dashboard", price: "₦750,000", summary: "Agencies, service businesses, schools, and organizations managing users or clients", highlights: [] },
      { name: "Inventory / Business Management App", packageName: "Inventory / Business Management App", price: "₦850,000", summary: "Stores, warehouses, pharmacies, and operational businesses tracking stock or orders", highlights: [] },
      { name: "School / Learning App", packageName: "School / Learning App", price: "₦900,000", summary: "Academies, training brands, schools, and digital education platforms", highlights: [] },
      { name: "E-commerce Mobile / Web App", packageName: "E-commerce Mobile / Web App", price: "₦1,200,000", summary: "Brands that want a stronger shopping experience beyond a normal website", highlights: [] },
      { name: "Custom Business App", packageName: "Custom Business App", price: "₦1,500,000", summary: "Unique workflows, admin panels, automation, internal systems, and advanced integrations", highlights: [] },
    ],
  },
  {
    slug: "branding",
    name: "Business and Corporate Branding",
    tiers: [
      {
        name: "Fast-Track Business Branding",
        packageName: "Fast-Track Business Branding",
        price: "₦39,000",
        summary: "For new businesses that need a professional identity quickly.",
        highlights: [
          "1 logo design (full option, print-ready)",
          "1 business card design (single face)",
          "1 letterhead design",
          "1 banner design (dimension based on your requirement)",
          "1 ID card design (single face)",
          "2 e-flyer designs",
          "Social media profile makeover (profile image, cover, basic layout)",
        ],
      },
      {
        name: "Small Business Branding",
        packageName: "Small Business Branding",
        price: "₦59,000",
        summary: "For growing businesses that want to look established and credible.",
        highlights: [
          "1 logo design (full option, print-ready)",
          "Basic brand/design guide",
          "1 letterhead design",
          "2 business card designs (single face and double face)",
          "2 banner designs (dimension based on your requirement)",
          "1 company ID card design (single face)",
          "2 sticker designs",
          "3 e-flyer designs",
          "2 printable flyer designs",
          "Company profile (shareable and printable format)",
          "Social media profile makeover",
        ],
      },
      {
        name: "Full Business Branding / Rebranding",
        packageName: "Full Business Branding / Rebranding",
        price: "₦139,000",
        summary: "For established or scaling businesses that need a complete, consistent brand ecosystem.",
        highlights: [
          "1 logo design (full option, print-ready)",
          "Brand/design guide (fonts, colors, usage rules)",
          "2 business card designs (both double face)",
          "2 letterhead designs",
          "4 sticker designs",
          "2 banner designs (dimension based on your requirement)",
          "2 ID card designs (both double face)",
          "5 e-flyer designs",
          "5 printable flyer designs",
          "Social media profile overhaul (all core platforms)",
          "Google Business page setup and optimization",
        ],
      },
      {
        name: "Wedding Branding Package",
        packageName: "Wedding Branding Package",
        price: "₦35,000",
        summary: "For couples who want a unified, stylish visual identity for their event.",
        highlights: [
          "Custom wedding logo",
          "Wedding invitation design",
          "Wedding menu card design",
          "Wedding sticker design",
        ],
      },
    ],
  },
  {
    slug: "social-media",
    name: "Social Media Management and Setup",
    tiers: [
      {
        name: "Starter",
        packageName: "SMM Starter",
        price: "₦57,000/month",
        summary: "Entry-level visibility for new or low-activity brands.",
        highlights: [
          "10 posts per month (Instagram and Facebook)",
          "3 targeted ad campaigns per month",
          "Content creation and curation",
          "Basic account monitoring",
          "Trimonthly performance report (for contracts longer than 3 months)",
          "Estimated growth: 200–500 new followers per month (across platforms)",
        ],
      },
      {
        name: "Growth",
        packageName: "SMM Growth",
        price: "₦97,000/month",
        summary: "Balanced package for growing businesses that want consistent content and real results.",
        highlights: [
          "15 posts per month (Instagram and Facebook)",
          "5 targeted ad campaigns per month (run for longer durations)",
          "Content creation and curation",
          "Dedicated account monitoring",
          "Basic social media strategy consultation",
          "Trimonthly performance report (for contracts longer than 3 months)",
          "Estimated growth: 600–1,100 new followers per month (across platforms)",
        ],
      },
      {
        name: "Pro",
        packageName: "SMM Pro",
        price: "₦157,000/month",
        summary: "For brands that want a stronger push, deeper monitoring, and better ad performance.",
        highlights: [
          "20 posts per month (Instagram and Facebook)",
          "7 targeted ad campaigns per month (extended durations)",
          "Content creation and curation",
          "Advanced account monitoring",
          "Ad campaign setup, testing, and management",
          "Social media strategy consultation",
          "Trimonthly performance report (for contracts longer than 3 months)",
          "Estimated growth: 1,100–1,700 new followers per month (across platforms)",
        ],
      },
      {
        name: "Total Domination",
        packageName: "SMM Total Domination",
        price: "₦197,000/month",
        summary: "A full-service management solution for brands that want to maximize reach, control, and reputation.",
        highlights: [
          "30 posts per month (Instagram and Facebook)",
          "7–10 targeted ad campaigns per month (extended durations)",
          "Full content creation and curation",
          "Complete account monitoring (DMs, comments, basic community management)",
          "Ad campaign management and optimization",
          "Social media strategy consultation",
          "Crisis management and reputation support",
          "Trimonthly performance report (for contracts longer than 3 months)",
          "Estimated growth: 3,000+ new followers per month (across platforms)",
        ],
      },
    ],
  },
  {
    slug: "bulk-graphics",
    name: "Bulk Graphics Design",
    tiers: [
      {
        name: "Starter",
        packageName: "Single Design (banner, poster, flyer, invite, etc.)",
        price: "₦8,000 – ₦15,000 per design",
        summary: "Small batch graphics.",
        highlights: ["For basic corporate or event graphics"],
      },
      {
        name: "Standard",
        packageName: "Event Pack (wedding, conference, church program, political event)",
        price: "₦40,000 – ₦70,000 (4–7 designs)",
        summary: "Seasonal or campaign bundle.",
        highlights: [
          "Main banner, social media flyers, countdown posts, program cover, and more",
        ],
      },
      {
        name: "Premium",
        packageName: "Corporate Seasonal Pack (New Year / festive greetings)",
        price: "₦60,000 – ₦100,000 per season",
        summary: "Large scale graphic system.",
        highlights: ["Branded New Year or festive creatives for email, WhatsApp, socials, and print"],
      },
    ],
  },
  {
    slug: "ai-automation",
    name: "AI Automation Setup",
    tiers: [
      { name: "Customer Enquiry & Chatbot Setup", packageName: "Customer Enquiry & Chatbot Setup", price: "₦250,000", summary: "Businesses that receive repeated customer questions every day", highlights: ["Automates replies for FAQs, enquiries, service details, operating hours, and lead capture on website or WhatsApp"] },
      { name: "Lead Capture & Follow-Up Automation", packageName: "Lead Capture & Follow-Up Automation", price: "₦350,000", summary: "Real estate firms, agencies, service companies, and sales teams", highlights: ["Collects enquiries, qualifies leads, sends auto-responses, and moves prospects into a follow-up pipeline"] },
      { name: "School Admission & Student Enquiry Automation", packageName: "School Admission & Student Enquiry Automation", price: "₦400,000", summary: "Schools, academies, training centers", highlights: ["Handles admission enquiries, sends application guidance, organizes prospect details, and automates updates to parents or applicants"] },
      { name: "Examination to Result Workflow Automation", packageName: "Examination to Result Workflow Automation", price: "₦650,000", summary: "Schools and educational institutions", highlights: ["Automates result compilation flow, approval routing, student notification, and structured movement from exam records to released results"] },
      { name: "Appointment & Booking Automation", packageName: "Appointment & Booking Automation", price: "₦350,000", summary: "Hospitals, clinics, consultants, salons, and service offices", highlights: ["Automates booking requests, appointment reminders, confirmation messages, and schedule coordination"] },
      { name: "Internal Staff Request Automation", packageName: "Internal Staff Request Automation", price: "₦500,000", summary: "Companies with repeated admin requests", highlights: ["Automates leave requests, approvals, internal task routing, HR request logging, and staff notifications"] },
      { name: "Invoice, Payment & Reminder Automation", packageName: "Invoice, Payment & Reminder Automation", price: "₦450,000", summary: "Businesses managing repeated client billing cycles", highlights: ["Automates invoice sending, payment reminders, status tracking, and overdue follow-up messages"] },
      { name: "Document & Records Workflow Automation", packageName: "Document & Records Workflow Automation", price: "₦550,000", summary: "Schools, hospitals, companies, churches, legal or admin offices", highlights: ["Organizes form submissions, document routing, approval steps, internal filing, and update notifications"] },
      { name: "Internal Knowledge Base AI Assistant", packageName: "Internal Knowledge Base AI Assistant", price: "₦850,000", summary: "Companies that want staff to get answers faster", highlights: ["Creates an internal AI assistant trained on company information, policies, SOPs, product details, or staff documents"] },
      { name: "Multi-Department Workflow Automation", packageName: "Multi-Department Workflow Automation", price: "₦1,500,000", summary: "Medium to large businesses with several repeated processes", highlights: ["Connects multiple workflows across customer service, operations, admin, reporting, and internal communication"] },
      { name: "Custom Business AI System", packageName: "Custom Business AI System", price: "From ₦2,500,000", summary: "Organizations with unique operational needs", highlights: ["Tailored AI workflow setup based on business structure, approval chain, teams, and operational goals"] },
    ],
  },
];

export function getPricingForSlug(slug: string) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return [];
  return service.tiers.map((tier) => ({
    name: tier.packageName,
    price: tier.price,
    items: [tier.summary, ...tier.highlights],
  }));
}

export default services;
