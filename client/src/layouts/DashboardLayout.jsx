import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Sidebar from "./SideBar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex overflow-hidden flex-col flex-1">
        <Navbar />

        <main className="flex-1 overflow-y-auto scrollbar-none bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;