import { useState } from "react";


export default function DashboardLayout(props: React.PropsWithChildren) {
  const sidebar = useState(false);

  return (
    <div className="relative flex flex-row w-screen min-h-screen duration-500">
      <nav className="relative z-10 flex flex-col gap-12 shadow w-[350px] p-5 bg-slate-800 text-white duration-500 min-h-full">
        <header className="flex gap-8 justify-center items-center">
          <h1 className="text-3xl text-center font-bold italic">UMKM</h1>
          <button className="md:hidden">
            <svg className="h-8 w-8 text-slate-300" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="11 7 6 12 11 17" />
              <polyline points="17 7 12 12 17 17" />
            </svg>
          </button>
        </header>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <header className="text-slate-500 font-bold">
              MENU UTAMA
            </header>

            <div>
              <button className="flex gap-2 hover:bg-slate-600 py-2 px-2 duration-500 rounded w-full">
                <svg className="h-6 w-6 text-slate-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x="4" y="4" width="6" height="6" rx="1" />
                  <rect x="14" y="4" width="6" height="6" rx="1" />
                  <rect x="4" y="14" width="6" height="6" rx="1" />
                  <rect x="14" y="14" width="6" height="6" rx="1" />
                </svg>
                Dashboard
              </button>

              <button className="flex gap-2 hover:bg-slate-600 py-2 px-2 duration-500 rounded w-full">
                <svg className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Produk
              </button>

              <button className="flex gap-2 hover:bg-slate-600 py-2 px-2 duration-500 rounded w-full">
                <svg className="h-6 w-6 group-hover:text-slate-200 duration-500 text-slate-500" width="24" height="24"
                  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                </svg>
                Users
              </button>

              <button className="flex gap-2 hover:bg-slate-600 py-2 px-2 duration-500 rounded w-full">
                <svg className="h-6 w-6 text-slate-600" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />  <line x1="13" y1="8" x2="15" y2="8" />  <line x1="13" y1="12" x2="15" y2="12" /></svg>
                Blog
              </button>

              <button className="flex gap-2 hover:bg-slate-600 py-2 px-2 duration-500 rounded w-full">
                <svg className="h-6 w-6 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <circle cx="8.5" cy="8.5" r="1.5" />  <polyline points="21 15 16 10 5 21" /></svg>
                Galeri
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative flex flex-col gap-4 w-full">
        <header className="relative flex gap-4 justify-content-center w-full shadow py-3 px-8">
          <div>
            <button className="duration-500">
              <svg className="h-8 w-8 text-slate-800" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="11 7 6 12 11 17" />
                <polyline points="17 7 12 12 17 17" />
              </svg>
            </button>
          </div>
        </header>

        <div className="relative m-5 h-full">
          {props.children}
        </div>
      </div>
    </div>
  );
}
