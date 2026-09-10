import { Outlet } from "react-router-dom";
import NavbarComponent from "../Components/Navbar/NavbarComponent";

export default function MainLayout() {
  return (
    <div className="dark:bg-slate-900">
      <header className="sticky top-0 z-50">
        <NavbarComponent />
      </header>
      <Outlet />
    </div>
  );
}
