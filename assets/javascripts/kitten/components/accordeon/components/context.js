import { createContext } from 'react'

export const Context = createContext({
  selectedItem: null,
  updateSelectedItem: () => {},
  componentId: 'accordeon',
})
