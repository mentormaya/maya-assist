"use client"

import { CopyIcon } from 'lucide-react'

import { CardWithForm } from '../../../../../components/sections/api-card'
import { Label } from '../../../../../components/ui/label'
import { Input } from '../../../../../components/ui/input'
import CopyToClipboard from '../../../../../components/copy-clipboard'
import { useState } from 'react'
import { convetNumber } from '@/fetchers/sapi'

interface NumberConversion {
  num: string
  english: string
  nepali: string
  decimal: string
  whole: string
  lakh_format: string
  million_format: string
  words_eng: string
  words_nep: string
}

const NumbersCard = () => {
  const [message, setMessage] = useState("Input the number and hit refresh button to convert")
  const [num, setNum] = useState("")
  const [output, setOutput] = useState<NumberConversion | undefined>(undefined)
  return (
    <CardWithForm
      title="Number Utility"
      description="Format and convert number in to words."
      message={message}
      refresh={async () => {
        if (num === "") {
          setMessage("Please Input the Number first.")
          return
        }
        setMessage("Converting Number...")
        setOutput(await convetNumber(num))
        setMessage("Number has been converted!")
      }}
    >
      <form>
        <div className="grid w-full items-center gap-4">
          <div className="flex justify-between">
            <div className="flex-1 flex-col space-y-1.5">
              <Label htmlFor="num">Number</Label>
              <Input id="num" placeholder="Number" onChange={(e) => setNum(e.target.value)} />
            </div>
            <CopyToClipboard content={num} className="flex justify-end place-self-center mt-8 h-full p-1">
              <CopyIcon />
            </CopyToClipboard>
          </div>
          {output && (
            <div className='flex flex-col gap-y-1'>
              <div className="flex justify-between">
                <div className="flex-1 flex-col space-y-1">
                  <Label htmlFor="nepali_number">Nepali</Label>
                  <Input id="nepali_number" placeholder="Number" value={output.nepali} readOnly />
                </div>
                <CopyToClipboard content={output.nepali} className="flex justify-end place-self-center mt-8 h-full p-1">
                  <CopyIcon />
                </CopyToClipboard>
              </div>
              <div className="flex justify-between">
                <div className="flex-1 flex-col space-y-1">
                  <Label htmlFor="lakh_format">Lakh Format</Label>
                  <Input id="lakh_format" placeholder="Number" value={output.lakh_format} readOnly />
                </div>
                <CopyToClipboard content={output.lakh_format} className="flex justify-end place-self-center mt-8 h-full p-1">
                  <CopyIcon />
                </CopyToClipboard>
              </div>
              <div className="flex justify-between">
                <div className="flex-1 flex-col space-y-1">
                  <Label htmlFor="million_format">Million Format</Label>
                  <Input id="million_format" placeholder="Number" value={output.million_format} readOnly />
                </div>
                <CopyToClipboard content={output.million_format} className="flex justify-end place-self-center mt-8 h-full p-1">
                  <CopyIcon />
                </CopyToClipboard>
              </div>
              <div className="flex justify-between">
                <div className="flex-1 flex-col space-y-1">
                  <Label htmlFor="eng_words">{output.words_eng}</Label>
                </div>
                <CopyToClipboard content={output.words_eng} className="flex p-1">
                  <CopyIcon />
                </CopyToClipboard>
              </div>
              <div className="flex justify-between">
                <div className="flex-1 flex-col space-y-1">
                  <Label htmlFor="nep_words">{output.words_nep}</Label>
                </div>
                <CopyToClipboard content={output.words_nep} className="flex p-1">
                  <CopyIcon />
                </CopyToClipboard>
              </div>
            </div>
          )}
        </div>
      </form>
    </CardWithForm>
  )
}

export default NumbersCard