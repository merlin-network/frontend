import type { PaletteMode, ThemeOptions } from '@mui/material';

export const light: ThemeOptions = {
  shadows: [
    'none',
    '0px 0px 20px rgba(0, 0, 0, 0.05)',
    '0px 0px 20px rgba(0, 0, 0, 0.1)',
    '0px 0px 20px rgba(0, 0, 0, 0.15)',
    '0px 0px 20px rgba(0, 0, 0, 0.2)',
    '0px 0px 20px rgba(0, 0, 0, 0.25)',
    '0px 0px 20px rgba(0, 0, 0, 0.3)',
    '0px 0px 20px rgba(0, 0, 0, 0.35)',
    '0px 0px 20px rgba(0, 0, 0, 0.4)',
    '0px 0px 20px rgba(0, 0, 0, 0.45)',
    '0px 0px 20px rgba(0, 0, 0, 0.5)',
    '0px 0px 20px rgba(0, 0, 0, 0.55)',
    '0px 0px 20px rgba(0, 0, 0, 0.6)',
    '0px 0px 20px rgba(0, 0, 0, 0.65)',
    '0px 0px 20px rgba(0, 0, 0, 0.7)',
    '0px 0px 20px rgba(0, 0, 0, 0.75)',
    '0px 0px 20px rgba(0, 0, 0, 0.8)',
    '0px 0px 20px rgba(0, 0, 0, 0.85)',
    '0px 0px 20px rgba(0, 0, 0, 0.9)',
    '0px 0px 20px rgba(0, 0, 0, 0.95)',
    '0px 0px 20px rgba(0, 0, 0, 0.95)',
    '0px 0px 20px rgba(0, 0, 0, 0.95)',
    '0px 0px 20px rgba(0, 0, 0, 0.95)',
    '0px 0px 20px rgba(0, 0, 0, 0.95)',
    '0px 0px 20px rgba(0, 0, 0, 0.95)',
  ],
};
export const dark: ThemeOptions = {
  shadows: [
    'none',
    '0px 0px 20px rgba(255, 255, 255, 0.05)',
    '0px 0px 20px rgba(255, 255, 255, 0.1)',
    '0px 0px 20px rgba(255, 255, 255, 0.15)',
    '0px 0px 20px rgba(255, 255, 255, 0.2)',
    '0px 0px 20px rgba(255, 255, 255, 0.25)',
    '0px 0px 20px rgba(255, 255, 255, 0.3)',
    '0px 0px 20px rgba(255, 255, 255, 0.35)',
    '0px 0px 20px rgba(255, 255, 255, 0.4)',
    '0px 0px 20px rgba(255, 255, 255, 0.45)',
    '0px 0px 20px rgba(255, 255, 255, 0.5)',
    '0px 0px 20px rgba(255, 255, 255, 0.55)',
    '0px 0px 20px rgba(255, 255, 255, 0.6)',
    '0px 0px 20px rgba(255, 255, 255, 0.65)',
    '0px 0px 20px rgba(255, 255, 255, 0.7)',
    '0px 0px 20px rgba(255, 255, 255, 0.75)',
    '0px 0px 20px rgba(255, 255, 255, 0.8)',
    '0px 0px 20px rgba(255, 255, 255, 0.85)',
    '0px 0px 20px rgba(255, 255, 255, 0.9)',
    '0px 0px 20px rgba(255, 255, 255, 0.95)',
    '0px 0px 20px rgba(255, 255, 255, 0.95)',
    '0px 0px 20px rgba(255, 255, 255, 0.95)',
    '0px 0px 20px rgba(255, 255, 255, 0.95)',
    '0px 0px 20px rgba(255, 255, 255, 0.95)',
    '0px 0px 20px rgba(255, 255, 255, 0.95)',
  ],
};

export const getShadowsOptions = (mode: PaletteMode) =>
  mode === 'light' ? light : dark;
