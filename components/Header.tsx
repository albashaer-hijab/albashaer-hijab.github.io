"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ButtonLink from "@/components/Button";
import Logo from "@/components/Logo";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { navLinks } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "border-transparent shadow-md" : "border-line"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Logo />

        <nav aria-label="التنقل الرئيسي" className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-1 font-medium transition-colors hover:text-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-center after:rounded-full after:bg-secondary after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                      active ? "text-primary after:scale-x-100" : "text-foreground/80 after:scale-x-0"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ButtonLink href="/contact" className="px-5 py-2 text-sm">
            تواصل معنا
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-primary transition-colors hover:bg-secondary-soft md:hidden"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="قائمة الجوال"
          className="animate-menu-in border-t border-line md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`block rounded-lg px-3 py-3 font-medium ${
                    pathname === link.href ? "bg-secondary-soft text-primary" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
