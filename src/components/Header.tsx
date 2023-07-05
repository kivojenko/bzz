import React from 'react'
import {MusicPlayerSwitch} from "./MusicPlayerSwitch";
import {ReactComponent as Cloud} from '../assets/images/cloud.svg'
import {ColorModeSwitch} from "./ColorModeSwitch";

export const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-opacity-75 px-4 py-2">
                <span className="navbar-brand mb-0 h1">
                    <svg width="150px" height="90px">
                        <Cloud/>
                        <text x="27" y="60">Bzz Project</text>
                    </svg>
                </span>
                <MusicPlayerSwitch/>
                <ColorModeSwitch/>
            </nav>
        </header>
    )
};
