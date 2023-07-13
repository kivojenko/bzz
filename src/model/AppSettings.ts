import { createContext, useContext } from 'react';
import { Theme } from "./Theme";

export interface AppSettings {
  theme: string;
  animationsEnabled: boolean;
  soundEnabled: boolean;
}

export const AppSettingDefaultValue: AppSettings =  {
  theme: getDefaultTheme(),
  animationsEnabled: true,
  soundEnabled: false
}

function getDefaultTheme(): Theme {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  return prefersDark ? 'dark' : 'light';
}

export interface AppSettingsContextProps {
  settings: AppSettings;
  toggleTheme: () => void;
  // toggleAnimations: () => void;
  toggleSound: () => void;
}

export const AppSettingsContext = createContext<AppSettingsContextProps>({
  settings: AppSettingDefaultValue,
  toggleTheme: () => {},
  // toggleAnimations: () => {},
  toggleSound: () => {},
});

export function useAppSettings() {
  return useContext(AppSettingsContext);
}
