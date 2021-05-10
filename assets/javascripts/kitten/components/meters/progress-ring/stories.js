import React from 'react'
import styled from 'styled-components'
import { number, color, select } from '@storybook/addon-knobs'
import { ProgressRing } from './index'
import { Marger } from '../../structure/marger'
import { Container } from '../../structure/container'
import { Text } from '../../../components/atoms/typography/text'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { CheckedCircleIcon } from '../../../components/graphics/icons/checked-circle-icon'
import { RocketCircleIcon } from '../../../components/graphics/icons/rocket-circle-icon'
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
}

export const DefaultProps = () => (
  <Marger top="4" bottom="4">
    <Container>
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
    </Container>
  </Marger>
)

export const SuccessProgress = () => (
  <Marger top="4" bottom="4">
    <Container>
      <StyledContainer>
        <SuccessProgressRing />
        <StyledText size="micro" color="font1" weight="regular">
          Projet réussi !
        </StyledText>
      </StyledContainer>
    </Container>
  </Marger>
)

export const OvertimeProgress = () => (
  <Marger top="4" bottom="4">
    <Container>
      <StyledContainer>
        <OvertimeProgressRing />
        <StyledText size="micro" color="font1" weight="regular">
          Financé à 120% - en prolongation !
        </StyledText>
      </StyledContainer>
    </Container>
  </Marger>
)
