import { FC } from 'react';

interface AvatarProps {
  children: React.ReactNode;
}

/* 
  Componente que se encarga de renderizar el avatar del usuario
  @param {React.ReactNode} children - Componente hijo que se renderizara dentro del avatar
*/
export const Avatar: FC<AvatarProps> = ({ children }) => {
  return (
    <div className='w-[40px] h-[40px] flex items-center justify-center rounded-sm'>
      {children}
    </div>
  );
};
