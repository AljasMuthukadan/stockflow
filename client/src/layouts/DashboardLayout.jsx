import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/NavBar";
import Sidebar from "./components/sidebar/SideBar";

const DashboardLayout = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const closeMobileSidebar = () => {
    setMobileSidebarOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">

      {/* ================================= */}
      {/* DESKTOP SIDEBAR */}
      {/* ================================= */}

      <aside className="hidden lg:flex">
        <Sidebar />
      </aside>


      {/* ================================= */}
      {/* MAIN AREA */}
      {/* ================================= */}

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">

        <Navbar
          onMenuClick={() => setMobileSidebarOpen(true)}
        />

        <main className="min-h-0 flex-1 overflow-y-auto scrollbar-none bg-gray-100">
          <Outlet />
        </main>

      </div>


      {/* ================================= */}
      {/* MOBILE SIDEBAR */}
      {/* ================================= */}

      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">

          {/* Overlay */}

          <button
            type="button"
            aria-label="Close sidebar"
            className="absolute inset-0 cursor-default bg-black/40"
            onClick={closeMobileSidebar}
          />


          {/* Drawer */}

          <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-2xl">

            <Sidebar
              isMobile
              onClose={closeMobileSidebar}
            />

          </div>

        </div>
      )}

    </div>
  );
};

export default DashboardLayout;