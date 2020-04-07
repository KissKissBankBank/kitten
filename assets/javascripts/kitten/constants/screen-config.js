export const SCREEN_SIZE_XXS = 'XXS'
export const SCREEN_SIZE_XS = 'XS'
export const SCREEN_SIZE_S = 'S'
export const SCREEN_SIZE_M = 'M'
export const SCREEN_SIZE_L = 'L'
export const SCREEN_SIZE_XL = 'XL'

export const ORDERED_SCREEN_SIZES = [
  SCREEN_SIZE_XXS,
  SCREEN_SIZE_XS,
  SCREEN_SIZE_S,
  SCREEN_SIZE_M,
  SCREEN_SIZE_L,
  SCREEN_SIZE_XL,
]

export const ScreenConfig = {
  [SCREEN_SIZE_XXS]: {
    min: null,
    max: 479,
  },

  [SCREEN_SIZE_XS]: {
    min: 480,
    max: 639,
  },

  [SCREEN_SIZE_S]: {
    min: 640,
    max: 767,
  },

  [SCREEN_SIZE_M]: {
    min: 768,
    max: 1079,
  },

  [SCREEN_SIZE_L]: {
    min: 1080,
    max: 1439,
  },

  [SCREEN_SIZE_XL]: {
    min: 1440,
    max: null,
  },
}
