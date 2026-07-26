import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import heroImage from "@/assets/hero.jpg";
import bridalImage from "@/assets/bridal.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceFacial from "@/assets/service-facial.jpg";
import serviceMehendi from "@/assets/service-mehendi.jpg";
import galleryMakeup from "@/assets/gallery-makeup.jpg";
import galleryHair from "@/assets/gallery-hair.jpg";
import gallerySpa from "@/assets/gallery-spa.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Saundarya Indian Modern Beauty" },
      {
        name: "description",
        content:
          "Browse our portfolio of bridal makeup, hair styling, mehendi, skincare, and occasion looks from Saundarya studio.",
      },
      { property: "og:title", content: "Gallery — Saundarya Indian Modern Beauty" },
      {
        property: "og:description",
        content:
          "Browse our portfolio of bridal makeup, hair styling, mehendi, skincare, and occasion looks.",
      },
    ],
  }),
  component: GalleryPage,
});

const galleryImages = [
  {
    src: heroImage,
    alt: "Elegant Indian woman with modern bridal makeup and jewelry",
    title: "Modern Bridal Glam",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-square lg:aspect-auto",
  },
  {
    src: bridalImage,
    alt: "South Asian bride in ornate mirror",
    title: "The Bridal Moment",
    span: "",
    aspect: "aspect-[4/5]",
  },
  {
    src: galleryMakeup,
    alt: "Flawless modern Indian makeup with teal accents",
    title: "Editorial Eye",
    span: "",
    aspect: "aspect-[4/5]",
  },
  {
    src: serviceHair,
    alt: "Indian bridal hairstyle with jasmine flowers",
    title: "Floral Updo",
    span: "",
    aspect: "aspect-[4/5]",
  },
  {
    src: serviceMehendi,
    alt: "Intricate bridal mehendi design",
    title: "Mehendi Detail",
    span: "lg:col-span-2",
    aspect: "aspect-[4/5] lg:aspect-[16/9]",
  },
  {
    src: galleryHair,
    alt: "Elegant Indian wedding hairstyle with jasmine flowers",
    title: "Jasmine Adorned",
    span: "",
    aspect: "aspect-[4/5]",
  },
  {
    src: serviceFacial,
    alt: "Gold facial treatment with rose petals",
    title: "Gold Ritual",
    span: "",
    aspect: "aspect-[4/5]",
  },
  {
    src: gallerySpa,
    alt: "Relaxing Indian head massage",
    title: "Wellness Ritual",
    span: "",
    aspect: "aspect-[4/5]",
  },
];

function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-cream py-20 md:py-28">
          <div className="container-custom text-center">
            <SectionHeader
              centered
              eyebrow="Portfolio"
              title="Moments of beauty"
              description="A curated selection of our favorite bridal transformations, editorial looks, and intimate rituals."
            />
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-20 md:pb-28">
          <div className="container-custom">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((image) => (
                <div
                  key={image.title}
                  className={`group relative overflow-hidden rounded-2xl bg-secondary ${image.span} ${image.aspect}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="font-display text-xl text-white">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-20 text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="font-display text-4xl md:text-5xl">Ready for your own moment?</h2>
            <p className="mx-auto mt-4 max-w-lg text-primary-foreground/70">
              Let us create a look that feels timeless, personal, and unmistakably you.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-saffron px-8 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-saffron/90"
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

export default GalleryPage;
