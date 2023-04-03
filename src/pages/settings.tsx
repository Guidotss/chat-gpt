import { useContext } from 'react';
import Image from 'next/image';
import { AuthContext } from '@/context/auth';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

type userUpdate = {
  name?: string;
  email?: string;
  password?: string; 
  avatar?: File; 
};

const SettingsPage = () => {
  const { user, updateUser,} = useContext(AuthContext);
  const { handleSubmit,register,formState: { errors } } = useForm<userUpdate>();
  const router = useRouter();

  const handleUpdateUser = async ({name,email,password, avatar}: userUpdate) => {

    const avatarFile = avatar && avatar[0];

    try{
      await updateUser(user?.id!,name, email,avatarFile,password);
      router.push('/');
    }catch(err){
      console.log(err);
    }
  };


  return (
    <div className='h-screen bg-gptgray flex flex-col items-center justify-center'>
      <form
        className='border-[1px] p-4 rounded-lg px-20 shadow-lg shadow-gray-900'
        onSubmit={handleSubmit(handleUpdateUser)}
      >
        <h1 className='text-gray-50 text-xl flex items-center justify-center mb-10 font-semibold'>
          Editar datos del usuario
        </h1>
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
              width={120}
              height={100}
            />
          )}
          <input
            type='file'
            id='avatar'
            className='hidden'
            {...register('avatar')}
          />
          <label
            htmlFor='avatar'
            className='cursor-pointer bg-gptblue text-white rounded-md hover:opacity-[0.8] flex items-center justify-center bg-gptlogo mt-2 ml-10 p-5'
          >
            Cambiar avatar
          </label>
        </div>
        <div>
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
                id='name'
                className='shadow-sm focus:ring-gptdarkgray focus:border-gptblue block w-full sm:text-sm border-gray-300 rounded-md p-2'
                defaultValue={user?.name}
                autoFocus
                {...register('name')}
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
                id='email'
                className='shadow-sm focus:ring-gptdarkgray focus:border-gptblue block w-full sm:text-sm border-gray-300 rounded-md p-2'
                defaultValue={user?.email}
                {...register('email')}
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
                id='password'
                className='shadow-sm focus:ring-gptdarkgray focus:border-gptblue block w-full sm:text-sm border-gray-300 rounded-md p-2'
                placeholder='************'
                {...register('password')}
              />
            </div>
          </div>
          <div className='mt-4 flex items-center justify-center bg-gptlogo p-2 rounded-full hover:opacity-[0.8] '>
            <button type='submit'>Guardar cambios</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;
