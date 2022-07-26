import React from 'react'
import PropTypes from 'prop-types'

export const PlayerIconNext = ({ color, title, direction, ...props }) => (
  <svg
    width="90"
    height="90"
    viewBox="0 0 90 90"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <circle
      cx="45"
      cy="45"
      r="44.5"
      fill="var(--color-grey-900)"
      stroke="var(--color-grey-000)"
      strokeWidth="1"
      opacity="var(--player-icon-opacity, 0.8)"
    />
    <path
      fill="var(--color-grey-000)"
      d="M60 43.27a2 2 0 0 1 0 3.46L39 58.86a2 2 0 0 1-3-1.74V32.88a2 2 0 0 1 3-1.74l21 12.13Z"
    />
  </svg>
)

PlayerIconNext.propTypes = {
  title: PropTypes.string,
}

PlayerIconNext.defaultProps = {
  title: null,
}
