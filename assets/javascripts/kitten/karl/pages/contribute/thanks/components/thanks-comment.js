import React from 'react'
import styled from 'styled-components'
import { Button,
pxToRem,
GridCol,
Marger,
Text,
TextInput } from '../../../../..'

const PageSubTitles = styled(Text)`
  font-size: ${pxToRem(20)};
  margin: 0;
`

export const ThanksComment = () => (
  <GridCol offset-xs="0" col-m="9" offset-m="1" col-l="5" offset-l="3">
    <Marger bottom="8">
      <PageSubTitles tag="h2" weight="bold">
        Postez un message de soutien sur la page du projet
      </PageSubTitles>
      <Marger top="2">
        <TextInput
          tag="textarea"
          rows="4"
          placeholder="Laissez un message au porteur de projet…"
          aria-label="Laissez un message au porteur de projet"
        />
      </Marger>
      <Marger top="3" className="k-u-align-center@xs-down">
        <Button modifier="helium" size="big">
          Valider
        </Button>
      </Marger>
    </Marger>
  </GridCol>
    )
