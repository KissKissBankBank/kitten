import React, { useRef, useCallback, useState, useEffect } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { mq } from '../../../constants/screen-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { CopyIcon } from '../../graphics/icons/copy-icon'
import { ArrowContainer } from '../../information/boxes/arrow-container'
import { Text } from '../../typography/text'
import { VisuallyHidden } from '../../accessibility/visually-hidden'
import { TextInput } from '../../form/input/text-input'

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
  width: 100%;

  .k-TextInput__wrapper {
    .k-TextInput {
      --text-input-height: auto;
      line-height: 1.15;
      display: flex;
      align-items: center;
    }

    @media ${mq.mobile} {
      flex-direction: column;
    }
  }

  .k-TextCopy__tooltip {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -${pxToRem(50)};
    animation: 3s ${fadeInAndOut} ease-out;
  }

  &:hover {
    .k-TextInput {
      border: var(--border-hover);
    }
    .k-Button {
      border-color: var(--color-primary-700);
      background-color: var(--color-primary-700);
    }
  }

  &:active {
    .k-TextInput {
      border: var(--border-active);
    }
    .k-Button {
      border-color: var(--color-primary-900);
      background-color: var(--color-primary-900);
    }
  }
`

export const TextCopy = ({
  id,
  children,
  textToCopy,
  alertMessage,
  description,
  forceOneLine,
  buttonText,
  buttonModifier,
  size,
  className,
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
    return navigator.clipboard.writeText(text)
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
      className={classNames('k-TextCopy', 'k-u-reset-button', className)}
      type="button"
      onClick={copyText}
    >
      {description && <VisuallyHidden>{description}</VisuallyHidden>}
      <TextInput
        id={id}
        tag="div"
        className={classNames('k-TextCopy__text', 'k-u-reset-button', {
          'k-TextCopy__text--forceOneLine': forceOneLine,
        })}
        size={size}
        has="button"
        buttonProps={{
          as: 'span',
          modifier: !!buttonText ? buttonModifier : 'hydrogen',
          className: 'k-TextCopy__button',
          fit: buttonText ? 'content' : 'icon',
          children: !!buttonText ? buttonText : <CopyIcon />,
        }}
      >
        <span
          ref={textElement}
          className={classNames({
            'k-u-clamp-1': forceOneLine,
          })}
        >
          {children}
        </span>
      </TextInput>

      {alertMessage && isMessageVisible && (
        <ArrowContainer
          color={COLORS.primary1}
          position="top"
          padding={10}
          centered
          role="alert"
          className="k-TextCopy__tooltip"
          borderRadius="var(--border-radius-s)"
        >
          <Text color="background1" weight="400" size="micro">
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
  size: PropTypes.oneOf(['small', 'medium', 'large', 'huge', 'giant']),
}

TextCopy.defaultProps = {
  id: 'TextCopy',
  alertMessage: undefined,
  textToCopy: undefined,
  description: undefined,
  forceOneLine: false,
  buttonText: undefined,
  buttonModifier: 'helium',
  size: 'medium',
}
