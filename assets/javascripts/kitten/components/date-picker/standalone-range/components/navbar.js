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
  justify-content: space-between;
  left: 0;
  right: 0;
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
      previousMonth,
      nextMonth,
      months,
    } = this.props

    return (
      <>
        <StyledText as="p" size="tiny">
          {title}
        </StyledText>
        <StyledButton className={className}>
          <StyledArrowIcon
            aria-label={`${labels.previousMonth}, ${
              months[previousMonth.getMonth()]
            } ${previousMonth.getFullYear()}`}
            onClick={() => onPreviousClick()}
            icon
          >
            <ArrowIcon
              version="solid"
              fill={iconColor}
              direction="left"
              width="8"
              height="8"
            />
          </StyledArrowIcon>

          <StyledArrowIcon
            aria-label={`${labels.nextMonth}, ${
              months[nextMonth.getMonth()]
            } ${nextMonth.getFullYear()}`}
            onClick={() => onNextClick()}
            icon
          >
            <ArrowIcon
              version="solid"
              fill={iconColor}
              direction="right"
              width="8"
              height="8"
            />
          </StyledArrowIcon>
        </StyledButton>
      </>
    )
  }
}
