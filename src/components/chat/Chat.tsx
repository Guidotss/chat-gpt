import Image from 'next/image';
import Link from 'next/link';
import { MessageList,ChatDescription } from './';

export const Chat = () => {

  return (
    <div className='flex flex-col h-full flex-1 pl-64 mt-10 text-white font-extralight'>
        <ChatDescription />
      <div className='absolute bottom-0 self-center w-1/3'>
        <div>
          <form className='stretch mx-2 flex flex-row gap-3 last:mb-2 w-full'>
            <textarea
              tabIndex={0}
              rows={1}
              className='flex-1 p-2 rounded-lg bg-gptlightgray w-3/4 text-white resize-none'
            />
            <button className='absolute right-0 mt-[5px] hover:bg-gptdarkgray rounded-md p-1'>
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
