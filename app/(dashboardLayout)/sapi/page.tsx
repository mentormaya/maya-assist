import BreadCrumb from "@/components/breadcrumb"
import NumbersCard from "@/app/(dashboardLayout)/sapi/_components/_sections/numbers-card"
import PasswordPINGeneratorCard from "@/app/(dashboardLayout)/sapi/_components/_sections/password-pin-card"

const Sapi = () => {
  return (
    <main className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h1>Dashbord :: SAPI</h1>
        <BreadCrumb />
      </div>
      <div className="flex gap-4 mt-6">
        <PasswordPINGeneratorCard />
        <NumbersCard />
      </div>
    </main>
  )
}

export default Sapi