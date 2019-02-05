import React from 'react'
import styled from 'styled-components'
import { ScreenConfig } from '../../../constants/screen-config'
import StyledContainer from './styled'

export class Container extends React.PureComponent {
  render() {
    const { fullWidthBelowScreenSize, ...props } = this.props

    return (
      <StyledContainer
        fullWidthBelowScreenSize={fullWidthBelowScreenSize}
        {...props}
      />
    )
  }
}

Container.defaultProps = {
  fullWidthBelowScreenSize: null,
}
