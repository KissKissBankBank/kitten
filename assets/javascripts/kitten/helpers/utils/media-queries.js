import { ScreenConfig } from 'kitten/constants/screen-config'

const getMinQuery = (num) => `(min-width: ${num}px)`
const getMaxQuery = (num) => `(max-width: ${num}px)`

export const createMatchMediaMin = (configName) => {
  if (typeof window === 'undefined') return

  const screenConfig = ScreenConfig[configName]

  if(!screenConfig || !screenConfig.min) return

  return window.matchMedia( getMinQuery(screenConfig.min) )
}

export const createMatchMediaMax = (configName) => {
  if (typeof window === 'undefined') return

  const screenConfig = ScreenConfig[configName]

  if(!screenConfig || !screenConfig.max) return

  return window.matchMedia( getMaxQuery(screenConfig.max) )
}

export const createMatchMediaWithin = (configName) => {
  if (typeof window === 'undefined') return

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

  if(!query) return

  return window.matchMedia(query)
}
