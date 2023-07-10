import React from 'react'
import {MusicPlayerSwitch} from "./MusicPlayerSwitch";
import {ColorModeSwitch} from "./ColorModeSwitch";
import {CloudComponent} from "../basicComponents/CloudComponent";

export const Header = () => {
    const brand = CloudComponent("cloud", <a className="navbar-text" href="/">Bzz Project</a>)

    return (
        <header>
            <nav className="navbar navbar-expand-lg  px-4 py-2">
                <span className="navbar-brand mb-0 h1">
                    {brand}
                </span>
                <span>
                    <MusicPlayerSwitch/>
                    <ColorModeSwitch/>
                </span>
            </nav>
        </header>
    )
};
