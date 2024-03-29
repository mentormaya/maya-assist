"use client"

import { formatClock } from "@/lib/date-time";
import { useEffect, useState } from "react";

interface Props {
  lang: string
  title?: string
  ticker?: boolean
  update?: number
}

const DigitalClock = ({ lang, title = "", ticker = true, update = 1000 }: Props) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    if (typeof window !== 'undefined' && ticker) {
      setInterval(() => {
        setTime(new Date());
      }, update); // by default every 1 seconds
    }
  }, [ticker, update]);

  return (
    <div>
      {title && title != "" && (
        <h1>{title}</h1>
      )}
      <div className="clock-container">
        <h2>
          {formatClock(time.toLocaleTimeString(), lang)}
        </h2>
      </div>
    </div>
  )
}

export default DigitalClock