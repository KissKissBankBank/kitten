import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledInfoLines = styled.div`
  ${({ borderColor }) =>
    borderColor &&
    css`
      border-top: ${pxToRem(1)} solid ${borderColor};
      border-bottom: ${pxToRem(1)} solid ${borderColor};

      & > * + * {
        border-top: ${pxToRem(1)} solid ${borderColor};
      }
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

  @media (min-width: ${ScreenConfig.M.min}px) {
    flex-direction: row;
  }
`

const StyledKey = styled.span`
  @media (min-width: ${ScreenConfig.M.min}px) {
    flex: auto;
  }
`
const StyledValue = styled.span`
  margin: ${pxToRem(0)};
`

const InfoList = ({
  title,
  value,
  id,
  titleTagList,
  itemTagList,
  ...others
}) => {
  return React.Children.toArray(
    <StyledLine {...others} key={id}>
      <StyledKey as={titleTagList}>{title}</StyledKey>
      <StyledValue as={itemTagList}>{value}</StyledValue>
    </StyledLine>,
  )
}

export class InfoLines extends PureComponent {
  render() {
    const {
      infos,
      withBorderRadius,
      withLeftRightBorder,
      withoutTopBottomBorder,
      withoutResponsive,
      borderColor,
      descriptionTagList,
      titleTagList,
      itemTagList,
      ...others
    } = this.props

    return (
      <StyledInfoLines
        {...others}
        as={descriptionTagList}
        borderColor={borderColor}
        withBorderRadius={withBorderRadius}
        withLeftRightBorder={withLeftRightBorder}
        withoutTopBottomBorder={withoutTopBottomBorder}
        withoutResponsive={withoutResponsive}
      >
        {infos.map(info => (
          <InfoList
            key={info.id}
            title={info.key}
            value={info.value}
            id={info.id}
            titleTagList={titleTagList}
            itemTagList={itemTagList}
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
  descriptionTagList: PropTypes.string,
  titleTagList: PropTypes.string,
  itemTagList: PropTypes.string,
}

InfoLines.defaultProps = {
  borderColor: '#eee',
  withBorderRadius: false,
  withLeftRightBorder: false,
  withoutTopBottomBorder: false,
  withoutResponsive: false,
  descriptionTagList: 'dl',
  titleTagList: 'dt',
  itemTagList: 'dd',
}
