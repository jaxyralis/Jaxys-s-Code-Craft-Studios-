import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ShoppingCart,
  Calendar,
  CreditCard,
  Search,
  Smartphone,
  Palette,
  Shield,
  Rocket,
  Globe,
  Code2,
  Zap,
  Settings,
  PenTool,
  Check,
} from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ServiceCard } from "@/components/ServiceCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type WebsitePackage = {
  tier: string;
  price: string;
  tagline: string;
  maintenance: string;
  features: string[];
  excludes: string[];
  highlight: boolean;
};

function PackageCard({ pkg }: { pkg: WebsitePackage }) {
  const [businessName, setBusinessName] = useState("");
  const trimmed = businessName.trim();
  const message = trimmed
    ? `Hi Jaxy†Ralis, I'm interested in the ${pkg.tier} website package for my business "${trimmed}".`
    : `Hi Jaxy†Ralis, I'm interested in the ${pkg.tier} website package.`;
  const inputId = `business-name-${pkg.tier.toLowerCase()}`;

  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-6 transition-all ${
        pkg.highlight
          ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
          : "border-border bg-background/40 hover:border-primary/40"
      }`}
    >
      {pkg.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
          Most popular
        </div>
      )}
      <div className="text-sm font-medium uppercase tracking-wider text-primary">{pkg.tier}</div>
      <div className="mt-2 text-3xl font-extrabold text-foreground">{pkg.price}</div>
      <p className="mt-2 text-sm text-muted-foreground">{pkg.tagline}</p>
      <div className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
        {pkg.maintenance}
      </div>
      <ul className="mt-6 flex flex-1 flex-col gap-3 text-left text-sm text-muted-foreground">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
        {pkg.excludes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-muted-foreground/70">
            <span className="mt-0.5 text-xs">✕</span>
            <span className="line-through">{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 space-y-2">
        <Label htmlFor={inputId} className="text-xs font-medium text-foreground">
          Your business name
        </Label>
        <Input
          id={inputId}
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          placeholder="e.g. Thandi's Bakery"
          maxLength={80}
          className="bg-background"
        />
      </div>
      <WhatsAppButton size="lg" className="mt-3 w-full" message={message}>
        {trimmed ? `Chat about ${pkg.tier} for ${trimmed}` : "Chat on WhatsApp"}
      </WhatsAppButton>
    </div>
  );
}

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Jaxys's CodeCraft Studios" },
      {
        name: "description",
        content:
          "Web design, custom logos, and maintenance plans for South African businesses. Business websites, e-commerce, bookings, payments, SEO, and more.",
      },
      { property: "og:title", content: "Services — Jaxys's CodeCraft Studios" },
      {
        property: "og:description",
        content:
          "Web design, custom logos, and maintenance plans for South African businesses. Business websites, e-commerce, bookings, payments, SEO, and more.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "A professional online presence with your services, about info, contact details, and branding — everything customers need to choose you.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Stores",
    description:
      "Sell products online with a catalog, shopping cart, secure checkout, and order management.",
  },
  {
    icon: Calendar,
    title: "Booking Systems",
    description:
      "Let customers book appointments or services directly through your website, with automated availability and confirmations.",
  },
  {
    icon: CreditCard,
    title: "Online Payments",
    description:
      "Accept card payments, EFT, or other payment methods securely integrated into your site.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Design",
    description:
      "Every site is built to look and work beautifully on phones, tablets, and desktops.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description:
      "Optimized code, images, and hosting setup so your pages load quickly and rank better.",
  },
  {
    icon: Search,
    title: "SEO Foundations",
    description:
      "Search-engine-friendly structure, meta tags, and content guidance so customers can find you on Google.",
  },
  {
    icon: Palette,
    title: "Custom Design",
    description:
      "Unique designs that match your brand, colours, and the impression you want to make.",
  },
  {
    icon: PenTool,
    title: "Custom Logos",
    description:
      "A unique logo designed to represent your business and make your brand instantly recognisable.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "SSL certificates, secure forms, and reliable hosting so your site stays safe and available.",
  },
  {
    icon: Code2,
    title: "Custom Features",
    description:
      "Need something specific? I can build calculators, forms, dashboards, integrations, and more.",
  },
  {
    icon: Settings,
    title: "Maintenance & Updates",
    description:
      "Ongoing support to keep your site updated, backed up, and running smoothly. Choose a plan that fits you.",
  },
  {
    icon: Rocket,
    title: "Launch Support",
    description:
      "I'll help you launch your site, connect your domain, and make sure everything is working.",
  },
];

const maintenancePlans = [
  {
    duration: "2 Weeks",
    price: "R50",
    features: ["Minor edits & updates", "Bug fixes", "Quick turnaround"],
  },
  {
    duration: "1 Month",
    price: "R110",
    features: ["Regular content updates", "Performance checks", "Priority support"],
  },
  {
    duration: "3 Months",
    price: "R210",
    features: ["Ongoing maintenance", "Security & backups", "Feature tweaks"],
  },
];

const websitePackages = [
  {
    tier: "Basic",
    price: "R250",
    tagline: "Perfect starter site to get your business online.",
    maintenance: "No maintenance plan",
    features: [
      "Business website with your services, about, contact & branding",
      "Mobile-friendly design",
      "SSL certificate & secure forms",
      "Custom logo",
    ],
    excludes: ["No online payments", "No booking system", "No SEO foundations"],
    highlight: false,
  },
  {
    tier: "Premium",
    price: "R500",
    tagline: "Sell online and get found on Google.",
    maintenance: "Includes 1 month maintenance",
    features: [
      "E-commerce store with catalog & checkout",
      "Online payments (card, EFT & more)",
      "SEO foundations for Google visibility",
      "SSL certificate & reliable hosting setup",
      "Custom logo",
    ],
    excludes: [],
    highlight: true,
  },
  {
    tier: "Professional",
    price: "R1,000",
    tagline: "Full-featured site with bookings, payments & more.",
    maintenance: "Includes 3 months maintenance",
    features: [
      "E-commerce store with catalog, cart & order management",
      "Booking system with automated availability",
      "Online payments (card, EFT & more)",
      "Mobile-friendly, fast-loading design",
      "SEO foundations for better Google ranking",
      "SSL certificate & reliable hosting setup",
      "Custom logo",
    ],
    excludes: [],
    highlight: false,
  },
];

function ServicesPage() {
  return (
    <main className="flex flex-col">
      <section className="border-b border-border bg-card/30 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Whether you need a simple website with your services and contact information or
            something more advanced with bookings or online payments, I can help.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Website packages
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Choose the package that fits your business
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Transparent pricing with maintenance included on Premium and Professional plans.
              Most websites are completed within 1 – 2 weeks. Not sure which one? Chat with me on
              WhatsApp and I'll help you decide.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {websitePackages.map((pkg) => (
              <PackageCard key={pkg.tier} pkg={pkg} />
            ))}
          </div>

        </div>
      </section>

      <section className="border-y border-border bg-card/30 py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Website maintenance & editing
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Keep your site fresh, secure, and up to date with a simple maintenance plan.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {maintenancePlans.map((plan) => (
              <div
                key={plan.duration}
                className="flex flex-col rounded-2xl border border-border bg-background/40 p-6 text-center transition-all hover:border-primary/40"
              >
                <div className="text-sm font-medium uppercase tracking-wider text-primary">
                  {plan.duration}
                </div>
                <div className="mt-2 text-4xl font-extrabold text-foreground">{plan.price}</div>
                <ul className="mt-6 flex flex-1 flex-col gap-3 text-left text-sm text-muted-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <WhatsAppButton
                  size="lg"
                  className="mt-6 w-full"
                  message={`Hi Jaxy†Ralis, I'm interested in the ${plan.duration} maintenance plan for my website.`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Not sure what you need?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell me about your business and I'll recommend the right solution — no obligation, no
            pressure.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <WhatsAppButton size="lg" />
            <span className="text-sm text-muted-foreground">or call 066 582 3646</span>
          </div>
        </div>
      </section>
    </main>
  );
}
