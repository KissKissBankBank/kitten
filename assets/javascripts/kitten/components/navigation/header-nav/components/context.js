import React from 'react'

export const Context = React.createContext({
  id: 'kkbbAndCoHeaderNav',
  isLogged: false,
  callOnToggle: () => {},
  expandBy: null,
})
