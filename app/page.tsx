'use client';
import { Container } from '@/components/shared/container';
import { InputThread } from '@/components/shared/inputThread';
import { ThreadsDrawer } from '@/components/shared/threadsDrawer';
import { Thread } from '@/components/shared/thread';
import { useState } from 'react';

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
];
export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Container>
        <div className="bg-[#181818] mt-10 rounded-xl divide-y divide-[#323433]">
          <InputThread setIsDrawerOpen={setIsDrawerOpen} />
          {mockData.map((item, index) => (
            <Thread key={index} {...item} />
          ))}
        </div>
      </Container>
      <ThreadsDrawer setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} />
    </>
  );
}
