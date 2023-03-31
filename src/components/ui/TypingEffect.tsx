import { FC, useEffect, useState, useContext } from 'react';
import { ChatContext } from '@/context/chat';

interface TypingEffectProps {
    text:string; 
}

export const TypingEffect:FC<TypingEffectProps> = ({ text }) => {

    const [ dislpayText, setDisplayText ] = useState(""); 
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ showCursor, setShowCursor ] = useState(true);
    const { loading } = useContext(ChatContext);

    useEffect(() => {

        if(!text.length) return;

        const randomTime = Math.floor(Math.random() * 100) + 15;

        const interval = setInterval(() => {
            if (currentIndex >= text.length) {
                clearInterval(interval);
                setShowCursor(false);
                return;
            }
            const nextIndex = text.indexOf(" ", currentIndex + 1);
            if(nextIndex === -1){
                setDisplayText(text);
                setCurrentIndex(text.length);
                return;
            }

            setDisplayText(text.slice(0, nextIndex));
            setCurrentIndex(nextIndex + 1);

        }, randomTime);

        return () => clearInterval(interval);
    }, [text, currentIndex])


  return (
    <span className={`${showCursor ? 'after:content-["▋"] after:ml-1 after:animate-pulse': "" }`}>{dislpayText}</span>
  )
}
