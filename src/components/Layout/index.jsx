import { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"

function Layout() {
    const [open, setOpen] = useState(false);

  return (
    <div className="h-full min-h-full lg:min-h-screen max-h-screen flex min-w-[1200px] max-w-screen">
    <Sidebar open={open} setOpen={setOpen} />
    <div className="grow  overflow-y-scroll scrollbars">
      <Navbar open={open} setOpen={setOpen} />
      <div className=" min-h-full w-full  bg-brand/bg">
        <Outlet />
      </div>
    </div>

  </div>
  )
}

export default Layout