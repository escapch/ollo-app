'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Input } from '../ui/input';
interface Props {
  className?: string;
  setIsDrawerOpen: (open: boolean) => void;
}

export const InputThread: React.FC<Props> = ({ className, setIsDrawerOpen }) => {
  return (
    <div className={cn('p-4 ', className)}>
      <div className="flex gap-4 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
        <div className="flex flex-col ">
          <p>User name</p>
          <Input
            placeholder="Что нового?"
            className={cn('bg-transparent border-none p-0 h-0 py-4', className)}
            id="thread"
            onClick={() => setIsDrawerOpen(true)}
          />
        </div>
      </div>
    </div>
  );
};
