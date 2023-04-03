import { useContext } from 'react';
import Image from 'next/image';
import { AuthContext } from '@/context/auth';

const SettingsPage = () => {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <div className='h-screen bg-gptgray flex flex-col items-center justify-center'>
      <div className='border-2 p-4 rounded-lg px-20 shadow-lg shadow-gray-900'>
      <h1 className='text-gray-50 text-xl flex items-center justify-center mb-10 font-semibold'>Editar datos del usuario</h1>
        <div className='flex items-center justify-between'>
          {!user?.avatar ? (
            <div className='border-2 rounded-full p-5'>
              <Image src='/avatar.webp' alt='avatar' width={120} height={100} />
            </div>
          ) : (
            <Image
              className='h-12 w-12 rounded-full'
              src={user?.avatar}
              alt='avatar'
            />
          )}
          <input type='file' name='avatar' id='avatar' className='hidden' />
          <label
            htmlFor='avatar'
            className='cursor-pointer bg-gptblue text-white rounded-md hover:opacity-[0.8] flex items-center justify-center bg-gptlogo mt-2 ml-10 p-5'
          >
            Cambiar avatar
          </label>
        </div>
        <form>
          <div className='mt-4'>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-50'
            >
              Nombre
            </label>
            <div className='mt-1'>
              <input
                type='text'
                name='name'
                id='name'
                className='shadow-sm focus:ring-gptdarkgray focus:border-gptblue block w-full sm:text-sm border-gray-300 rounded-md p-2'
                defaultValue={user?.name}
                autoFocus
              />
            </div>
          </div>
          <div className='mt-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-50'
            >
              Email
            </label>
            <div className='mt-1'>
              <input
                type='email'
                name='email'
                id='email'
                className='shadow-sm focus:ring-gptdarkgray focus:border-gptblue block w-full sm:text-sm border-gray-300 rounded-md p-2'
                defaultValue={user?.email}
              />
            </div>
          </div>
          <div className='mt-4'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-50'
            >
              Contraseña
            </label>
            <div className='mt-1'>
              <input
                type='password'
                name='password'
                id='password'
                className='shadow-sm focus:ring-gptdarkgray focus:border-gptblue block w-full sm:text-sm border-gray-300 rounded-md p-2'
                placeholder='************'
              />
            </div>
          </div>
          <div className='mt-4 flex items-center justify-center bg-gptlogo p-2 rounded-full hover:opacity-[0.8] '>
            <button>Guardar cambios</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
