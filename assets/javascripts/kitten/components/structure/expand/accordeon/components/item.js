import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { getReactElementsByType } from '../../../../../helpers/react/react-elements'
import { Header } from './header'
import { Content } from './content'
import { Context } from './context'

export const Item = ({ children, id, index, className, ...props }) => {
  const { selectedItem } = useContext(Context)
  const header = getReactElementsByType({ children, type: Header })
  const content = getReactElementsByType({ children, type: Content })

  return (
    <div
      className={classNames('k-Accordeon__item', className, {
        'k-Accordeon__item--expanded': selectedItem.includes(index),
      })}
      {...props}
    >
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
