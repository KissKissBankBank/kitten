import React from 'react'
import PropTypes from 'prop-types'

export const HomeIcon = ({ color, title, ...props }) => (
  <svg
    width="24"
    height="20"
    viewBox="0 0 24 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      d="M17.633 9.432l2 1.636v8.224h-7v-5c0-.473-.329-.87-.77-.974l-.113-.019-.117-.007a1 1 0 00-.993.883l-.007.117v5h-7v-8.224l2-1.636v7.86h3v-3a3 3 0 012.824-2.995l.176-.005a3 3 0 012.995 2.824l.005.176v3h3v-7.86zm-6-9.432l11.633 9.518L22 11.066 11.633 2.583 1.266 11.066 0 9.518 11.633 0z"
      fill={color}
    />
  </svg>
)

HomeIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

HomeIcon.defaultProps = {
  color: '#222',
  title: '',
}
