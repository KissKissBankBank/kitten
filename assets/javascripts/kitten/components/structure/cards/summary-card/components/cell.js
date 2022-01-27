import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export const Cell = ({ name, className, style, ...props }) => {
  return (
    <div
      {...props}
      className={classNames(
        'k-SummaryCard__cell',
        className,
        `k-SummaryCard__cell__${name}`,
      )}
      style={{ ...style, '--summaryCardCell-name': name }}
    />
  )
}

Cell.propTypes = {
  name: PropTypes.string.isRequired,
}
