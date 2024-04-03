import BreadCrumb from "@/components/breadcrumb"
import ChatCard from "./_components/_sections/ai-chat-card"

const ChatGPT = () => {
  return (
    <main className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h1>Dashbord :: ChatGPT</h1>
        <BreadCrumb />
      </div>
      <ChatCard />
    </main>
  )
}

export default ChatGPT