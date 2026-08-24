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
    { label: "Payer Collections", href: routes.payerCollections, sub: "Payer-specific recovery", icon: "landmark" },
    { label: "Departments", href: routes.departments, sub: "Inside our operations", icon: "building" },
    { label: "Insurance Payers", href: routes.payers, sub: "500+ payer network", icon: "clipboard" },
    { label: "All Services", href: routes.services, sub: "Browse the full catalog", icon: "layers" },
  ],
  footer: { text: "Not sure what you need?", link: { label: "Get a free audit", href: routes.freeAudit } },
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
  footer: { text: "40+ specialties supported", link: { label: "View all specialties", href: routes.specialties } },
};

const resourcesMenu: Menu = {
  columns: 1,
  items: [
    { label: "Blog", href: `${routes.resources}#blog`, sub: "Billing insights & industry updates", icon: "newspaper" },
    { label: "Case Studies", href: `${routes.resources}#case-studies`, sub: "Real revenue lifts from real practices", icon: "bar-chart" },
    { label: "Guides & Whitepapers", href: `${routes.resources}#guides`, sub: "Deep-dive playbooks for practices", icon: "book" },
    { label: "FAQ", href: "/services/medical-billing#faq", sub: "Doctor-focused answers", icon: "message" },
    { label: "Newsletter", href: `${routes.resources}#resource-pack`, sub: "Monthly RCM brief", icon: "mail" },
  ],
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: routes.home },
  { label: "Services", href: routes.services, menu: servicesMenu },
  { label: "Specialties", href: routes.specialties, menu: specialtiesMenu },
  { label: "Calculator", href: routes.calculator },
  { label: "Resources", href: routes.resources, menu: resourcesMenu },
];

export const navCta = { label: "Free Audit", href: routes.freeAudit };

export const footerColumns: { title: string; links: MenuItem[] }[] = [
  {
    title: "Services",
    links: serviceSummaries.map((s) => ({ label: footerServiceLabel[s.slug] ?? s.name, href: s.path })),
  },
  {
    title: "Specialties",
    links: [
      { label: "All 40+ Specialties", href: routes.specialties },
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
    title: "Payers",
    links: [
      { label: "Medicare & Medicaid", href: `${routes.payers}#government` },
      { label: "Blue Cross Blue Shield", href: `${routes.payers}#bcbs` },
      { label: "Aetna", href: `${routes.payers}#aetna` },
      { label: "UnitedHealthcare", href: `${routes.payers}#unitedhealthcare` },
      { label: "Cigna", href: `${routes.payers}#cigna` },
      { label: "Humana", href: `${routes.payers}#humana` },
      { label: "All 500+ Payers", href: routes.payers },
      { label: "Free Audit", href: routes.freeAudit },
    ],
  },
];
