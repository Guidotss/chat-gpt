import { FC } from 'react';

interface AvatarProps {
  children: React.ReactNode;
}

export const Avatar: FC<AvatarProps> = ({ children }) => {
  return (
    <div className='w-[30px] h-[30px] flex  items-center justify-center rounded-sm'>
      {children}
    </div>
  );
};
