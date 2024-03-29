"use client"

import useSAPI from 'swr'
import { Button } from '@/components/ui/button'
import { DateConverter } from '@/components/date-converter'
import DigitalClock from '@/components/clock'
import { useState, useEffect } from 'react'

import { getDate } from "@/fetchers/sapi"

const DateTime = () => {
  const [hydrated, setHydrated] = useState<boolean>(false);

  const { data: date, isLoading: loadingDate } = useSAPI("/date/today", getDate)

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div className="flex items-center gap-2">
      {!loadingDate && <p className="text-sm">आज: {date.full_nep_date_nep}</p>}
      {hydrated && (<DigitalClock lang="np" />)}
      {!loadingDate && <Button variant="ghost" size="icon" className="h-6 w-6 p-2" onClick={() => { console.log("today.full_nep_date_nep") }}>📝</Button>}
      <DateConverter />
    </div>
  )
}

export default DateTime