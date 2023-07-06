// @ts-ignore
import music from './../assets/music/main_theme.mp3'
import React, { useMemo } from "react";
import { ModeSwitchButtonWithIcons } from "../basicComponents/ModeSwitchButtonWithIcons";

export const MusicPlayerSwitch = () => {
    const pauseIcon = "bi bi-volume-mute-fill";
    const playIcon = "bi bi-volume-up-fill";

    const audio = useMemo(() => {
        return new Audio(music)
    }, []);
    audio.volume = 0.5;

    function toggleAudio() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }

    return (
      <ModeSwitchButtonWithIcons icons={[pauseIcon, playIcon]} toggle={toggleAudio}/>
    );

}