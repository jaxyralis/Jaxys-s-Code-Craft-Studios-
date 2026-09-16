import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Send, Lock, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Jaxys's CodeCraft Studios" },
      {
        name: "description",
        content:
          "Get in touch with Jaxy†Ralis at Jaxys's CodeCraft Studios. WhatsApp, call, or send a message to discuss your website project.",
      },
      { property: "og:title", content: "Contact — Jaxys's CodeCraft Studios" },
      {
        property: "og:description",
        content:
          "Get in touch with Jaxy†Ralis at Jaxys's CodeCraft Studios. WhatsApp, call, or send a message to discuss your website project.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const business = String(data.get("business") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `New enquiry from ${name}${business ? ` (${business})` : ""}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      business ? `Business: ${business}` : null,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ralisjaxy@gmail.com&su=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    const mailto = `mailto:ralisjaxy@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    // Open Gmail compose in a new tab; fall back to the device's default mail app.
    const win = window.open(gmailUrl, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = mailto;
    setSent(true);
  };

  return (
    <main className="flex flex-col">
      <section className="border-b border-border bg-card/30 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Let's talk about your website
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            I'd be happy to discuss what you're looking for and provide a no-obligation quote.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Get in touch</h2>
                <p className="mt-2 text-muted-foreground">
                  The fastest way to reach me is WhatsApp — but you can also call or email.
                </p>
              </div>

              <Card className="border-border bg-card">
                <CardContent className="space-y-5 pt-6">
                  <a
                    href="tel:+27665823646"
                    className="flex items-center gap-4 text-foreground transition-colors hover:text-primary"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone / WhatsApp</p>
                      <p className="font-medium">066 582 3646</p>
                    </div>
                  </a>

                  <a
                    href="mailto:ralisjaxy@gmail.com"
                    className="flex items-center gap-4 text-foreground transition-colors hover:text-primary"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">ralisjaxy@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-foreground">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">South Africa</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-foreground">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Response time</p>
                      <p className="font-medium">Usually within a few hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <WhatsAppButton
                size="lg"
                className="w-full sm:w-auto"
                message="Hi Jaxy†Ralis, I'm interested in a website for my business. Can we discuss?"
              />

              {/* Banking details */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Landmark className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground">
                        Banking details
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        Use the details below to make your payment.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="rounded-md border border-border bg-background/50 p-4 font-mono text-sm text-foreground">
                    <div className="flex justify-between gap-4 py-1">
                      <span className="text-muted-foreground">Bank</span>
                      <span className="font-medium">CAPITEC</span>
                    </div>
                    <div className="flex justify-between gap-4 py-1">
                      <span className="text-muted-foreground">Card Holder</span>
                      <span className="font-medium">MR GB RALINALA</span>
                    </div>
                    <div className="flex justify-between gap-4 py-1">
                      <span className="text-muted-foreground">Account Number</span>
                      <span className="font-medium">2362766612</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Once you've paid, please <span className="font-medium text-foreground">send your proof of payment via WhatsApp</span> so I can confirm and get started right away.
                  </p>
                  <WhatsAppButton
                    className="w-full sm:w-auto"
                    message="Hi Jaxy†Ralis, here is my proof of payment for my website."
                  >
                    Send proof of payment
                  </WhatsAppButton>
                </CardContent>
              </Card>
            </div>

            {/* Contact form */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  Send a message
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill in your details and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-start gap-2 rounded-md border border-border bg-background/50 p-3 text-sm text-muted-foreground">
                  <Lock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p>
                    Your message is private. It's sent straight to my personal Gmail —
                    only you and I can read it. Nothing is stored on this site.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        className="border-input bg-background text-foreground"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="066 582 3646"
                        className="border-input bg-background text-foreground"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="border-input bg-background text-foreground"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business" className="text-foreground">
                      Business name
                    </Label>
                    <Input
                      id="business"
                      name="business"
                      placeholder="Your business"
                      className="border-input bg-background text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      What do you need?
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="border-input bg-background text-foreground"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Send className="h-4 w-4" />
                    Send message via Gmail
                  </Button>
                  {sent && (
                    <p className="text-center text-sm text-primary">
                      Gmail opened in a new tab — press send there to deliver your message privately.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
