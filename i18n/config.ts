export type Locale = "en" | "ja" | "zh" | "fr";

export const locales: Locale[] = ["en", "ja", "zh", "fr"];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ja: "日本語",
  zh: "简体中文",
  fr: "Français",
};
