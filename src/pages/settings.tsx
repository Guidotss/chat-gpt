import { Avatar, ChatLayOut } from '@/components';
import { AuthContext } from '@/context/auth';
import Image from 'next/image';
import { useContext } from 'react';

const SettingsPage = () => {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <div className='h-screen bg-gptgray flex flex-col items-center justify-center'>
      <div>
        <div>
          {!user?.avatar ? (
            <div className='border-2 rounded-full p-5'>
                <Image
                    src="/avatar.webp"
                    alt="avatar"
                    width={120}
                    height={100}
                    
                />
            </div>
          ) : (
            <img
              className='h-12 w-12 rounded-full'
              src={user?.avatar}
              alt='avatar'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
