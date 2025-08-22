import React from "react";
import { createRoot } from "react-dom/client";
import Page from "./Page";
import {BrowserRouter} from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Page />
  </BrowserRouter>);
