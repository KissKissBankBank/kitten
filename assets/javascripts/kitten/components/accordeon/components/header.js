import React from 'react'
import { Context } from './context'

export const Header = ({ id, children }) => {
  return (
    <Context.Consumer>
      {({ updateSelectedItem }) => {
        return <div onClick={() => updateSelectedItem(id)}>{children}</div>
      }}
    </Context.Consumer>
  )
}
