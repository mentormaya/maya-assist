"use client"

import { useState } from 'react'
import { CopyIcon } from 'lucide-react'

import { Input } from '@/components/ui/maya-input'
import { Label } from '@/components/ui/label'
import CopyToClipboard from '@/components/copy-clipboard'
import MarkdownTypewriter from '@/components/sections/markdown-typewriter'
import { CardWithForm } from '@/components/sections/api-card'
import Switcher from './ai-switcher'
import { keyOf } from '@/lib/enum'
import { AI } from '@/constants/enums'

const ChatCard = () => {
  const [ai, setAI] = useState<AI>(AI.Gemini)
  const [output, setOutput] = useState("")
  const [prompt, setPrompt] = useState("")
  const [answerLabel, setAnswerLabel] = useState("Answer:")
  const [message, setMessage] = useState("Type your queries and click on refresh button to get answers.")

  const refresh = async () => {
    if (prompt === "") {
      setMessage("Please type your prompt in the input box above first.")
      return
    }
    setMessage("Thinking...Please wait.....")
    //@ts-expect-error
    const res = ai === AI.ChatGPT ? await window.MaYaAPI.chatgpt(prompt) : await window.MaYaAPI.gemini(prompt)
    setOutput(res)
    setAnswerLabel(`Answer for "${prompt}"`)
    setPrompt("")
    setMessage("Any other queries?")
  }

  return (
    <div className="flex gap-4 mt-6">
      <CardWithForm
        title="Your Queries with AI"
        description={`Type your queries in the input below to get answer from ${keyOf(ai, AI)}.`}
        refresh={refresh}
        className="w-full"
        message={message}
        option={<Switcher label="AI" options={AI} selected={ai} onChange={_ai => setAI(_ai as AI)} />}
      >
        <div className="grid w-full items-center gap-4">
          <form onSubmit={e => { e.preventDefault(); refresh(); }}>
            <div className="flex justify-between">
              <div className="flex-1 flex-col space-y-1.5 mr-2">
                <Label htmlFor="prompt">Prompt</Label>
                <Input
                  id="prompt"
                  placeholder="Your Queries Here"
                  onChange={(e) => setPrompt(e.target.value)}
                  showClearButton={prompt !== ""}
                  value={prompt}
                  clear={() => setPrompt("")}
                />
              </div>
              <CopyToClipboard content={prompt} className="flex justify-end place-self-center mt-8 h-full p-1 hover:bg-inherit">
                <CopyIcon />
              </CopyToClipboard>
            </div>
          </form>
          {output && (
            <div className='flex flex-col gap-y-1'>
              <div className="flex justify-between">
                <div className="flex flex-col space-y-1 gap-2">
                  <Label htmlFor="answers">{answerLabel}</Label>
                  <MarkdownTypewriter text={output} id="answers" />
                </div>
                <CopyToClipboard content={output} className="flex justify-end place-self-center mt-8 h-full p-1">
                  <CopyIcon />
                </CopyToClipboard>
              </div>
            </div>
          )}
        </div>
      </CardWithForm>
    </div>
  )
}

export default ChatCard