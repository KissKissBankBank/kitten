import React from 'react'
import PropTypes from 'prop-types'
import { Styles } from './styles'

export const DoubleEntryTable = ({ firstColWidth, ...props }) => (
  <Styles className="DoubleEntryTable__Container" firstColWidth={firstColWidth}>
    <div className="DoubleEntryTable__TableContainer">
      <table className="DoubleEntryTable__Table" {...props} />
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
DoubleEntryTable.Col = props => (
  <td
    className="DoubleEntryTable__Column DoubleEntryTable__Column--Col"
    {...props}
  />
)
DoubleEntryTable.HeaderCol = props => (
  <th
    className="DoubleEntryTable__Column DoubleEntryTable__Column--HeaderCol"
    scope="column"
    {...props}
  />
)
DoubleEntryTable.TitleCol = props => (
  <th
    className="DoubleEntryTable__Column DoubleEntryTable__Column--TitleCol"
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
