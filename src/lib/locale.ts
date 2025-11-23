import { i18n } from "./i18n";
import en from "../../messages/en.json";

const messages: Record<string, any> = {
  en,
};

export function getLocale(routeLang?: string) {
  const isSupported = (l?: string): l is (typeof i18n.languages)[number] => {
    return !!l && (i18n.languages as string[]).includes(l);
  };
  if (routeLang && isSupported(routeLang)) return routeLang;

  return i18n.defaultLanguage;
}

export function localizeHref(href: string, routeLang?: string) {
  const locale = getLocale(routeLang);
  const defaultLang = i18n.defaultLanguage;
  if (locale === defaultLang) return href;
  return `/${locale}${href.startsWith("/") ? href : "/" + href}`;
}

export function getMessages(locale?: string) {
  return messages[locale || i18n.defaultLanguage] || messages[i18n.defaultLanguage];
}
