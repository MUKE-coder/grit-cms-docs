export interface NavItem {
  title: string;
  slug: string;
  href: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const navigation: NavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", slug: "getting-started/introduction", href: "/docs/getting-started/introduction" },
      { title: "Installation", slug: "getting-started/installation", href: "/docs/getting-started/installation" },
      { title: "Quick Start", slug: "getting-started/quick-start", href: "/docs/getting-started/quick-start" },
    ],
  },
  {
    title: "Configuration",
    items: [
      { title: "Environment Variables", slug: "configuration/environment", href: "/docs/configuration/environment" },
      { title: "Database", slug: "configuration/database", href: "/docs/configuration/database" },
      { title: "Email & SMTP", slug: "configuration/email-smtp", href: "/docs/configuration/email-smtp" },
      { title: "File Storage", slug: "configuration/file-storage", href: "/docs/configuration/file-storage" },
    ],
  },
  {
    title: "Website Builder",
    items: [
      { title: "Pages", slug: "website/pages", href: "/docs/website/pages" },
      { title: "Blog Posts", slug: "website/blog-posts", href: "/docs/website/blog-posts" },
      { title: "Categories & Tags", slug: "website/categories-tags", href: "/docs/website/categories-tags" },
      { title: "Menus", slug: "website/menus", href: "/docs/website/menus" },
      { title: "Theme & Appearance", slug: "website/theme", href: "/docs/website/theme" },
      { title: "SEO", slug: "website/seo", href: "/docs/website/seo" },
    ],
  },
  {
    title: "Email Marketing",
    items: [
      { title: "Email Lists", slug: "email/lists", href: "/docs/email/lists" },
      { title: "Campaigns", slug: "email/campaigns", href: "/docs/email/campaigns" },
      { title: "Templates", slug: "email/templates", href: "/docs/email/templates" },
      { title: "Sequences", slug: "email/sequences", href: "/docs/email/sequences" },
      { title: "Segments", slug: "email/segments", href: "/docs/email/segments" },
    ],
  },
  {
    title: "Courses",
    items: [
      { title: "Overview", slug: "courses/overview", href: "/docs/courses/overview" },
      { title: "Modules & Lessons", slug: "courses/modules-lessons", href: "/docs/courses/modules-lessons" },
      { title: "Students", slug: "courses/students", href: "/docs/courses/students" },
    ],
  },
  {
    title: "Products & Commerce",
    items: [
      { title: "Products", slug: "commerce/products", href: "/docs/commerce/products" },
      { title: "Orders", slug: "commerce/orders", href: "/docs/commerce/orders" },
      { title: "Coupons", slug: "commerce/coupons", href: "/docs/commerce/coupons" },
    ],
  },
  {
    title: "Community",
    items: [
      { title: "Spaces", slug: "community/spaces", href: "/docs/community/spaces" },
      { title: "Threads & Replies", slug: "community/threads", href: "/docs/community/threads" },
      { title: "Events", slug: "community/events", href: "/docs/community/events" },
    ],
  },
  {
    title: "Contacts CRM",
    items: [
      { title: "Managing Contacts", slug: "contacts/managing", href: "/docs/contacts/managing" },
      { title: "Tags & Segments", slug: "contacts/tags-segments", href: "/docs/contacts/tags-segments" },
    ],
  },
  {
    title: "Funnels",
    items: [
      { title: "Creating Funnels", slug: "funnels/creating", href: "/docs/funnels/creating" },
      { title: "Funnel Steps", slug: "funnels/steps", href: "/docs/funnels/steps" },
      { title: "Tracking & Conversions", slug: "funnels/tracking", href: "/docs/funnels/tracking" },
    ],
  },
  {
    title: "Booking",
    items: [
      { title: "Calendars", slug: "booking/calendars", href: "/docs/booking/calendars" },
      { title: "Event Types", slug: "booking/event-types", href: "/docs/booking/event-types" },
      { title: "Appointments", slug: "booking/appointments", href: "/docs/booking/appointments" },
    ],
  },
  {
    title: "Affiliates",
    items: [
      { title: "Programs", slug: "affiliates/programs", href: "/docs/affiliates/programs" },
      { title: "Links & Referrals", slug: "affiliates/links", href: "/docs/affiliates/links" },
      { title: "Commissions & Payouts", slug: "affiliates/commissions", href: "/docs/affiliates/commissions" },
    ],
  },
  {
    title: "Automation",
    items: [
      { title: "Workflows", slug: "automation/workflows", href: "/docs/automation/workflows" },
      { title: "Triggers & Actions", slug: "automation/triggers-actions", href: "/docs/automation/triggers-actions" },
    ],
  },
  {
    title: "Settings",
    items: [
      { title: "General", slug: "settings/general", href: "/docs/settings/general" },
      { title: "Branding", slug: "settings/branding", href: "/docs/settings/branding" },
    ],
  },
  {
    title: "Deployment",
    items: [
      { title: "Local Development", slug: "deployment/local", href: "/docs/deployment/local" },
      { title: "Docker", slug: "deployment/docker", href: "/docs/deployment/docker" },
      { title: "Dokploy (VPS)", slug: "deployment/dokploy", href: "/docs/deployment/dokploy" },
    ],
  },
];

export function getAllItems(): NavItem[] {
  return navigation.flatMap((group) => group.items);
}

export function getPrevNext(currentSlug: string) {
  const items = getAllItems();
  const index = items.findIndex((item) => item.slug === currentSlug);
  return {
    prev: index > 0 ? items[index - 1] : null,
    next: index < items.length - 1 ? items[index + 1] : null,
  };
}

export function getBreadcrumbs(currentSlug: string) {
  for (const group of navigation) {
    const item = group.items.find((i) => i.slug === currentSlug);
    if (item) {
      return [
        { title: "Docs", href: "/docs/getting-started/introduction" },
        { title: group.title, href: group.items[0].href },
        { title: item.title, href: item.href },
      ];
    }
  }
  return [{ title: "Docs", href: "/docs/getting-started/introduction" }];
}
