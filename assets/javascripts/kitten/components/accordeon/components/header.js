import React, { useContext } from 'react'
import { Context } from './context'
import { ArrowIcon } from '../../../components/icons/arrow-icon'

export const Header = ({ id, children, index }) => {
  const { updateSelectedItem, selectedItem, componentId } = useContext(Context)

  return (
    <button
      className="k-Accordeon__header"
      onClick={() => updateSelectedItem(index)}
      role="button"
      aria-expanded={selectedItem === index}
      aria-disabled={selectedItem === index}
      id={`${componentId}-${id}_header`}
      aria-controls={`${componentId}-${id}_content`}
    >
      <span className="k-Accordeon__header__content">{children}</span>
      <span className="k-Accordeon__header__arrow">
        <ArrowIcon
          direction={selectedItem === index ? 'top' : 'bottom'}
          aria-hidden
        />
      </span>
    </button>
  )
}
