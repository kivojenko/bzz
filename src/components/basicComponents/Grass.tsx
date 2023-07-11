import React from "react";
import { ReactComponent as LeftGrassSVG } from "../../assets/images/grass_left.svg";
import { ReactComponent as RightGrassSVG } from "../../assets/images/grass_right.svg";
import { ReactComponent as GrassSVG } from "../../assets/images/grass.svg";

export const Grass = () => {
  return (
    <div id="grass-container">
      <GrassSVG id="bottom-grass-1" className="grass"/>
      <GrassSVG id="bottom-grass-2" className="grass"/>
      <GrassSVG id="bottom-grass-3" className="grass"/>
      <LeftGrassSVG id="left-grass-1" className="grass side-grass side-grass-1"/>
      <RightGrassSVG id="right-grass-1" className="grass side-grass side-grass-1"/>
      <LeftGrassSVG id="left-grass-2" className="grass side-grass side-grass-2"/>
      <RightGrassSVG id="right-grass-2" className="grass side-grass side-grass-2"/>
    </div>
  );
}