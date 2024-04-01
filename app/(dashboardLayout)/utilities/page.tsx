import BreadCrumb from "@/components/breadcrumb"
import PasswordGeneratorCard from "@/app/(dashboardLayout)/utilities/_components/_sections/password-generator"
import PINGeneratorCard from "./_components/_sections/pin-generator"

const Utilities = () => {
  return (
    <main className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h1>Dashbord :: Utilites</h1>
        <BreadCrumb />
      </div>
      <div className="flex gap-4 mt-6">
        <PasswordGeneratorCard />
        <PINGeneratorCard />
      </div>
    </main>
  )
}

export default Utilities