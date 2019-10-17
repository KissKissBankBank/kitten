import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import COLORS from '../../../../constants/colors-config'
import { Text } from '../../../../components/typography/text'
import { pxToRem } from '../../../../helpers/utils/typography'
import { KissKissBankBankIcon } from '../../../../components/icons/kisskissbankbank-icon'

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

const StyledWidgetText = styled(Text)`
  display: flex;
  align-items: center;
`

const StyledWidgetLogo = styled(KissKissBankBankIcon)`
  margin-left: ${pxToRem(5)};
`

class State extends PureComponent {
  static propTypes = {
    state: PropTypes.string,
    widgetState: PropTypes.string,
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
          <StyledWidgetContainer>
            <StyledWidgetText
              size="micro"
              lineHeight="normal"
              weight="regular"
              color="background1"
            >
              {widgetState}
              <StyledWidgetLogo width="80" />
            </StyledWidgetText>
          </StyledWidgetContainer>
        )}
      </>
    )
  }
}

export default State
