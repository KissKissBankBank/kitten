import React from 'react'
import PropTypes from 'prop-types'
import { DocumentIconEmpty } from '../document-icon-empty'

export const DocumentIconPerson = props => (
  <DocumentIconEmpty {...props}>
    <path
      className="kiss-DocumentIcon__icon"
      d="M16.06 19.15a4.05 4.05 0 00-2.88-3.13c.6-.7.93-1.84.93-2.61 0-1.18-.93-2.41-2.13-2.41-1.2 0-2.13 1.23-2.13 2.41 0 .77.33 1.92.94 2.61a4.04 4.04 0 00-2.85 3.13c-.1.64.61 1.06 1.07 1.28.9.42 1.94.56 2.92.57 1 0 2.04-.13 2.96-.53.49-.21 1.28-.64 1.17-1.32z"
    />
  </DocumentIconEmpty>
)

DocumentIconPerson.propTypes = {
  title: PropTypes.string,
}

DocumentIconPerson.defaultProps = {
  title: '',
}
