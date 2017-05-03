import React from 'react'
import classNames from 'classnames'
import { card } from 'kitten/hoc/card'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Button } from 'kitten/components/buttons/button'

export const KarlHero = () => (
  <div className={ classNames('k-Hero',
                              'k-Hero__grid') }>
    <Marger top="4" bottom="4">
      <Grid>
        <GridCol col-l="6" col-s="12">
          <Marger top="4.2" bottom="2">
            <Title margin={ false }
                   tag="h2"
                   modifier="secondary">
              Lorem ipsum dolor sit amet
            </Title>
          </Marger>
          <Paragraph modifier="secondary">
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet.Maecenas tempus, tellus eget condimentum rhoncus,
            sem quam semper libero.
          </Paragraph>
          <Marger top="3" bottom="4">
            <Button title="Button" className={ classNames('k-Button',
                                                          'k-Button--helium',
                                                          'k-Button--big') }>
              Button
            </Button>
          </Marger>
        </GridCol>
        <GridCol col-l="6" col-s="12">
          <div className={ classNames('k-Hero__card',
                                      'k-Hero--withShadow',
                                      'k-Card',
                                      'k-Card--withBorder') } />
        </GridCol>
      </Grid>
    </Marger>
  </div>
)
