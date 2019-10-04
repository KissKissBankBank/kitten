import React, { PureComponent } from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

const loadingKeyframes = keyframes`
  from { transform: translateX(-100%) }
  to { transform: translateX(100%) }
`

const StyledLoading = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateX(-100%);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0),
    rgba(255, 255, 255, 0.3),
    rgba(0, 0, 0, 0)
  );
  animation: x 1s linear infinite;
  animation-name: ${loadingKeyframes};
`

class Loading extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
  }

  static defaultProps = {
    loading: false,
  }

  render() {
    const { loading } = this.props

    if (!loading) return null

    return <StyledLoading loading={loading} />
  }
}

export default Loading
