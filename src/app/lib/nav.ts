export type NavItem = {
  label: string;
  href: string;
  description: string;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

export const navSections: NavSection[] = [
  {
    title: "Core",
    items: [
      { label: "Overview", href: "/", description: "System status" },
      { label: "Operations", href: "/operations", description: "Daily controls" },
      { label: "Accounts", href: "/accounts", description: "Tenant setup" },
      { label: "Users", href: "/users", description: "Accounts & access" },
    ],
  },
  {
    title: "Platform",
    items: [
      { label: "Communities", href: "/communities", description: "Portfolio" },
      { label: "Residents", href: "/residents", description: "Resident view" },
      { label: "Billing", href: "/billing", description: "Revenue flows" },
      { label: "Usage", href: "/usage", description: "Storage & activity" },
      { label: "Integrations", href: "/integrations", description: "External tools" },
    ],
  },
  {
    title: "Governance",
    items: [
      { label: "Roles", href: "/roles", description: "Policy rules" },
      { label: "Audit Log", href: "/audit", description: "Events" },
      { label: "Cron", href: "/cron", description: "Automations" },
      { label: "System", href: "/system", description: "Global settings" },
    ],
  },
];
