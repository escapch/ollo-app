import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Heart } from 'lucide-react';
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
    <div className={cn(className, 'p-4')}>
      <div className="flex gap-4 ">
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col gap-2">
          <p>{userName}</p>
          <div>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptates repellendus
              consequatur eius non! Nemo recusandae in autem exercitationem dolor sapiente, quae
              deleniti, quaerat nesciunt veritatis a libero modi perferendis. lorem
            </p>
          </div>
          <div className="inline-flex gap-1 hover:bg-[#aaaaaa10] ease-in-out duration-300 rounded-2xl p-2 max-w-max cursor-pointer font-thin">
            <Heart strokeWidth={0.5} />
            <span>99</span>
          </div>
        </div>
      </div>
    </div>
  );
};
