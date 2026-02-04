"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Globe, Check } from "lucide-react";
import { locales, localeLabels, type Locale } from "@/i18n/config";
import { usePathname, useRouter } from "@/i18n/routing";

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = (params.locale as Locale) || "en";

  const handleLocaleChange = (locale: Locale) => {
    router.replace(pathname, { locale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-charcoal hover:text-gold transition-colors"
        aria-label="Switch language"
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase">{currentLocale}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 z-50 overflow-hidden">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLocaleChange(locale)}
                className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm hover:bg-cream transition-colors ${
                  currentLocale === locale
                    ? "text-gold font-medium"
                    : "text-charcoal"
                }`}
              >
                <span>{localeLabels[locale]}</span>
                {currentLocale === locale && (
                  <Check className="w-4 h-4" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
