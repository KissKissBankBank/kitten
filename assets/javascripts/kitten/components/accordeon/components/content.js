import React, { useState, useRef, useEffect, useContext } from 'react'
import { Context } from './context'
import { pxToRem } from '../../../helpers/utils/typography'

export const Content = ({ id, children, index }) => {
  const [maxHeight, setMaxHeight] = useState(0)
  const contentEl = useRef(null)
  const { selectedItem, componentId } = useContext(Context)

  useEffect(() => {
    setMaxHeight(
      contentEl && contentEl.current && contentEl.current.scrollHeight,
    )
  }, [contentEl])

  return (
    <div
      className="k-Accordeon__content"
      aria-hidden={selectedItem !== index}
      ref={contentEl}
      style={{ '--accordeon-content-max-height': pxToRem(maxHeight) }}
      id={`${componentId}-${id}_content`}
      aria-labelledby={`${componentId}-${id}_header`}
    >
      <div className="k-Accordeon__content_marger">{children}</div>
      {/* Empty div so the margin above is not collapsed */}
      <div />
    </div>
  )
}
