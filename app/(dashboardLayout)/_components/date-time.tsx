"use client";

import { DateConverter } from "@/app/(dashboardLayout)/_components/date-converter";
import DigitalClock from "@/app/(dashboardLayout)/_components/clock";
import { useState, useEffect } from "react";
import NepaliDate from 'nepali-datetime';
import CopyToClipboard from "@/components/copy-clipboard";

const DateTime = () => {
  const [hydrated, setHydrated] = useState<boolean>(false);

  const date = new NepaliDate().formatNepali("YYYY MMMM DD dddd")

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <p>आज:<span className="bg-white/30 mx-1 px-2 rounded">{date}</span></p>
      {hydrated && <DigitalClock lang="np" />}
      <CopyToClipboard
        content={date}
        message="Current Date has been copied to clipboard."
      >
        📝
      </CopyToClipboard>
      <DateConverter />
    </div>
  );
};

export default DateTime;
