import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/shared/navigation';
import { Container } from '@/components/shared/container';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'ollo app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} flex flex-col min-h-screen text-white relative`}>
        <main className="flex-grow">{children}</main>
        <Navigation />
      </body>
    </html>
  );
}
