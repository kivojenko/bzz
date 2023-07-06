import React from 'react';
import {getTheme, setTheme} from "../service/themeService";
import { ModeSwitchButtonWithIcons } from "../basicComponents/ModeSwitchButtonWithIcons";


export const ColorModeSwitch = () => {
    const sunIcon = "bi bi-sun-fill";
    const moonIcon = "bi bi-moon-fill";

    function toggleTheme() {
        setTheme(getTheme() === 'light' ? 'dark' : 'light')
    }

    return (
      <ModeSwitchButtonWithIcons icons={[sunIcon, moonIcon]} toggle={toggleTheme}/>
    );
};