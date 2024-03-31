import BreadCrumb from "@/components/breadcrumb"

const Sapi = () => {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1>This the Sapi Dashboard</h1>
        <BreadCrumb />
      </div>
    </main>
  )
}

export default Sapi