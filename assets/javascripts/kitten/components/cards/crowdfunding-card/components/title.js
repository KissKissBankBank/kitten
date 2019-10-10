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
  line-height: 1;
`

class TitleComponent extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    titleTruncate: PropTypes.bool,
    loading: PropTypes.bool,
    titleWidget: PropTypes.string,
    counterDay: PropTypes.string,
    stateDay: PropTypes.string,
  }

  static defaultProps = {
    title: '',
    titleTruncate: true,
    loading: false,
    titleWidget: '',
    counterDay: '',
    stateDay: '',
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
          <Title
            tag="p"
            {...titleProps}
            modifier="senary"
            margin={false}
            className="k-Card__title"
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

  renderTitleWidget() {
    const {
      titleWidget,
      counterDay,
      stateDay,
      loading,
      titleTruncate,
    } = this.props

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
                {titleTruncate && (
                  <StyledTruncate lines={2}>{titleWidget}</StyledTruncate>
                )}

                {!titleTruncate && titleWidget}
              </Text>
            )}
          </StyledTitle>

          {!loading && (
            <StyledCounterDay>
              <Text size="tiny" color="font1" weight="bold" lineHeight="normal">
                {counterDay}
                <Text
                  size="micro"
                  color="font1"
                  weight="light"
                  lineHeight="normal"
                  style={{ display: 'block' }}
                >
                  {stateDay}
                </Text>
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
