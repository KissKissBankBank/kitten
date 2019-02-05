import React from 'react'
import PropTypes from 'prop-types'
import StyledContainer from './styled'

export class Container extends React.PureComponent {
  render() {
    return <StyledContainer {...this.props} />
  }
}

Container.defaultProps = {
  fullWidthBelowScreenSize: null,
}

Container.propTypes = {
  fullWidthBelowScreenSize: PropTypes.oneOf(['XXS', 'XS', 'S', 'M', 'L', 'XL']),
}
