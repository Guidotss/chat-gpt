import { ChatLayOut } from "@/components"
import { Chat } from "@/components/chat"

const Home = () => {
  return (
    <ChatLayOut>
      <div className="flex justify-center items-center">
          <Chat/>
      </div>
    </ChatLayOut>
  )
}
export default Home
