import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/App";
import { Router } from "./components/Router";

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.querySelector("#root")
);
