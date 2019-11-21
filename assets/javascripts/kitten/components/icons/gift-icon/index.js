import React from 'react'
import PropTypes from 'prop-types'

export const GiftIcon = ({ color, title, ...props }) => (
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      d="M13 8v6H9V8h4zM7 8v6H3V8h4zm5.915-6.147c.21.786-.195 1.62-.956 2.146L16 4v2H0V4h4.04c-.76-.528-1.165-1.361-.955-2.147C3.371.786 4.684.211 6.018.568c.858.23 1.515.79 1.799 1.444l.039-.005L8 2c.063 0 .124.004.185.011.282-.653.94-1.213 1.797-1.443 1.334-.357 2.647.218 2.933 1.285zm-2.674-.319c-.608.163-1.025.546-1.162.928.229.235.38.544.414.889l.001.027.125.057c.308.118.71.146 1.14.03.841-.225 1.319-.873 1.19-1.353s-.866-.803-1.708-.578zm-6.19.578c-.129.48.349 1.128 1.19 1.354.49.131.946.076 1.266-.087.027-.356.179-.676.412-.918-.135-.38-.552-.764-1.16-.927-.842-.225-1.58.098-1.708.578z"
      fill-rule="evenodd"
    />
  </svg>
)

GiftIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

GiftIcon.defaultProps = {
  color: '#fff',
  title: 'Gift',
}
