export const SCREEN_SIZE_XXS = 'XXS';
export const SCREEN_SIZE_XS = 'XS';
export const SCREEN_SIZE_S = 'S';
export const SCREEN_SIZE_M = 'M';
export const SCREEN_SIZE_L = 'L';
export const SCREEN_SIZE_XL = 'XL';
export const ORDERED_SCREEN_SIZES = [SCREEN_SIZE_XXS, SCREEN_SIZE_XS, SCREEN_SIZE_S, SCREEN_SIZE_M, SCREEN_SIZE_L, SCREEN_SIZE_XL];
export const ScreenConfig = {
  [SCREEN_SIZE_XXS]: {
    min: null,
    max: 399
  },
  [SCREEN_SIZE_XS]: {
    min: 400,
    max: 639
  },
  [SCREEN_SIZE_S]: {
    min: 640,
    max: 767
  },
  [SCREEN_SIZE_M]: {
    min: 768,
    max: 1079
  },
  [SCREEN_SIZE_L]: {
    min: 1080,
    max: 1439
  },
  [SCREEN_SIZE_XL]: {
    min: 1440,
    max: null
  }
};
export const mq = {
  mobile: "(max-width: " + ScreenConfig.XS.max + "px)",
  mobileAndTablet: "(max-width: " + ScreenConfig.M.max + "px)",
  tablet: "(min-width: " + ScreenConfig.S.min + "px) and (max-width: " + ScreenConfig.M.max + "px)",
  tabletAndDesktop: "(min-width: " + ScreenConfig.S.min + "px)",
  desktop: "(min-width: " + ScreenConfig.L.min + "px)"
};