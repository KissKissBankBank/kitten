import React from 'react'
import styled from 'styled-components'
import {
  Container,
  Grid,
  GridCol,
  ScreenConfig,
  Title,
  Text,
  Marger,
  HorizontalStroke,
  Field,
  Checkbox,
  Button,
  COLORS,
} from 'kitten'

const StyledBackground = styled.div`
  min-height: 100vh;
  @media (min-width: ${ScreenConfig.L.min}px) {
    background: linear-gradient(
      to left,
      rgba(202, 244, 254, 0.3) 0%,
      rgba(202, 244, 254, 0.3) 50%,
      white 50%
    );
  }

  @media (min-width: ${ScreenConfig.XL.min}px) {
    background: linear-gradient(
      to left,
      rgba(202, 244, 254, 0.3) 0%,
      rgba(202, 244, 254, 0.3) 58%,
      white 50%
    );
  }
`

const StyledGrid = styled(Grid)`
  align-items: center;
  min-height: 100vh;
`

const StyledLabel = styled(Field.Label)`
  > * {
    justify-content: space-between;
  }
`

const StyledLink = styled(Text)`
  color: ${COLORS.primary1};
  text-decoration: none;
  transition: color 0.4s ease;

  &:hover,
  &:focus,
  &:active {
    color: ${COLORS.primary2};
  }
`

const Login = props => (
  <StyledBackground>
    <Container>
      <StyledGrid>
        <GridCol
          offset-s="2"
          col-s="8"
          offset-m="3"
          col-m="6"
          offset-l="1"
          col-l="4"
          col-xl="3"
        >
          <Marger top="2" bottom="1.5">
            <Title modifier="tertiary" margin={false}>
              Connectez-vous
            </Title>
          </Marger>
          <Marger top="1.5" bottom="3">
            <HorizontalStroke size="large" />
          </Marger>
          <Marger top="3" bottom="4">
            <Field>
              <Field.Label>Adresse email</Field.Label>
              <Field.Input
                placeholder="Votre adresse email"
                error={props.inputError}
              />
              {props.inputError && (
                <Field.ErrorMessage>Invalid email</Field.ErrorMessage>
              )}
            </Field>
          </Marger>
          <Marger top="4" bottom="1.5">
            <Field>
              <StyledLabel
                link={
                  <StyledLink tag="a" href="#" weight="500" size="small">
                    Mot de passe oublié ?
                  </StyledLink>
                }
              >
                Mot de passe
              </StyledLabel>
              <Field.Password
                placeholder="Entrez votre mot de passe"
                error={props.passwordError}
                iconLabel="Show password"
                hiddenIconLabel="Hide password"
              />
              {props.passwordError && (
                <Field.ErrorMessage>Invalid password</Field.ErrorMessage>
              )}
            </Field>
          </Marger>
          <Marger top="1.5" bottom="4">
            <Checkbox id="remember-me">Se souvenir de moi</Checkbox>
          </Marger>
          <Marger top="4" bottom="2">
            <Button size="large" fit="fluid" modifier="helium">
              Se connecter
            </Button>
          </Marger>
          <Marger top="2" bottom="2">
            <Text tag="p" size="small" className="k-u-align-center">
              Créez votre compte en quelques minutes seulement et commencez à
              investir.
              <br />
              <StyledLink tag="a" href="#" weight="500" size="small">
                Inscrivez-vous
              </StyledLink>
            </Text>
          </Marger>
        </GridCol>
      </StyledGrid>
    </Container>
  </StyledBackground>
)

export default Login
