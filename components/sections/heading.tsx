"use client"

import DateTime from "@/components/date-time"

const Heading = () => {
  return (
    <section className="p-2 flex justify-between items-center">
      <DateTime />
      <div className="flex gap-4">
        <div>Search 🔍</div>
        <div>Notifications and tools</div>
      </div>
    </section>
  )
}

export default Heading
