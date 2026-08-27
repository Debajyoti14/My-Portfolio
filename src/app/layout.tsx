import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SITE_URL, X_HANDLE } from '@/constants/site';
import { personJsonLd } from '@/lib/jsonLd';
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

const TITLE = 'Debajyoti Saha — Software Developer | Cloud, DevOps & Backend';
const DESCRIPTION =
  'Debajyoti Saha is a software developer specializing in Cloud, DevOps, and Backend engineering — building on AWS, Rust, Kubernetes, Terraform, and Next.js. See selected projects, experience, and contact details.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    // Child routes set a bare title ("All Projects") and inherit the brand suffix.
    template: '%s | Debajyoti Saha',
  },
  description: DESCRIPTION,
  applicationName: 'Debajyoti Saha — Portfolio',
  // Icons come from the App Router file convention — src/app/icon.png and
  // src/app/apple-icon.png, both generated from the hero portrait.
  authors: [{ name: 'Debajyoti Saha', url: SITE_URL }],
  creator: 'Debajyoti Saha',
  publisher: 'Debajyoti Saha',
  keywords: [
    'Debajyoti Saha',
    'software developer',
    'cloud engineer',
    'DevOps engineer',
    'backend developer',
    'AWS',
    'Rust',
    'Kubernetes',
    'Terraform',
    'Next.js',
    'portfolio',
    'Kolkata',
    'India',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: SITE_URL,
    siteName: 'Debajyoti Saha',
    locale: 'en_GB',
    images: [
      {
        url: '/Picture.jpg',
        width: 720,
        height: 900,
        alt: 'Portrait of Debajyoti Saha, software developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    creator: X_HANDLE,
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
        {/* Person + WebSite + project graph. Static, build-time content — no
            user input reaches this string. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
