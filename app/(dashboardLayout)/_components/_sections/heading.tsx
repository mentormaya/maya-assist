"use client";

import DateTime from "@/app/(dashboardLayout)/_components/date-time";

const Heading = () => {
  return (
    <section className="flex items-center justify-between p-2">
      <DateTime />
      <div className="flex gap-4">
        <div>Search 🔍</div>
        <div>Notifications and tools</div>
      </div>
    </section>
  );
};

export default Heading;
