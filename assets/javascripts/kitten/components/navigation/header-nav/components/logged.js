import React, { useContext } from 'react'
import { Context } from './context'

export const Logged = ({ children }) => {
  const { isLogged } = useContext(Context)

  if (!isLogged) return null

  return children
}
