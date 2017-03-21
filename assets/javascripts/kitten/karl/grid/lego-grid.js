import React from 'react'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { LegoGrid } from 'kitten/components/grid/lego-grid'

const renderCard = () => {
  const randWidth = Math.random() * 300 + 100 // Random between 100 and 400.
  const styles = {
    height: `${randWidth}px`,
  }

  return (
    <div className="karl-ProjectCard" style={ styles } />
  )
}

export const KarlLegoGrid = () => {
  const numberOfCards = 10
  const masonryProps = {
    options: {
      transitionDuration: 0,
    }
  }

  return (
    <div className="k-DevGrid__container k-DevGrid__container--withoutOutline">
      <Grid>
        <GridCol col="12">
          <LegoGrid masonryProps={ masonryProps }>
            { [...Array(numberOfCards)].map((_, index) =>
              <LegoGrid.Item key={ index }>{ renderCard() }</LegoGrid.Item>
            ) }
          </LegoGrid>
        </GridCol>
      </Grid>
    </div>
  )
}
