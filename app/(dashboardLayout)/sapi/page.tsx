import BreadCrumb from "@/components/breadcrumb"
import PasswordPINGeneratorCard from "@/components/sections/password-pin-card"

const Sapi = () => {
  return (
    <main className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h1>Dashbord::SAPI</h1>
        <BreadCrumb />
      </div>
      <div>
        <PasswordPINGeneratorCard
          title="Password/PIN Generator"
          description="Generate a random password or PIN."
        />
      </div>
    </main>
  )
}

export default Sapi