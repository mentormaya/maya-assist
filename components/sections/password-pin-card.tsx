"use client"

import { Copy, CopyIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { CardWithForm } from "./api-card"
import { generatePIN, generatePassword } from "@/fetchers/sapi"
import { useState } from "react"
import CopyToClipboard from "../copy-clipboard"

interface Props {
  title: string
  description?: string
}

const PasswordPINGeneratorCard = ({ title, description }: Props) => {
  const [passwordPin, setPasswordPin] = useState(true);
  const [output, setOutput] = useState("");
  const [message, setMessage] = useState("Click on the referesh button to generate.");
  const refresh = async () => {
    if (passwordPin) {
      setMessage("Generating Password...")
      const res = await generatePassword()
      setOutput(res.password)
      setMessage(res.message)
    } else {
      setMessage("Generating PIN...")
      const res = await generatePIN()
      setOutput(res.pin)
      setMessage(res.message)
    }
  }
  return (
    <CardWithForm
      title={title}
      description={description}
      message={message}
      refresh={refresh}
    >
      <form>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password_pin">Password/PIN</Label>
            <Select>
              <SelectTrigger id="password_pin">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="password">Password</SelectItem>
                <SelectItem value="pin">PIN</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-between">
            <div className="flex-1 flex-col space-y-1.5">
              <Label htmlFor="output">{passwordPin ? "Password" : "PIN"}</Label>
              <Input id="output" placeholder="Password/PIN will be generated here." value={output} readOnly />
            </div>
            <CopyToClipboard content={output} className="flex justify-end place-self-center mt-8 h-full p-1">
              <CopyIcon />
            </CopyToClipboard>
          </div>
        </div>
      </form>
    </CardWithForm>
  )
}

export default PasswordPINGeneratorCard