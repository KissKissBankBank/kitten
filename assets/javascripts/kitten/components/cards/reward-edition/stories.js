import React from 'react'
import styled from 'styled-components'
import { boolean } from '@storybook/addon-knobs'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Text } from '../../../components/typography/text'
import { ButtonGroup } from '../../../components/buttons/button-group'
import { Button } from '../../../components/buttons/button'
import { Field } from '../../../components/form/field'
import { ArrowContainer } from '../../../components/layout/arrow-container'
import { BulletList } from '../../../components/lists/bullet-list'
import { ExpandBoard } from '../../../components/expandable/expand-board'
import { Grid, GridCol } from '../../grid/grid'
import { RewardEdition } from './index'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { EditIcon } from '../../../components/icons/edit-icon'

const StoryContainer = ({ children }) => (
  <Container>
    <Grid>
      <GridCol col="6">
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

const StyledContainer = styled(RewardEdition.Content && RewardEdition.Footer)`
  padding: ${pxToRem(30)};
`

const StyledText = styled(Text)`
  margin: 0;
`
const StyledIcon = styled(EditIcon)`
  padding-right: ${pxToRem(10)};
`

export default {
  title: 'Cards/RewardEdition',
  component: RewardEdition,
}

export const Default = () => {
  return (
    <StoryContainer>
      <RewardEdition>
        <RewardEdition.Header garbageButton={boolean('Garbage button', true)}>
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
              <ExpandBoard.Button
                big={false}
                borderRadius={4}
                withBottomBorderRadius={4}
              >
                Button1
              </ExpandBoard.Button>
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
}

export const RewardEditionKissKissCode = () => {
  return (
    <>
      <StoryContainer>
        <RewardEdition>
          <RewardEdition.Header>
            <Text weight="regular" size="default">
              KissKiss Code
            </Text>
          </RewardEdition.Header>

          <StyledContainer>
            <StyledText tag="p" size="tiny" color="font1" weight="regular">
              Code
            </StyledText>
            <StyledText tag="p" size="tiny" color="font1" weigth="light">
              KissKiss Code
            </StyledText>

            <Marger top="3" bottom="3">
              <StyledText tag="p" size="tiny" color="font1" weight="regular">
                Description du code
              </StyledText>
              <StyledText
                tag="p"
                size="tiny"
                color="font1"
                weigth="light"
                lineHeight="normal"
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </StyledText>
            </Marger>

            <Marger top="3">
              <StyledText tag="p" size="tiny" color="font1" weight="regular">
                Montant minimum d'activation
              </StyledText>
              <StyledText tag="p" size="tiny" color="font1" weigth="light">
                30 €
              </StyledText>
            </Marger>
          </StyledContainer>

          <StyledContainer>
            <Button fluid big modifier="helium">
              <StyledIcon width="14" />
              Editer le code cadeau
            </Button>
          </StyledContainer>
        </RewardEdition>
      </StoryContainer>

      <StoryContainer>
        <RewardEdition>
          <RewardEdition.Header>
            <Text weight="regular" size="default">
              Code cadeau
            </Text>
          </RewardEdition.Header>

          <StyledContainer>
            <Field>
              <Field.Label labelProps={{ htmlFor: 'gift-code' }}>
                Code <Text weight="light">(obligatoire)</Text>
              </Field.Label>
              <Field.Input
                id="gift-code"
                name="gift-code"
                placeholder="Entrez votre code"
              />
              <Marger top="2" bottom="3">
                <ArrowContainer position="top" color={COLORS.primary5}>
                  <BulletList
                    size="tiny"
                    items={[
                      {
                        key: '1',
                        item: 'Uniquement des lettres et des chiffres',
                      },
                      { key: '2', item: "Pas d'espaces" },
                      { key: '3', item: '30 caractères maximal' },
                    ]}
                  />
                </ArrowContainer>
              </Marger>
              <Marger top="3" bottom="3">
                <Field.Label
                  labelProps={{ htmlFor: 'description-code' }}
                  tooltipId="code-tooltip"
                  tooltip="BlaBla"
                >
                  Description du code <Text weight="light">(optionnel)</Text>
                </Field.Label>
                <Field.Input
                  id="description-code"
                  name="description-code"
                  placeholder="Entrez votre description du code"
                />
              </Marger>
              <Marger top="3">
                <Field.Label labelProps={{ htmlFor: 'amount' }}>
                  Montant minimum d'activation
                  <Text weight="light"> (optionnel)</Text>
                </Field.Label>
                <Field.Input
                  unit="€"
                  id="amount"
                  name="amount"
                  placeholder="0"
                />
              </Marger>
            </Field>
          </StyledContainer>

          <StyledContainer>
            <Button fluid big modifier="helium">
              Valider
            </Button>
          </StyledContainer>
        </RewardEdition>
      </StoryContainer>
    </>
  )
}
