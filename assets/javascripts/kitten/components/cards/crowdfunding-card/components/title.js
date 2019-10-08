import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Text } from '../../../../components/typography/text'
import { Title } from '../../../../components/typography/title'
import COLORS from '../../../../constants/colors-config'
import Truncate from 'react-truncate'

const COMPONENT_GUTTER = pxToRem(10)

const StyledTruncate = styled(Truncate)`
  white-space: nowrap;
`

const StyledTitle = styled.div`
  padding: 0 ${COMPONENT_GUTTER};
  line-height: 1;
  margin-bottom: ${pxToRem(10)};

  ${({ titlesMinHeight }) =>
    titlesMinHeight &&
    css`
      min-height: ${pxToRem(75)};
    `}
`

const StyledTitleLoading = styled.span`
  display: block;
  background-color: ${COLORS.line2};
  border-bottom: ${pxToRem(1)} solid ${COLORS.background1};
  height: ${pxToRem(24)};
`

const StyledTitleSmallLoading = styled(StyledTitleLoading)`
  width: 70%;
  border-top: ${pxToRem(1)} solid ${COLORS.background1};
  border-bottom: 0;
`

const StyledWidgetContainer = styled.div`
  display: flex;
`

const StyledCounterDay = styled.div`
  justify-content: flex-end;
`

class TitleComponent extends PureComponent {
  static propTypes = {
    cardTitle: PropTypes.string,
    titlesMinHeight: PropTypes.bool,
    titleTruncate: PropTypes.bool,
    loading: PropTypes.bool,
    widgetCardTitle: PropTypes.string,
    counterDay: PropTypes.string,
    stateDay: PropTypes.string,
  }

  static defaultProps = {
    cardTitle: '',
    titlesMinHeight: true,
    titleTruncate: true,
    loading: false,
    widgetCardTitle: '',
    counterDay: '',
    stateDay: '',
  }

  render() {
    const {
      cardTitle,
      titleTruncate,
      titlesMinHeight,
      titleProps,
      loading,
      widgetCardTitle,
      counterDay,
      stateDay,
    } = this.props

    return (
      <>
        {cardTitle && this.renderTitle()}
        {widgetCardTitle && this.renderWidgetTitle()}
      </>
    )
  }

  renderTitle() {
    const {
      loading,
      titleProps,
      titleTruncate,
      cardTitle,
      titlesMinHeight,
    } = this.props

    return (
      <StyledTitle titlesMinHeight={titlesMinHeight}>
        {!loading && (
          <Title
            tag="p"
            {...titleProps}
            modifier="senary"
            margin={false}
            className="k-Card__title"
          >
            {titleTruncate && (
              <StyledTruncate lines={2}>{cardTitle}</StyledTruncate>
            )}

            {!titleTruncate && cardTitle}
          </Title>
        )}

        {loading && (
          <>
            <StyledTitleLoading />
            <StyledTitleSmallLoading />
          </>
        )}
      </StyledTitle>
    )
  }

  renderWidgetTitle() {
    const {
      widgetCardTitle,
      counterDay,
      stateDay,
      titlesMinHeight,
    } = this.props

    return (
      <StyledWidgetContainer>
        <StyledTitle titlesMinHeight={titlesMinHeight}>
          <Text size="default" color="font1" weight="bold" lineHeight="normal">
            {widgetCardTitle}
          </Text>
        </StyledTitle>
        <StyledCounterDay>
          <Text size="tiny" color="font1" weight="bold" lineHeight="normal">
            {counterDay}
            <Text size="micro" color="font1" weight="light" lineHeight="normal">
              {stateDay}
            </Text>
          </Text>
        </StyledCounterDay>
      </StyledWidgetContainer>
    )
  }
}

export default TitleComponent
