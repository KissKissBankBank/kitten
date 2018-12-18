import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { ScreenConfig } from '../../constants/screen-config'
import BaseStyledContainer from '../styled/grid/container'

const containerMediaQuery = props => {
  if (!props.fullWidthBelowScreenSize) return null

  const breakpoint = ScreenConfig[props.fullWidthBelowScreenSize].max

  return `@media (max-width: ${breakpoint}px) {
    padding-right: 0;
    padding-left: 0;
  }`
}

const StyledContainer = styled(BaseStyledContainer)`
  ${containerMediaQuery}
`

export class Container extends React.PureComponent {
  render() {
    return <StyledContainer {...this.props} />
  }
}

Container.defaultProps = {
  fullWidthBelowScreenSize: null,
}
