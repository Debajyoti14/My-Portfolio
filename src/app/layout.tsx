import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { DEFAULT_THEME, noFlashScript } from '@/lib/theme';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-barlow',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://debajyoti.in'),
  title: 'Debajyoti Saha | Portfolio',
  description:
    'Debajyoti Saha — Software Developer specializing in Cloud, DevOps, Backend, and Web Development. Explore my projects and get in touch.',
  // Icons come from the App Router file convention — src/app/icon.png and
  // src/app/apple-icon.png, both generated from the hero portrait.
  authors: [{ name: 'Debajyoti Saha' }],
  openGraph: {
    title: 'Debajyoti Saha | Portfolio',
    description: 'Software Developer specializing in Cloud, DevOps, Backend, and Web Development.',
    type: 'website',
    images: ['/Picture.jpg'],
  },
  twitter: {
    card: 'summary',
    title: 'Debajyoti Saha | Portfolio',
    description: 'Software Developer specializing in Cloud, DevOps, Backend, and Web Development.',
    images: ['/Picture.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#15171a' },
    { media: '(prefers-color-scheme: light)', color: '#f2f2f3' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en-GB"
      data-theme={DEFAULT_THEME}
      className={`${barlow.variable} ${barlowCondensed.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
