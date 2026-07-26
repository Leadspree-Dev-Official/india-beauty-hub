import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Sparkles, Clock, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import bridalImage from "@/assets/bridal.jpg";
import galleryMakeup from "@/assets/gallery-makeup.jpg";
import galleryHair from "@/assets/gallery-hair.jpg";
import gallerySpa from "@/assets/gallery-spa.jpg";

export const Route = createFileRoute("/bridal")({
  head: () => ({
    meta: [
      { title: "Bridal Packages — Saundarya Indian Modern Beauty" },
      {
        name: "description",
        content:
          "Luxury bridal packages in New Delhi: makeup, hair, mehendi, draping, and pre-wedding skincare for the modern Indian bride.",
      },
      { property: "og:title", content: "Bridal Packages — Saundarya Indian Modern Beauty" },
      {
        property: "og:description",
        content:
          "Luxury bridal packages in New Delhi: makeup, hair, mehendi, draping, and pre-wedding skincare.",
      },
    ],
  }),
  component: BridalPage,
});

const packages = [
  {
    name: "The Classic Bride",
    price: "₹35,000",
    description: "Essential bridal artistry for the intimate wedding.",
    features: ["Bridal makeup & hair", "Dupatta draping", "One pre-wedding facial", "Touch-up kit"],
    featured: false,
  },
  {
    name: "The Royal Bride",
    price: "₹75,000",
    description: "A complete transformation for the multi-day celebration.",
    features: [
      "Two bridal makeup & hair looks",
      "Full bridal mehendi",
      "Three-day pre-wedding skin prep",
      "Sangeet/reception guest styling",
      "On-location team of two",
    ],
    featured: true,
  },
  {
    name: "The Couture Bride",
    price: "₹1,25,000",
    description: "Bespoke luxury for the discerning bride.",
    features: [
      "Unlimited bridal looks across all events",
      "Airbrush & HD makeup",
      "Dedicated bridal concierge",
      "Pre-wedding wellness rituals",
      "Premium product kit to keep",
    ],
    featured: false,
  },
];

const process = [
  {
    icon: Sparkles,
    step: "01",
    title: "The Trial",
    description: "We meet, discuss your vision, and trial the complete look with your jewelry and outfit references.",
  },
  {
    icon: Heart,
    step: "02",
    title: "The Prep",
    description: "A personalized skin and hair regimen begins weeks before your wedding for a flawless canvas.",
  },
  {
    icon: Clock,
    step: "03",
    title: "The Day",
    description: "Our team arrives at your venue with everything needed for a calm, luxurious getting-ready experience.",
  },
  {
    icon: Users,
    step: "04",
    title: "The Family",
    description: "We coordinate styling for mothers, sisters, and bridesmaids so the whole party looks cohesive.",
  },
];

function BridalPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-cream py-20 md:py-28">
          <div className="container-custom grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-xl">
              <SectionHeader
                eyebrow="Weddings"
                title="For the bride who wants to feel like herself — only more luminous."
                description="Our bridal experience is a curated journey of artistry, skincare, and care. We honor tradition while crafting a look that is unmistakably you."
              />
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Book Bridal Consultation <ArrowRight className="size-4" />
                </Link>
                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 rounded-full border border-input px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  View Packages
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={bridalImage}
                alt="Elegant South Asian bride preparing in an ornate mirror"
                width={1000}
                height={1250}
                className="aspect-[4/5] w-full rounded-2xl object-cover shadow-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-28">
          <div className="container-custom">
            <SectionHeader
              centered
              eyebrow="The Journey"
              title="Four steps to your bridal glow"
              description="Every bride is unique, so our process is designed to adapt to your timeline, your family, and your vision."
            />
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border/60 bg-background p-8">
                  <div className="flex items-center justify-between">
                    <div className="rounded-full bg-secondary p-3 text-saffron">
                      <item.icon className="size-5" />
                    </div>
                    <span className="font-display text-3xl text-border">{item.step}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="bg-secondary py-20 md:py-28">
          <div className="container-custom">
            <SectionHeader
              centered
              eyebrow="Investment"
              title="Bridal packages"
              description="Transparent pricing for every scale of celebration. Custom destination wedding quotes available on request."
            />
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative flex flex-col rounded-2xl p-8 ${
                    pkg.featured
                      ? "bg-primary text-primary-foreground shadow-xl"
                      : "bg-background text-foreground"
                  }`}
                >
                  {pkg.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-saffron px-4 py-1 text-xs font-semibold text-primary-foreground">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-2xl">{pkg.name}</h3>
                  <p
                    className={`mt-2 text-sm ${
                      pkg.featured ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {pkg.description}
                  </p>
                  <p className="mt-6 font-display text-4xl text-saffron">{pkg.price}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-2 text-sm ${
                          pkg.featured ? "text-primary-foreground/90" : "text-foreground/80"
                        }`}
                      >
                        <span className="mt-1 size-1.5 shrink-0 rounded-full bg-saffron" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                      pkg.featured
                        ? "bg-saffron text-primary-foreground hover:bg-saffron/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    Select Package
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-20 md:py-28">
          <div className="container-custom">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeader eyebrow="Portfolio" title="Bridal moments" />
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-sm font-medium text-saffron hover:underline"
              >
                View full gallery <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <img
                src={galleryMakeup}
                alt="Flawless modern Indian bridal makeup"
                width={800}
                height={1000}
                className="aspect-[4/5] w-full rounded-2xl object-cover"
                loading="lazy"
                decoding="async"
              />
              <img
                src={galleryHair}
                alt="Elegant Indian wedding hairstyle with jasmine flowers"
                width={800}
                height={1000}
                className="aspect-[4/5] w-full rounded-2xl object-cover"
                loading="lazy"
                decoding="async"
              />
              <img
                src={gallerySpa}
                alt="Relaxing pre-wedding wellness ritual"
                width={800}
                height={1000}
                className="aspect-[4/5] w-full rounded-2xl object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default BridalPage;
