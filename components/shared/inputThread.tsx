'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Input } from '../ui/input';
import useAuthStore from '@/hooks/useAuthStore';
import useModal from '@/hooks/useModal';
import Link from 'next/link';
interface Props {
  className?: string;
  setIsDrawerOpen: (open: boolean) => void;
}

export const InputThread: React.FC<Props> = ({
  className,
  setIsDrawerOpen,
}) => {
  const { user } = useAuthStore();
  const modal = useModal();

  return (
    <div className={cn('p-4 ', className)}>
      {user ? (
        <div className="flex gap-4 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>user</AvatarFallback>
          </Avatar>
          <div className="flex flex-col ">
            <p>{user.displayName}</p>
            <Input
              placeholder="Что нового?"
              className={cn(
                'bg-transparent border-none p-0 h-0 py-4',
                className,
              )}
              id="thread"
              onClick={() => setIsDrawerOpen(true)}
            />
          </div>
        </div>
      ) : (
        <div className="flex gap-3 items-center justify-center font-light">
          <span className="text-[#ffb100]">
            Чтобы создать ollo надо войти в ollo
          </span>
          <div className="text-blue-400">
            <Link href="/sign-in">Войти</Link> /{' '}
            <Link href="/sign-up">Регистрация</Link>
          </div>
        </div>
      )}
    </div>
  );
};
