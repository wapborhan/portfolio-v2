import { useState } from "react";
import NavbarButton from "./NavbarButton";
import NavbarCurrentPage from "./NavbarCurrentPage";
import NavbarList from "./NavbarList";
import { useTranslation } from "react-i18next";

export default function ArtMenuBar(props) {
  const { t } = useTranslation();
  // contains the current page
  const [currentPage, setCurrentPage] = useState("Home");

  console.log(props);

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
          // data={props.data}
          data={t("navbar", { returnObjects: true })}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setNavbarActive={props.setNavbarActive}
        />
      </div>
    </div>
  );
}
