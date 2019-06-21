import React from 'react'
import styled from 'styled-components'
import { Title, Separator, Text, Field, Button } from '../../..'
import { pxToRem } from '../../../helpers/utils/typography'

const User = styled(({ className }) => (
  <img className={className} src="https://picsum.photos/60" />
))`
  border-radius: 50%;
  margin-top: ${pxToRem(-30)};
  border: 4px solid #fff;
`

const Container = styled.div`
  position: absolute;
  background-color: #caf4fe;
  width: 100%;
  height: 100%;
`

const Card = styled.div`
  width: ${pxToRem(440)};
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 0 ${pxToRem(115)} ${pxToRem(40)};
`

const TitleSeparator = styled(Separator)`
  background-color: #000;
  height: ${pxToRem(4)};
  width: ${pxToRem(30)};
  margin: auto auto ${pxToRem(30)};
`

const MiddleText = styled(Text)`
  display: block;
  margin-bottom: ${pxToRem(40)};
`

const SubmitButton = styled(Button)`
  margin-top: ${pxToRem(30)};
  margin-bottom: ${pxToRem(15)};
`

const Prelaunch = () => {
  return (
    <Container>
      <Card>
        <User />
        <Title tag="h2" modifier="quatenary">
          Bidules se lance bientôt sur KissKissBankBank
        </Title>
        <TitleSeparator />
        <MiddleText>
          Déjà 58 personnes attendent le lancement du projet :{' '}
          <Text weight="bold">
            Atelier d'optique bruxellois dédié à l'upcycling et au custom.
          </Text>
        </MiddleText>
        <Field.Label>
          Faites vous aussi parti des premiers à contribuer 🙌
        </Field.Label>
        <Field.Input placeholder="Entrez votre email" />
        <SubmitButton modifier="helium" fluid big>
          M'informer du lancement
        </SubmitButton>
        <Text size="micro">
          Votre adresse email sera utilisé uniquement pour vous alerter du
          lancement de ce projet
        </Text>
      </Card>
    </Container>
  )
}

export default Prelaunch
