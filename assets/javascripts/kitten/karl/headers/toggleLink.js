import React from 'react'

export const KarlToggleClassLink = props => {
  const { label } = props

  return (
    <a className="karl-link" href="#">
      {label}
    </a>
  )
}
