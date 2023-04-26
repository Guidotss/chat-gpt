import { ChatLayOut } from '@/components';
import { Chat } from '@/components/chat';

const Home = () => {
  return (
    <ChatLayOut 
      title='Clone-GPT' 
      description='Chat App creada para la materia Laboratorio de computación 2'
      fullUrlImage='https://res.cloudinary.com/dqsqafh2n/image/upload/v1682523006/chatGPT-users/Screenshot_2023-04-26_122930_oxl5nf.png'
    >
      <div className='flex justify-center items-center'>
        <Chat />
      </div>
    </ChatLayOut>
  );
};
export default Home;
