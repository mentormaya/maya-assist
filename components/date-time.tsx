"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { DateConverter } from '@/components/date-converter'

interface Date {
  full_int_date: string;
  full_nep_date_eng: string;
  full_nep_date_nep: string;
  int_year_eng: string;
  nep_year_eng: string;
  nep_year_nep: string;
  int_month_eng: string;
  nep_month_nep: string;
  nep_month_eng: string;
  int_date_eng: string;
  nep_date_eng: string;
  nep_date_nep: string;
  day_eng: string;
  day_nep: string;
}

interface Props {
  today: Date
}

const DateTime = ({ today }: Props) => {

  return (
    <div className="flex items-center gap-2">
      <p className="text-sm">आज: {today.full_nep_date_nep}</p>
      <Button variant="ghost" size="icon" className="h-6 w-6 p-2" onClick={() => { console.log(today.full_nep_date_nep) }}>📝</Button>
      <DateConverter />
    </div>
  )
}

export default DateTime