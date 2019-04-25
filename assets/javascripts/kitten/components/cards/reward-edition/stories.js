import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { withKnobs } from '@storybook/addon-knobs'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Text } from '../../../components/typography/text'
import { ButtonGroup } from '../../../components/buttons/button-group'
import { Button } from '../../../components/buttons/button/button'
import { ExpandBoard } from '../../../components/expandable/expand-board'
import { Grid, GridCol } from '../../grid/grid'
import { RewardEdition } from './index'
import { pxToRem } from '../../../helpers/utils/typography'

const StoryContainer = ({ children }) => (
  <Container>
    <Grid>
      <GridCol col="8">
        <Marger top="5" bottom="5">
          {children}
        </Marger>
      </GridCol>
    </Grid>
  </Container>
)

const borderWidth = pxToRem(1)

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: -${borderWidth};
`

storiesOf('Cards/RewardEdition', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <StoryContainer>
        <RewardEdition>
          <RewardEdition.Header>
            <Text weight="regular" size="default">
              Contrepartie pour _€
            </Text>
          </RewardEdition.Header>

          <RewardEdition.Content>
            <div className="k-u-hidden@s-down">
              <ButtonGroup>
                <ButtonGroup.Button>Button1</ButtonGroup.Button>
                <ButtonGroup.Button>Button2</ButtonGroup.Button>
                <ButtonGroup.Button>Button3</ButtonGroup.Button>
              </ButtonGroup>
            </div>

            <div className="k-u-hidden@m-up">
              <ExpandBoard>
                <ExpandBoard.Button>Button1</ExpandBoard.Button>
                <ExpandBoard.Content>
                  <StyledButton>Button2</StyledButton>
                  <StyledButton>Button3</StyledButton>
                </ExpandBoard.Content>
              </ExpandBoard>
            </div>
          </RewardEdition.Content>

          <RewardEdition.Footer />
        </RewardEdition>
      </StoryContainer>
    )
  })
