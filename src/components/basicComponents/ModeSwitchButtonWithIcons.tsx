import React from "react";

export type IconsMap = { [key: string]: string };

export interface ModeSwitchButtonWithIconsProps {
  refState: any,
  iconsMap: IconsMap,
  toggle: () => void
}

export const ModeSwitchButtonWithIcons = (props: ModeSwitchButtonWithIconsProps) => {
  console.log(props.refState)
  console.log(props.iconsMap[String(props.refState)])

  const currentIcon = props.iconsMap[String(props.refState)];

  function toggleSwitch() {
    props.toggle();
  }

  return (
    <button type="button"
            className={"btn btn-outline-secondary btn-lg " + currentIcon}
            onClick={toggleSwitch}>
    </button>
  );
}
