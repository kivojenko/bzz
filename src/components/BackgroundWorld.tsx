import React from "react";
import { Bee } from "./basicComponents/Bee";
import { Grass } from "./basicComponents/Grass";
import { ReactComponent as Flower1 } from "../assets/images/flowers/flower_1.svg";
import { ReactComponent as Flower2 } from "../assets/images/flowers/flower_2.svg";

export const BackgroundWorld = () => {
  const flowers = [];
  for (let i = 0; i < 30; i++) {
    flowers.push(
      <Flower1 id={"flower1_" + i} key={"flower1_" + i} className="flower" width={window.innerWidth * 0.05} style={{
        left: (Math.random() * 105 + "%"),
        bottom: (Math.random() * 105 + "%")
      }}/>)
    flowers.push(
      <Flower2 id={"flower2_" + i} key={"flower2_" + i} className="flower" width={window.innerWidth * 0.05} style={{
        left: (Math.random() * 105 + "%"),
        bottom: (Math.random() * 105 + "%")
      }}/>)
  }

  return (
    <div id="background-world">
      <Bee id="bee-1"/>
      {/*<Bee id="bee-2"/>*/}
      <Grass/>
      {flowers}
    </div>
  );
};