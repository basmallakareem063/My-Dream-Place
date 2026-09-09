import { Outlet } from "react-router-dom";
import NavbarComponent from "../Components/Navbar/NavbarComponent";

export default function MainLayout() {
  return (
    <div className="dark:bg-slate-900">
      <div className="container mx-auto">
        <NavbarComponent />
        <Outlet />
      </div>
    </div>
  );
}
