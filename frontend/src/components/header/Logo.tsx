import { Cloud } from "../basicComponents/background/Cloud";
import React from "react";

export const Logo = () => {
  const projectName = "Bzz Project"
  const projectNameLink = <a className="navbar-text" href="/">{projectName}</a>;

  return Cloud("cloud", projectNameLink);
}