"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Shop Sarees", href: "/shop", active: true },
  { label: "Our Story", href: "/story", active: false },
  { label: "Craftsmanship", href: "/craftsmanship", active: false },
  { label: "Journal", href: "/journal", active: false },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="min-h-24 max-w-7xl mx-auto px-margin-mobile lg:px-margin py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col">
          <Link href="/" className="flex flex-col group">
            <Image
              src="/images/logo.png"
              alt="Desi Dhaga"
              width={200}
              height={64}
              className="h-16 w-auto object-contain brightness-0 invert drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
              style={{ maxHeight: 64 }}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-space-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-label-lg text-label-lg tracking-widest uppercase transition-colors duration-200 ${
                link.active
                  ? "text-[#fff9ee] hover:text-[#ffdf9c] relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#eec054]"
                  : "text-[#fff9ee]/90 hover:text-[#ffdf9c]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-space-md lg:gap-space-lg">
          {/* Currency Switcher */}
          <div className="hidden sm:flex items-center gap-space-xs text-[#fff9ee] font-label-sm text-label-sm tracking-widest uppercase border border-[#d8ac42]/40 bg-[#3d2c00]/20 px-space-sm py-1">
            <button className="text-[#ffdf9c] font-semibold cursor-pointer" type="button">
              INR (₹)
            </button>
            <span className="text-[#eec054]/50">/</span>
            <button
              className="text-[#fff9ee]/75 hover:text-[#fff9ee] transition-colors cursor-pointer"
              type="button"
            >
              USD ($)
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-space-md text-[#fff9ee]">
            <button
              aria-label="Search"
              className="hover:text-[#ffdf9c] transition-colors flex items-center cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">
                search
              </span>
            </button>
            <button
              aria-label="Wishlist"
              className="hover:text-[#ffdf9c] transition-colors flex items-center cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">
                favorite
              </span>
            </button>
            <Link
              href="/cart"
              className="hover:text-[#ffdf9c] transition-colors relative flex items-center"
            >
              <span className="material-symbols-outlined text-[20px]">
                shopping_bag
              </span>
              <span className="absolute -top-1.5 -right-2 bg-[#d8ac42] text-[#251a00] font-label-sm text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Link>
            <div className="w-8 h-8 rounded-full bg-[#254c38]/60 border border-[#d8ac42]/50 flex items-center justify-center ml-space-xs">
              <span className="material-symbols-outlined text-[#fff9ee] text-[18px]">
                person
              </span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[#fff9ee] hover:text-[#ffdf9c] transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary-container/95 backdrop-blur-md border-t border-[#d8ac42]/20">
          <nav className="max-w-7xl mx-auto px-margin-mobile py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-label-lg text-label-lg tracking-widest uppercase py-2 transition-colors duration-200 ${
                  link.active
                    ? "text-[#ffdf9c]"
                    : "text-[#fff9ee]/80 hover:text-[#ffdf9c]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
