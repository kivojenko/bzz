import { CloudComponent } from "../basicComponents/CloudComponent";
import React from "react";

export const Logo = () => {
  const projectName = "Bzz Project"
  const projectNameLink = <a className="navbar-text" href="/">{projectName}</a>;

  return CloudComponent("cloud", projectNameLink);
}