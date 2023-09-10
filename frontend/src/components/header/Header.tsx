import React from 'react'
import { MusicPlayerSwitch } from "./MusicPlayerSwitch";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { Logo } from "./Logo";
import { AnimationsSwitch } from "./AnimationsSwitch";

export const Header = () => {

    return (
        <header style={{position: "relative"}}>
            <nav className="navbar navbar-expand-lg px-2 py-2">
                <span className="navbar-brand m-0 h1">
                    <Logo/>
                </span>
                <span className="nav-item mb-0 h1">
                    <MusicPlayerSwitch/>
                    <ColorModeSwitch/>
                    <AnimationsSwitch/>
                </span>
            </nav>
        </header>
    )
};
