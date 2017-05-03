import React from 'react'
import classNames from 'classnames'
import { card } from 'kitten/hoc/card'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Button } from 'kitten/components/buttons/button'

export class Hero extends React.Component {
  render() {

    return (
      <div className="k-Hero k-Card k-Card--withBorder k-Hero__grid">
        <Marger top="8.2">
          <Grid>
            <GridCol col="6">
              <Marger bottom="2">
                <Title margin={ false } tag="h3" modifier="secondary" className="k-Hero__title">
                  Lorem ipsum dolor sit <br/>amet
                </Title>
              </Marger>

              <Paragraph className="k-Hero__subtitle" modifier="secondary">
                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.
              </Paragraph>

              <Marger top="3">
                <Button title="Button" className="k-Button
                                              k-Button--helium
                                              k-Button--big">
                  Button
                </Button>
              </Marger>
            </GridCol>
          </Grid>


        </Marger>
      </div>
    )
  }
}
