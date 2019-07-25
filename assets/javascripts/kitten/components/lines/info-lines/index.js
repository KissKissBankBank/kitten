import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
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
      ${StyledValue} {
        margin-left: auto;
        text-align: right;
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

const StyledValue = styled.div`
  @media (min-width: ${ScreenConfig.M.min}px) {
    margin-left: auto;
    text-align: right;
  }
`

export class InfoLines extends PureComponent {
  render() {
    const {
      id,
      infos,
      withBorderRadius,
      withLeftRightBorder,
      withoutTopBottomBorder,
      withoutResponsive,
      borderColor,
      ...others
    } = this.props

    const InfoList = ({ number, value, ...others }) =>
      React.Children.toArray(
        <StyledLine {...others} borderColor={borderColor} key={id}>
          <div>{number}</div>
          <StyledValue>{value}</StyledValue>
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
          <InfoList number={info.number} value={info.value} id={info.id} />
        ))}
      </StyledInfoLines>
    )
  }
}

InfoLines.PropTypes = {
  borderColor: PropTypes.string,
  id: PropTypes.string.isRequired,
  infos: PropTypes.array.isRequired,
  withBorderRadius: PropTypes.bool,
  withLeftRightBorder: PropTypes.bool,
  withoutTopBottomBorder: PropTypes.bool,
  withoutResponsive: PropTypes.bool,
}

InfoLines.defaultProps = {
  borderColor: '#eee',
  infos: [], // Eg: [{ key: …, value: …, id: … }]
  withBorderRadius: false,
  withLeftRightBorder: false,
  withoutTopBottomBorder: false,
  withoutResponsive: false,
}
