import React from 'react'
import { Styles } from './styles'

export const SingleEntryTable = ({ ...props }) => (
  <Styles className="SingleEntryTable__Container">
    <table className="SingleEntryTable__Table" {...props} />
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
