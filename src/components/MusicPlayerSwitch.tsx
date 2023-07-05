// @ts-ignore
import music from './../assets/music/main_theme.mp3'
import React, {useMemo, useState} from "react";

export const MusicPlayerSwitch = () => {
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
        <button id="playMusicButton" type="button"
                className={"btn btn-outline-secondary btn-lg " + currentIcon}
                onClick={toggleAudio}/>
    );

}