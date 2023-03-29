import Image from "next/image"
import Link from "next/link";
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
            <div className="absolute bottom-0 self-center w-1/3">
            <div>
                <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 w-full">
                    <textarea
                        tabIndex={0}
                        rows={1}
                        className="flex-1 p-2 rounded-lg bg-gptlightgray w-3/4 text-white resize-none"
                    />
                    <button className="absolute right-0 mt-[5px] hover:bg-gptdarkgray rounded-md p-1">
                        <Image
                            src="/send.webp"
                            alt="send"
                            width={20}
                            height={20}
                        />
                    </button>
                </form>
                <div className="flex flex-row gap-3 w-full text-gray-400 p-5 justify-center">
                    <Link href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" passHref legacyBehavior>
                        <a className="text-sm self-center">ChatGPT</a>
                    </Link>
                    <p className="self-center text-sm">Lazamiento libre de chat gpt para la materia laboratorio de computacion II</p>
                </div>
            </div>
        </div>
    </div>
  )
}
