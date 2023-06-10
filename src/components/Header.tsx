import React from 'react'
// @ts-ignore
import music from './../assets/music/main_theme.mp3'

export const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Bzz Project</span>
                <audio id="audio" controls loop>
                    <source src={music}/>
                </audio>

            </nav>
        </header>
    )
};
