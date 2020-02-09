import React from "react";
import { hydrate } from "react-dom";
import Home from "./home";

hydrate(
  <Home />,
  document.getElementById("main")
);
