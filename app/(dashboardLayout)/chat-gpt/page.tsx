import BreadCrumb from "@/components/breadcrumb"
import { CardWithForm } from "@/components/sections/api-card"
import ChatGPTCard from "./_components/_sections/chat-gpt"

const ChatGPT = () => {
  return (
    <main className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h1>Dashbord :: ChatGPT</h1>
        <BreadCrumb />
      </div>
      <ChatGPTCard />
    </main>
  )
}

export default ChatGPT