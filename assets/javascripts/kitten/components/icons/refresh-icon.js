import React from 'react'

export const RefreshIcon = ({ circleColor,
                              arrowColor,
                              strokeClassName,
                              fillClassName,
                              ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 10 11.5"
       { ...props }>
    <path d="M5 1.5a5 5 0 1 0 4.47 2.75"
          fill={ circleColor } />
    <path d="M4.86 2a4.5 4.5 0 1 0 4.22 2.6"
          fill="none"
          stroke={ arrowColor }
          className={ strokeClassName } />
    <path d="M6.27 2.26L4 4.23l-.65-.73 2.27-2z"
          fill={ arrowColor }
          className={ fillClassName } />
    <path d="M6.27 2.26l-.75.66-2-2.26L4.3 0z"
          fill={ arrowColor }
          className={ fillClassName } />
  </svg>
)

RefreshIcon.defaultProps = {
  circleColor: '#fff',
  arrowColor: '#333',
  strokeClassName: null,
  fillClassName: null,
}
