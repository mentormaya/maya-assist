"use client"

import { convertEnglishDate, convertNepaliDate } from "@/actions/sapi"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ConvertedDate, Date } from "@/props/sapi/dates"
import { useState } from "react"

interface Props {
  today: Date
}

const nepaliMonths = ["", "Baishakh", "Jestha", "Asar", "Shrawan", "Bhadra", "Ashoj", "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"]
const englishMonths = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


export function DateConverter({ today }: Props) {
  const [nepaliDate, setNepaliDate] = useState(`${today.nep_year_eng}-${nepaliMonths.indexOf(today.nep_month_eng).toString().padStart(2, '0')}-${today.nep_date_eng.padStart(2, '0')}`)
  const [englishDate, setenglishDate] = useState(`${today.int_year_eng}-${englishMonths.indexOf(today.int_month_eng).toString().padStart(2, '0')}-${today.int_date_eng.padStart(2, '0')}`)
  const [message, setMessage] = useState("Select the date to change.")

  const showDate = (_convertedDate: ConvertedDate) => {
    const int_date_parts = _convertedDate.int_date.split(" ")
    const nep_date_parts = _convertedDate.nep_date.split(" ")
    setenglishDate(`${int_date_parts[2]}-${englishMonths.indexOf(int_date_parts[1]).toString().padStart(2, '0')}-${int_date_parts[0].toString().padStart(2, '0')}`)
    setNepaliDate(`${nep_date_parts[2]}-${nepaliMonths.indexOf(nep_date_parts[1]).toString().padStart(2, '0')}-${nep_date_parts[0].toString().padStart(2, '0')}`)

    setMessage(`${_convertedDate.message}
                ${_convertedDate.miti}
                (${_convertedDate.int_date})`)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="h-6 w-6 p-2">📆</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Date Converter</h4>
            <p className="text-sm text-muted-foreground">
              Nepali Calendar in to Gregorian and back.
            </p>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="eng_date">English Date</Label>
                <Input
                  id="eng_date"
                  value={englishDate}
                  type="date"
                  className="col-span-2 h-8"
                  onChange={async (e) => {
                    setMessage("Converting the date...")
                    showDate(await convertEnglishDate(e.target.value))
                  }}
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="nep_date">Nepali Date</Label>
                <Input
                  id="nep_date"
                  value={nepaliDate}
                  type="date"
                  className="col-span-2 h-8"
                  onChange={async (e) => {
                    setMessage("Converting the date...")
                    showDate(await convertNepaliDate(e.target.value))
                  }}
                />
              </div>
              <p className="text-sm text-muted-foreground whitespace-pre-line">
                {message}
              </p>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
