import { IconsMap } from "../basicComponents/ModeSwitchButtonWithIcons";
import { useAppSettings } from "../../model/AppSettings";
import { ModeSwitchButtonWithIconsOnCloud } from "../basicComponents/ModeSwitchButtonWithIconsOnCloud";

export const AnimationsSwitch = () => {
  const batteryFull = "bi bi-battery-full";
  const batteryEmpty = "bi bi-battery";

  const { settings, toggleAnimations } = useAppSettings();

  const iconsMap: IconsMap = {
    "true": batteryFull,
    "false": batteryEmpty
  }

  return <ModeSwitchButtonWithIconsOnCloud
    refState={settings.animationsEnabled}
    toggle={toggleAnimations}
    iconsMap={iconsMap}
    cloudFileName='cloud_small_3'/>;
};