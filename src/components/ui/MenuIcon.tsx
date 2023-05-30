/* 
  Componente que se encarga de renderizar el icono del menu unicamente en dispositivos moviles
  @returns {JSX.Element} - Retorna el icono del menu
*/

export const MenuIcon = () => {
  return (
    <svg
      stroke='currentColor'
      fill='none'
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-10 w-10'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <line x1='3' y1='12' x2='21' y2='12'></line>
      <line x1='3' y1='6' x2='21' y2='6'></line>
      <line x1='3' y1='18' x2='21' y2='18'></line>
    </svg>
  );
};
