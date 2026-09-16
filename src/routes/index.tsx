import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, Code2, Globe, Rocket, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ServiceCard } from "@/components/ServiceCard";
import { ReviewsSection } from "@/components/ReviewsSection";
import heroBg from "@/assets/python-bg.jpeg.asset.json";
import workQueenFabHero from "@/assets/work-queenfab-hero.jpg.asset.json";
import workQueenFabTraining from "@/assets/work-queenfab-training.jpg.asset.json";


export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Jaxys's CodeCraft Studios | Web Developer in South Africa" },
      {
        name: "description",
        content:
          "Modern, mobile-friendly websites for South African businesses. Jaxy†Ralis builds fast, professional sites tailored to your brand.",
      },
      {
        property: "og:title",
        content: "Jaxys's CodeCraft Studios | Web Developer in South Africa",
      },
      {
        property: "og:description",
        content:
          "Modern, mobile-friendly websites for South African businesses. Jaxy†Ralis builds fast, professional sites tailored to your brand.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const previewServices = [
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "Clean, professional sites that help customers find you, see your services, and trust your brand.",
  },
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "Tailored features and functionality built specifically for how your business works.",
  },
  {
    icon: Zap,
    title: "Fast & Mobile-Friendly",
    description:
      "Sites that load quickly and look great on phones, tablets, and desktops.",
  },
];

function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg.url}
            alt="Modern web development workspace"
            className="h-full w-full object-cover opacity-40"
            width={1344}
            height={768}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Code2 className="h-3.5 w-3.5" />
              Websites built for South African businesses
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Get a professional website that brings you customers.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Hi, my name is <strong className="text-foreground">Jaxy†Ralis</strong> from{" "}
              <strong className="text-foreground">Jaxys's CodeCraft Studios</strong>. I noticed that
              many businesses don't currently have a website, so I wanted to reach out.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              These days, customers search online before deciding where to shop or who to contact. A
              professional website helps people find your business, see your services, view your
              contact details, and build trust before they even call.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton size="lg" />
              <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-accent">
                <Link to="/services">
                  See services <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / why */}
      <section className="border-y border-border bg-card/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              "Mobile-friendly design that works on every device",
              "Fast loading pages for better customer experience",
              "Clear contact details so customers can reach you",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-base font-medium text-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What I can build for you
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From simple business sites to advanced features — including custom logos and affordable
              maintenance plans.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {previewServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/services">View all services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Work / Portfolio */}
      <section className="border-t border-border bg-card/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Recent work
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A look at what I've built
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Real, live websites designed and developed for South African businesses.
            </p>
          </div>
          <div className="mx-auto mb-8 max-w-3xl rounded-2xl border border-primary/30 bg-primary/5 p-5 text-center">
            <div className="text-xs font-medium uppercase tracking-wider text-primary">Featured client</div>
            <div className="mt-1 font-semibold text-foreground">Queen Fab — Beauty Salon &amp; Training Academy</div>
            <a
              href="https://queenfab.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-sm text-primary underline hover:text-primary/80"
            >
              https://queenfab.lovable.app/ <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { src: workQueenFabHero.url, title: "Queen Fab — Beauty Salon", tag: "Landing page" },
              { src: workQueenFabTraining.url, title: "Queen Fab — Training Academy", tag: "Courses section" },
            ].map((item) => (
              <Link
                key={item.title}
                to="/work/queenfab"
                className="group overflow-hidden rounded-2xl border border-border bg-background/40 transition-all hover:border-primary/40"
              >
                <figure>
                  <div className="overflow-hidden bg-black">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-[420px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="flex items-center justify-between gap-3 p-5">
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wider text-primary">
                        {item.tag}
                      </div>
                      <div className="mt-1 font-semibold text-foreground">{item.title}</div>
                    </div>
                    <span className="text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      View →
                    </span>
                  </figcaption>
                </figure>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />


      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Rocket className="mx-auto h-10 w-10 text-primary-foreground" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to get your business online?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
            I'd be happy to discuss what you're looking for and provide a no-obligation quote.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <WhatsAppButton
              size="lg"
              className="border border-white/20 bg-white text-[#25D366] hover:bg-white/90 hover:text-[#1da851]"
            />
            <Button asChild size="lg" variant="outline" className="border-white/30 text-primary-foreground hover:bg-white/10">
              <Link to="/contact">Other ways to contact</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
