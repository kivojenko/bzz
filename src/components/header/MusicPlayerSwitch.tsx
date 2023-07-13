import { ModeSwitchButtonWithIcons } from "../basicComponents/ModeSwitchButtonWithIcons";
import { Cloud } from "../basicComponents/Cloud";
import { useAppSettings } from "../../model/AppSettings";

export const MusicPlayerSwitch = () => {
    const { toggleSound } = useAppSettings();
    const pauseIcon = "bi bi-volume-mute-fill";
    const playIcon = "bi bi-volume-up-fill";

    const button = ModeSwitchButtonWithIcons([pauseIcon, playIcon], toggleSound);

    return Cloud('cloud_small_1', button);

}