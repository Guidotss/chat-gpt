export const ChatDescription = () => {
  return (
    <div className='flex flex-col items-center justify-center overflow-auto mt-10'>
      <div className='flex text-gray-50 text-4xl font-semibold mb-10'>
        <h1>ChatGPT</h1>
      </div>
      <div className='grid grid-cols-3 gap-3 items-center'>
        <div className='grid-col-1'>
          <div className='flex justify-center'>
            <svg
              className='h-6 w-6 mb-5'
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
          </div>
          <span className='text-gray-50 text-xl flex justify-center'>
            Ejemplos
          </span>
          <div className='mt-3'>
            <ul className='text-gray-50 text-sm flex flex-col gap-2 w-64 text-center'>
              <li className='bg-gptlightgray p-2 rounded-lg hover:bg-gptdarkgray'>
                "Explica la computacion cuantica en terminos simples"
              </li>
              <li className='bg-gptlightgray p-2 rounded-lg hover:bg-gptdarkgray'>
                "Dame algunas ideas creativas para un cumpleaños de 10 años"
              </li>
              <li className='bg-gptlightgray p-2 rounded-lg hover:bg-gptdarkgray'>
                "Como puedo hacer una peticion HTTP en Javascript"
              </li>
            </ul>
          </div>
        </div>
        <div className='grid-col-2'>
          <div className='flex justify-center'>
            <svg
              className='h-6 w-6 mb-5'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
              ></path>
            </svg>
          </div>
          <span className='text-gray-50 text-xl flex justify-center'>
            Capacidades
          </span>
          <div className='mt-3'>
            <ul className='text-gray-50 text-sm flex flex-col gap-2 w-64 text-center'>
              <li className='bg-gptlightgray p-2 rounded-lg'>
                Recuerdame que dijo el usuario anteriormente en la conversacion
              </li>
              <li className='bg-gptlightgray p-2 rounded-lg'>
                Permitirle al usuario proporcionar correcciones de seguimiento
              </li>
              <li className='bg-gptlightgray p-2 rounded-lg'>
                Entranada para declinar peticiones inapropiadas
              </li>
            </ul>
          </div>
        </div>
        <div className='grid-col-3'>
          <div className='flex justify-center'>
            <svg
              className='h-6 w-6 mb-5'
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
              <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'></path>
              <line x1='12' y1='9' x2='12' y2='13'></line>
              <line x1='12' y1='17' x2='12.01' y2='17'></line>
            </svg>
          </div>
          <span className='text-xl text-gray-50 flex justify-center'>
            Limitaciones
          </span>
          <div className='mt-3'>
            <ul className='text-gray-50 text-sm flex flex-col gap-2 w-64 text-center'>
              <li className='bg-gptlightgray p-2 rounded-lg'>
                Podria ocacionalmente generar informacion incorrecta
              </li>
              <li className='bg-gptlightgray p-2 rounded-lg'>
                Podria ocacionalmente producir instrucciones dañinas o contenido
                sesgado
              </li>
              <li className='bg-gptlightgray p-2 rounded-lg'>
                Conocimiento limitado del mundo y los eventos luego del 2021
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
