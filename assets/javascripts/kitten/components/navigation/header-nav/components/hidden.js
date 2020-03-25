import React from 'react'
import classNames from 'classnames'

export const Hidden = ({ min, max, children }) => {
  const hiddenMin = min ? `k-u-hidden@${min}-up--important` : ''
  const hiddenMax = max ? `k-u-hidden@${max}-down--important` : ''

  return (
    <>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          className: classNames(hiddenMin, hiddenMax),
        }),
      )}
    </>
  )
}
