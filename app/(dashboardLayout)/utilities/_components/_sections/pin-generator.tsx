"use client"

import { CopyIcon } from "lucide-react"
import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CardWithForm } from "@/components/sections/api-card"
import CopyToClipboard from "@/components/copy-clipboard"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

const generatePIN = (len: number, letters: boolean) => {
  const _letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const _numbers = '0123456789';

  let characters = _numbers;
  let pin = '';

  if (letters) characters += _letters;

  // Remove ambiguous characters
  characters = characters.replace(/[IlO01]/g, '');

  for (let i = 0; i < len; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    pin += characters[randomIndex];
  }

  return pin;
}

const PINGeneratorCard = () => {
  const [letters, setLetters] = useState(false);
  const [len, setLen] = useState([4]);
  const [output, setOutput] = useState("");
  const [message, setMessage] = useState("Click on the referesh button to generate.");

  const refresh = async () => {
    setMessage("Generating PIN...")
    setOutput(generatePIN(len[0], letters))
    setMessage("Your PIN has been generated successfully!")
  }

  return (
    <CardWithForm
      title="PIN Generator"
      description="Generate a random PIN."
      message={message}
      refresh={refresh}
    >
      <form>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="len">Length: {len}</Label>
          </div>
          <Slider
            defaultValue={len}
            max={10}
            step={1}
            onValueChange={(nums) => setLen(nums)}
          />
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password_pin">Include</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="letters" checked={letters} onClick={() => setLetters(!letters)} />
            <label
              htmlFor="capital"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              A-Za-z (Letters)
            </label>
          </div>
          {output !== "" && (
            <div className="flex justify-between">
              <div className="flex-1 flex-col space-y-1.5">
                <Label htmlFor="output">PIN</Label>
                <Input id="output" placeholder="PIN will be generated here." value={output} readOnly />
              </div>
              <CopyToClipboard content={output} className="flex justify-end place-self-center mt-8 h-full p-1">
                <CopyIcon />
              </CopyToClipboard>
            </div>
          )}
        </div>
      </form>
    </CardWithForm>
  )
}

export default PINGeneratorCard