import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SmoothScrollbar from "smooth-scrollbar";
import { Scrollbar } from "smooth-scrollbar-react";
// bg
import Background from "../components/Background.jsx";
// side panels
import InfoBar from "../components/Sidebar/InfoBar.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
// middle
import Footer from "../components/Footer.jsx";
// import Routes from "./routes/Routes";
// js
import { rng, transition, scrollbarInit } from "../assets/js/main.js";
import { useTranslation } from "react-i18next";

// TODO: <Scrollbar> is component t, need to fix warning regarding it

export default function RootLayout() {
  const { t } = useTranslation();
  const location = useLocation();

  let i = rng(0, t("backgrounds", { returnObjects: true }).static.length - 1);

  useEffect(scrollbarInit, []);
  useEffect(transition, [location.pathname]);

  // sliding for left side panel
  const [sidebarActive, setSidebarActive] = useState(false);

  // sliding for right side menu
  const [navbarActive, setNavbarActive] = useState(false);

  // current background image (gets a local image link/path)
  const [background, setBackground] = useState({
    all: t("backgrounds", { returnObjects: true }).static,
    total: t("backgrounds", { returnObjects: true }).static.length,
    current: t("backgrounds", { returnObjects: true }).static[i],
    index: i,
  });

  return (
    <div className="art-app">
      <div className="art-mobile-top-bar">
        <div className="logo">
          <img src={t("backgrounds.logo")} alt="WB" />
        </div>
      </div>

      <div className="art-app-wrapper">
        <div className="art-app-container">
          <InfoBar
            data={t("sidebar", { returnObjects: true })}
            navbarActive={navbarActive}
            setNavbarActive={setNavbarActive}
            sidebarActive={sidebarActive}
            setSidebarActive={setSidebarActive}
          />
          {/* body (content area, middle section) */}
          {/* activate/show curtain (css) if any of the panels are open/active */}
          <div
            className={
              navbarActive || sidebarActive
                ? "art-content art-active"
                : "art-content"
            }
          >
            {/* curtain */}
            <div
              className="art-curtain"
              onClick={() => {
                navbarActive && setNavbarActive(false);
                sidebarActive && setSidebarActive(false);
              }}
            ></div>
            {/* send the background state from wrapper, which changes dynamically (on input) */}
            <Background background={background} setBackground={setBackground} />

            {/* transition container */}
            <div className="transition-fade" id="transition-fade">
              {/* scroll frame */}
              <Scrollbar
                className="content-scrollbar"
                damping={0.1}
                thumbMinSize={20}
                renderByPixels={true}
                alwaysShowTracks={false}
                continuousScrolling={true}
                plugins={{ SmoothScrollbar }}
              >
                <div
                  id="scrollbar"
                  className="art-scroll-frame"
                  data-scrollbar="true"
                  tabIndex="-1"
                >
                  <div className="scroll-content">
                    {/* routes */}
                    {/* <Routes
                      data={data.main}
                      background={background}
                      setBackground={setBackground}
                    /> */}
                    <Outlet />
                    {/* footer */}
                    <Footer />
                  </div>
                </div>
              </Scrollbar>
            </div>
          </div>

          <Navbar
            data={t("navbar", { returnObjects: true })}
            navbarActive={navbarActive}
            setNavbarActive={setNavbarActive}
            sidebarActive={sidebarActive}
            setSidebarActive={setSidebarActive}
          />
        </div>
      </div>
    </div>
  );
}
