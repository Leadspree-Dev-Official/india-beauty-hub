import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Link } from "@tanstack/react-router";
import serviceHair from "@/assets/service-hair.jpg";
import serviceFacial from "@/assets/service-facial.jpg";
import serviceMehendi from "@/assets/service-mehendi.jpg";
import galleryMakeup from "@/assets/gallery-makeup.jpg";
import gallerySpa from "@/assets/gallery-spa.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Saundarya Indian Modern Beauty" },
      {
        name: "description",
        content:
          "Discover our full range of beauty services: bridal makeup, hair couture, skin therapy, mehendi artistry, and occasion styling in New Delhi.",
      },
      { property: "og:title", content: "Services — Saundarya Indian Modern Beauty" },
      {
        property: "og:description",
        content:
          "Bridal makeup, hair couture, skin therapy, mehendi artistry, and occasion styling in New Delhi.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Hair Couture",
    subtitle: "Cut, color, styling & floral ornamentation",
    description:
      "From precision cuts to editorial updos, our hair artists sculpt styles that move with you. We specialize in South Asian hair textures, bridal florals, and heat-free styling traditions.",
    image: serviceHair,
    alt: "Indian bridal hairstyle with jasmine flowers and gold hair pins",
    price: "From ₹2,500",
    features: ["Precision cutting", "Botanical color treatments", "Bridal updos with fresh florals", "Deep conditioning rituals"],
  },
  {
    title: "Skin Therapy",
    subtitle: "Facials, brightening & Ayurvedic rituals",
    description:
      "Our facial therapies blend clinical-grade actives with Ayurvedic botanicals. Every treatment is chosen for your skin type and the demands of the South Asian climate.",
    image: serviceFacial,
    alt: "Luxury gold facial treatment with rose petals and brass bowls",
    price: "From ₹3,500",
    features: ["24k gold radiance facial", "Saffron brightening ritual", "Manual lymphatic drainage", "Custom acne solutions"],
  },
  {
    title: "Mehendi Artistry",
    subtitle: "Bridal, minimal & contemporary henna",
    description:
      "Our mehendi artists create designs that honor tradition while reflecting your personal style. Using organic Rajasthani henna, we ensure deep, lasting stain and intricate detail.",
    image: serviceMehendi,
    alt: "Intricate modern bridal mehendi design",
    price: "From ₹1,500",
    features: ["Full bridal mehendi", "Minimalist contemporary designs", "Custom storytelling motifs", "Aftercare guidance"],
  },
  {
    title: "Occasion Makeup",
    subtitle: "Sangeet, reception & editorial looks",
    description:
      "Whether it is a sangeet, reception, or editorial shoot, our makeup artists create looks that photograph beautifully and feel effortless in person.",
    image: galleryMakeup,
    alt: "Woman with flawless modern Indian makeup and teal jewelry",
    price: "From ₹5,000",
    features: ["HD and airbrush finish", "Long-wear formulations", "Lash and brow styling", "On-location service"],
  },
  {
    title: "Wellness Rituals",
    subtitle: "Head massage, body glow & pre-bridal prep",
    description:
      "Complete your beauty journey with restorative rituals. Our pre-bridal packages include herbal head massage, body polishing, and stress-release therapies.",
    image: gallerySpa,
    alt: "Relaxing Indian head massage with aromatic oils",
    price: "From ₹4,000",
    features: ["Herbal champi head massage", "Body polishing ubtan", "Pre-bridal detox packages", "Aromatherapy add-ons"],
  },
];

function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-cream py-20 md:py-28">
          <div className="container-custom text-center">
            <SectionHeader
              centered
              eyebrow="The Menu"
              title="Services designed for every version of you"
              description="From daily care to once-in-a-lifetime celebrations, each ritual is delivered with precision, warmth, and heritage."
            />
          </div>
        </section>

        {/* Services List */}
        <section className="py-12 md:py-16">
          <div className="container-custom space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.alt}
                      width={800}
                      height={1000}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
                    {service.subtitle}
                  </span>
                  <h2 className="mt-3 font-display text-4xl md:text-5xl">{service.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{service.description}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Check className="size-4 text-saffron" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex items-center justify-between rounded-xl bg-secondary p-6">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Starting at</p>
                      <p className="font-display text-2xl text-saffron">{service.price}</p>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      Book <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-20 text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="font-display text-4xl md:text-5xl">Not sure where to begin?</h2>
            <p className="mx-auto mt-4 max-w-lg text-primary-foreground/70">
              Schedule a complimentary consultation and we will design a bespoke beauty plan for your needs.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-saffron px-8 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-saffron/90"
            >
              Request a Consultation <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ServicesPage;
