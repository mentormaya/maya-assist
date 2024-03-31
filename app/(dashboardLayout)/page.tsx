import DashboardMessage from "@/app/(dashboardLayout)/_components/_sections/dashboard-message";

export default async function Home() {
  return (
    <main className="flex flex-col shadow-md">
      <DashboardMessage />
    </main>
  );
}
