import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Text } from '../../../components/typography/text'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledInfoLines = styled.div`
  ${({ borderColor }) =>
    borderColor &&
    css`
      border-top: ${pxToRem(1)} solid ${borderColor};
      border-bottom: ${pxToRem(1)} solid ${borderColor};
    `}

  ${({ withBorderRadius }) =>
    withBorderRadius &&
    css`
      border-radius: ${pxToRem(8)};
    `}

  ${({ withLeftRightBorder, borderColor }) =>
    withLeftRightBorder &&
    borderColor &&
    css`
      border-left: ${pxToRem(1)} solid ${borderColor};
      border-right: ${pxToRem(1)} solid ${borderColor};
    `}

  ${({ withoutTopBottomBorder }) =>
    withoutTopBottomBorder &&
    css`
      border-top: none;
      border-bottom: none;
    `}

  ${({ withoutResponsive }) =>
    withoutResponsive &&
    css`
      ${StyledLine} {
        flex-direction: row;
      }
      ${StyledKey} {
        flex: auto;
      }
    `}
`

const StyledLine = styled.div`
  flex-direction: column;
  display: flex;
  padding: ${pxToRem(15)};

  ${({ borderColor }) =>
    borderColor &&
    css`
      :not(:last-child) {
        border-bottom: ${pxToRem(1)} solid ${borderColor};
      }
    `}

  @media (min-width: ${ScreenConfig.M.min}px) {
    flex-direction: unset;
  }
`

const StyledKey = styled(Text)`
  @media (min-width: ${ScreenConfig.M.min}px) {
    flex: auto;
  }
`

export class InfoLines extends PureComponent {
  render() {
    const {
      infos,
      withBorderRadius,
      withLeftRightBorder,
      withoutTopBottomBorder,
      withoutResponsive,
      borderColor,
      ...others
    } = this.props

    const InfoList = ({ title, value, id, ...others }) =>
      React.Children.toArray(
        <StyledLine {...others} borderColor={borderColor} key={id}>
          <StyledKey
            color="font1"
            size="default"
            weight="light"
            lineHeight="normal"
          >
            {title}
          </StyledKey>
          <Text color="font1" size="default" weight="light" lineHeight="normal">
            {value}
          </Text>
        </StyledLine>,
      )

    return (
      <StyledInfoLines
        {...others}
        borderColor={borderColor}
        withBorderRadius={withBorderRadius}
        withLeftRightBorder={withLeftRightBorder}
        withoutTopBottomBorder={withoutTopBottomBorder}
        withoutResponsive={withoutResponsive}
      >
        {infos.map(info => (
          <InfoList
            key={info.key}
            title={info.key}
            value={info.value}
            id={info.id}
          />
        ))}
      </StyledInfoLines>
    )
  }
}

InfoLines.propTypes = {
  infos: PropTypes.array.isRequired,
  borderColor: PropTypes.string,
  withBorderRadius: PropTypes.bool,
  withLeftRightBorder: PropTypes.bool,
  withoutTopBottomBorder: PropTypes.bool,
  withoutResponsive: PropTypes.bool,
}

InfoLines.defaultProps = {
  borderColor: '#eee',
  withBorderRadius: false,
  withLeftRightBorder: false,
  withoutTopBottomBorder: false,
  withoutResponsive: false,
}
