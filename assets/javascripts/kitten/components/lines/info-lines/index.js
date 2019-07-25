import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledInfoLines = styled.div`
  border-top: ${pxToRem(1)} solid ${COLORS.line1};

  ${({ borderColor }) =>
    borderColor &&
    css`
      border-color: ${borderColor};
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
      border-left: ${pxToRem(1)} solid ${COLORS.line1};
      border-right: ${pxToRem(1)} solid ${COLORS.line1};

      border-color: ${borderColor};
    `}

  ${({ withoutTopBottomBorder }) =>
    withoutTopBottomBorder &&
    css`
      border-top: none;

      &:last-child {
        border-bottom: none;
      }
    `}

    ${({ withoutResponsive }) =>
      withoutResponsive &&
      css`
        @media (min-width: ${ScreenConfig.M.min}px) {
          flex-direction: row;
        }
      `}
`

const StyledLine = styled.div`
  flex-direction: column;
  display: flex;
  padding: ${pxToRem(15)};
  border-bottom: ${pxToRem(1)} solid ${COLORS.line1};

  ${({ borderColor }) =>
    borderColor &&
    css`
      border-color: ${borderColor};
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

    const InfoList = ({ key, value, ...others }) =>
      React.Children.toArray(
        <StyledLine {...others} borderColor={borderColor} key={id}>
          <div>{key}</div>
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
          <InfoList key={info.key} value={info.value} id={info.id} />
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
  borderColor: null,
  infos: [], // Eg: [{ key: …, value: …, id: … }]
  withBorderRadius: false,
  withLeftRightBorder: false,
  withoutTopBottomBorder: false,
  withoutResponsive: false,
}
