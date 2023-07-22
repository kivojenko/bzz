import React from 'react'
import { Bee } from "../components/basicComponents/Bee";
import { Grass } from "../components/basicComponents/Grass";

export const Home = () => {
  return (
    <div id="background-world">
      <Bee id="bee-1"/>
      <Bee id="bee-2"/>
      <Grass/>
    </div>
  );
}