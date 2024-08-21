'use client';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/shared/navigation';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { SignIn } from '@/components/shared/form/sign-in';
import useModal from '@/hooks/useModal';
import { SignUp } from '@/components/shared/form/sign-up';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import useAuthStore from '@/hooks/useAuthStore';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
});

// export const metadata: Metadata = {
//   title: 'ollo app',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const modal = useModal();
  const { signIn, user } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      signIn(currentUser);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <html lang="en">
      <body className={`${roboto.className} flex flex-col min-h-screen text-white relative`}>
        <main className="flex-grow">{children}</main>
        <Dialog open={modal?.isOpen} onOpenChange={modal?.close}>
          <DialogContent className="p-0 m-0 bg-transparent shadow-none border-none">
            {/* <SignIn /> */}
            <SignUp />
          </DialogContent>
        </Dialog>
        <Navigation />
      </body>
    </html>
  );
}
