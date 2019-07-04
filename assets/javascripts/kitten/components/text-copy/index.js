import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLORS from '../../constants/colors-config'
import { pxToRem } from '../../helpers/utils/typography'
import { CopyIcon } from '../icons/copy-icon'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${pxToRem(2)} solid ${COLORS.line1};
  background-color: ${COLORS.background1};
  cursor: pointer;
`

const StyledText = styled.div`
  padding: ${pxToRem(10)} ${pxToRem(15)};
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${pxToRem(10)};
  border-left: ${pxToRem(2)} solid ${COLORS.line1};
  align-self: stretch;
  box-sizing: border-box;
`

export const TextCopy = ({ children, textToCopy }) => {
  const textRef = useRef(null)
  return (
    <Wrapper
      onClick={() => {
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
          const range = document.createRange()
          range.selectNode(textRef.current)
          window.getSelection().addRange(range)
          document.execCommand('copy')
        }
      }}
    >
      <StyledText ref={textRef}>{children}</StyledText>
      <IconWrapper aria-hidden={true}>
        <CopyIcon />
      </IconWrapper>
    </Wrapper>
  )
}

TextCopy.propTypes = {
  textToCopy: PropTypes.string,
}

TextCopy.defaultProps = {
  textToCopy: undefined,
}
