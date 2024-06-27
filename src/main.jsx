import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <IconContext.Provider value={{ className: "sricons" }}>
      <Preloader />
      <App />
    </IconContext.Provider>
  </BrowserRouter>
);
// reportWebVitals();
