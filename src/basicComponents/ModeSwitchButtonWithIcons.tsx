import React, { useState } from "react";


export const ModeSwitchButtonWithIcons = (props: ModeSwitchButtonWithIconsProps) => {
  const [currentIcon, setCurrentIcon] = useState(props.icons[0]);

  function toggleSwitch() {
    setCurrentIcon(findNextIcon(currentIcon, props.icons));
    props.toggle();
  }

  return (
    <button type="button"
            className={"btn btn-outline-secondary btn-lg " + currentIcon}
            onClick={toggleSwitch}/>
  );
}

function findNextIcon(currentIcon: string, icons: string[]) {
  const currentIndex = icons.indexOf(currentIcon);
  if (currentIndex < 0) {
    return "";
  }
  const newIndex = (currentIndex + 1) % icons.length;
  return icons[newIndex];
}

export interface ModeSwitchButtonWithIconsProps {
  icons: string[],
  toggle: () => void
}