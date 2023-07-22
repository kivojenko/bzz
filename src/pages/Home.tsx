import React from 'react'
import {Bee} from "../components/basicComponents/Bee";
import {Grass} from "../components/basicComponents/Grass";
import {ReactComponent as Flower1} from "../assets/images/flowers/flower_1.svg"
import {ReactComponent as Flower2} from "../assets/images/flowers/flower_2.svg"

export const Home = () => {
    const flowers = [];
    for (let i = 0; i < 30; i++) {
        flowers.push(
            <Flower1 id={"flower1_" + i} className="flower" width={ window.innerWidth * 0.05 } style={{
            left: (Math.random() * window.innerWidth + "px"),
            bottom: (Math.random() * window.innerHeight + "px")
        }}/>)
        flowers.push(
            <Flower2 id={"flower2_" + i} className="flower" width={ window.innerWidth * 0.05 } style={{
                left: (Math.random() * window.innerWidth + "px"),
                bottom: (Math.random() * window.innerHeight + "px")
            }}/>)
    }

    return (
        <div id="background-world">
            <Bee id="bee-1"/>
            <Bee id="bee-2"/>
            <Grass/>
            {flowers}
        </div>
    );
}