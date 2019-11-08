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
  flex: 1;
  padding: 0 ${COMPONENT_GUTTER};
  line-height: 1;
`

const StyledWidgetTitle = styled(StyledTitle)`
  padding: 0;
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

const StyledDayCounter = styled.div`
  line-height: 1;
  margin-left: calc(2 * ${COMPONENT_GUTTER});
`

const StyledStateDay = styled(Text)`
  display: flex;
`

class TitleComponent extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    titleTruncate: PropTypes.bool,
    loading: PropTypes.bool,
    widgetTitle: PropTypes.string,
    dayCounter: PropTypes.element,
    stateDay: PropTypes.string,
    titleProps: PropTypes.shape(),
  }

  static defaultProps = {
    title: '',
    titleTruncate: true,
    loading: false,
    widgetTitle: '',
    dayCounter: null,
    stateDay: '',
    titleProps: {},
  }

  render() {
    const {
      title,
      titleTruncate,
      titleProps,
      loading,
      widgetTitle,
      dayCounter,
      stateDay,
    } = this.props

    return (
      <>
        {title && this.renderTitle()}
        {widgetTitle && this.renderWidgetTitle()}
      </>
    )
  }

  renderTitle() {
    const { loading, titleProps, titleTruncate, title } = this.props

    return (
      <StyledTitle>
        {!loading && (
          <Title
            tag="p"
            modifier="senary"
            margin={false}
            className="k-Card__title"
            {...titleProps}
          >
            {titleTruncate && (
              <StyledTruncate lines={2}>{title}</StyledTruncate>
            )}

            {!titleTruncate && title}
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
      widgetTitle,
      dayCounter,
      stateDay,
      loading,
      titleTruncate,
    } = this.props

    return (
      <>
        <StyledWidgetContainer>
          <StyledWidgetTitle>
            {!loading && (
              <Text
                tag="span"
                color="font1"
                size="default"
                weight="bold"
                lineHeight="normal"
                className="k-Card__title"
              >
                {titleTruncate && <Truncate lines={2}>{widgetTitle}</Truncate>}

                {!titleTruncate && widgetTitle}
              </Text>
            )}
          </StyledWidgetTitle>

          {!loading && (
            <StyledDayCounter>
              <Text size="tiny" color="font1" weight="bold" lineHeight="normal">
                {dayCounter}
                <StyledStateDay
                  size="micro"
                  color="font1"
                  weight="light"
                  lineHeight="normal"
                >
                  {stateDay}
                </StyledStateDay>
              </Text>
            </StyledDayCounter>
          )}
        </StyledWidgetContainer>

        {loading && (
          <>
            <StyledTitleLoading />
            <StyledTitleSmallLoading />
          </>
        )}
      </>
    )
  }
}

export default TitleComponent
