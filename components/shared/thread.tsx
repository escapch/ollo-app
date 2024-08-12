import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface Props {
  className?: string;
  userName?: string;
  userIcon?: any;
  text?: string;
  images: string[];
  likes: number;
  createdDate?: string;
}

export const Thread: React.FC<Props> = ({ className, userName }) => {
  return (
    <div className={cn(className)}>
      <div className="flex gap-4 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
        <div>
          <p>{userName}</p>
        </div>
      </div>
    </div>
  );
};
