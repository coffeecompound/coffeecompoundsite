"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IMG, NAV, SITE } from "@/lib/site";
import { Icon } from "./ui";

const isActive = (pathname: string, path: string) => (path === "/" ? pathname === "/" : pathname.startsWith(path));

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
        href="#main"
      >
        Skip to content
      </a>
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#FFF7F2]/95 backdrop-blur-md border-b border-outline-variant/60 shadow-[0_2px_12px_rgba(92,45,145,0.06)]">
        <div className="h-20 max-w-[1240px] mx-auto px-margin lg:px-margin-lg flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-md min-w-0">
            <Link className="flex items-center gap-3 group focus:outline-none min-w-0" href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="The Coffee Compound logo"
                width={183}
                height={124}
                className="h-[54px] w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-sm"
                src={IMG.logo}
              />
              <div className="flex flex-col min-w-0">
                <span className="font-headline-sm text-[17px] sm:text-headline-sm text-espresso-dark font-bold leading-none tracking-tight">
                  The Coffee Compound
                </span>
                <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase mt-0.5 font-semibold">Downtown Ogden • Utah</span>
              </div>
            </Link>
          </div>
          <nav aria-label="Main" className="hidden xl:flex items-center gap-space-sm">
            {NAV.map((n) =>
              isActive(pathname, n.path) ? (
                <Link
                  key={n.path}
                  aria-current="page"
                  className="transition-colors px-2.5 py-1.5 rounded-lg bg-secondary/10 text-secondary font-label-md text-label-md font-bold"
                  href={n.path}
                >
                  {n.label}
                </Link>
              ) : (
                <Link
                  key={n.path}
                  className="font-label-md text-label-md text-on-surface-variant hover:text-secondary hover:bg-secondary/5 transition-colors px-2.5 py-1.5 rounded-lg"
                  href={n.path}
                >
                  {n.label}
                </Link>
              )
            )}
          </nav>
          <div className="flex items-center gap-space-md flex-shrink-0">
            <Link
              className="hidden sm:inline-flex items-center justify-center px-space-lg py-2.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-[0_3px_10px_rgba(230,57,45,0.35)] hover:bg-[#D32F23] hover:shadow-[0_4px_14px_rgba(230,57,45,0.45)] transition-all duration-200"
              href="/visit/"
            >
              Visit Us
            </Link>
            <button
              aria-controls="mobile-nav"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="xl:hidden w-10 h-10 rounded-full bg-surface-container-lowest text-secondary flex items-center justify-center ring-2 ring-banner-gold/60 shadow-[0_1px_4px_rgba(47,46,46,0.15)]"
              onClick={() => setOpen((o) => !o)}
              type="button"
            >
              <Icon name={open ? "close" : "menu"} className="text-2xl" />
            </button>
          </div>
        </div>
        <nav
          aria-label="Mobile"
          className={`${open ? "block" : "hidden"} xl:hidden border-t border-outline-variant/60 bg-[#FFF7F2] max-h-[calc(100vh-5rem)] overflow-y-auto`}
          id="mobile-nav"
        >
          <div className="max-w-[1240px] mx-auto px-margin py-space-sm flex flex-col gap-1">
            {[...NAV, { path: "/visit/", label: "Visit & Parking" }].map((n) => {
              const active = isActive(pathname, n.path);
              return (
                <Link
                  key={n.path + n.label}
                  aria-current={active ? "page" : undefined}
                  className={`block px-space-md py-3 rounded-lg font-label-lg text-label-lg ${
                    active ? "bg-secondary/10 text-secondary font-bold" : "text-on-surface-variant hover:bg-secondary/5 hover:text-secondary"
                  }`}
                  href={n.path}
                >
                  {n.label}
                </Link>
              );
            })}
            <a
              className="mt-space-sm mb-space-sm inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-md"
              href={SITE.phoneHref}
            >
              <Icon name="call" className="text-lg" />
              Call {SITE.phone}
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
