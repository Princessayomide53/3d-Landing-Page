import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: '3d Landing Page',
  description: '3d Landing Page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${workSans.variable} antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
