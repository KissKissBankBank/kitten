import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Styles } from './styles'

export const DoubleEntryTableLite = ({ firstColWidth, ...props }) => (
  <Styles className="DoubleEntryTable__Container" firstColWidth={firstColWidth}>
    <div className="DoubleEntryTable__TableContainer">
      <table className="DoubleEntryTable__Table" {...props} />
    </div>
  </Styles>
)

DoubleEntryTableLite.Header = ({ children, headerRowProps, ...others }) => (
  <thead {...others}>
    <tr {...headerRowProps}>{children}</tr>
  </thead>
)
DoubleEntryTableLite.Body = props => <tbody {...props} />
DoubleEntryTableLite.Row = props => <tr {...props} />
DoubleEntryTableLite.Col = props => (
  <td
    className="DoubleEntryTable__Column DoubleEntryTable__Column--Col"
    {...props}
  />
)
DoubleEntryTableLite.HeaderCol = props => (
  <th
    className="DoubleEntryTable__Column DoubleEntryTable__Column--HeaderCol"
    scope="column"
    {...props}
  />
)
DoubleEntryTableLite.TitleCol = props => (
  <th
    className="DoubleEntryTable__Column DoubleEntryTable__Column--TitleCol"
    scope="row"
    {...props}
  />
)

DoubleEntryTableLite.defaultProps = {
  firstColWidth: 240,
}

DoubleEntryTableLite.propTypes = {
  firstColWidth: PropTypes.number,
}
