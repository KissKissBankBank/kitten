import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { SearchModal } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import { Button } from '../../buttons/button'
import { Header } from '../../headers/header'
import { SearchInput } from '../search-input'

const headerHeight = 66
let modal
let foobar

storiesOf('Search/SearchModal', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <Fragment>
        <Header>
          <Button
            size="tiny"
            type="button"
            onClick={() => {
              modal.toggle(() => foobar && foobar.focus())
            }}
          >
            Rechercher
          </Button>
        </Header>

        <SearchModal ref={node => (modal = node)} style={{ top: headerHeight }}>
          <Container>
            <Grid>
              <GridCol col="8">
                <Marger top="5" bottom="5">
                  <SearchInput
                    ref={foo => (foobar = foo)}
                    placeholder="Rechercher"
                  />
                </Marger>
              </GridCol>

              <GridCol col="4">
                <Button
                  size="tiny"
                  type="button"
                  modifier="beryllium"
                  onClick={() => modal.close()}
                >
                  Fermer
                </Button>
              </GridCol>
            </Grid>
          </Container>
        </SearchModal>
      </Fragment>
    )
  })
