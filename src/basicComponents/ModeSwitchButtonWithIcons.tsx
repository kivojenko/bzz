import React, {useState} from "react";

export const ModeSwitchButtonWithIcons = (icons: string[], toggle: () => void) => {
    const [currentIcon, setCurrentIcon] = useState(icons[0]);

    function toggleSwitch() {
        const nextIcon = findNextIcon(currentIcon, icons);
        setCurrentIcon(nextIcon);
        toggle();
    }

    return (
        <button type="button"
                className={"btn btn-outline-secondary btn-lg " + currentIcon}
                onClick={toggleSwitch}>
        </button>
    );
}

function findNextIcon(currentIcon: string, icons: string[]) {
    const currentIndex = icons.indexOf(currentIcon);
    const newIndex = (currentIndex + 1) % icons.length;
    return icons[newIndex];
}