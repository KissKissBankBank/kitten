import React from 'react'

export const KarlToggleClassLink = props => {
  const { label, elementSelector, toggledClass } = props
  const onClick = event => {}

  return (
    <a className="karl-link" href="#">
      {label}
    </a>
  )
}
