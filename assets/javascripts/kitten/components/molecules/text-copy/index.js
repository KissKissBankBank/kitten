import React, { useRef, useCallback, useState, useEffect } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { ScreenConfig } from '../../../constants/screen-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { CopyIcon } from '../../graphics/icons/copy-icon'
import { ArrowContainer } from '../../molecules/boxes/arrow-container'
import { Text } from '../../atoms/typography/text'
import { VisuallyHidden } from '../../accessibility/visually-hidden'
import { Button } from '../../molecules/buttons/button'
import { TextInput } from '../../form/text-input'

const fadeInAndOut = keyframes`
  0%, 100% {
   opacity: 0;
  }
  10%, 90% {
    opacity: 1;
  }
`

const Wrapper = styled.button`
  position: relative;
  display: flex;
  width: 100%;

  .k-TextCopy__text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    line-height: calc(1.15 * ${stepToRem(-1)});
    text-align: left;
    overflow: hidden;

    span {
      max-width: 100%;
      max-height: calc(2 * 1.15 * ${stepToRem(-1)});
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &.k-TextCopy__text--forceOneLine span {
      white-space: nowrap;
    }
  }

  .k-TextCopy__buttonTextButton {
    min-width: 0;
    flex: 1 0 auto;
    padding: 0 ${pxToRem(15)};
    align-self: stretch;
    box-sizing: border-box;
  }

  .k-TextCopy__iconButton {
    display: flex;
    cursor: pointer;
    align-items: center;
    padding: ${pxToRem(10)};
    border: ${pxToRem(2)} solid ${COLORS.line1};
    align-self: stretch;
    box-sizing: border-box;
  }

  .k-TextCopy__tooltip {
    position: absolute;
    left: 0;
    bottom: -${pxToRem(50)};
    animation: 3s ${fadeInAndOut} ease-out;
  }

  &.k-TextCopy--andromeda {
    .k-TextCopy__text {
      border-right: 0;
    }
  }

  &.k-TextCopy--orion {
    gap: ${pxToRem(5)};

    &:hover {
      .k-Button {
        border-color: ${COLORS.primary2};
        background-color: ${COLORS.primary2};
      }
    }

    &:active {
      .k-Button {
        border-color: ${COLORS.primary3};
        background-color: ${COLORS.primary3};
      }
    }

    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      flex-direction: column;
    }

    .k-Button.k-Button--orion {
      border-radius: ${pxToRem(4)};
    }
  }
`

export const TextCopy = ({
  children,
  textToCopy,
  alertMessage,
  description,
  forceOneLine,
  buttonText,
  buttonModifier,
  variant,
}) => {
  const [isMessageVisible, setMessageVisibility] = useState(false)
  const textElement = useRef(null)

  useEffect(() => {
    let hideTimeout
    if (isMessageVisible) {
      hideTimeout = setTimeout(() => setMessageVisibility(false), 3000)
    }
    return () => clearTimeout(hideTimeout)
  }, [isMessageVisible])

  const copyToClipboard = text => {
    if (!navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text)
    } else {
      // IE11
      const hiddenElement = document.createElement('textarea')
      hiddenElement.style.position = 'absolute'
      hiddenElement.style.opacity = 0
      hiddenElement.value = text
      document.body.appendChild(hiddenElement)
      hiddenElement.select()
      return new Promise((res, rej) => {
        document.execCommand('copy') ? res() : rej()
        document.body.removeChild(hiddenElement)
      })
    }
  }

  const copyText = useCallback(() => {
    setMessageVisibility(false)

    const copyableText = textToCopy || textElement?.current?.innerText || ''

    copyToClipboard(copyableText).then(() => {
      setTimeout(() => setMessageVisibility(true), 1)
    })

    const range = document.createRange()
    range.selectNode(textElement.current)
    window.getSelection().addRange(range)
  })

  return (
    <Wrapper
      className={classNames(
        'k-TextCopy',
        'k-u-reset-button',
        `k-TextCopy--${variant}`,
      )}
      type="button"
      onClick={copyText}
    >
      {description && <VisuallyHidden>{description}</VisuallyHidden>}
      <TextInput
        as="div"
        className={classNames('k-TextCopy__text', 'k-u-reset-button', {
          'k-TextCopy__text--forceOneLine': forceOneLine,
        })}
        variant={variant}
      >
        <span ref={textElement}>{children}</span>
      </TextInput>

      <Button
        as="span"
        modifier={!!buttonText ? buttonModifier : 'hydrogen'}
        className="k-TextCopy__buttonTextButton"
        variant={variant}
        icon={!buttonText}
      >
        {!!buttonText ? buttonText : <CopyIcon />}
      </Button>

      {alertMessage && isMessageVisible && (
        <ArrowContainer
          color={COLORS.primary1}
          position="top"
          padding={10}
          centered
          role="alert"
          className="k-TextCopy__tooltip"
        >
          <Text color="background1" weight="light" size="micro">
            {alertMessage}
          </Text>
        </ArrowContainer>
      )}
    </Wrapper>
  )
}

TextCopy.propTypes = {
  alertMessage: PropTypes.string,
  textToCopy: PropTypes.string,
  description: PropTypes.string,
  forceOneLine: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonModifier: PropTypes.string,
  variant: PropTypes.oneOf(['andromeda', 'orion']),
}

TextCopy.defaultProps = {
  alertMessage: undefined,
  textToCopy: undefined,
  description: undefined,
  forceOneLine: false,
  buttonText: undefined,
  buttonModifier: 'helium',
  variant: 'orion',
}
