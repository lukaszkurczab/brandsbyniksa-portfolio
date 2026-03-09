"use client";

import Link from "next/link";
import { useState } from "react";
import { navigationLinks } from "@/data/portfolio";
import { buttonStyles } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-background/90 backdrop-blur-md">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="font-heading text-xl tracking-tight">
          Brands by Niksa
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/#kontakt" className={buttonStyles("primary", "md")}>
            Współpraca
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full border border-line px-4 py-2 text-sm text-foreground md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      <div
        className={cn(
          "section-shell overflow-hidden md:hidden",
          isOpen ? "max-h-80 pb-4" : "max-h-0",
        )}
      >
        <nav className="editorial-card mb-2 grid gap-1 p-2">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-2 text-sm text-muted transition hover:bg-white/80 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#kontakt"
            onClick={() => setIsOpen(false)}
            className={buttonStyles("primary", "md", "mt-2")}
          >
            Współpraca
          </Link>
        </nav>
      </div>
    </header>
  );
}
