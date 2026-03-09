import Link from "next/link";
import { navigationLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="hairline-divider mt-8">
      <div className="section-shell grid gap-8 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <p className="font-heading text-2xl">Brands by Niksa</p>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Design, branding i content creation dla marek osobistych, które chcą
            mówić wyraźnym głosem.
          </p>
        </div>

        <div className="space-y-3 text-sm text-muted">
          <p className="font-semibold uppercase tracking-[0.14em] text-foreground">Linki</p>
          <div className="grid gap-2">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3 text-sm text-muted">
          <p className="font-semibold uppercase tracking-[0.14em] text-foreground">Kontakt</p>
          <p>niksa.kontakt@gmail.com</p>
          <a href="https://instagram.com/niksa.creative" target="_blank" rel="noreferrer">
            @niksa.creative
          </a>
        </div>
      </div>
    </footer>
  );
}
