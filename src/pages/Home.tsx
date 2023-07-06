import React from 'react'
import {ReactComponent as Bee} from './../assets/images/bee.svg'
import {ReactComponent as Grass} from '../assets/images/grass.svg'
import {ReactComponent as LeftGrass} from '../assets/images/grass_left.svg'
import {ReactComponent as RightGrass} from '../assets/images/grass_right.svg'

export const Home = () => {
    return (
        <>
            <div id="bee">
                <Bee width="100px" height="100px"/>
            </div>
            <div>
                <Grass id="bottom-grass-1" className="grass"/>
                <Grass id="bottom-grass-2" className="grass"/>
                <Grass id="bottom-grass-3" className="grass"/>
                <LeftGrass id="left-grass-1" className="grass side-grass side-grass-1"/>
                <RightGrass id="right-grass-1" className="grass side-grass side-grass-1"/>
                <LeftGrass id="left-grass-2" className="grass side-grass side-grass-2"/>
                <RightGrass id="right-grass-2" className="grass side-grass side-grass-2"/>
            </div>
        </>
    );
}