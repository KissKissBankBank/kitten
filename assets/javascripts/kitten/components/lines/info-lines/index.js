import React, { PureComponent, Fragment } from 'react'
import styled, { css } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledInfoLines = styled.div`
  border-top: ${pxToRem(1)} solid ${COLORS.line1};

  ${({ withBorderRadius }) =>
    withBorderRadius &&
    css`
      border-radius: ${pxToRem(8)};
    `}

  ${({ withLeftRightBorder }) =>
    withLeftRightBorder &&
    css`
      border-left: ${pxToRem(1)} solid ${COLORS.line1};
      border-right: ${pxToRem(1)} solid ${COLORS.line1};
    `}

  ${({ withoutResponsive }) =>
    withoutResponsive &&
    css`
      @media (min-width: ${ScreenConfig.M.min}px) {
        flex-direction: row;
      }
    `}

  ${({ withoutTopBottomBorder }) =>
    withoutTopBottomBorder &&
    css`
      border-top: none;

      &:last-child {
        border-bottom: none;
      }
    `}
`

const StyledLine = styled.div`
  display: flex;
  padding: ${pxToRem(15)};
  border-bottom: ${pxToRem(1)} solid ${COLORS.line1};

  @media (min-width: ${ScreenConfig.M.min}px) {
    flex-direction: column;
  }
`

const StyledValue = styled.div`
  @media (min-width: ${ScreenConfig.M.min}px) {
    margin-left: auto;
    text-align: right;
  }
`

export class InfoLines extends PureComponent {
  render() {
    const {
      borderColor,
      infos,
      withBorderRadius,
      withLeftRightBorder,
      withoutResponsive,
      withoutTopBottomBorder,
      children,
      id,
      key,
      value,
      ...others
    } = this.props

    const InfoList = ({ borderColor, key, value, ...others }) =>
      React.Children.toArray(
        <StyledLine {...others} borderColor={borderColor} key={id}>
          <div>{key}</div>
          <StyledValue>{value}</StyledValue>
        </StyledLine>,
      )

    console.log(<InfoList />, InfoList)

    return (
      <StyledInfoLines
        {...others}
        borderColor={borderColor}
        withBorderRadius={withBorderRadius}
        withLeftRightBorder={withLeftRightBorder}
        withoutResponsive={withoutResponsive}
        withoutTopBottomBorder={withoutTopBottomBorder}
      >
        {infos.map(info => (
          <InfoList id={info.id} key={info.key} value={info.value} />
        ))}
      </StyledInfoLines>
    )
  }
}

InfoLines.defaultProps = {
  borderColor: null,
  className: null,
  infos: [], // Eg: [{ key: …, value: …, id: … }]
  withBorderRadius: false,
  withLeftRightBorder: false,
  withoutResponsive: false,
  withoutTopBottomBorder: false,
}
