import React from 'react'

export const Context = React.createContext({
  selectedItem: null,
  updateSelectedItem: () => {},
})
