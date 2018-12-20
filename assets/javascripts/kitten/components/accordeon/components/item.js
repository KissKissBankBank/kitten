import React, { Fragment } from 'react'
import { Header } from './header'
import { Content } from './content'
import { Context } from './context'

export const Item = ({ children, id }) => {
  const header = React.Children.toArray(children).filter(
    child => child.type === Header,
  )

  const content = React.Children.toArray(children).filter(
    child => child.type === Content,
  )

  return (
    <Context.Consumer>
      {selectedItem => {
        return (
          <Fragment>
            {header}
            {selectedItem === id && content}
          </Fragment>
        )
      }}
    </Context.Consumer>
  )
}
