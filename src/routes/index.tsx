import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import heroImage from "@/assets/hero.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceFacial from "@/assets/service-facial.jpg";
import serviceMehendi from "@/assets/service-mehendi.jpg";
import bridalImage from "@/assets/bridal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saundarya — Indian Modern Beauty Studio | New Delhi" },
      {
        name: "description",
        content:
          "Experience modern Indian beauty rituals at Saundarya. Bridal makeup, hair styling, skincare, and mehendi artistry in New Delhi.",
      },
      { property: "og:title", content: "Saundarya — Indian Modern Beauty Studio" },
      {
        property: "og:description",
        content:
          "Experience modern Indian beauty rituals at Saundarya. Bridal makeup, hair styling, skincare, and mehendi artistry.",
      },
      { property: "og:image", content: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=80" },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=80" },
    ],
  }),
  component: IndexPage,
});

const featuredServices = [
  {
    title: "Hair Couture",
    description: "Precision cuts, editorial styling, and traditional floral ornamentation for every occasion.",
    image: serviceHair,
    alt: "Elegant Indian bridal hairstyle with jasmine flowers and gold pins",
  },
  {
    title: "Skin Therapy",
    description: "Gold-infused facials, Ayurvedic resurfacing, and treatments tailored to South Asian skin.",
    image: serviceFacial,
    alt: "Luxury gold facial treatment in a serene spa setting",
  },
  {
    title: "Mehendi Artistry",
    description: "Bespoke bridal and contemporary henna designs by master artists using organic paste.",
    image: serviceMehendi,
    alt: "Intricate modern bridal mehendi design on hands",
  },
];

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Wedding Client",
    quote:
      "Saundarya understood my vision perfectly. My bridal makeup felt timeless, not overdone — and lasted through every ritual.",
  },
  {
    name: "Priya Malhotra",
    role: "Sangeet Guest",
    quote:
      "The hair styling was exquisite. The team wove fresh jasmine into my updo exactly like I had dreamed.",
  },
  {
    name: "Rhea Kapoor",
    role: "Skincare Client",
    quote:
      "My skin has never looked better. The gold facial is a monthly ritual I cannot live without.",
  },
];

function IndexPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-cream">
          <div className="container-custom grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
            <div className="max-w-2xl">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
                Est. 2016 — New Delhi
              </span>
              <h1 className="font-display text-5xl leading-[0.95] md:text-6xl lg:text-7xl">
                Modern Indian <br />
                <span className="italic">Beauty</span>, Restored.
              </h1>
              <p className="mt-6 max-w-md text-lg text-muted-foreground leading-relaxed">
                A sanctuary where heritage rituals meet contemporary precision. Bridal artistry, skincare, hair, and mehendi for the modern Indian woman.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Book Consultation
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-input px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Elegant Indian woman with modern bridal makeup and traditional jewelry"
                width={1440}
                height={900}
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
                loading="eager"
                decoding="async"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-background p-6 shadow-lg lg:block">
                <div className="flex items-center gap-2 text-saffron">
                  <Star className="size-4 fill-current" />
                  <Star className="size-4 fill-current" />
                  <Star className="size-4 fill-current" />
                  <Star className="size-4 fill-current" />
                  <Star className="size-4 fill-current" />
                </div>
                <p className="mt-2 text-sm font-medium">Trusted by 500+ brides</p>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 md:py-28">
          <div className="container-custom grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <SectionHeader
                eyebrow="Our Philosophy"
                title="Beauty is a ritual, not a routine."
                description="At Saundarya, we believe every face tells a story. Our treatments combine Ayurvedic wisdom with dermatological science, honoring tradition while delivering modern results."
              />
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="rounded-xl bg-secondary p-6">
                  <p className="font-display text-3xl text-saffron">8+</p>
                  <p className="mt-1 text-sm text-muted-foreground">Years of artistry</p>
                </div>
                <div className="rounded-xl bg-secondary p-6">
                  <p className="font-display text-3xl text-saffron">500+</p>
                  <p className="mt-1 text-sm text-muted-foreground">Brides styled</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl bg-secondary p-8 md:p-12">
                <blockquote className="font-display text-2xl italic leading-relaxed md:text-3xl">
                  "They did not just do my makeup — they understood the woman I wanted to become on my wedding day."
                </blockquote>
                <p className="mt-6 text-sm font-medium text-muted-foreground">— Meera R., Delhi Bride</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="bg-secondary py-20 md:py-28">
          <div className="container-custom">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeader eyebrow="The Rituals" title="Signature Services" />
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-saffron hover:underline"
              >
                View all services <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {featuredServices.map((service) => (
                <div
                  key={service.title}
                  className="group overflow-hidden rounded-2xl bg-background transition-shadow hover:shadow-lg"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.alt}
                      width={800}
                      height={1000}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl">{service.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bridal Highlight */}
        <section className="overflow-hidden bg-primary text-primary-foreground py-20 md:py-28">
          <div className="container-custom grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <img
                src={bridalImage}
                alt="Elegant South Asian bride preparing in an ornate mirror"
                width={1000}
                height={1250}
                className="aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="max-w-xl">
              <SectionHeader
                eyebrow="Bridal"
                title="Artistry for your most sacred day."
                description="From the first trial to the final dupatta drape, our bridal experience is a curated journey of preparation, presence, and poetry."
                light
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Personalized bridal trial and lookbook",
                  "Three-day pre-wedding skin prep",
                  "On-location wedding day styling",
                  "Family and bridesmaid coordination",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-foreground/90">
                    <span className="size-1.5 rounded-full bg-saffron" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/bridal"
                className="mt-10 inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
              >
                Explore Bridal Packages <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28">
          <div className="container-custom">
            <SectionHeader
              centered
              eyebrow="Kind Words"
              title="Loved by the women we serve"
              description="Our clients return for more than services — they return for the feeling of being seen."
            />
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {testimonials.map((t) => (
                <div key={t.name} className="rounded-2xl border border-border/60 bg-background p-8">
                  <div className="flex gap-1 text-saffron">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-foreground/80">"{t.quote}"</p>
                  <div className="mt-6">
                    <p className="font-display text-lg">{t.name}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cream py-20 md:py-28">
          <div className="container-custom text-center">
            <h2 className="font-display text-4xl md:text-5xl">
              Begin your <span className="italic text-saffron">transformation</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Book a consultation and let us craft a beauty experience tailored to your story.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book Your Appointment <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default IndexPage;
