export type Project = {
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  language: string | null;
  updated_at: string;
};

export const fallbackProjects: Project[] = [
  {
    name: "mobile-shop",
    description:
      "Customer-facing shop for phone-repair parts — catalog, custom banners, and a paired admin CRM for day-to-day management.",
    html_url: "https://github.com/kasiasaif/mobile-shop",
    homepage: "https://tescgsm.es/",
    language: "TypeScript",
    updated_at: "2026-11-04T18:19:50Z",
  },
  {
    name: "tescgsm-admin",
    description:
      "Admin CRM for the shop: catalog control, staff roles, and homepage banners — built to keep operations clear and efficient.",
    html_url: "https://github.com/kasiasaif/tescgsm-admin",
    homepage: "https://tescgsm-admin.onrender.com",
    language: "TypeScript",
    updated_at: "2026-11-04T18:19:21Z",
  },
  {
    name: "linen-housekeeping",
    description:
      "Booking platform for Linen Housekeeping — scheduling and a polished client-facing booking flow.",
    html_url: "https://github.com/kasiasaif/linen-housekeeping",
    homepage: "https://www.linenhousekeeping.co.uk/",
    language: "TypeScript",
    updated_at: "2026-10-19T08:17:59Z",
  },
  {
    name: "holt-fenwick",
    description:
      "Company website for Holt + Fenwick construction — clear structure and a professional public presence.",
    html_url: "https://github.com/kasiasaif/holt-fenwick",
    homepage: "https://kasiasaif.github.io/holt-fenwick/",
    language: "TypeScript",
    updated_at: "2026-09-20T20:24:15Z",
  },
  {
    name: "beautyservice",
    description:
      "Marketing site for Liora Atelier — a beauty and wellbeing studio with a calm, brand-led experience.",
    html_url: "https://github.com/kasiasaif/beautyservice",
    homepage: "https://kasiasaif.github.io/beautyservice/",
    language: "TypeScript",
    updated_at: "2026-09-20T19:39:36Z",
  },
  {
    name: "orange-home-health",
    description:
      "Website refresh for Orange Home Health Inc, a Los Angeles home health agency.",
    html_url: "https://github.com/kasiasaif/orange-home-health",
    homepage: null,
    language: "HTML",
    updated_at: "2026-09-20T19:42:57Z",
  },
];

export function formatProjectTitle(name: string) {
  return name
    .split(/[-_]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
