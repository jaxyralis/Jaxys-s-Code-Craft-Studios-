import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { WhatsAppButton } from "@/components/WhatsAppButton";
const LogoMark = ({ className = "" }: { className?: string }) => (
  <span
    aria-hidden
    className={
      "inline-flex items-center justify-center rounded-lg bg-primary/10 font-serif text-primary ring-1 ring-primary/30 " +
      className
    }
  >
    <span className="leading-none">†</span>
  </span>
);

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <LogoMark className="h-9 w-9 text-2xl" />
          <span className="hidden text-lg font-bold tracking-tight text-foreground sm:inline">
            Jaxys's CodeCraft Studios
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={
                  "rounded-md px-4 py-2 text-sm font-medium transition-colors " +
                  (isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground")
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 border-border bg-card">
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <div className="flex flex-col gap-6 pt-6">
              <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <LogoMark className="h-8 w-8 text-xl" />
                <span className="font-bold text-foreground">Jaxys's CodeCraft Studios</span>
              </Link>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={
                        "rounded-md px-3 py-2 text-base font-medium transition-colors " +
                        (isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground")
                      }
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-2">
                <WhatsAppButton className="w-full" />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
