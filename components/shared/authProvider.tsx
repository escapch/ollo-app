'use client';

import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/app/firebase/config';
import useAuthStore from '@/hooks/useAuthStore';

export const AuthProvider: React.FC = () => {
  const { signIn, user } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      signIn(currentUser);
    });

    return () => unsubscribe();
  }, [user]);

  return null;
};
