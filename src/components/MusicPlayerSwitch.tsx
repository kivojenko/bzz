// @ts-ignore
import music from './../assets/music/main_theme.mp3'
import {ModeSwitchButtonWithIcons} from "../basicComponents/ModeSwitchButtonWithIcons";
import {CloudComponent} from "../basicComponents/CloudComponent";
import {useMemo} from "react";

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

    const button = ModeSwitchButtonWithIcons([pauseIcon, playIcon], toggleAudio);

    return CloudComponent('cloud_small_1', button);

}