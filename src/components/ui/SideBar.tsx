import Image from "next/image"

export const SideBar = () => {
  return (
    <div className="bg-gptdarkgray fixed flex flex-col w-[260px] h-screen text-slate-200 overflow-auto sidebar-scroll-bar">
      <div className="flex border-[1px] p-2 rounded-md w-[240px] self-center mt-5">
        <Image
          src="/plus.webp"
          alt="Picture of the author"
          width={30}
          height={10}
        />
        <div className="ml-5 self-center">
          <span>Nuevo Chat</span>
        </div>
      </div>
    </div>
    
  )
}