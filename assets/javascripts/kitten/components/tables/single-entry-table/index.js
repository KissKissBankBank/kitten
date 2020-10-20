import React from 'react'
import { Styles } from './styles'
import classNames from 'classnames'

export const SingleEntryTable = ({ isSliding = false, ...props }) => (
  <Styles
    className={classNames('SingleEntryTable__Container', {
      'SingleEntryTable--isSliding': isSliding,
    })}
  >
    <div className="SingleEntryTable__TableContainer">
      <table className="SingleEntryTable__Table" {...props} />
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

SingleEntryTable.Col = props => (
  <td
    className="SingleEntryTable__Column SingleEntryTable__Column--Col"
    {...props}
  />
)

SingleEntryTable.HeaderCol = props => (
  <th
    className="SingleEntryTable__Column SingleEntryTable__Column--HeaderCol"
    scope="column"
    {...props}
  />
)
