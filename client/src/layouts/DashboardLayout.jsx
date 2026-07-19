import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Sidebar from "./SideBar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex  flex-col flex-1">
        <Navbar />

        <main className="flex-1  bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;