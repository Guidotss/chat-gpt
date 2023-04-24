import { MouseEvent, useContext } from 'react';
import { SunIcon, ThunderIcon, WarningIcon } from '../ui';
import { UiContext } from '@/context/ui';
import { ChatContext } from '@/context/chat';

export const ChatDescription = () => {

  const { theme } = useContext(UiContext); 
  const { sendMessage } = useContext(ChatContext); 

  const handleClickMessage = (event:MouseEvent<HTMLLIElement>) => {
    const message = event.currentTarget.textContent!.split('→')[0].trim()
    const messageObject = {
      id:Math.random(),
      message,
      ia:false
    }
    sendMessage(messageObject); 
  }



  return (
    <div className='flex flex-col items-center justify-center overflow-auto 2xl:h-[70vh] snap-always'>
      <div className={`flex ${theme === 'dark' ? 'text-gray-50' : 'text-gray-950'} text-4xl font-semibold sm:mb-10 mb-5`}>
        <h1>Clone-GPT</h1>
      </div>
      <div className='grid sm:grid-cols-3 gap-3 items-center'>
        <div className='sm:grid-col-1'>
          <div className='flex justify-center'>
            <SunIcon />
          </div>
          <span className={`${theme === 'dark' ? 'text-gray-50' : 'text-gray-950'} text-xl flex justify-center`}>
            Ejemplos
          </span>
          <div className='mt-3'>
            <ul className={`${theme === 'dark'? 'text-gray-50' : 'text-gray-950'} text-sm flex flex-col gap-2 w-64 text-center cursor-pointer`}>
              <li className={`${ theme === 'dark' ? 'bg-gptlightgray hover:bg-gptdarkgray' : 'bg-gray-200 hover:bg-gray-300' } p-2 rounded-lg `} onClick={handleClickMessage}>
                "Explica la computacion cuantica en terminos simples" →
              </li>
              <li className={`${ theme === 'dark' ? 'bg-gptlightgray hover:bg-gptdarkgray' : 'bg-gray-200 hover:bg-gray-300' } p-2 rounded-lg`} onClick={handleClickMessage}>
                "Dame algunas ideas creativas para un cumpleaños de 10 años" →
              </li>
              <li className={`${ theme === 'dark' ? 'bg-gptlightgray hover:bg-gptdarkgray' : 'bg-gray-200 hover:bg-gray-300' } p-2 rounded-lg `} onClick={handleClickMessage}>
                "Como puedo hacer una peticion HTTP en Javascript " →
              </li> 
            </ul>
          </div>
        </div>
        <div className='grid-col-2'>
          <div className='flex justify-center'>
            <ThunderIcon />
          </div>
          <span className={`${theme === 'dark' ? 'text-gray-50' : 'text-gray-950'} text-xl flex justify-center`}>
            Capacidades
          </span>
          <div className='mt-3'>
            <ul className={`${theme === 'dark' ? 'text-gray-50' : 'text-gray-950'} text-sm flex flex-col gap-2 w-64 text-center`}>
              <li className={`${ theme === 'dark' ? 'bg-gptlightgray' : 'bg-gray-200' } p-2 rounded-lg `}>
                Recuerdame que dijo el usuario anteriormente en la conversacion
              </li>
              <li className={`${ theme === 'dark' ? 'bg-gptlightgray' : 'bg-gray-200' } p-2 rounded-lg `}>
                Permitirle al usuario proporcionar correcciones de seguimiento
              </li>
              <li className={`${ theme === 'dark' ? 'bg-gptlightgray' : 'bg-gray-200' } p-2 rounded-lg `}>
                Entranada para declinar peticiones inapropiadas
              </li>
            </ul>
          </div>
        </div>
        <div className='grid-col-3'>
          <div className='flex justify-center'>
            <WarningIcon />
          </div>
          <span className={`${theme === 'dark' ? 'text-gray-50' : 'text-gray-950'} text-xl flex justify-center`}>
            Limitaciones
          </span>
          <div className='mt-3'>
            <ul className={` ${theme === 'dark' ? 'text-gray-50' : 'text-gray-950'} text-sm flex flex-col gap-2 w-64 text-center`}>
              <li className={`${ theme === 'dark' ? 'bg-gptlightgray' : 'bg-gray-200' } p-2 rounded-lg` }>
                Podria ocacionalmente generar informacion incorrecta
              </li>
              <li className={`${ theme === 'dark' ? 'bg-gptlightgray' : 'bg-gray-200' } p-2 rounded-lg` }>
                Podria ocacionalmente producir instrucciones dañinas o contenido
                sesgado
              </li>
              <li className={`${ theme === 'dark' ? 'bg-gptlightgray' : 'bg-gray-200' } p-2 rounded-lg` }>
                Conocimiento limitado del mundo y los eventos luego del 2021
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
