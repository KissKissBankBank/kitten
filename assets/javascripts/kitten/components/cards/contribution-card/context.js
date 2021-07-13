import { createContext } from 'react'

export const Context = createContext({
  isInputEmpty: true,
  setEmptyInput: () => {},
})
