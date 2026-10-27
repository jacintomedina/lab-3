import React from "react";
import classes from "./mystyles.scss";

export const HelloComponent: React.FC = () => {

  return (
    <div>
      <span className={classes.helloBackground}>Hola mundo</span>
    </div>
  );
};
