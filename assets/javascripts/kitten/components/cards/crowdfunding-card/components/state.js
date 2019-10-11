import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import COLORS from '../../../../constants/colors-config'
import { Text } from '../../../../components/typography/text'
import { pxToRem } from '../../../../helpers/utils/typography'
import { KissKissBankBankIcon } from '../../../../components/icons/kisskissbankbank-icon'
import { ScreenConfig } from '../../../../constants/screen-config'

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

const StyledTextWidget = styled(Text)`
  display: flex;
  align-items: center;
`

const StyledLogoWidget = styled(KissKissBankBankIcon)`
  margin-left: ${pxToRem(5)};
`

class State extends PureComponent {
  static propTypes = {
    state: PropTypes.string,
    stateWidget: PropTypes.string,
    loading: PropTypes.bool,
  }

  static defaultProps = {
    state: '',
    stateWidget: '',
    loading: false,
  }

  render() {
    const { state, stateWidget } = this.props

    return (
      <>
        {state && this.renderState()}
        {stateWidget && this.renderStateWidget()}
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

  renderStateWidget() {
    const { stateWidget, loading } = this.props

    return (
      <>
        {!loading && (
          <StyledWidgetContainer>
            <StyledTextWidget
              size="micro"
              lineHeight="normal"
              weight="regular"
              color="background1"
            >
              {stateWidget}
              <StyledLogoWidget width="80" />
            </StyledTextWidget>
          </StyledWidgetContainer>
        )}
      </>
    )
  }
}

export default State
