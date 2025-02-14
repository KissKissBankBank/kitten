import React from 'react'
import PropTypes from 'prop-types'

export const InfiniteIconNext = ({ color, title, ...props }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      d="M18.64 13.535c-.877.944-2.045 1.465-3.286 1.465s-2.41-.52-3.287-1.465l-.437-.424a.897.897 0 0 1 1.25-1.287l.409.397a2.8 2.8 0 0 0 2.065.918 2.8 2.8 0 0 0 2.063-.918c1.14-1.226 1.14-3.216 0-4.442a2.8 2.8 0 0 0-2.063-.919 2.8 2.8 0 0 0-2.065.92l-1.454 1.562-.61.658-1.223 1.316-.612.656-1.454 1.563C7.058 14.479 5.891 15 4.65 15c-1.24 0-2.409-.52-3.287-1.465C.484 12.59 0 11.335 0 10s.484-2.59 1.362-3.535C2.24 5.521 3.408 5 4.65 5s2.41.52 3.287 1.465l.436.424A.897.897 0 1 1 7.12 8.174l-.406-.395a2.8 2.8 0 0 0-2.066-.919 2.8 2.8 0 0 0-2.063.92A3.242 3.242 0 0 0 1.73 10c0 .837.303 1.628.856 2.219.552.595 1.285.92 2.063.92a2.8 2.8 0 0 0 2.066-.918l1.453-1.563.61-.658 1.224-1.316.612-.656 1.453-1.563C12.945 5.521 14.113 5 15.354 5s2.409.52 3.287 1.465c1.812 1.949 1.812 5.121 0 7.07Z"
      fill={color}
    />
  </svg>
)

InfiniteIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

InfiniteIconNext.defaultProps = {
  color: '#222',
  title: null,
}
