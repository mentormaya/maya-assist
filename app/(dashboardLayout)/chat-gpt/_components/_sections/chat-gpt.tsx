"use client"

import CopyToClipboard from '@/components/copy-clipboard'
import { CardWithForm } from '@/components/sections/api-card'
import Typewriter from '@/components/sections/typewriter'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CopyIcon } from 'lucide-react'
import { useState } from 'react'

const ChatGPTCard = () => {
  const [output, setOutput] = useState("")
  const [prompt, setPrompt] = useState("")
  const [message, setMessage] = useState("Type your queries and click on refresh button to get answers.")

  const refresh = async () => {
    if (prompt === "") {
      setMessage("Please type your prompt in the input box above first.")
      return
    }
    //@ts-expect-error
    const res = await window.MaYaAPI.chatgpt(prompt)
    setOutput(res)
    setMessage("Any other queries?")
  }

  return (
    <div className="flex gap-4 mt-6">
      <CardWithForm
        title="Your Queries with AI"
        description="Type your queries in the input below to get answer from chatgpt."
        refresh={refresh}
        className="w-full"
        message={message}
      >
        <form onSubmit={e => { e.preventDefault(); refresh(); }}>
          <div className="grid w-full items-center gap-4">
            <div className="flex justify-between">
              <div className="flex-1 flex-col space-y-1.5 mr-2">
                <Label htmlFor="prompt">Prompt</Label>
                <Input id="prompt" placeholder="Your Queries Here" onChange={(e) => setPrompt(e.target.value)} />
              </div>
              <CopyToClipboard content={prompt} className="flex justify-end place-self-center mt-8 h-full p-1 hover:bg-inherit">
                <CopyIcon />
              </CopyToClipboard>
            </div>
            {output && (
              <div className='flex flex-col gap-y-1'>
                <div className="flex justify-between">
                  <div className="flex flex-col space-y-1 gap-2">
                    <Label htmlFor="answers">Answer:</Label>
                    <Typewriter text={output} id="answers" />
                  </div>
                  <CopyToClipboard content={output} className="flex justify-end place-self-center mt-8 h-full p-1">
                    <CopyIcon />
                  </CopyToClipboard>
                </div>
              </div>
            )}
          </div>
        </form>
      </CardWithForm>
    </div>
  )
}

export default ChatGPTCard