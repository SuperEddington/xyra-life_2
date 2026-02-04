"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-serif font-bold tracking-wider">
              XYRA
            </Link>
            <p className="text-gray-400 mt-2 text-sm">{t("tagline")}</p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-400 hover:text-gold transition-colors text-sm"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-400 hover:text-gold transition-colors text-sm"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-gray-400 hover:text-gold transition-colors text-sm"
            >
              About
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-sm">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
