import React from 'react'
import PropTypes from 'prop-types'
import { DocumentIconEmpty } from '../document-icon-empty'

export const DocumentIconPerson = props => (
  <DocumentIconEmpty {...props}>
    <path
      className="kiss-DocumentIcon__icon"
      d="M11 12l5 4h-2v4h-2v-3h-2v3h-2v-4h-2l5 -4z"
    />
  </DocumentIconEmpty>
)

DocumentIconPerson.propTypes = {
  title: PropTypes.string,
}

DocumentIconPerson.defaultProps = {
  title: '',
}
