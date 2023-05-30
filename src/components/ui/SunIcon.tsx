import { UiContext } from "@/context/ui";
import { useContext } from "react";

/* 
  Componente que se encarga de renderizar el icono de sol
  @returns {JSX.Element} - Retorna el icono de sol
*/
export const SunIcon = () => {

  const { theme } = useContext(UiContext); 

  return (
    <>
      <svg
        className={`h-6 w-6 mb-5 ${theme === 'dark' ? '' : 'text-gray-950'}`}
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
    </>
  );
};
