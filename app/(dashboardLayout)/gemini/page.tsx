import BreadCrumb from "@/components/breadcrumb"

const GeminiPage = () => {
  return (
    <main className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h1>Dashbord :: Gemini</h1>
        <BreadCrumb />
      </div>
      <div className="flex gap-4 mt-6">
        Gemini Here
      </div>
    </main>
  )
}

export default GeminiPage