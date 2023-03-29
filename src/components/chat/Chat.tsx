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
    <div className="flex flex-col h-full flex-1 pl-64">
        {
            chat.map(items => (
                <div key={items.id} className="flex gap-4 p-4 m-auto max-2-3xl">
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
