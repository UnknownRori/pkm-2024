
import DashboardLayout from "@/layout/dashboard";


export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 shadow py-4 px-8">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">Data Product</h1>
          <button className="bg-blue-500 text-white py-2 px-4 rounded font-bold flex justify-center items-center">
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>

        <table className="w-full text-left border border-gray-200 rounded-lg shadow-md mt-6">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <td className="px-6 py-3">
                No
              </td>
              <td className="px-6 py-3 w-[40%]">
                Nama
              </td>
              <td className="px-6 py-3">
                Harga
              </td>
              <td className="px-6 py-3">
                Action
              </td>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            <tr>
              <td className="px-6 py-3 whitespace-nowrap">
                1
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                Tas
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                24 Agustus 2024
              </td>
              <td className="px-6 py-3 whitespace-nowrap flex gap-4">
                <button
                  className="bg-yellow-500 text-white py-2 px-4 rounded font-bold flex justify-center items-center">Edit
                </button>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded font-bold flex justify-center items-center">Delete</button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-3 whitespace-nowrap">
                2
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                Topi
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                24 Agustus 2024
              </td>
              <td className="px-6 py-3 whitespace-nowrap flex gap-4">
                <button
                  className="bg-yellow-500 text-white py-2 px-4 rounded font-bold flex justify-center items-center">Edit
                </button>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded font-bold flex justify-center items-center">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div >
    </DashboardLayout >
  );
}
