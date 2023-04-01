import { useContext, useState } from 'react';
import Link from 'next/link';
import { AuthContext } from '@/context/auth';
import { AuthLayOut } from '@/components';
import { GoogleIcon } from '@/components/ui/';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

type FormDataType = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormDataType>();
  const { login } = useContext(AuthContext);
  const [showErrors, setShowErrors] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async ({ email, password }: FormDataType) => {
    const ok = await login({ email, password });
    if (!ok) {
      setShowErrors(true);
      return;
    }
    router.replace('/');
  };

  return (
    <AuthLayOut
      title='Login'
      description='El usuatio debe iniciar sesión para poder continuar'
    >
      <div className='shadow-lg shadow-gray-900 rounded-lg w-[40vw] h-[95vh] 2xl:h-3/4'>
        <h1 className='text-4xl text-gray-50 mb-10 text-center mt-[15vh]'>
          Iniciar Sesión
        </h1>
        <form
          className='flex flex-col items-center justify-center'
          onSubmit={handleSubmit(handleLogin)}
        >
          <div className='mb-4 flex flex-col'>
            <label
              className='block text-gray-50 text-sm font-semibold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='user@email.com'
              {...register('email', {
                required: {
                  value: true,
                  message: 'El email es requerido'
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'El email no es valido'
                }
              })}
            />
            {errors.email && (
              <span className='text-red-500 text-xs italic'>
                {errors.email.message}
              </span>
            )}
          </div>
          <div className='mb-4 flex flex-col'>
            <label
              className='block text-gray-50 text-sm font-semibold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              autoComplete='on'
              type='password'
              placeholder='******************'
              {...register('password', {
                required: {
                  value: true,
                  message: 'El password es requerido'
                },
                minLength: {
                  value: 6,
                  message: 'El password debe tener al menos 6 caracteres'
                }
              })}
            />
            {errors.password && (
              <span className='text-red-500 text-xs italic'>
                {errors.password.message}
              </span>
            )}
          </div>
          <button
            className='bg-gptlogo hover:bg-green-700 text-white font-bold py-2 px-3 rounded-full focus:outline-none focus:shadow-outline w-1/4 mt-2'
            type='submit'
          >
            Iniciar sesion
          </button>
        </form>
        <span className='flex justify-center mt-[10px]'>or</span>
        <div className='flex justify-center mt-[10px]'>
          <button className='rounded-xl text-slate-200 px-10 flex justify-center items-center bg-gray-700 2xl:w-[15vw] p-2 hover:bg-gray-800'>
            <GoogleIcon />
            <span className='ml-6'>Iniciar sesion con google</span>
          </button>
        </div>
        <Link href='/auth/register' passHref legacyBehavior>
          <a className='flex justify-end mt-[10px] text-gray-50 underline mr-10'>
            ¿No tienes cuenta?
          </a>
        </Link>
      </div>
    </AuthLayOut>
  );
};

export default LoginPage;
