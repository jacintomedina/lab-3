import React from "react";
import { createRoot } from "react-dom/client";
import { HelloComponent } from "./hello.component";
import logo from "./img/logo_1.png";
import classes from "./mystyles.scss";

const root = createRoot(document.getElementById("root")!);
root.render(
  <div>
    <img src={logo} className={classes.logo} />
    <HelloComponent />
  </div>
);
