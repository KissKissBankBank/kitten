import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import COLORS from '../../../../constants/colors-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'
import { Text } from '../../../../components/typography/text'

const COMPONENT_GUTTER = pxToRem(10)

const StyledState = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-flex;
  align-items: center;
  background-color: ${COLORS.background1};
  padding: ${COMPONENT_GUTTER};
  line-height: 1;

  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    display: none;
  }
`

const StyledWidgetContainer = styled.div`
  display: flex;
  position: absolute;
  background: ${COLORS.font1};
  border-radius: ${pxToRem(25)};
  margin: ${pxToRem(10)} ${pxToRem(10)} 0 0;
  right: 0;
  top: 0;
  padding: ${pxToRem(10)} ${pxToRem(20)};
`

class State extends PureComponent {
  static propTypes = {
    state: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.node,
    ]),
    widgetState: PropTypes.node,
    loading: PropTypes.bool,
  }

  static defaultProps = {
    state: '',
    widgetState: '',
    loading: false,
  }

  render() {
    const { state, widgetState } = this.props

    return (
      <>
        {state && this.renderState()}
        {widgetState && this.renderWidgetState()}
      </>
    )
  }

  renderState() {
    const { state, loading } = this.props

    return (
      <>
        {!loading && (
          <StyledState>
            <Text
              size="micro"
              lineHeight="normal"
              weight="regular"
              color="font1"
            >
              {state}
            </Text>
          </StyledState>
        )}
      </>
    )
  }

  renderWidgetState() {
    const { widgetState, loading } = this.props

    return (
      <>
        {!loading && (
          <StyledWidgetContainer>{widgetState}</StyledWidgetContainer>
        )}
      </>
    )
  }
}

export default State
