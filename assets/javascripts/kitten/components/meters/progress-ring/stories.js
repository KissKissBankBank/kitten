import React from 'react'
import styled from 'styled-components'
import { number, color, select } from '@storybook/addon-knobs'
import { ProgressRing } from './index'
import { Text } from '../../../components/typography/text'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { CheckedCircleIcon } from '../../../components/icons/checked-circle-icon'
import { RocketCircleIcon } from '../../../components/icons/rocket-circle-icon'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledContainer = styled.div`
  display: flex;
`

const StyledText = styled(Text)`
  margin-left: ${pxToRem(10)};
  align-self: center;
`

const StyledCheckedCircleIcon = styled(CheckedCircleIcon)`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
  }
`

const SuccessProgressRing = () => (
  <StyledCheckedCircleIcon
    aria-hidden
    circleColor={COLORS.valid}
    checkedColor={COLORS.background1}
  />
)

const OvertimeProgressRing = () => <RocketCircleIcon aria-hidden />

export default {
  component: ProgressRing,
  title: 'Meters/ProgressRing',
  parameters: {
    component: ProgressRing,
  },
  decorators: [
    Story => (
      <div className="story-Container story-Grid">
        <Story />
      </div>
    ),
  ],
}

export const DefaultProps = () => (
  <StyledContainer>
    <ProgressRing
      color={color('Color', COLORS.primary2)}
      value={number('Value', 50)}
      width={number('Width', 160)}
      strokeWidth={number('Stroke width', 10)}
      animationSpeed={number('speed', 3)}
      variant={select('variant', ['andromeda', 'orion'], 'andromeda')}
    />
    <StyledText size="micro" color="font1" weight="regular">
      Financé à 50%
    </StyledText>
  </StyledContainer>
)

export const SuccessProgress = () => (
  <StyledContainer>
    <SuccessProgressRing />
    <StyledText size="micro" color="font1" weight="regular">
      Projet réussi !
    </StyledText>
  </StyledContainer>
)

export const OvertimeProgress = () => (
  <StyledContainer>
    <OvertimeProgressRing />
    <StyledText size="micro" color="font1" weight="regular">
      Financé à 120% - en prolongation !
    </StyledText>
  </StyledContainer>
)
