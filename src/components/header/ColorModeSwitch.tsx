import { ModeSwitchButtonWithIcons } from "../basicComponents/ModeSwitchButtonWithIcons";
import { Cloud } from "../basicComponents/Cloud";
import { useAppSettings } from "../../model/AppSettings";


export const ColorModeSwitch = () => {
    const { settings, toggleTheme } = useAppSettings();
    const sunIcon = "bi bi-sun-fill";
    const moonIcon = "bi bi-moon-fill";

    const button = ModeSwitchButtonWithIcons(settings.theme === 'light' ? [sunIcon, moonIcon] : [moonIcon, sunIcon], toggleTheme);

    return Cloud('cloud_small_2', button);
};