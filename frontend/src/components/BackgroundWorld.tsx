import React from "react";
import { Grass } from "./basicComponents/Grass";
import { ReactComponent as Flower1 } from "../assets/images/flowers/flower_1.svg";
import { ReactComponent as Flower2 } from "../assets/images/flowers/flower_2.svg";

function getFlowerParams(flowerName: string, number: number) {
    return {
        id: flowerName + "_" + number,
        key: flowerName + "_" + number,
        className: "flower",
        width: window.innerWidth * 0.05,
        style: {
            left: (Math.random() * 105 + "%"),
            bottom: (Math.random() * 105 + "%")
        }
    }
}

export const BackgroundWorld = () => {
    const flowers: any = [];
    for (let i = 0; i < 30; i++) {
        flowers.push(
            <Flower1 {...getFlowerParams("flower1", i)}/>)
        flowers.push(
            <Flower2 {...getFlowerParams("flower2", i)}/>)
    }

    return <div id="background-world">
        <Grass/>
        {flowers}
    </div>;
};