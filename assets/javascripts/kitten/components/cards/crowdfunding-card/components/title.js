import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { Text } from '../../../../components/typography/text'
import { Title } from '../../../../components/typography/title'
import COLORS from '../../../../constants/colors-config'
import Truncate from 'react-truncate'
import { ScreenConfig } from '../../../../constants/screen-config'

const COMPONENT_GUTTER = pxToRem(10)

const StyledTruncate = styled(Truncate)`
  white-space: nowrap;
`

const StyledTitle = styled.div`
  flex: 1;
  padding: 0 ${COMPONENT_GUTTER};
  line-height: 1;
`

const StyledTitleCustom = styled(Title)`
  font-size: ${stepToRem(-1)};
  margin-top: ${pxToRem(10)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    font-size: ${stepToRem(2)};
  }
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
  line-height: 1;
  margin-left: calc(4 * ${COMPONENT_GUTTER});
`

const StyledStateDay = styled(Text)`
  display: flex;
`

class TitleComponent extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    titleTruncate: PropTypes.bool,
    loading: PropTypes.bool,
    titleWidget: PropTypes.string,
    counterDay: PropTypes.string,
    stateDay: PropTypes.string,
    titleProps: PropTypes.shape(),
  }

  static defaultProps = {
    title: '',
    titleTruncate: true,
    loading: false,
    titleWidget: '',
    counterDay: '',
    stateDay: '',
    titleProps: {},
  }

  render() {
    const {
      title,
      titleTruncate,
      titleProps,
      loading,
      titleWidget,
      counterDay,
      stateDay,
    } = this.props

    return (
      <>
        {title && this.renderTitle()}
        {titleWidget && this.renderTitleWidget()}
      </>
    )
  }

  renderTitle() {
    const { loading, titleProps, titleTruncate, title } = this.props

    return (
      <StyledTitle>
        {!loading && (
          <StyledTitleCustom
            tag="p"
            margin={false}
            className="k-Card__title"
            {...titleProps}
          >
            {titleTruncate && (
              <StyledTruncate lines={2}>{title}</StyledTruncate>
            )}

            {!titleTruncate && title}
          </StyledTitleCustom>
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

  renderTitleWidget() {
    const { titleWidget, counterDay, stateDay, loading } = this.props

    return (
      <>
        <StyledWidgetContainer>
          <StyledTitle>
            {!loading && (
              <Text
                tag="span"
                color="font1"
                size="default"
                weight="bold"
                lineHeight="normal"
                className="k-Card__title"
              >
                {titleWidget}
              </Text>
            )}
          </StyledTitle>

          {!loading && (
            <StyledCounterDay>
              <Text size="tiny" color="font1" weight="bold" lineHeight="normal">
                {counterDay}
                <StyledStateDay
                  size="micro"
                  color="font1"
                  weight="light"
                  lineHeight="normal"
                >
                  {stateDay}
                </StyledStateDay>
              </Text>
            </StyledCounterDay>
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
