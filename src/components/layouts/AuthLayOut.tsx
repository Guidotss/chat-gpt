import Head from 'next/head';
import { FC } from 'react';

interface AuthLayOutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  fullUrlImage?: string;
}

/* 
  Componente que se encarga de renderizar el layout de la pagina de autenticacion
  @param {React.ReactNode} children - Componente hijo que se renderizara dentro del layout  
  @param {string} title - Titulo de la pagina
  @param {string} description - Descripcion de la pagina
  @param {string} fullUrlImage - Url de la imagen que se mostrara en la pagina
  @returns {JSX.Element} - Retorna el layout de la pagina de autenticacion
*/

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
