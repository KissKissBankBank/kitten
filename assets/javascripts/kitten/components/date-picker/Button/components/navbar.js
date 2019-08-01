import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import { ArrowIcon } from '../../../../components/icons/arrow-icon'
import { Button } from '../../../../components/buttons/button/button'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Text } from '../../../../components/typography/text'

const StyledText = styled(Text)`
  margin-top: ${pxToRem(30)};
  font-weight: 500;
`

const StyledButton = styled.div`
  position: absolute;
  display: flex;
  align-content: flex-end;
`

const StyledArrowIcon = styled(Button)`
  align-items: center;
  justify-content: center;
  display: flex;
`

export class Navbar extends PureComponent {
  render() {
    const {
      onNextClick,
      onPreviousClick,
      className,
      iconColor,
      title,
      labels,
    } = this.props

    return (
      <>
        <StyledText as="p" size="tiny">
          {title}
        </StyledText>
        <StyledButton className={className}>
          <Button
            aria-label={labels.previoustMonth}
            onClick={() => onPreviousClick()}
            icon
            left
          >
            <ArrowIcon
              version="solid"
              fill={iconColor}
              direction="left"
              width="8"
              height="8"
            />
          </Button>

          <Button
            aria-label={labels.previoustMonth}
            onClick={() => onNextClick()}
            icon
          >
            <ArrowIcon
              version="solid"
              fill={iconColor}
              direction="right"
              width="8"
              height="8"
              right
            />
          </Button>
        </StyledButton>
      </>
    )
  }
}
