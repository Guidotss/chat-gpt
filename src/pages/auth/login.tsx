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
  const { handleSubmit,register,formState: { errors } } = useForm<FormDataType>();
  const [ errorMessage, setErrorMessage ] = useState<string>();
  const [ showErrorMessage, setShowErrorMessage ] = useState<boolean>(false);
  const { login,startSignInWithGoogle } = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = async ({ email, password }: FormDataType) => {
    const ok = await login({ email, password });
    if (ok) {
      router.push('/');
    }
    setShowErrorMessage(true);
    setErrorMessage('El usuario o la contraseña son incorrectos');
    setTimeout(() => {
      setShowErrorMessage(false);
    },3000); 
    return; 
  }; 


  const handleSingInWithGoogle = async () => {
    const ok = await startSignInWithGoogle();
    console.log(ok); 
    if(ok){
      router.push('/');
    }else{
      setShowErrorMessage(true);
      setErrorMessage('No se pudo iniciar sesión con Google');
      setTimeout(() => {
        setShowErrorMessage(false);
      },3000);
      return; 
    }
  }

  return (
    <AuthLayOut
      title='Login'
      description='El usuatio debe iniciar sesión para poder continuar'
    >
      <div className='sm:shadow-lg sm:shadow-gray-950 rounded-lg w-[350px] h-3/4 2xl:h-3/4 md:w-[30vw] md:h-[500px]'>
        <h1 className='text-4xl text-gray-50 mb-10 text-center mt-10 2xl:mt-[15vh]'>
          Iniciar Sesión
        </h1>
        {
          showErrorMessage && (
            <div className='flex justify-center'>
              <span className='text-red-500 text-xs italic mb-5'>
                {errorMessage}
              </span>
            </div>
          )
        }

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
            className='bg-gptlogo sm:hover:bg-green-700 text-white font-bold sm:py-2 sm:px-3 rounded-full focus:outline-none focus:shadow-outline sm:w-1/2 mt-2 w-1/2 h-12'
            type='submit'
          >
            Iniciar sesion
          </button>
        </form>
        <span className='flex justify-center mt-[10px] text-slate-200'>or</span>
        <div className='flex justify-center mt-[10px]'>
          <button className='rounded-xl text-slate-200 sm:px-5 flex justify-center items-center bg-gray-700 p-2 sm:hover:bg-gray-800' onClick={handleSingInWithGoogle}>
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
