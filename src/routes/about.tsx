import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import salonImage from "@/assets/salon-interior.jpg";
import teamStylist from "@/assets/team-stylist.jpg";
import teamFacialist from "@/assets/team-facialist.jpg";
import teamMehendi from "@/assets/team-mehendi.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Saundarya Indian Modern Beauty" },
      {
        name: "description",
        content:
          "Learn about Saundarya, a New Delhi beauty studio blending Indian heritage with modern techniques. Meet our team of artists and therapists.",
      },
      { property: "og:title", content: "About — Saundarya Indian Modern Beauty" },
      {
        property: "og:description",
        content:
          "Learn about Saundarya, a New Delhi beauty studio blending Indian heritage with modern techniques.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Heritage",
    description: "We draw from Ayurvedic traditions, regional draping styles, and time-honored Indian beauty rituals.",
  },
  {
    title: "Precision",
    description: "Every treatment is grounded in technique, sanitation, and products chosen for South Asian skin and hair.",
  },
  {
    title: "Intimacy",
    description: "We listen first. Your comfort, your story, and your vision shape every service we deliver.",
  },
];

const team = [
  {
    name: "Ritika Malhotra",
    role: "Founder & Lead Makeup Artist",
    image: teamStylist,
    alt: "Professional Indian makeup artist and studio founder",
  },
  {
    name: "Dr. Ananya Sen",
    role: "Skin Therapist",
    image: teamFacialist,
    alt: "Indian skincare specialist in a modern clinic",
  },
  {
    name: "Pooja Verma",
    role: "Master Mehendi Artist",
    image: teamMehendi,
    alt: "Mehendi artist applying intricate henna design",
  },
];

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-cream py-20 md:py-28">
          <div className="container-custom grid items-center gap-12 lg:grid-cols-2">
            <div>
              <img
                src={salonImage}
                alt="Modern Indian beauty salon interior with jali screens and brass accents"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="max-w-xl">
              <SectionHeader
                eyebrow="Our Story"
                title="Where Indian ritual meets modern technique"
                description="Saundarya was founded in 2016 with a simple belief: that beauty in India should feel like home, and look like the future. What began as a single makeup chair has grown into a studio where heritage is honored and innovation is expected."
              />
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="rounded-xl bg-secondary p-6">
                  <p className="font-display text-3xl text-saffron">8+</p>
                  <p className="mt-1 text-sm text-muted-foreground">Years of artistry</p>
                </div>
                <div className="rounded-xl bg-secondary p-6">
                  <p className="font-display text-3xl text-saffron">12</p>
                  <p className="mt-1 text-sm text-muted-foreground">Expert artists</p>
                </div>
                <div className="rounded-xl bg-secondary p-6">
                  <p className="font-display text-3xl text-saffron">500+</p>
                  <p className="mt-1 text-sm text-muted-foreground">Brides served</p>
                </div>
                <div className="rounded-xl bg-secondary p-6">
                  <p className="font-display text-3xl text-saffron">3</p>
                  <p className="mt-1 text-sm text-muted-foreground">Cities served</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28">
          <div className="container-custom">
            <SectionHeader
              centered
              eyebrow="Philosophy"
              title="What we believe"
              description="Our studio is built on three guiding principles that shape every touch, every conversation, and every transformation."
            />
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl border border-border/60 bg-background p-8 text-center">
                  <h3 className="font-display text-3xl text-saffron">{value.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-secondary py-20 md:py-28">
          <div className="container-custom">
            <SectionHeader
              centered
              eyebrow="The Artists"
              title="Meet the team"
              description="Our artists are trained across India and abroad, bringing together classical skill and contemporary sensibility."
            />
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {team.map((member) => (
                <div key={member.name} className="overflow-hidden rounded-2xl bg-background">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.alt}
                      width={600}
                      height={750}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl">{member.name}</h3>
                    <p className="mt-1 text-sm text-saffron">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28">
          <div className="container-custom text-center">
            <h2 className="font-display text-4xl md:text-5xl">
              Become part of the <span className="italic text-saffron">Saundarya</span> story.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              We would love to meet you and learn about the occasion you are preparing for.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book a Consultation <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
