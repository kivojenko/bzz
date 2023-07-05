import React from 'react';
import {getTheme, setTheme} from "../service/themeService";


export const ColorModeSwitch = () => {
    function themeChanged() {
        setTheme(getTheme() === 'light' ? 'dark' : 'light')
    }

    return (
        <button onClick={themeChanged}>
            {getTheme() === 'light' ? 'Dark' : 'Light'}
        </button>
    );
};