import { createFileRoute } from "@tanstack/react-router";
import { User, Target, HeartHandshake, TrendingUp } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ServiceCard } from "@/components/ServiceCard";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Jaxys's CodeCraft Studios" },
      {
        name: "description",
        content:
          "Meet Jaxy†Ralis, the web developer behind Jaxys's CodeCraft Studios. Building modern, mobile-friendly websites for South African businesses.",
      },
      { property: "og:title", content: "About — Jaxys's CodeCraft Studios" },
      {
        property: "og:description",
        content:
          "Meet Jaxy†Ralis, the web developer behind Jaxys's CodeCraft Studios. Building modern, mobile-friendly websites for South African businesses.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const values = [
  {
    icon: User,
    title: "Personal Approach",
    description:
      "I work directly with you to understand your business and build something that truly fits.",
  },
  {
    icon: Target,
    title: "Results Focused",
    description:
      "Every site is built to help customers find you, trust you, and take action.",
  },
  {
    icon: HeartHandshake,
    title: "Honest Guidance",
    description:
      "No pushy upsells. I'll recommend what you actually need and explain it in plain language.",
  },
  {
    icon: TrendingUp,
    title: "Built to Grow",
    description:
      "Your website can start simple and expand as your business grows — add pages, features, or integrations later.",
  },
];

function AboutPage() {
  return (
    <main className="flex flex-col">
      <section className="border-b border-border bg-card/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              About Jaxys's CodeCraft Studios
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Modern websites built for real South African businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Hi, I'm Jaxy†Ralis
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  I'm a web developer and coder based in South Africa, and I run{" "}
                  <strong className="text-foreground">Jaxys's CodeCraft Studios</strong>. I help
                  businesses get online with websites that are fast, professional, and easy to use.
                </p>
                <p>
                  I know that many small businesses still don't have a website — or have one that
                  doesn't work well on mobile. That's why I focus on building sites that look great
                  on every device and make it easy for customers to contact you.
                </p>
                <p>
                  From simple business pages to more advanced projects with bookings, payments, or
                  custom features, I build each site around what the business actually needs.
                </p>
              </div>
              <div className="mt-8">
                <WhatsAppButton size="lg" />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl font-semibold text-foreground">Why a website matters</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Customers search online before they decide where to shop or who to call.",
                  "A professional website builds trust before a customer ever contacts you.",
                  "Your site works 24/7 — showing services, prices, and contact details.",
                  "Mobile-friendly design means you don't lose customers on their phones.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">How I work</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Straightforward process, clear communication, and a site built for your goals.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <ServiceCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
