import React, { useRef, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'
import COLORS from '../../constants/colors-config'
import { pxToRem } from '../../helpers/utils/typography'
import { CopyIcon } from '../icons/copy-icon'
import { ArrowContainer } from '../layout/arrow-container'
import { Text } from '../typography/text'
import { VisuallyHidden } from '../accessibility/visually-hidden'

const fadeIn = keyframes`
  0% {
   opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${pxToRem(2)} solid ${COLORS.line1};
  background-color: ${COLORS.background1};
`

const StyledText = styled(({ className, children, ...others }) => (
  <Text className={className} {...others}>
    {children}
  </Text>
))`
  padding: ${pxToRem(10)} ${pxToRem(15)};
  width: 100%;
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
  animation: 0.5s ${fadeIn} ease-out;
`

export const TextCopy = ({
  children,
  textToCopy,
  alertMessage,
  description,
  forceOneLine,
}) => {
  const [shouldShowMessage, isMessageShown] = useState(false)
  const textRef = useRef(null)
  const selectText = useCallback(() => {
    const range = document.createRange()
    range.selectNode(textRef.current)
    window.getSelection().addRange(range)
  })
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
  return (
    <>
      <Wrapper>
        {description && <VisuallyHidden>{description}</VisuallyHidden>}
        <StyledText
          weight="light"
          size="default"
          forceOneLine={forceOneLine}
          onClick={selectText}
        >
          <span ref={textRef}>{children}</span>
        </StyledText>
        <IconWrapper aria-hidden={true} onClick={copyText}>
          <CopyIcon />
        </IconWrapper>
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
}

TextCopy.defaultProps = {
  alertMessage: undefined,
  textToCopy: undefined,
  description: undefined,
  forceOneLine: false,
}
