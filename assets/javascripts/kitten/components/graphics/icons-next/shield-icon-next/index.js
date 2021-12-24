import React from 'react'
import PropTypes from 'prop-types'

export const ShieldIconNext = ({
  shieldColor,
  checkColor,
  strokeColor,
  title,
  ...props
}) => (
  <svg
    width="27"
    height="30"
    viewBox="0 0 27 30"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    {title && <title>{title}</title>}
    <path fill={shieldColor} d="M26.457 4.326L13.48 0 .5 4.326V15.94a12.945 12.945 0 007.99 11.979L13.478 30l4.99-2.081a12.945 12.945 0 007.988-11.98V4.327zM23.573 15.94a10.065 10.065 0 01-6.21 9.316l-3.884 1.62-3.884-1.62a10.066 10.066 0 01-6.21-9.316V6.403l10.094-3.365 10.094 3.365v9.537z"/>
    <path fill="#EEE" d="M26.457 4.326h.3V4.11l-.205-.068-.095.284zM13.48 0l.095-.285-.095-.031-.095.031.095.285zM.5 4.326l-.095-.284L.2 4.11v.216h.3zm0 11.614h.3-.3zm7.99 11.979l.115-.277h-.001l-.115.277zM13.478 30l-.116.277.116.048.115-.048L13.48 30zm4.99-2.081l-.116-.277.115.277zm7.988-11.98h-.3v.001h.3zm-2.884 0h-.3v.001h.3zm-6.21 9.317l-.115-.278.115.278zm-3.884 1.62l-.116.276.116.049.115-.049-.115-.277zm-3.884-1.62l.115-.277-.115.277zm-6.21-9.316h.3-.3zm0-9.537l-.096-.285-.205.069v.216h.3zm10.094-3.365l.095-.285-.095-.031-.095.031.095.285zm10.094 3.365h.3v-.216l-.205-.069-.095.285zm2.98-2.361L13.572-.285l-.19.57 12.98 4.326.19-.57zM13.382-.285L.406 4.042l.19.569L13.574.285l-.19-.57zM.2 4.326V15.94h.6V4.326H.2zm0 11.613a13.245 13.245 0 002.226 7.37l.499-.333A12.645 12.645 0 01.8 15.94H.2zm2.226 7.37a13.245 13.245 0 005.948 4.887l.23-.555a12.645 12.645 0 01-5.679-4.665l-.5.333zm5.948 4.886l4.99 2.082.23-.554-4.99-2.081-.23.553zm5.22 2.082l4.99-2.082-.231-.553-4.99 2.081.231.554zm4.99-2.081a13.244 13.244 0 005.948-4.887l-.5-.333a12.645 12.645 0 01-5.679 4.666l.23.554zm5.948-4.887a13.244 13.244 0 002.225-7.37l-.6.001a12.645 12.645 0 01-2.125 7.036l.5.333zm2.225-7.37V4.327h-.6V15.94h.6zm-3.484.001a9.765 9.765 0 01-1.64 5.434l.5.333a10.365 10.365 0 001.74-5.768l-.6.001zm-1.64 5.434a9.765 9.765 0 01-4.385 3.604l.23.555a10.366 10.366 0 004.654-3.826l-.499-.333zm-4.386 3.605l-3.884 1.62.231.553 3.884-1.62-.23-.553zm-3.653 1.62l-3.884-1.62-.23.553 3.883 1.62.231-.553zm-3.884-1.62a9.765 9.765 0 01-4.386-3.605l-.499.333a10.366 10.366 0 004.655 3.826l.23-.555zm-4.386-3.605a9.766 9.766 0 01-1.64-5.434h-.6a10.365 10.365 0 001.741 5.767l.5-.333zm-1.64-5.434V6.403h-.6v9.537h.6zM3.48 6.687l10.095-3.364-.19-.57L3.289 6.118l.19.57zm9.905-3.364l10.094 3.364.19-.569-10.094-3.365-.19.57zm9.89 3.08v9.537h.6V6.403h-.6z" mask="url(#a)"/>
    <g>
      <path fill={checkColor} fill-rule="evenodd" d="M10 17.737l2 2 2-2 5-5a1.414 1.414 0 10-2-2l-5 5-2-2a1.414 1.414 0 10-2 2l2 2z" clip-rule="evenodd"/>
    </g>
  </svg>
)

ShieldIconNext.propTypes = {
  shieldColor: PropTypes.string,
  checkColor: PropTypes.string,
  title: PropTypes.string,
}

ShieldIconNext.defaultProps = {
  shieldColor: '#222',
  checkColor: '#006cff',
  strokeColor: '#eee',
  title: null,
}
