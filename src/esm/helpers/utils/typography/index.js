import TYPOGRAPHY from '../../../constants/typography-config';
export const pxToRem = sizeInPx => {
  if (sizeInPx === 0) return 0;
  const sizeInRem = sizeInPx / TYPOGRAPHY.root;
  return parseFloat(sizeInRem) + "rem";
};
const fontSizeScale = {
  '-4': 10,
  '-3': 11,
  '-2': 12,
  '-1': 14,
  0: 16,
  1: 18,
  2: 20,
  3: 22,
  4: 24,
  5: 28,
  6: 32,
  7: 36,
  8: 41,
  9: 46,
  10: 52,
  11: 58,
  12: 64,
  13: 74,
  14: 84,
  15: 94,
  16: 105
};
export const stepToRem = step => {
  return pxToRem(fontSizeScale[step.toString()]);
};