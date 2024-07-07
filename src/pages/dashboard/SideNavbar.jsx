import { useState } from "react";
import NavbarButton from "../../components/Navbar/NavbarButton";
import NavbarCurrentPage from "../../components/Navbar/NavbarCurrentPage";
import NavbarList from "../../components/Navbar/NavbarList";

const SideNavbar = (props) => {
  const [currentPage, setCurrentPage] = useState("Home");
  return (
    <div
      className={
        props.navbarActive ? "art-menu-bar art-active" : "art-menu-bar"
      }
    >
      <div id="art-menu-bar-frame" className="art-menu-bar-frame">
        <NavbarButton
          navbarActive={props.navbarActive}
          setNavbarActive={props.setNavbarActive}
          sidebarActive={props.sidebarActive}
          setSidebarActive={props.setSidebarActive}
        />

        <NavbarCurrentPage currentPage={currentPage} />
        <NavbarList
          data={props.data}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setNavbarActive={props.setNavbarActive}
        />
      </div>
    </div>
  );
};

export default SideNavbar;
