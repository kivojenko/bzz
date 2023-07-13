import React from "react";

export type IconsMap = { [key: string]: string };

export interface ModeSwitchButtonWithIconsProps {
  refState: any,
  iconsMap: IconsMap,
  toggle: () => void
}

export const ModeSwitchButtonWithIcons = (props: ModeSwitchButtonWithIconsProps) => {
  const currentIcon = props.iconsMap[String(props.refState)];

  return (
    <button type="button"
            className={"btn btn-outline-secondary btn-lg " + currentIcon}
            onClick={props.toggle}>
    </button>
  );
}
