import { ScreenConfig } from 'kitten/constants/screen-config'

export const getMinQuery = (num) => `(min-width: ${num}px)`
export const getMaxQuery = (num) => `(max-width: ${num}px)`

export const getJoinedQueries =
  queries => queries.filter((q) => q).join(' and ')

export const createMatchMedia = (mediaQueryString) => {
  if (typeof window === 'undefined' || !mediaQueryString) return

  return window.matchMedia(mediaQueryString)
}

export const createMatchMediaMin = (configName) => {
  const screenConfig = ScreenConfig[configName]

  if (!screenConfig) return

  return createMatchMedia(getMinQuery(screenConfig.min))
}

export const createMatchMediaMax = (configName) => {
  const screenConfig = ScreenConfig[configName]

  if (!screenConfig) return

  return createMatchMedia(getMaxQuery(screenConfig.max))
}

export const createMatchMediaWithin = (configName) => {
  const screenConfig = ScreenConfig[configName]

  if (!screenConfig) return

  const minQuery = screenConfig.min ? getMinQuery(screenConfig.min) : null
  const maxQuery = screenConfig.max ? getMaxQuery(screenConfig.max) : null
  const query = getJoinedQueries([minQuery, maxQuery])

  return createMatchMedia(query)
}
