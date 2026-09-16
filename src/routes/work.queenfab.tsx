import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import workQueenFabHero from "@/assets/work-queenfab-hero.jpg.asset.json";
import workQueenFabTraining from "@/assets/work-queenfab-training.jpg.asset.json";

export const Route = createFileRoute("/work/queenfab")({
  component: QueenFabWorkPage,
  head: () => ({
    meta: [
      { title: "Queen Fab — Case Study | Jaxys's CodeCraft Studios" },
      {
        name: "description",
        content:
          "A live website built for Queen Fab, a South African beauty salon and training academy. View the site and see examples of the work.",
      },
      { property: "og:title", content: "Queen Fab — Case Study" },
      {
        property: "og:description",
        content: "Live website built for Queen Fab beauty salon and training academy.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/work/queenfab" },
    ],
    links: [{ rel: "canonical", href: "/work/queenfab" }],
  }),
});

function QueenFabWorkPage() {
  const images = [
    { src: workQueenFabHero.url, title: "Landing page", caption: "Queen Fab — Beauty Salon" },
    { src: workQueenFabTraining.url, title: "Courses section", caption: "Queen Fab — Training Academy" },
  ];

  return (
    <main className="flex flex-col">
      <section className="border-b border-border bg-card/30 py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2 text-muted-foreground hover:text-foreground">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" /> Back to previous page
            </Link>
          </Button>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Client work
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Queen Fab — Beauty Salon &amp; Training Academy
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A live website built for Queen Fab, featuring a landing page for their beauty salon and a
            dedicated courses section for their training academy.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="https://queenfab.lovable.app/" target="_blank" rel="noopener noreferrer">
                Visit live site <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-accent">
              <Link to="/">
                <ArrowLeft className="h-4 w-4" /> Back
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground break-all">
            <a href="https://queenfab.lovable.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
              https://queenfab.lovable.app/
            </a>
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {images.map((img) => (
              <figure key={img.title} className="overflow-hidden rounded-2xl border border-border bg-background/40">
                <a href={img.src} target="_blank" rel="noopener noreferrer" className="block bg-black">
                  <img src={img.src} alt={img.caption} className="w-full object-contain" loading="lazy" />
                </a>
                <figcaption className="p-5">
                  <div className="text-xs font-medium uppercase tracking-wider text-primary">{img.title}</div>
                  <div className="mt-1 font-semibold text-foreground">{img.caption}</div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-border text-foreground hover:bg-accent">
              <Link to="/">
                <ArrowLeft className="h-4 w-4" /> Back to previous page
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
