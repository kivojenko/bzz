import { IconsMap } from "../basicComponents/button/ModeSwitchButtonWithIcons";
import { useAppSettings } from "../../model/AppSettings";
import { ModeSwitchButtonWithIconsOnCloud } from "../basicComponents/button/ModeSwitchButtonWithIconsOnCloud";

export const ColorModeSwitch = () => {
  const { settings, toggleTheme } = useAppSettings();
  const sunIcon = "bi bi-sun-fill";
  const moonIcon = "bi bi-moon-fill";

  const iconsMap: IconsMap = {
    "dark": moonIcon,
    "light": sunIcon
  }

  return <ModeSwitchButtonWithIconsOnCloud
    refState={settings.theme}
    toggle={toggleTheme}
    iconsMap={iconsMap}
    cloudFileName='cloud_small_2'/>;
};