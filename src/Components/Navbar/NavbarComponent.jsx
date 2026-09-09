import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import { BiSolidPlaneAlt } from "react-icons/bi";
import ToggleTheme from "../Theme/ToggleTheme";

export default function NavbarComponent() {
  return (
    <Navbar className="sticky-top" fluid rounded >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <NavbarBrand>
          {/* Plane Icon */}
          <BiSolidPlaneAlt color="var(--primary-color)" size={23} />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            My Dream Place
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <ToggleTheme />
          <NavbarToggle />
        </div>

        <NavbarCollapse>
          <NavbarLink href="#home" className="nav-link">
            Home
          </NavbarLink>
          <NavbarLink href="#discover" className="nav-link">
            Discover
          </NavbarLink>
          <NavbarLink href="#about" className="nav-link">
            About
          </NavbarLink>
          <NavbarLink href="#activities" className="nav-link">
            Activities
          </NavbarLink>
          <NavbarLink href="#contact" className="nav-link">
            Contact
          </NavbarLink>
        </NavbarCollapse>
      </div>
    </Navbar>
  );
}
