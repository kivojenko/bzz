// @ts-ignore
import music from '../../assets/music/main_theme.mp3'
import {ModeSwitchButtonWithIcons} from "../basicComponents/ModeSwitchButtonWithIcons";
import {Cloud} from "../basicComponents/Cloud";
import {useMemo} from "react";

export const MusicPlayerSwitch = () => {
    const pauseIcon = "bi bi-volume-mute-fill";
    const playIcon = "bi bi-volume-up-fill";

    const audio = useMemo(() => {
        return new Audio(music)
    }, []);
    audio.volume = 0.5;
    audio.loop = true;

    function toggleAudio() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }

    const button = ModeSwitchButtonWithIcons([pauseIcon, playIcon], toggleAudio);

    return Cloud('cloud_small_1', button);

}