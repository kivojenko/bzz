import React from 'react'
import {ReactComponent as Bee} from './../assets/images/bee.svg'
import {ReactComponent as Grass} from '../assets/images/grass.svg'
import {ReactComponent as LeftGrass} from '../assets/images/grass_left.svg'
import {ReactComponent as RightGrass} from '../assets/images/grass_right.svg'

export const Home = () => {
    return (
        <>
            <div id="bee">
                <svg width="100px" height="100px">
                    <Bee/>
                </svg>
            </div>
            <div>
                <Grass id="bottom-grass" className="grass"/>
                <LeftGrass id="left-grass" className="grass side-grass"/>
                <RightGrass id="right-grass" className="grass side-grass"/>
            </div>
        </>
    );
}