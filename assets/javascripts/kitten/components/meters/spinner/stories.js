import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, number, color } from '@storybook/addon-knobs'
import { SpinnerProgress } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import { Text } from '../../../components/typography/text'
import COLORS from '../../../constants/colors-config'

const StyledContainer = styled.div`
  display: flex;
`

const StyledText = styled(Text)`
  margin-left: 10px;
  align-self: center;
`

storiesOf('Meters/Spinner', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('default', () => (
    <Marger top="4" bottom="4">
      <Container>
        <Grid>
          <GridCol col={4}>
            <StyledContainer>
              <SpinnerProgress
                color={color('Color', COLORS.primary2)}
                value={number('Value', 75)}
              />
              <StyledText size="micro" color="font1" weight="regular">
                Financé à 75%
              </StyledText>
            </StyledContainer>
          </GridCol>
        </Grid>
      </Container>
    </Marger>
  ))
