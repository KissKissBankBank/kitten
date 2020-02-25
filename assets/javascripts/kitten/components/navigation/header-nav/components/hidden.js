import React from 'react'

export const Hidden = ({ min, max, children }) => {
  const hiddenMin = min ? `k-u-hidden@${min}-up--important` : ''
  const hiddenMax = max ? `k-u-hidden@${max}-down--important` : ''

  return (
    <div className={`k-HeaderNav-hidden ${hiddenMin} ${hiddenMax}`.trim()}>
      {children}
    </div>
  )
}
