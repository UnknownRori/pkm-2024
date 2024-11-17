import { useState } from "react";

import NavigationLink from "./navigation-link";
import HamburgerButton from "@/shared/hamburgerbutton";

export default function Navigation() {
  const [expanded, setExpanded] = useState(false);

  function open() {
    setExpanded(!expanded);
  }

  return (
    <nav className="relative flex gap-8 shadow py-4 px-8">
      <div className="flex-initial flex sm:w-full md:w-auto justify-between items-center gap-4">
        <h1 className="text-2xl font-bold">UMKM Logo</h1>


        <div className="ml-auto flex gap-4 justify-center items-center sm:relative md:hidden">
          <button>
            <svg className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button>
            <svg className="h-6 w-6 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="9" cy="21" r="1" />  <circle cx="20" cy="21" r="1" />  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
          </button>
          <button>
            <svg className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
        <HamburgerButton onClick={open} state={expanded}></HamburgerButton>
      </div>
      <div className={
        `flex  md:flex-row sm:flex-col sm:absolute md:relative flex-auto sm:bg-white  md:bg-transparent gap-12
        sm:shadow md:shadow-none top-0 left-0 sm:w-full md:w-auto md:translate-y-0 sm:translate-y-16 sm:py-4 md:py-0 duration-500 md:translate-x-0 `
        + (!expanded ? `sm:translate-x-full` : `sm:translate-x-0`)
      }>
        <div className="flex justify-center items-center gap-4 sm:flex-col md:flex-row">
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/gallery">Gallery</NavigationLink>
          <NavigationLink to="/produk">Produk</NavigationLink>
          <NavigationLink to="/blog">Blog</NavigationLink>
          <NavigationLink to="/kontak">Kontak</NavigationLink>
        </div>
        <div className="ml-auto gap-8 justify-center items-center sm:hidden md:flex">
          <button>
            <svg className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button>
            <svg className="h-6 w-6 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="9" cy="21" r="1" />  <circle cx="20" cy="21" r="1" />  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
          </button>
          <button>
            <svg className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
