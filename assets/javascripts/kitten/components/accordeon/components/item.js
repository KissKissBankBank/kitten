import React from 'react'
import PropTypes from 'prop-types'
import { Header } from './header'
import { Content } from './content'
import { getReactElementsByType } from '../../../helpers/react/react-elements'

export const Item = ({ children, id, index }) => {
  const header = getReactElementsByType({ children, type: Header })
  const content = getReactElementsByType({ children, type: Content })

  return (
    <div className="k-Accordeon__item">
      {header[0] && React.cloneElement(header[0], { id, index })}
      {content[0] && React.cloneElement(content[0], { id, index })}
    </div>
  )
}

Item.propTypes = {
  id: PropTypes.string,
}

Item.defaultProps = {
  id: null,
}
