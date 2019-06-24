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
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjg4MCIgaGVpZ2h0PSIxODAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTTAgLjA4MWgyODgwdjE4MDBIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMCAwaDI4ODB2MTgwMEgweiIvPjxnIG9wYWNpdHk9Ii42Ij48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48dXNlIGZpbGw9IiNDQUY0RkUiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI2EiLz48ZyBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMjMuNDQ4IiBtYXNrPSJ1cmwoI2IpIj48cGF0aCBmaWxsPSIjMTlCNEZBIiBkPSJNLTYwNS4yNjQtMzM2Ljg5Mkw4NDMuNzg5LTcyNS4xNjRsMzg4LjI3IDE0NDkuMDQzLTE0NDkuMDUzIDM4OC4yNzN6Ii8+PHBhdGggZmlsbD0icmVkIiBkPSJNLTIwMS41MzggMTEwOC4wMUwxMjMyLjA2IDcyMy44OGw3MTQuOTM1IDI2NjguMTcxLTE0MzMuNTk3IDM4NC4xMzF6Ii8+PHBhdGggZmlsbD0iI0ZGRUJFMCIgZD0iTTg1My42MjYtNjg4LjQ1NWwxNzc5LjQzOC00NzYuOEwzMTA5Ljg1OSA2MTQuMTdsLTE3NzkuNDM4IDQ3Ni44eiIvPjwvZz48L2c+PC9nPjwvc3ZnPg==);
  background-size: cover;
  background-position: center;
  @media (min-height: 600px) {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

const Card = styled.div`
  margin: auto;
  background-color: #fff;
  text-align: center;
  width: 80%;
  padding: 0 5% ${pxToRem(40)};
  @media (min-height: 600px) {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (min-width: 690px) {
    width: ${pxToRem(440)};
    padding: 0 ${pxToRem(115)} ${pxToRem(40)};
  }
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

const ScrollableDiv = styled.div`
  padding: 30px 0;
`

const Prelaunch = () => {
  return (
    <Container>
      <ScrollableDiv>
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
      </ScrollableDiv>
    </Container>
  )
}

export default Prelaunch
