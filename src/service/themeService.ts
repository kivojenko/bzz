import {Theme} from "../assets/model/Theme";

function getNewTheme(): Theme {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const defaultTheme: Theme = prefersDark ? 'dark' : 'light';
    setTheme(defaultTheme);
    return defaultTheme;
}

export function getTheme(): Theme {
    return localStorage.getItem('theme') as Theme ?? getNewTheme();
}

export function setTheme(theme: Theme) {
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme);
}