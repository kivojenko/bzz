import {Theme} from "../assets/model/Theme";

export function getTheme() {
    if (localStorage.getItem('theme')) {
        return localStorage.getItem('theme')
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        const defaultTheme = prefersDark ? 'dark' : 'light';
        setTheme(defaultTheme);
        return defaultTheme;
    }
}

export function setTheme(theme: Theme) {
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme);
}