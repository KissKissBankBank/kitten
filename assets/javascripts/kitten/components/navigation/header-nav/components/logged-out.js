import React, { useContext } from 'react'
import { Context } from './context'

export const LoggedOut = ({ children }) => {
  const { isLogged } = useContext(Context)

  if (isLogged) return null

  return children
}
