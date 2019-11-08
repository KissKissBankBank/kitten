import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import { Marger } from '../../../components/layout/marger'
import { CrossIcon } from '../../../components/icons/cross-icon'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { Title } from '../../../components/typography/title'
import { Text } from '../../../components/typography/text'
import { Paragraph } from '../../../components/typography/paragraph'
import { CONTAINER_PADDING_THIN } from '../../../constants/grid-config'
import { ScreenConfig } from '../../../constants/screen-config'
import { Button } from '../../../components/buttons/button/button'

const borderSize = 2

const tourFadeOut = () =>
  keyframes`
  0 {
    opacity: 1;
    visibility: visible;
  }
  99% {
    opacity: 0;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
`

const StyledLoudSpeaker = styled.div`
  display: block;
  margin: 0 auto;
`

const PopoverContainer = styled.div`
  padding: ${pxToRem(40)};
  display: flex;
  align-items: center;
  position: relative;
  border: solid ${COLORS.line1} ${pxToRem(borderSize)};
  box-sizing: border-box;
  max-width: ${pxToRem(555)};
  flex-basis: 100%;
  margin-bottom: ${pxToRem(CONTAINER_PADDING_THIN)};
  background-color: ${COLORS.background1};

  @media (min-width: ${ScreenConfig.S.min}px) {
    padding: ${pxToRem(50)} ${pxToRem(40)};
  }

  ${({ hide }) =>
    hide &&
    css`
      animation-name: ${tourFadeOut};
      animation-fill-mode: forwards;
      animation-duration: 0.5s;
      animation-timing-function: ease-in-quart;
    `}
`

const IconContainer = styled.div`
  display: none;
  min-width: ${pxToRem(80)};
  min-height: ${pxToRem(80)};
  margin-right: ${pxToRem(40)};
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};

  @media (min-width: ${ScreenConfig.S.min}px) {
    display: flex;
  }
`

const CrossIconButton = styled(Button)`
  position: absolute;
  top: -${pxToRem(borderSize)};
  right: -${pxToRem(borderSize)};
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
`

const ButtonsContainer = styled(Marger)`
  & > * + * {
    margin-top: ${pxToRem(20)};

    @media (min-width: ${ScreenConfig.S.min}px) {
      margin-top: 0;
      margin-left: ${pxToRem(20)};
    }
  }
`

export const SimplePopover = ({
  isVisible,
  onCloseClick,
  titleId,
  closeButtonLabel,
  title,
  content,
  illustration,
  illustrationBackground,
  buttons,
  ...simplePopoverProps
}) => (
  <PopoverContainer
    {...simplePopoverProps}
    role="dialog"
    aria-hidden={!isVisible}
    aria-labelledby={titleId}
    hide={!isVisible}
  >
    <CrossIconButton
      aria-label={closeButtonLabel}
      onClick={onCloseClick}
      type="button"
      modifier="beryllium"
      tiny
      icon
    >
      <CrossIcon aria-hidden width="8" height="8" fill={COLORS.background1} />
    </CrossIconButton>
    {illustration && (
      <IconContainer backgroundColor={illustrationBackground}>
        {illustration}
      </IconContainer>
    )}
    <div>
      <Marger bottom=".5">
        <Title id={titleId} modifier="senary" margin={false}>
          {title}
        </Title>
      </Marger>
      <Marger top=".5" bottom="1">
        <Paragraph modifier="quaternary">{content}</Paragraph>
      </Marger>
      {buttons.length > 0 && (
        <ButtonsContainer top="3">
          {buttons.map(({ label, clickOptions, ...buttonProps }, i) => {
            const clickHandler =
              clickOptions && clickOptions.closeOnClick && onCloseClick

            return (
              <Button
                onClick={clickHandler}
                key={i}
                children={label}
                {...buttonProps}
              />
            )
          })}
        </ButtonsContainer>
      )}
    </div>
  </PopoverContainer>
)

SimplePopover.defaultProps = {
  isVisible: true,
  onCloseClick: () => {},
  titleId: 'popover-title',
  closeButtonLabel: 'Close',
  title: '',
  content: '',
  illustration: null,
  illustrationBackground: COLORS.primary4,
  buttons: [],
}

SimplePopover.propTypes = {
  isVisible: PropTypes.bool,
  onCloseClick: PropTypes.func,
  titleId: PropTypes.string,
  closeButtonLabel: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  illustration: PropTypes.object,
  illustrationBackground: PropTypes.string,
  buttons: PropTypes.array,
}
