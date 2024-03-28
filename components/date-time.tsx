"use client"

import { Button } from '@/components/ui/button'
import { DateConverter } from '@/components/date-converter'
import { Date } from '@/props/sapi/dates'
import DigitalClock from '@/components/clock'

interface Props {
  today: Date
}

const DateTime = ({ today }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <p className="text-sm">आज: {today.full_nep_date_nep}</p>
      <DigitalClock lang="np" />
      <Button variant="ghost" size="icon" className="h-6 w-6 p-2" onClick={() => { console.log(today.full_nep_date_nep) }}>📝</Button>
      <DateConverter today={today} />
    </div>
  )
}

export default DateTime