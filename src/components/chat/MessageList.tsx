import { useContext } from 'react';
import Image from 'next/image';
import { ChatContext } from '@/context/chat';
import { Avatar } from '../ui';

export const MessageList = () => {
  const { messages } = useContext(ChatContext);

  return (
    <>
      {messages.map((items) => (
        <div
          key={items.id}
          className={`flex gap-4 p-8 w-3/4 m-auto ${
            items.ia ? 'bg-gptlightgray' : 'bg-gptgray'
          }`}
        >
          <Avatar>
            <Image src='/avatar.webp' alt='avatar' width={50} height={50} />
          </Avatar>
          <p className='self-center'>{items.message}</p>
        </div>
      ))}
    </>
  );
};
