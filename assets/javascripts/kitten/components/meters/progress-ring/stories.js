import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, number, color, boolean } from '@storybook/addon-knobs'
import { ProgressRing } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import { Text } from '../../../components/typography/text'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { CheckedCircleIcon } from '../../../components/icons/checked-circle-icon'
import { RocketCircleIcon } from '../../../components/icons/rocket-circle-icon'
import { ScreenConfig } from '../../../constants/screen-config'

const info = {
  text:`
    # ProgressRing
    &nbsp;

    ## Import
    ~~~js
    import { ProgressRing } from '@kisskissbankbank/kitten/src/components/meters/progress-ring'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <ProgressRing />
    ~~~

    ### Props
    ~~~js
      <ProgressRing
        color="…"
        value="…"
        width="…"
        radius="…"
        strokeWidth="…"
      />
    ~~~
  `,
  header: false,
  propTables: false,
}

const StyledContainer = styled.div`
  display: flex;
`

const StyledText = styled(Text)`
  margin-left: 10px;
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

const Success = () => (
  <StyledCheckedCircleIcon
    circleColor={COLORS.valid}
    checkedColor={COLORS.background1}
  />
)

const Overtime = () => (
  <RocketCircleIcon />
)

storiesOf('Meters/ProgressRing', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'default',
    () => (
      <Marger top="4" bottom="4">
        <Container>
          <Grid>
            <GridCol col={6}>
              <StyledContainer>
                <ProgressRing
                  color={color('Color', COLORS.primary2)}
                  value={number('Value', 50)}
                  width={number('Width', 24)}
                  strokeWidth={number('Stroke width', 4)}
                />
                <StyledText size="micro" color="font1" weight="regular">
                  Financé à 50%
                </StyledText>
              </StyledContainer>
            </GridCol>
          </Grid>
        </Container>
      </Marger>
    ),
    { info },
  )

  .add(
    'SuccessProgress',
    () => (
      <Marger top="4" bottom="4">
        <Container>
          <Grid>
            <GridCol col={6}>
              <StyledContainer>
                <Success />
                <StyledText size="micro" color="font1" weight="regular">
                  Projet réussi !
                </StyledText>
              </StyledContainer>
            </GridCol>
          </Grid>
        </Container>
      </Marger>
    ),
    { info },
  )

  .add(
    'OvertimeProgress',
     () => (
      <Marger top="4" bottom="4">
        <Container>
          <Grid>
            <GridCol col={10}>
              <StyledContainer>
                <Overtime />
                <StyledText size="micro" color="font1" weight="regular">
                  Financé à 120% - en prolongation !
                </StyledText>
              </StyledContainer>
            </GridCol>
          </Grid>
        </Container>
      </Marger>
    ),
    { info },
  )

