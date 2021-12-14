import React from 'react'
import {
  Title,
  TitleWithStroke,
  Field,
  FlexWrapper,
  Grid,
  GridCol,
} from 'kitten'

export const WithForm = () => {
  return (
    <>
      <TitleWithStroke modifier="quaternary">Mon profil</TitleWithStroke>
      <FlexWrapper gap={20}>
        <Title modifier="senary">Catégorie une</Title>

        <div>
          <Field>
            <Field.Label labelProps={{ htmlFor: 'field-1' }}>
              Field 1
            </Field.Label>
            <Field.Input name="field-1" id="field-1" placeholder="Input 1" />
          </Field>
        </div>

        <Grid gap={20} direction="row">
          <GridCol col="12" col-s="6">
            <Field>
              <Field.Label labelProps={{ htmlFor: 'field-2' }}>
                Field 2
              </Field.Label>
              <Field.Input name="field-2" id="field-2" placeholder="Input 2" />
            </Field>
          </GridCol>
          <GridCol col="12" col-s="6">
            <Field>
              <Field.Label labelProps={{ htmlFor: 'field-3' }}>
                Field 3
              </Field.Label>
              <Field.Input name="field-3" id="field-3" placeholder="Input 3" />
            </Field>
          </GridCol>
        </Grid>
      </FlexWrapper>
    </>
  )
}
