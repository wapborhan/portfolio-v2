import ReactDOM from "react-dom/client";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { IconContext } from "react-icons";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import Preloader from "./components/Preloader/Preloader";
// fancybox
import "./assets/css/fancybox.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "./assets/css/plugins/font-awesome.min.css";
// stylesheets
import "./assets/css/colors/yellow.css";
import "./assets/css/styles.css";
import "./translate/i18n";
import router from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <IconContext.Provider value={{ className: "sricons" }}>
    <Preloader />
    {/* <App /> */}
    <RouterProvider router={router} />
  </IconContext.Provider>
);
// reportWebVitals();
