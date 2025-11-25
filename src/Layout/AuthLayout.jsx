import { Outlet } from "react-router-dom";
import { useState } from "react";
import DashboardNavbar from "../Components/DashboardNavbar";

export default function Layout() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="min-h-screen flex flex-row w-full bg-gray-200">
      <DashboardNavbar showNav={showNav} setShowNav={setShowNav} />

      <main
        className={`
          flex-1 pt-20 transition-all duration-300
          ${showNav ? "md:ml-24" : "ml-0"}
        `}
      >
        <Outlet />
      </main>
    </div>
  );
}
