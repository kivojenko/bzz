import {getTheme, setTheme} from "../../service/themeService";
import {ModeSwitchButtonWithIcons} from "../basicComponents/ModeSwitchButtonWithIcons";
import {Cloud} from "../basicComponents/Cloud";


export const ColorModeSwitch = () => {
    const sunIcon = "bi bi-sun-fill";
    const moonIcon = "bi bi-moon-fill";

    function toggleTheme() {
        setTheme(getTheme() === 'light' ? 'dark' : 'light')
    }
    const button = ModeSwitchButtonWithIcons(getTheme() === 'light' ? [sunIcon, moonIcon] : [moonIcon, sunIcon], toggleTheme);

    return Cloud('cloud_small_2', button);
};