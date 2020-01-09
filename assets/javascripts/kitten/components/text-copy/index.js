import React, { useRef, useCallback, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'
import TYPOGRAPHY from '../../constants/typography-config'
import COLORS from '../../constants/colors-config'
import { pxToRem, stepToRem } from '../../helpers/utils/typography'
import { CopyIcon } from '../icons/copy-icon'
import { ArrowContainer } from '../layout/arrow-container'
import { Text } from '../typography/text'
import { VisuallyHidden } from '../accessibility/visually-hidden'
import { modifierStyles } from '../../components/buttons/button/helpers/modifier-styles'

const StyledButton = styled(({ buttonModifier, ...others }) => (
  <button {...others} />
))`
  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${stepToRem(-1)};
  line-height: 1.3;
  flex: 1 0 auto;
  outline: none;
  appearance: none;
  cursor: pointer;
  padding: 0 ${pxToRem(30)};
  border-radius: 0;
  align-self: stretch;
  box-sizing: border-box;

  ${({ buttonModifier }) => modifierStyles(buttonModifier)};
`

const fadeInAndOut = keyframes`
  0%, 100% {
   opacity: 0;
  }
  10%, 90% {
    opacity: 1;
  }
`

const Wrapper = styled(({ buttonText, ...others }) => <div {...others} />)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ buttonText }) =>
    !buttonText &&
    css`
      border: ${pxToRem(2)} solid ${COLORS.line1};
      background-color: ${COLORS.background1};
    `}
`

const StyledText = styled(
  ({ buttonText, forceOneLine, className, children, ...others }) => (
    <Text className={className} {...others}>
      {children}
    </Text>
  ),
)`
  padding: ${pxToRem(10)} ${pxToRem(15)};
  width: 100%;

  ${({ buttonText }) =>
    buttonText &&
    css`
      border: ${pxToRem(2)} solid ${COLORS.line1};
      background-color: ${COLORS.background1};
      border-right: 0;
    `}

  ${({ forceOneLine }) =>
    forceOneLine &&
    css`
      overflow: hidden;
      white-space: nowrap;
    `}
`

const IconWrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: ${pxToRem(10)};
  border-left: ${pxToRem(2)} solid ${COLORS.line1};
  align-self: stretch;
  box-sizing: border-box;
`

const StyledArrowContainer = styled(ArrowContainer)`
  position: absolute;
  left: 0;
  bottom: -${pxToRem(50)};
  animation: 3s ${fadeInAndOut} ease-out;
`

export const TextCopy = ({
  children,
  textToCopy,
  alertMessage,
  description,
  forceOneLine,
  buttonText,
  buttonModifier,
}) => {
  const [shouldShowMessage, isMessageShown] = useState(false)
  const textRef = useRef(null)
  const selectText = useCallback(() => {
    const range = document.createRange()
    range.selectNode(textRef.current)
    window.getSelection().addRange(range)
  })
  useEffect(() => {
    let hideTimeout
    if (shouldShowMessage) {
      hideTimeout = setTimeout(() => isMessageShown(false), 3000)
    }
    return () => clearTimeout(hideTimeout)
  }, [shouldShowMessage])
  const copyText = useCallback(() => {
    isMessageShown(false)
    if (textToCopy) {
      const el = document.createElement('textarea')
      el.value = textToCopy
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      const range = document.createRange()
      range.selectNode(textRef.current)
      window.getSelection().addRange(range)
    } else {
      selectText()
      document.execCommand('copy')
    }
    setTimeout(() => isMessageShown(true), 1)
  })

  const Action = ({
    copyText,
    buttonText,
    buttonModifier,
    buttonProps,
    ...others
  }) => (
    <>
      {!buttonText && (
        <IconWrapper aria-hidden={true} onClick={copyText}>
          <CopyIcon />
        </IconWrapper>
      )}

      {buttonText && (
        <StyledButton
          type="button"
          buttonModifier={buttonModifier}
          onClick={copyText}
          aria-label={copyText}
          {...buttonProps}
        >
          {buttonText}
        </StyledButton>
      )}
    </>
  )

  return (
    <>
      <Wrapper buttonText={buttonText}>
        {description && <VisuallyHidden>{description}</VisuallyHidden>}
        <StyledText
          weight="light"
          size="micro"
          lineHeight="normal"
          forceOneLine={forceOneLine}
          onClick={selectText}
          buttonText={buttonText}
        >
          <span ref={textRef}>{children}</span>
        </StyledText>

        <Action
          copyText={copyText}
          buttonText={buttonText}
          buttonModifier={buttonModifier}
        />

        {alertMessage && shouldShowMessage && (
          <StyledArrowContainer
            color={COLORS.primary1}
            position="top"
            padding={10}
            centered
            role="alert"
          >
            <Text color="background1" weight="light" size="micro">
              {alertMessage}
            </Text>
          </StyledArrowContainer>
        )}
      </Wrapper>
    </>
  )
}

TextCopy.propTypes = {
  alertMessage: PropTypes.string,
  textToCopy: PropTypes.string,
  description: PropTypes.string,
  forceOneLine: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonModifier: PropTypes.string,
}

TextCopy.defaultProps = {
  alertMessage: undefined,
  textToCopy: undefined,
  description: undefined,
  forceOneLine: false,
  buttonText: undefined,
  buttonModifier: 'helium',
}
