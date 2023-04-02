import Head from 'next/head';
import { FC } from 'react';

interface AuthLayOutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  fullUrlImage?: string;
}

export const AuthLayOut: FC<AuthLayOutProps> = ({ children,title,description,fullUrlImage }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='author' content='Guido Olguin' />
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        {fullUrlImage && <meta property='og:image' content={fullUrlImage} />}
      </Head>
      <div className='bg-gptgray h-screen w-full relative flex justify-center items-center'>
        {children}
      </div>
    </div>
  );
};
