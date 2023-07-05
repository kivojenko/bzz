import React from 'react'
import {ReactComponent as Bee} from './../assets/images/bee.svg'
import {ReactComponent as Grass} from './../assets/images/Grass.svg'
import {ReactComponent as Left} from './../assets/images/Tall_grass_left.svg'
import {ReactComponent as Right} from './../assets/images/Tall_grass_right.svg'

export const Home = () => {
    return (
        <>
            <div id="bee">
                <svg width="100px" height="100px">
                    <Bee/>
                </svg>
            </div>
            <div id="grass">
                <svg width="100%">
                    <Grass/>
                </svg>
            </div>
            <div id="leftGrass">
                <svg height="100%">
                    <Left/>
                </svg>
            </div>
            <div id="rightGrass">
                <svg height="100%">
                    <Right/>
                </svg>
            </div>
        </>
    );
}