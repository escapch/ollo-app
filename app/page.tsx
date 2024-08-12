'use client';
import { Container } from '@/components/shared/container';
import { CreateThreads } from '@/components/shared/createThreads';
import { CreateThreadsDrawer } from '@/components/shared/createThreadsDrawer';
import { Thread } from '@/components/shared/thread';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';

const mockData = [
  {
    userName: 'test test',
    userIcon: '',
    text: '',
    images: [],
    likes: 1,
    createdDate: '',
  },
  {
    userName: 'test2',
    userIcon: '',
    text: '',
    images: [],
    likes: 1,
    createdDate: '',
  },
  {
    userName: 'test3',
    userIcon: '',
    text: '',
    images: [],
    likes: 1,
    createdDate: '',
  },
  {
    userName: 'test4',
    userIcon: '',
    text: '',
    images: [],
    likes: 1,
    createdDate: '',
  },
  {
    userName: 'test4',
    userIcon: '',
    text: '',
    images: [],
    likes: 1,
    createdDate: '',
  },
  {
    userName: 'test4',
    userIcon: '',
    text: '',
    images: [],
    likes: 1,
    createdDate: '',
  },
  {
    userName: 'test4',
    userIcon: '',
    text: '',
    images: [],
    likes: 1,
    createdDate: '',
  },
];
export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  return (
    <Container>
      <div className="bg-[#181818] mt-10 rounded-xl divide-y divide-[#323433]">
        <div>
          <Drawer>
            <DrawerTrigger>
              <CreateThreads />
            </DrawerTrigger>
            <DrawerContent className="bg-[#181818] border-none relative flex flex-col h-[80vh]">
              <div className="mx-auto w-full max-w-sm h-[100vh] flex flex-col">
                <DrawerHeader className="flex justify-between">
                  <DrawerTitle className="font-thin">
                    Create a new ollo
                  </DrawerTitle>
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
        <p></p>
        {mockData.map((item, index) => (
          <Thread {...item} />
        ))}
      </div>
    </Container>
  );
}
