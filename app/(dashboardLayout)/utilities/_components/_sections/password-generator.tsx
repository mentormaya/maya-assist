"use client"

import { CopyIcon } from "lucide-react"
import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CardWithForm } from "@/components/sections/api-card"
import CopyToClipboard from "@/components/copy-clipboard"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

const generatePassword = (len: number, capital: boolean, small: boolean, numbers: boolean, symbols: boolean) => {
  const _capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const _smallLetters = 'abcdefghijklmnopqrstuvwxyz';
  const _numbers = '0123456789';
  const _symbols = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  let characters = '';
  let password = '';

  if (capital) characters += _capitalLetters;
  if (small) characters += _smallLetters;
  if (numbers) characters += _numbers;
  if (symbols) characters += _symbols;

  // Remove ambiguous characters
  characters = characters.replace(/[IlO01]/g, '');

  for (let i = 0; i < len; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

const PasswordGeneratorCard = () => {
  const [capital, setCapital] = useState(true);
  const [small, setSmall] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [len, setLen] = useState([10]);
  const [output, setOutput] = useState("");
  const [message, setMessage] = useState("Click on the referesh button to generate.");

  const refresh = async () => {
    setMessage("Generating Password...")
    setOutput(generatePassword(len[0], capital, small, numbers, symbols))
    setMessage("Your password has been generated successfully!")
  }

  return (
    <CardWithForm
      title="Password Generator"
      description="Generate a random password."
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
            max={20}
            step={1}
            onValueChange={(nums) => setLen(nums)}
          />
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password_pin">Include</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="capital" checked={capital} onClick={() => setCapital(!capital)} />
            <label
              htmlFor="capital"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              A-Z (Capital letters)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="small" checked={small} onClick={() => setSmall(!small)} />
            <label
              htmlFor="small"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              a-z (Small letters)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="numbers" checked={numbers} onClick={() => setNumbers(!numbers)} />
            <label
              htmlFor="numbers"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              0-9 (Numbers)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="symbols" checked={symbols} onClick={() => setSymbols(!symbols)} />
            <label
              htmlFor="symbols"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              !@#$%^&* (Symbols)
            </label>
          </div>
          {output !== "" && (
            <div className="flex justify-between">
              <div className="flex-1 flex-col space-y-1.5">
                <Label htmlFor="output">Password</Label>
                <Input id="output" placeholder="Password/PIN will be generated here." value={output} readOnly />
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

export default PasswordGeneratorCard