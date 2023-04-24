import { FC, MouseEvent, useContext } from 'react';
import Head from 'next/head';
import { SideBar } from '../index';
import { UiContext } from '@/context/ui';
import { MenuIcon } from '../ui/MenuIcon';

interface ChatLayOutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
}

export const ChatLayOut: FC<ChatLayOutProps> = ({ title,description,image,children }) => {

  const { theme,sidebar,toggleSidebar } = useContext(UiContext); 

  const onToggleSidebar = (e:MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    toggleSidebar();
  }

  return (
    <>
      <Head>
        <title>{title || 'Chat App'}</title>
        <meta name='author' content='Guido Olguin' />
        <meta name='keywords' content='Chat, App, Next.js' />
        <meta name='robots' content='index, follow' />
        <meta name='description' content={description || 'Chat App'} />
        <meta name='og:title' content={title || 'Chat App'} />
        <meta name='og:description' content={description || 'Chat App'} />
        {image && <meta name='og:image' content={image} />}
      </Head>

      <main className={`w-full sm:h-screen relative ${theme === 'dark' ? 'bg-gptgray' : 'bg-gray-50'}`}>
        <div className='sm:hidden block absolute left-2 top-2'>
          <button aria-label='Menu' onClick={onToggleSidebar}>
            <MenuIcon/>
          </button>
        </div>
        <aside className={`${sidebar ? 'block' : 'hidden'} sm:block absolute z-10`}>
          <SideBar />
        </aside>
        <div onClick={onToggleSidebar} className={`${sidebar ? 'blur-sm' : ''}`}>
          {children}
        </div>
      </main>
    </>
  );
};
