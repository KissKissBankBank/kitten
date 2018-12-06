import React, { Fragment } from 'react'
import { LinkBox } from '../../components/box/link-box'
import { Grid, GridCol } from '../../components/grid/grid'
import { KarlExampleTitle } from '../../karl/examples/title'
import { Container } from '../../components/grid/container'
import { Marger } from '../../components/layout/marger'

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
