import type { Metadata, Viewport } from 'next';
import '../styles/globals.css';
import { Providers } from '@/components/providers';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0c1e35' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: 'JOBPREP BD - Prepare Smart. Practice Daily. Get Exam Ready.',
    template: '%s | JOBPREP BD',
  },
  description: 'Bangladesh\'s leading job examination preparation platform. Daily scheduled exams, custom practice, previous questions, analytics, and adaptive learning for BCS, Government Jobs, EEE, and Engineering recruitment.',
  keywords: [
    'job preparation Bangladesh',
    'BCS preparation',
    'government job exam',
    'EEE exam preparation',
    'BCS preliminary',
    'BCS written',
    'non-cadre preparation',
    'power sector jobs',
    'engineering jobs Bangladesh',
    'daily exam practice',
    'mock test Bangladesh',
  ],
  authors: [{ name: 'JOBPREP BD' }],
  creator: 'JOBPREP BD',
  publisher: 'JOBPREP BD',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jobprepbd.com',
    siteName: 'JOBPREP BD',
    title: 'JOBPREP BD - Prepare Smart. Practice Daily. Get Exam Ready.',
    description: 'Bangladesh\'s leading job examination preparation platform.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'JOBPREP BD - Bangladesh Job Examination Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JOBPREP BD',
    description: 'Bangladesh\'s leading job examination preparation platform.',
    images: ['/og-image.png'],
    creator: '@jobprepbd',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Hind+Siliguri:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}