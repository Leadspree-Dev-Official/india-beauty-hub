import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Saundarya Indian Modern Beauty" },
      {
        name: "description",
        content:
          "Book a consultation or appointment at Saundarya beauty studio in New Delhi. Call, email, or send us a message.",
      },
      { property: "og:title", content: "Contact — Saundarya Indian Modern Beauty" },
      {
        property: "og:description",
        content: "Book a consultation or appointment at Saundarya beauty studio in New Delhi.",
      },
    ],
  }),
  component: ContactPage,
});

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit us",
    value: "B-12, Greater Kailash II, New Delhi, 110048, India",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+91 98765 43210",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "hello@saundarya.beauty",
  },
  {
    icon: Clock,
    label: "Studio hours",
    value: "Tue – Sun: 10:00 AM – 8:00 PM",
  },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-cream py-20 md:py-28">
          <div className="container-custom text-center">
            <SectionHeader
              centered
              eyebrow="Get in Touch"
              title="Begin your beauty journey"
              description="Reach out for appointments, bridal consultations, or any questions. We respond within 24 hours."
            />
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-12 md:py-16">
          <div className="container-custom grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div className="rounded-2xl bg-background p-8 shadow-sm md:p-10">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-secondary">
                    <Send className="size-6 text-saffron" />
                  </div>
                  <h3 className="font-display text-2xl">Thank you</h3>
                  <p className="mt-2 text-muted-foreground">
                    We have received your message and will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select a service</option>
                      <option value="bridal">Bridal Package</option>
                      <option value="makeup">Occasion Makeup</option>
                      <option value="hair">Hair Styling</option>
                      <option value="skin">Skin Therapy</option>
                      <option value="mehendi">Mehendi Artistry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your occasion, date, and any preferences..."
                      className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div className="grid gap-6">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl border border-border/60 bg-background p-6"
                  >
                    <div className="rounded-full bg-secondary p-3 text-saffron">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="mt-1 text-base text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-secondary p-8">
                <h3 className="font-display text-2xl">Bridal consultations</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We recommend booking your bridal consultation at least 3-6 months before your wedding date. This allows time for trials, skin prep, and coordination with your couture team.
                </p>
              </div>

              <div className="rounded-2xl bg-primary p-8 text-primary-foreground">
                <h3 className="font-display text-2xl">Follow us</h3>
                <p className="mt-2 text-sm text-primary-foreground/70">
                  See our latest work on Instagram and Pinterest for inspiration.
                </p>
                <div className="mt-4 flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-primary-foreground/30 px-4 py-2 text-sm transition-colors hover:bg-primary-foreground/10"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-primary-foreground/30 px-4 py-2 text-sm transition-colors hover:bg-primary-foreground/10"
                  >
                    Pinterest
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="bg-secondary py-12">
          <div className="container-custom">
            <div className="flex h-80 w-full items-center justify-center rounded-2xl bg-background">
              <div className="text-center">
                <MapPin className="mx-auto size-8 text-saffron" />
                <p className="mt-4 font-display text-2xl">Saundarya Studio</p>
                <p className="mt-1 text-sm text-muted-foreground">B-12, Greater Kailash II, New Delhi, 110048</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
