import { BookIcon, BookOpen } from 'lucide-react';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from '@/lib/i18n';

export function baseOptions(): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: 'Hytale Modding',
    },
    links: [
      {
        icon: <BookIcon />,
        text: 'Documentation',
        url: '/docs',
        active: 'nested-url',
      },
    ]
  };
}
