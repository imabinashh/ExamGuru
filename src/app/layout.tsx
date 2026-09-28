import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ExamGuru — Master the Pattern. Clear the Cutoff. Secure Your Rank.',
  description:
    'Prepare for UPSC, SSC, Banking, Railways, Defence, and State PSC exams with structured courses, 15,000+ TCS pattern mocks, and hybrid counseling centers in Mukherjee Nagar and Patna.',
  keywords: [
    'UPSC Preparation',
    'SSC CGL Mock Tests',
    'Banking PO Exam',
    'TCS iON CBT Simulator',
    'Mukherjee Nagar Coaching',
    'ExamGuru',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    'name': 'ExamGuru Technologies',
    'description': 'India’s premier hybrid exam preparation ecosystem for competitive government exams.',
    'telephone': '+91-1800-890-3456',
    'address': [
      {
        '@type': 'PostalAddress',
        'streetAddress': 'DNB Commercial Complex, Near GTB Nagar Metro Station Gate 2, Mukherjee Nagar',
        'addressLocality': 'New Delhi',
        'postalCode': '110009',
        'addressCountry': 'IN'
      },
      {
        '@type': 'PostalAddress',
        'streetAddress': '401-403, Surya Crystal Tower, Near Boring Road Crossing',
        'addressLocality': 'Patna',
        'postalCode': '800001',
        'addressCountry': 'IN'
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface text-on-surface antialiased font-sans selection:bg-brand-indigo-light selection:text-primary">
        {children}
      </body>
    </html>
  );
}
