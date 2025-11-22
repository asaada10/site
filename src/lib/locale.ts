import { i18n } from './i18n';

type Messages = Record<string, string>;

export function getLocale(routeLang?: string) {
  return routeLang ?? i18n.defaultLanguage;
}

export function localizeHref(href: string, routeLang?: string) {
  const locale = getLocale(routeLang);
  const defaultLang = i18n.defaultLanguage;
  if (locale === defaultLang) return href;
  return `/${locale}${href.startsWith('/') ? href : '/' + href}`;
}