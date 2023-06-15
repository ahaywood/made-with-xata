// Reference: https://wunnle.com/dynamic-text-color-based-on-background

import { COLORS } from './Constants';

function getRGB(c: string | number): number {
  if (typeof c === 'number') return c;
  return parseInt(c, 16);
}

function getsRGB(c: string | number) {
  return getRGB(c) / 255 <= 0.03928
    ? getRGB(c) / 255 / 12.92
    : ((getRGB(c) / 255 + 0.055) / 1.055) ** 2.4;
}

function getLuminance(hexColor: string) {
  return (
    0.2126 * getsRGB(hexColor.slice(1, 2)) +
    0.7152 * getsRGB(hexColor.slice(3, 2)) +
    0.0722 * getsRGB(hexColor.slice(-2))
  );
}

function getContrast(f: string, b: string) {
  const L1 = getLuminance(f);
  const L2 = getLuminance(b);
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
}

export function getTextColor(bgColor: string) {
  const whiteContrast = getContrast(bgColor, '#ffffff');
  const blackContrast = getContrast(bgColor, '#000000');

  return whiteContrast > blackContrast ? '#ffffff' : '#000000';
}

export const randomAvatarColor = (): string => {
  const colors = Object.keys(COLORS);
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
