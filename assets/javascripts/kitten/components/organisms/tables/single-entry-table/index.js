import React from 'react'
import { Styles } from './styles'
import classNames from 'classnames'

export const SingleEntryTable = ({
  className,
  isSliding = false,
  ...props
}) => (
  <Styles
    className={classNames('SingleEntryTable__Container', {
      'SingleEntryTable--isSliding': isSliding,
    })}
  >
    <div className="SingleEntryTable__TableContainer">
      <table
        className={classNames('SingleEntryTable__Table', className)}
        {...props}
      />
    </div>
  </Styles>
)

SingleEntryTable.Header = ({ children, headerRowProps, ...others }) => (
  <thead {...others}>
    <tr {...headerRowProps}>{children}</tr>
  </thead>
)

SingleEntryTable.Body = props => <tbody {...props} />

SingleEntryTable.Row = props => <tr {...props} />

SingleEntryTable.Col = ({ className, ...props }) => (
  <td
    className={classNames(
      'SingleEntryTable__Column SingleEntryTable__Column--Col',
      className,
    )}
    {...props}
  />
)

SingleEntryTable.HeaderCol = ({ className, ...props }) => (
  <th
    className={classNames(
      'SingleEntryTable__Column SingleEntryTable__Column--HeaderCol',
      className,
    )}
    scope="column"
    {...props}
  />
)
