import { ScreenConfig } from 'kitten/constants/screen-config'

const getMinQuery = (num) => `(min-width: ${num}px)`
const getMaxQuery = (num) => `(max-width: ${num}px)`

export const createMatchMedia = (mediaQueryString) => {
  if (typeof window === 'undefined' || !mediaQueryString) return
  return window.matchMedia(mediaQueryString)
}

export const createMatchMediaMin = (configName) => {
  const screenConfig = ScreenConfig[configName]
  if(!screenConfig) return

  return createMatchMedia( getMinQuery(screenConfig.min) )
}

export const createMatchMediaMax = (configName) => {
  const screenConfig = ScreenConfig[configName]
  if(!screenConfig) return

  return createMatchMedia( getMaxQuery(screenConfig.max) )
}

export const createMatchMediaWithin = (configName) => {
  const screenConfig = ScreenConfig[configName]
  if(!screenConfig) return

  const minQuery = screenConfig.min ? getMinQuery(screenConfig.min) : null
  const maxQuery = screenConfig.max ? getMaxQuery(screenConfig.max) : null

  const query = minQuery
    ? maxQuery
      ? `${minQuery} and ${maxQuery}`
      : minQuery
    : maxQuery
      ? maxQuery
      : null

  return createMatchMedia(query)
}
