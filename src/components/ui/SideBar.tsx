import { useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChatContext } from '@/context/chat';
import { TypingEffect } from './TypingEffect';
import { AuthContext } from '@/context/auth';
import { UiContext } from '@/context/ui';
import { SunIcon } from './SunIcon';
import { SettingIcon } from './SettingIcon';
import Link from 'next/link';

export const SideBar = () => {
  const { messages, deleteChat } = useContext(ChatContext);
  const { logout } = useContext(AuthContext);
  const { toggleTheme, theme } = useContext(UiContext);
  const router = useRouter();

  const handleDeleteChat = () => {
    deleteChat();
  };

  const handleLogout = () => {
    logout();
    router.push('/auth/login');
  };

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <aside className='bg-gptdarkgray fixed flex flex-col w-[260px] h-screen text-slate-200'>
      <div className='overflow-auto sidebar-scroll-bar flex flex-col'>
        <div className='flex border-[1px] p-2 rounded-md w-[240px] self-center mt-5 shadow-sm shadow-gptlightgray'>
          <Image
            src='/plus.webp'
            alt='Picture of the author'
            width={30}
            height={10}
          />
          <div className='ml-5 self-center'>
            <span>Nuevo Chat</span>
          </div>
        </div>
        <div className='flex flex-col mt-5 gap-6 ml-4 text-md font-extralight overflow-auto sidebar-scroll-bar h-4/5'>
          {messages.map((item) => {
            if (item.ia) return null;
            return (
              <div className='flex flex-col' key={item.id}>
                <div className='flex items-center'>
                  <div className='flex items-center'>
                    <Image
                      src='/chat.webp'
                      alt='chat.webp'
                      width={20}
                      height={10}
                    />
                    <div className='ml-5 self-center'>
                      <TypingEffect text={item.message} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='divider mt-10' />
      </div>
      <nav className='flex flex-col gap-5 ml-4 mt-10  mr-2'>
        <div className='flex hover:bg-gptlightgray p-3 rounded-lg '>
          <div
            className='flex items-center cursor-pointer'
            onClick={handleDeleteChat}
          >
            <Image
              src='/delete.webp'
              alt='delete.webp'
              width={20}
              height={10}
            />
            <div className='ml-5 self-center'>
              <span>Eliminar Chat</span>
            </div>
          </div>
        </div>
        <div className='flex p-3 hover:bg-gptlightgray rounded-lg'>
          <div
            className='flex items-center cursor-pointer'
            onClick={handleToggleTheme}
          >
            {theme !== 'dark' ? (
              <>
                <Image
                  src='/darkmode.webp'
                  alt='darkmode.webp'
                  width={20}
                  height={10}
                />
                <div className='ml-5 self-center'>
                  <span>Modo Oscuro</span>
                </div>
              </>
            ) : (
              <>
                <svg
                  className={`h-6 w-6`}
                  stroke='currentColor'
                  fill='none'
                  strokeWidth='1.5'
                  viewBox='0 0 24 24'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='12' cy='12' r='5'></circle>
                  <line x1='12' y1='1' x2='12' y2='3'></line>
                  <line x1='12' y1='21' x2='12' y2='23'></line>
                  <line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
                  <line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
                  <line x1='1' y1='12' x2='3' y2='12'></line>
                  <line x1='21' y1='12' x2='23' y2='12'></line>
                  <line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
                  <line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
                </svg>
                <div className='ml-5 self-center'>
                  <span>Modo Claro</span>
                </div>
              </>
            )}
          </div>
        </div>
        <div className='flex p-3 hover:bg-gptlightgray rounded-lg'>
          <div className='flex items-center cursor-pointer'>
            <SettingIcon/>
            <Link href="/settings" passHref legacyBehavior>
              <a className='ml-5 self-center' >Configuración</a>
            </Link>
          </div>
        </div>

        <div
          className='flex p-3 hover:bg-gptlightgray rounded-lg'
          onClick={handleLogout}
        >
          <div className='flex items-center'>
            <Image
              src='/logout.webp'
              alt='logout.webp'
              width={20}
              height={10}
            />
            <div className='ml-5 self-center cursor-pointer'>
              <span>Cerrar Sesión</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};
