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
  const validLocale = getLocale(locale);
  if (!messages[validLocale]) loadLanguage(validLocale);
  
  return messages[validLocale] || messages.en;
}

export function loadLanguage(locale: string) {
  const validLocale = getLocale(locale);

  try {
    const loadedMessages = require(`../../messages/${validLocale}.json`);
    messages[validLocale] = loadedMessages;
  } catch { }
}
