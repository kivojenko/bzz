import React, { useMemo, useState} from 'react'
// @ts-ignore
import music from './../assets/music/main_theme.mp3'
import {ReactComponent as Cloud} from '../assets/images/cloud.svg'

export const Header = () => {
    const pauseIcon = "bi bi-volume-mute-fill";
    const playIcon = "bi bi-volume-up-fill";

    const [currentIcon, setCurrentIcon] = useState(pauseIcon);
    const audio = useMemo(() => {
        return new Audio(music)
    }, []);
    audio.volume = 0.5;

    function toggleAudio() {
        if (audio.paused) {
            audio.play();
            setCurrentIcon(playIcon)
        } else {
            audio.pause();
            setCurrentIcon(pauseIcon)
        }
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-opacity-75 px-4 py-2">
                <span className="navbar-brand mb-0 h1">
                    <svg width="150px" height="90px">
                        <Cloud/>
                        <text x="27" y="60">Bzz Project</text>
                    </svg>

                </span>
                <button id="playMusicButton" type="button"
                        className={"btn btn-outline-secondary btn-lg " + currentIcon}
                        onClick={toggleAudio}/>
            </nav>
        </header>
    )
};
