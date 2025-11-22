import { RootProvider } from 'fumadocs-ui/provider/next';
import { defineI18nUI } from 'fumadocs-ui/i18n';
import { i18n } from '@/lib/i18n';
import './global.css';
import { Inter } from 'next/font/google';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
};

const inter = Inter({
  subsets: ['latin'],
});
const { provider } = defineI18nUI(i18n, {
  translations: {
    en: {
      displayName: 'English',
    },
    es: {
      displayName: 'Spanish',
      search: 'Buscar',
    },
  },
});
export default async function Layout({
  params,
  children,
}: {
  params: Promise<Record<string, string | undefined>>;
  children: React.ReactNode;
}) {
  const lang = (await params).lang ?? 'en';
  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider i18n={provider(lang)}>{children}</RootProvider>
      </body>
    </html>
  );
}
