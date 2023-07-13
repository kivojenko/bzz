import { ModeSwitchButtonWithIcons, ModeSwitchButtonWithIconsProps } from "./ModeSwitchButtonWithIcons";
import { Cloud } from "./Cloud";

export interface ModeSwitchButtonWithIconsOnCloudProps extends ModeSwitchButtonWithIconsProps {
  cloudFileName: string
}

export const ModeSwitchButtonWithIconsOnCloud = (props: ModeSwitchButtonWithIconsOnCloudProps) => {
  const button = ModeSwitchButtonWithIcons({ refState: props.refState, iconsMap: props.iconsMap, toggle: props.toggle });

  return Cloud(props.cloudFileName, button);
}