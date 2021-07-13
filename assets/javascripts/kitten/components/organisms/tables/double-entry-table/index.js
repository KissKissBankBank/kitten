import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Styles } from './styles'

export const DoubleEntryTable = ({ firstColWidth, className, ...props }) => (
  <Styles className="DoubleEntryTable__Container" firstColWidth={firstColWidth}>
    <div className="DoubleEntryTable__TableContainer">
      <table
        className={classNames('DoubleEntryTable__Table', className)}
        {...props}
      />
    </div>
  </Styles>
)

DoubleEntryTable.Header = ({ children, headerRowProps, ...others }) => (
  <thead {...others}>
    <tr {...headerRowProps}>{children}</tr>
  </thead>
)
DoubleEntryTable.Body = props => <tbody {...props} />
DoubleEntryTable.Row = props => <tr {...props} />
DoubleEntryTable.Col = ({ className, ...props }) => (
  <td
    className={classNames(
      'DoubleEntryTable__Column DoubleEntryTable__Column--Col',
      className,
    )}
    {...props}
  />
)
DoubleEntryTable.HeaderCol = ({ className, ...props }) => (
  <th
    className={classNames(
      'DoubleEntryTable__Column DoubleEntryTable__Column--HeaderCol',
      className,
    )}
    scope="column"
    {...props}
  />
)
DoubleEntryTable.TitleCol = ({ className, ...props }) => (
  <th
    className={classNames(
      'DoubleEntryTable__Column DoubleEntryTable__Column--TitleCol',
      className,
    )}
    scope="row"
    {...props}
  />
)

DoubleEntryTable.defaultProps = {
  firstColWidth: 240,
}

DoubleEntryTable.propTypes = {
  firstColWidth: PropTypes.number,
}
