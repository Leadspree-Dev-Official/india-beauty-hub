import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  { to: "/services", label: "Services" },
  { to: "/bridal", label: "Bridal" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border/60 bg-foreground text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Link to="/" className="font-display text-3xl font-semibold tracking-tight">
              <span data-brand-text="business-name">Saundarya</span><span className="text-saffron">.</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Modern Indian beauty rituals rooted in heritage. Bridal artistry, skincare, hair, and mehendi in New Delhi.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary-foreground/20 p-2 transition-colors hover:bg-primary-foreground/10"
                aria-label="Instagram"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="mailto:hello@saundarya.beauty"
                className="rounded-full border border-primary-foreground/20 p-2 transition-colors hover:bg-primary-foreground/10"
                aria-label="Email"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-saffron"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>Bridal Makeup</li>
              <li>Hair Styling</li>
              <li>Skin Therapy</li>
              <li>Mehendi Artistry</li>
              <li>Occasion Makeup</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
              Visit Us
            </h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-saffron" />
                <span data-brand-text="address">B-12, Greater Kailash II, New Delhi, 110048, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-saffron" />
                <span data-brand-text="phone">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-saffron" />
                <span>hello@saundarya.beauty</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Saundarya Beauty Studio. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/50">Crafted with heritage, designed for today.</p>
        </div>
        <div className="mt-4 text-center text-xs text-primary-foreground/50">
          Developer: Aniruddha Das | Developed by LeadSpree Business Solutions
        </div>
      </div>
    
          <div className="mt-8">
            <a href="/admin" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition">🔑 Admin Console</a>
          </div>
    </footer>
  );
}
