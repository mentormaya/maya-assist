"use client"

import { CopyIcon } from "lucide-react"
import { Input } from "../../../../../components/ui/input"
import { Label } from "../../../../../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../../components/ui/select"
import { CardWithForm } from "../../../../../components/sections/api-card"
import { generatePIN, generatePassword } from "@/fetchers/sapi"
import { useState } from "react"
import CopyToClipboard from "../../../../../components/copy-clipboard"

const PasswordPINGeneratorCard = () => {
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
      title="Password/PIN Generator"
      description="Generate a random password or PIN."
      message={message}
      refresh={refresh}
    >
      <form>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password_pin">Password/PIN</Label>
            <Select onValueChange={(selected => setPasswordPin(selected === "password"))}>
              <SelectTrigger id="password_pin">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="password">Password</SelectItem>
                <SelectItem value="pin">PIN</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {output !== "" && (
            <div className="flex justify-between">
              <div className="flex-1 flex-col space-y-1.5">
                <Label htmlFor="output">{passwordPin ? "Password" : "PIN"}</Label>
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

export default PasswordPINGeneratorCard