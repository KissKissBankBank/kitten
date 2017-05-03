import React from 'react'
import classNames from 'classnames'
import { card } from 'kitten/hoc/card'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Button } from 'kitten/components/buttons/button'

export const KarlHero = () => {
  <div className={ classNames('k-Hero',
                              'k-Hero__grid',
                              'k-Card',
                              'k-Card--withBorder') }>
    <Marger top="4" bottom="4">
      <Grid>
        <GridCol col="6">
          <Marger top="4.2" bottom="2">
            <Title margin= "false"
                   tag="h3"
                   modifier="secondary"
                   className="k-Hero__title">
              Lorem ipsum dolor sit amet
            </Title>
          </Marger>
          <Paragraph modifier="secondary">
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.
          </Paragraph>

          <Marger top="3">
            <Button title="Button" className={ classNames('k-Button',
                                                          'k-Button--helium',
                                                          'k-Button--big') }>
              Button
            </Button>
          </Marger>
        </GridCol>

        <GridCol col="6">
          <div className={ classNames('k-Hero__card',
                                      'k-Card',
                                      'k-Card--withBorder') } />
        </GridCol>

      </Grid>
    </Marger>
  </div>
}
