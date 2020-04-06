import {
  ScreenConfig,
  ORDERED_SCREEN_SIZES,
} from '../../constants/screen-config'

export const getMinQuery = num => `(min-width: ${num}px)`
export const getMaxQuery = num => `(max-width: ${num}px)`

export const getJoinedQueries = queries => queries.filter(q => q).join(' and ')

export const createMatchMedia = mediaQueryString => {
  if (typeof window === 'undefined' || !mediaQueryString) return

  return window.matchMedia(mediaQueryString)
}

export const createMatchMediaMin = configName => {
  const screenConfig = ScreenConfig[configName]

  if (!screenConfig) return

  return createMatchMedia(getMinQuery(screenConfig.min))
}

export const createMatchMediaMax = configName => {
  const screenConfig = ScreenConfig[configName]

  if (!screenConfig) return

  return createMatchMedia(getMaxQuery(screenConfig.max))
}

export const createMatchMediaWithin = configName => {
  const screenConfig = ScreenConfig[configName]

  if (!screenConfig) return

  const minQuery = screenConfig.min ? getMinQuery(screenConfig.min) : null
  const maxQuery = screenConfig.max ? getMaxQuery(screenConfig.max) : null
  const query = getJoinedQueries([minQuery, maxQuery])

  return createMatchMedia(query)
}

export const getScreenSizeFrom = direction => screenSize => {
  const currentIndex = ORDERED_SCREEN_SIZES.indexOf(screenSize.toUpperCase())
  const lastIndex = ORDERED_SCREEN_SIZES.length - 1
  const nextIndex = currentIndex === lastIndex ? currentIndex : currentIndex + 1
  const prevIndex = currentIndex === 0 ? 0 : currentIndex - 1

  switch (direction) {
    case 'previous':
      return ORDERED_SCREEN_SIZES[prevIndex]
    case 'next':
      return ORDERED_SCREEN_SIZES[nextIndex]
    default:
      return ORDERED_SCREEN_SIZES[currentIndex]
  }
}
