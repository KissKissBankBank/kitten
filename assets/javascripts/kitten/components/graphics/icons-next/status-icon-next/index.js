import React from 'react'

export const StatusIconNext = ({ status, ...props }) => {
  switch (status) {
    case 'warning':
      return <StatusIconNext.Warning {...props} />
    case 'disabled':
      return <StatusIconNext.Disabled {...props} />
    case 'success':
      return <StatusIconNext.Success {...props} />
    case 'danger':
      return <StatusIconNext.Danger {...props} />
    default:
      return <StatusIconNext.Info {...props} />
  }
}

StatusIconNext.Warning = ({ color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 4 14"
    fill={color}
    width="4"
    height="14"
    {...props}
  >
    <circle cx="2" cy="12.25" r="1.25" />
    <rect width="2.5" height="9" x=".75" rx="1.25" />
  </svg>
)
StatusIconNext.Disabled = StatusIconNext.Warning

StatusIconNext.Info = ({ color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 4 14"
    fill={color}
    width="4"
    height="14"
    {...props}
  >
    <circle cx="2" cy="1.25" r="1.25" transform="rotate(-180 2 1.25)" />
    <rect
      width="2.5"
      height="9"
      x="3.25"
      y="13.5"
      rx="1.25"
      transform="rotate(-180 3.25 13.5)"
    />
  </svg>
)

StatusIconNext.Danger = ({ color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    fill={color}
    width="10"
    height="10"
    {...props}
  >
    <path d="M5.005 3.23 2.529.755A1.25 1.25 0 1 0 .762 2.523l2.475 2.475L.762 7.472A1.25 1.25 0 0 0 2.53 9.24l2.475-2.475L7.479 9.24a1.25 1.25 0 0 0 1.768-1.768L6.772 4.998l2.475-2.475A1.25 1.25 0 0 0 7.48.755L5.005 3.23Z" />
  </svg>
)

StatusIconNext.Success = ({ color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 11 9"
    fill={color}
    width="11"
    height="9"
    {...props}
  >
    <path d="m2.134 6.553 1.767 1.768L5.67 6.553l4.42-4.419A1.25 1.25 0 0 0 8.321.366l-4.42 4.42-1.767-1.768A1.25 1.25 0 0 0 .366 4.785l1.768 1.768Z" />
  </svg>
)

StatusIconNext.defaultProps = {
  status: 'info',
  color: 'var(--color-grey-900)',
}
