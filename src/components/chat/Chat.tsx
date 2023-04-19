import { FormEvent, useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChatContext } from '@/context/chat';
import { MessageList, ChatDescription } from './';
import { UiContext } from '@/context/ui';

export const Chat = () => {
  const { messages, sendMessage } = useContext(ChatContext);
  const [value, setValue] = useState('');
  const { theme } = useContext(UiContext)

  const onSubmitMessage = (e: FormEvent) => {
    e.preventDefault();
    if (value.length > 0) {
      const message = {
        id: Math.random(),
        message: value,
        ia: false
      };
      setValue('');
      sendMessage(message);
    }
  };

  return (
    <div className='flex flex-col h-full flex-1 pl-64 mt-10 text-white font-extralight overflow-auto'>
      {messages.length > 0 ? <MessageList /> : <ChatDescription />}
      <div className='absolute bottom-0 self-center w-1/3'>
        <div>
          <form
            className='stretch mx-2 flex flex-row gap-3 last:mb-2 w-full'
            onSubmit={(e) => onSubmitMessage(e)}
            onKeyDown={(e) => e.key == 'Enter' && onSubmitMessage(e)}
          >
            <textarea
              tabIndex={0}
              rows={1}
              name='prompt'
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={`flex-1 p-2 rounded-lg ${theme === 'dark' ? 'bg-gptlightgray shadow-lg' : 'bg-slate-200 shadow-lg shadow-gray-400 text-black'} w-3/4 text-white resize-none`}
            />
            <button
              className='absolute right-0 mt-[5px] hover:bg-gptdarkgray rounded-md p-1'
              type='submit'
            >
              <Image src='/send.webp' alt='send' width={20} height={20} />
            </button>
          </form>
          <div className='flex flex-row gap-3 w-full text-gray-400 p-5 justify-center'>
            <Link
              href='https://help.openai.com/en/articles/6825453-chatgpt-release-notes'
              passHref
              legacyBehavior
            >
              <a className='text-sm self-center underline'>ChatGPT</a>
            </Link>
            <p className='self-center text-sm'>
              Lazamiento libre de chat gpt para la materia laboratorio de
              computacion II
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
