import React from 'react'
import {MusicPlayerSwitch} from "./MusicPlayerSwitch";
import {ColorModeSwitch} from "./ColorModeSwitch";
import { Logo } from "./Logo";

export const Header = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg  px-3 py-2">
                <span className="navbar-brand mb-0 h1">
                    <Logo/>
                </span>
                <span className="nav-item mb-0 h1">
                    <MusicPlayerSwitch/>
                    <ColorModeSwitch/>
                </span>
            </nav>
        </header>
    )
};
