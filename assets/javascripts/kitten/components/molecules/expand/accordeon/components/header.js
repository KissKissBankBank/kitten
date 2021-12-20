import React, { useContext } from 'react'
import { Context } from './context'
import { ArrowIcon } from '../../../../../components/graphics/icons/arrow-icon'
import classNames from 'classnames'

export const Header = ({ id, children, index, className, ...props }) => {
  const {
    updateSelectedItem,
    selectedItem,
    componentId,
    closeOnClick,
  } = useContext(Context)

  return (
    <button
      className={classNames('k-Accordeon__header', className)}
      onClick={() => updateSelectedItem(index)}
      role="button"
      aria-expanded={selectedItem.includes(index)}
      aria-disabled={closeOnClick ? null : selectedItem.includes(index)}
      id={`${componentId}-${id}_header`}
      aria-controls={`${componentId}-${id}_content`}
      {...props}
    >
      <span className="k-Accordeon__header__content">{children}</span>
      <span className="k-Accordeon__header__arrow">
        <ArrowIcon
          direction={selectedItem.includes(index) ? 'top' : 'bottom'}
          aria-hidden
        />
      </span>
    </button>
  )
}
