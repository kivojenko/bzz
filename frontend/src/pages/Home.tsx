import React from 'react'
import { BackgroundWorld } from "../components/BackgroundWorld";
import { Bee } from "../components/basicComponents/Bee";

export const Home = () => {
    return <>
        <Bee id="bee-1"/>
        <Bee id="bee-2"/>
        <BackgroundWorld/>
    </>;
}