import React, { Fragment } from 'react'
import { Header } from './header'
import { Content } from './content'
import { getReactElementsByType } from '../../../helpers/react/react-elements'

export const Item = ({ children, id }) => {
  const header = getReactElementsByType({ children, type: Header })
  const content = getReactElementsByType({ children, type: Content })

  return (
    <Fragment>
      {header[0] && React.cloneElement(header[0], { id })}
      {content[0] && React.cloneElement(content[0], { id })}
    </Fragment>
  )
}
