import Image from "next/image"
import { Avatar } from "../ui"; 


export const Chat = () => {
    
    const chat = [
        {
            id: 1,
            ia:false,
            message: 'Hola',
        },
        {
            id: 2,
            ia:true,
            message: 'Como estas?',
        },
    ]

    

  return (
    <div className="flex flex-col h-full flex-1 pl-64 mt-10 text-white font-extralight">
        {
            chat.map(items => (
                <div key={items.id} className={`flex gap-4 p-8 w-3/4 m-auto ${items.ia ? 'bg-gptlightgray' : 'bg-gptgray'}`}>
                    <Avatar>
                        <Image
                            src="/avatar.webp"
                            alt="avatar"
                            width={50}
                            height={50}
                        />
                    </Avatar>
                    <p className="self-center">{items.message}</p>
                </div>
            ))
        }
    </div>
  )
}
