import { Outlet } from "react-router-dom";
import NavbarComponent from "../Components/Navbar/NavbarComponent";

export default function MainLayout() {
  return (
    <div className="dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavbarComponent />
        <Outlet />
      </div>
    </div>
  );
}
