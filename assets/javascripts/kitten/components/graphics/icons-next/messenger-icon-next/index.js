import React from 'react'
import PropTypes from 'prop-types'

export const MessengerIconNext = ({ color, title, ...props }) => (
  <svg
    width="27"
    height="27"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      d="M13.857 0c-7.168 0-13 5.581-13 12.441 0 3.262 1.356 6.396 3.744 8.718a.511.511 0 0 1 .156.366v4.664a.5.5 0 0 0 .725.446l4.403-2.217a.51.51 0 0 1 .366-.034c1.186.33 2.397.498 3.606.498 7.169 0 13-5.581 13-12.44 0-6.86-5.831-12.442-13-12.442Zm0 2.62c5.735 0 10.4 4.406 10.4 9.821s-4.665 9.822-10.4 9.822c-1.025 0-2.06-.152-3.07-.448l-.788-.23a.5.5 0 0 0-.365.032l-.735.37-.816.411a.5.5 0 0 1-.726-.446v-1.565a.5.5 0 0 0-.158-.364l-.67-.627c-1.952-1.836-3.072-4.372-3.072-6.955 0-5.415 4.666-9.822 10.4-9.822Zm-.949 6.83a.5.5 0 0 0-.668.037l-4.29 4.322c-.39.393.053 1.035.559.809l3.119-1.397a.5.5 0 0 1 .518.067l2.66 2.144a.5.5 0 0 0 .669-.037l4.29-4.322c.39-.393-.053-1.035-.559-.808l-3.119 1.396a.5.5 0 0 1-.518-.067l-2.66-2.144Z"
      fill={color}
    />
  </svg>
)

MessengerIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

MessengerIconNext.defaultProps = {
  color: '#fff',
  title: null,
}
