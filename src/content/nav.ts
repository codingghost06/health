import type { IconName } from "@/components/ui/icon";
import { routes } from "@/content/site";
import { footerServiceLabel, serviceSummaries } from "@/content/services/summary";

export interface MenuItem {
  label: string;
  href: string;
  sub?: string;
  icon?: IconName;
}

export interface Menu {
  /** Layout hint for the desktop dropdown. */
  columns: 1 | 3;
  items: MenuItem[];
  footer?: { text: string; link: { label: string; href: string } };
}

export interface NavItem {
  label: string;
  href: string;
  menu?: Menu;
}

const servicesMenu: Menu = {
  columns: 3,
  items: [
    ...serviceSummaries.map((s) => ({ label: s.name, href: s.path, sub: s.navSub, icon: s.icon })),
    { label: "Payer Follow-Up", href: routes.payerCollections, sub: "Organized payer communication", icon: "landmark" },
    { label: "Workflow Areas", href: routes.departments, sub: "How the work fits together", icon: "building" },
    { label: "Payer Environments", href: routes.payers, sub: "Common US payer contexts", icon: "clipboard" },
    { label: "All Services", href: routes.services, sub: "Browse the full catalog", icon: "layers" },
  ],
  footer: { text: "Not sure where to begin?", link: { label: "Discuss your workflow", href: routes.freeAudit } },
};

const specialtiesMenu: Menu = {
  columns: 3,
  items: [
    { label: "Cardiology", href: `${routes.specialties}#cardiology`, icon: "heart-pulse" },
    { label: "Orthopedics", href: `${routes.specialties}#orthopedics`, icon: "bone" },
    { label: "Neurology", href: `${routes.specialties}#neurology`, icon: "brain" },
    { label: "Oncology", href: `${routes.specialties}#oncology`, icon: "flask" },
    { label: "Primary Care", href: `${routes.specialties}#primary-care-internal-medicine`, icon: "stethoscope" },
    { label: "Urgent Care", href: `${routes.specialties}#urgent-care`, icon: "zap" },
    { label: "Behavioral Health", href: `${routes.specialties}#behavioral-health`, icon: "smile" },
    { label: "Radiology", href: `${routes.specialties}#radiology`, icon: "radio" },
    { label: "Pathology & Labs", href: `${routes.specialties}#pathology-labs`, icon: "microscope" },
    { label: "OB/GYN", href: `${routes.specialties}#obgyn`, icon: "flower" },
    { label: "Pediatrics", href: `${routes.specialties}#pediatrics`, icon: "baby" },
    { label: "Emergency Medicine", href: `${routes.specialties}#emergency-medicine`, icon: "ambulance" },
    { label: "Anesthesiology", href: `${routes.specialties}#anesthesiology`, icon: "moon" },
    { label: "Pain Management", href: `${routes.specialties}#pain-management`, icon: "pill" },
    { label: "Nephrology", href: `${routes.specialties}#nephrology`, icon: "droplets" },
  ],
  footer: { text: "Specialty needs vary by practice", link: { label: "Explore workflows", href: routes.specialties } },
};

const resourcesMenu: Menu = {
  columns: 1,
  items: [
    { label: "Billing Topics", href: `${routes.resources}#billing-topics`, sub: "Plain-language RCM education", icon: "newspaper" },
    { label: "Workflow Guides", href: `${routes.resources}#guides`, sub: "Practical questions to ask", icon: "book" },
    { label: "RCM Glossary", href: `${routes.resources}#glossary`, sub: "Common terms explained", icon: "file" },
    { label: "FAQ", href: "/services/medical-billing#faq", sub: "Service and onboarding answers", icon: "message" },
    { label: "Planning Calculator", href: routes.calculator, sub: "Model your own assumptions", icon: "bar-chart" },
  ],
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: routes.home },
  { label: "Services", href: routes.services, menu: servicesMenu },
  { label: "Specialties", href: routes.specialties, menu: specialtiesMenu },
  { label: "Revenue Cycle", href: "/services/revenue-cycle-management" },
  { label: "Resources", href: routes.resources, menu: resourcesMenu },
];

export const navCta = { label: "Request a Consultation", href: routes.freeAudit };

export const footerColumns: { title: string; links: MenuItem[] }[] = [
  {
    title: "Services",
    links: serviceSummaries.map((s) => ({ label: footerServiceLabel[s.slug] ?? s.name, href: s.path })),
  },
  {
    title: "Specialties",
    links: [
      { label: "Specialty Workflows", href: routes.specialties },
      { label: "Nephrology", href: `${routes.specialties}#nephrology` },
      { label: "Cardiology", href: `${routes.specialties}#cardiology` },
      { label: "Behavioral Health", href: `${routes.specialties}#behavioral-health` },
      { label: "Urgent Care", href: `${routes.specialties}#urgent-care` },
      { label: "Oncology", href: `${routes.specialties}#oncology` },
      { label: "Radiology", href: `${routes.specialties}#radiology` },
      { label: "Hospital Medicine", href: `${routes.specialties}#hospital-medicine` },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Payer Environments", href: routes.payers },
      { label: "Payer Follow-Up", href: routes.payerCollections },
      { label: "Workflow Areas", href: routes.departments },
      { label: "Planning Calculator", href: routes.calculator },
      { label: "Resources", href: routes.resources },
      { label: "Consultation", href: routes.freeAudit },
    ],
  },
];
