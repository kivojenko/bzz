import { IconsMap } from "../basicComponents/ModeSwitchButtonWithIcons";
import { useAppSettings } from "../../model/AppSettings";
import { ModeSwitchButtonWithIconsOnCloud } from "../basicComponents/ModeSwitchButtonWithIconsOnCloud";

export const MusicPlayerSwitch = () => {
  const { settings, toggleSound } = useAppSettings();
  const pauseIcon = "bi bi-volume-mute-fill";
  const playIcon = "bi bi-volume-up-fill";

  const iconsMap: IconsMap = {
    "true": playIcon,
    "false": pauseIcon
  }

  return <ModeSwitchButtonWithIconsOnCloud
    refState={settings.soundEnabled}
    toggle={toggleSound}
    iconsMap={iconsMap}
    cloudFileName='cloud_small_1'/>;
}