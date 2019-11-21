import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import { ArrowIcon } from '../../../../components/icons/arrow-icon'
import { Button } from '../../../../components/buttons/button/button'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Text } from '../../../../components/typography/text'

const StyledText = styled(Text)`
  margin-top: 0;
  margin-bottom: ${pxToRem(10)};
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

    const previousAriaLabel =
      months !== undefined && months.length > 0
        ? `${labels && labels.previousMonth}, ${
            months[previousMonth.getMonth()]
          } ${previousMonth.getFullYear()}`
        : `${labels && labels.previousMonth}`

    const nextAriaLabel =
      months !== undefined && months.length > 0
        ? `${labels && labels.nextMonth}, ${
            months[nextMonth.getMonth()]
          } ${nextMonth.getFullYear()}`
        : `${labels && labels.nextMonth}`

    return (
      <>
        <StyledText tag="p" size="tiny" weight="regular">
          {title}
        </StyledText>
        <StyledButton className={className}>
          <StyledArrowIcon
            aria-label={previousAriaLabel}
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
            aria-label={nextAriaLabel}
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
