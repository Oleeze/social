import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Views from "./views.jsx";

ReactDOM.hydrate(
  <BrowserRouter>
    <Views />
  </BrowserRouter>,
  document.getElementById("app")
);
