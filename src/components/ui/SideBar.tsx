import Image from 'next/image';
import { sidebarData } from '@/data';

export const SideBar = () => {
  return (
    <div className='bg-gptdarkgray fixed flex flex-col w-[260px] h-screen text-slate-200'>
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
          {sidebarData.map((item) => (
            <div className='flex flex-col'>
              <div className='flex items-center'>
                <div className='flex items-center'>
                  <Image
                    src='/chat.webp'
                    alt='chat.webp'
                    width={20}
                    height={10}
                  />
                  <div className='ml-5 self-center'>
                    <span>{item.description}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='divider' />
      </div>
      <div className="flex flex-col gap-5 ml-4">
        <div className='flex items-center'>
          <div className='flex items-center'>
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
        <div className='flex items-center'>
            <Image
              src="/darkmode.webp"
              alt="darkmode.webp"
              width={20}
              height={10}

            />
            <div className='ml-5 self-center'>
              <span>Modo Oscuro</span>
            </div>
        </div>
        <div className="flex items-center">
            <Image
              src="/logout.webp"
              alt="logout.webp"
              width={20}
              height={10}
            />
            <div className='ml-5 self-center'>
              <span>Cerrar Sesión</span>
            </div>
        </div>
      </div>
    </div>
  );
};