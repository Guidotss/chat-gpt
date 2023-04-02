import { FC } from 'react';
import Head from 'next/head';
import { SideBar } from '../index';

interface ChatLayOutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
}

export const ChatLayOut: FC<ChatLayOutProps> = ({ title,description,image,children }) => {
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

      <main className='w-full h-screen bg-gptgray relative'>
        <SideBar />
        {children}
      </main>
    </>
  );
};
