import React, { Fragment } from 'react'
import { LinkBox } from 'kitten/components/box/link-box'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { KarlExampleTitle } from 'kitten/karl/examples/title'
import { Container } from 'kitten/components/grid/container'
import { Marger } from 'kitten/components/layout/marger'

export const KarlLinkBox = () => (
  <Fragment>
    <Grid>
      <GridCol col-m="6">
        <KarlExampleTitle>Link box</KarlExampleTitle>
        <Container>
          <Marger top="2" bottom="2">
            <LinkBox title="In enim justo, rhoncus ut, imperdiet a." />
          </Marger>
        </Container>
      </GridCol>

      <GridCol col-m="6">
        <KarlExampleTitle>Link box with text</KarlExampleTitle>
        <Container>
          <Marger top="2" bottom="2">
            <LinkBox
              title="In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
              text="Aenean leo ligula, porttitor eu, vitae eleifend
                  ac, enimiquam ante."
            />
          </Marger>
        </Container>
      </GridCol>
    </Grid>
  </Fragment>
)
