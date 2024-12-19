import DashboardLayout from "@/layout/dashboard";


export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="shadow py-4 px-8">
        <span className="text-xl">
          Halo, admin!
        </span>
      </div>
    </DashboardLayout>
  );
}
