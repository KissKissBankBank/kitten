import React, { useState, useRef, useEffect, useContext } from 'react'
import { Context } from './context'
import { pxToRem } from '../../../../../helpers/utils/typography'
import classNames from 'classnames'

export const Content = ({ id, children, index, className, ...props }) => {
  const [maxHeight, setMaxHeight] = useState(0)
  const contentEl = useRef(null)
  const { selectedItem, componentId, accordeonWidth } = useContext(Context)

  useEffect(() => {
    setMaxHeight(contentEl?.current?.scrollHeight || 0)
  }, [selectedItem, accordeonWidth])

  return (
    <div
      className={classNames('k-Accordeon__content', className)}
      aria-hidden={!selectedItem.includes(index)}
      ref={contentEl}
      style={{ '--accordeon-content-max-height': pxToRem(maxHeight) }}
      id={`${componentId}-${id}_content`}
      aria-labelledby={`${componentId}-${id}_header`}
      {...props}
    >
      <div className="k-Accordeon__content_marger">{children}</div>
      {/* Empty div so the margin above is not collapsed */}
      <div />
    </div>
  )
}
