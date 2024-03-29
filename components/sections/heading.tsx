// import { getDate } from "@/actions/sapi"
import DateTime from "@/components/date-time"

const Heading = async () => {
  // const date = await getDate()
  // console.log(date)
  return (
    <section className="p-2 flex justify-between items-center">
      {/* <DateTime today={date} /> */}
      <div className="flex gap-4">
        <div>Search 🔍</div>
        <div>Notifications and tools</div>
      </div>
    </section>
  )
}

export default Heading