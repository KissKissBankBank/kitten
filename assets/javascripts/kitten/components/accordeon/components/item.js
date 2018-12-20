import React, { Fragment } from 'react'
import { Header } from './header'
import { Content } from './content'

export const Item = ({ children, id }) => {
  const header = React.Children.toArray(children).filter(
    child => child.type === Header,
  )

  const content = React.Children.toArray(children).filter(
    child => child.type === Content,
  )

  return (
    <Fragment>
      {React.cloneElement(header[0], { id })}
      {React.cloneElement(content[0], { id })}
    </Fragment>
  )
}
