'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Label } from '../ui/label';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';

interface Props {
  className?: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function CreateThreadsDrawer({ isOpen, setIsOpen, className }: Props) {
  return (
    <div className={cn('p-4 ', className)}>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent className="bg-[#181818] border-none relative flex flex-col h-full">
          <div className="mx-auto w-full max-w-sm h-[100vh] flex flex-col">
            <DrawerHeader className="flex justify-between">
              <DrawerTitle className="font-thin">Create a new ollo</DrawerTitle>
              <DrawerClose>
                <X />
              </DrawerClose>
            </DrawerHeader>
            <div className="flex gap-4 overflow-y-auto border-b">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
              <div className="flex-col gap-1 w-full">
                <Label htmlFor="thread">User name</Label>
                <textarea
                  placeholder="Что нового?"
                  id="thread"
                  className="bg-transparent border-none py-1 resize-none overflow-y-auto w-full focus:outline-none focus:border-none focus:ring-0"
                  style={{ maxHeight: '300px' }}
                  rows={1}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = 'auto';
                    target.style.height = `${target.scrollHeight}px`;
                    if (target.scrollHeight > 300) {
                      target.style.overflowY = 'scroll';
                    } else {
                      target.style.overflowY = 'hidden';
                    }
                  }}
                />
              </div>
            </div>

            <DrawerFooter className="sticky bottom-0 bg-[#181818] p-4">
              <Button variant="outline" className="text-[#181818]">
                Опубликовать
              </Button>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
  