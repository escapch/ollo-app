import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { Heart } from 'lucide-react';
import style from './index.module.scss';
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
  const [isChecked, setIsChecked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setLikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }
  };
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              voluptates repellendus consequatur eius non! Nemo recusandae in
              autem exercitationem dolor sapiente, quae deleniti, quaerat
              nesciunt veritatis a libero modi perferendis. lorem
            </p>
          </div>
          <label className="inline-flex gap-2 hover:bg-[#aaaaaa10] ease-in-out duration-300 rounded-2xl p-2 max-w-max cursor-pointer font-thin">
            <div className={style.container}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
              />
              <div className={style.checkmark}>
                <svg viewBox="0 0 256 256" width="24px" height="24px">
                  <rect fill="none" width="124"></rect>
                  <path
                    d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                    strokeWidth="2px"
                    stroke="#FFF"
                    fill="none"
                  ></path>
                </svg>
              </div>
            </div>
            <span>{likes}</span>
          </label>
        </div>
      </div>
    </div>
  );
};
