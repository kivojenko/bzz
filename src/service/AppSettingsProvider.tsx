import React, { useState, useEffect, ReactNode, useMemo } from 'react';
import { AppSettingDefaultValue, AppSettings, AppSettingsContext } from '../model/AppSettings';
// @ts-ignore
import music from '../assets/music/main_theme.mp3';

interface AppSettingsProviderProps {
  children: ReactNode;
}

export const AppSettingsProvider: React.FC<AppSettingsProviderProps> = ({ children, }) => {
  const [settings, setSettings] = useState<AppSettings>(() => {
    const storedSettings = localStorage.getItem('appSettings');
    if (storedSettings) {
      return JSON.parse(storedSettings);
    }
    return AppSettingDefaultValue;
  });

  useEffect(() => {
    localStorage.setItem('appSettings', JSON.stringify(settings));
  }, [settings]);

  const toggleTheme = () => {
    const newTheme = settings.theme !== 'dark' ? 'dark' : 'light';
    setSettings((prevSettings) => ({
      ...prevSettings,
      theme: newTheme,
    }));
  };

  const toggleAnimations = () => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      animationsEnabled: !prevSettings.animationsEnabled,
    }));
  };

  const audio = useMemo(() => {
    return new Audio(music)
  }, []);
  audio.volume = 0.5;
  audio.loop = true;

  const toggleSound = () => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      soundEnabled: !prevSettings.soundEnabled,
    }));
    settings.soundEnabled ? audio.pause() : audio.play();
  };

  return (
    <AppSettingsContext.Provider
      value={{
        settings,
        toggleTheme,
        toggleAnimations,
        toggleSound,
      }}
    >
      {children}
    </AppSettingsContext.Provider>
  );
};
