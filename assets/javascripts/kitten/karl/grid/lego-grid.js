import React from 'react'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { LegoGrid } from 'kitten/components/grid/lego-grid'
import classNames from 'classnames'

const masonryProps = {
  options: {
    transitionDuration: 0,
  }
}

const karlLegoGridClassName = classNames(
  'k-DevGrid__container',
  'k-DevGrid__container--withoutOutline',
)

export const KarlLegoGrid = () => {
  const cards = [
    { key: 'card-1', height: '100px' },
    { key: 'card-2', height: '200px' },
    { key: 'card-3', height: '340px' },
    { key: 'card-4', height: '140px' },
    { key: 'card-5', height: '240px' },
    { key: 'card-6', height: '400px' },
    { key: 'card-7', height: '190px' },
    { key: 'card-8', height: '330px' },
    { key: 'card-9', height: '330px' },
    { key: 'card-10', height: '280px' },
  ]

  return (
    <div className={ karlLegoGridClassName }>
      <Grid>
        <GridCol col="12">
          <LegoGrid masonryProps={ masonryProps }>
            { cards.map(card =>
              <LegoGrid.Item key={ card.key }>
                <div
                  className="karl-ProjectCard"
                  style={ { height: card.height } }
                />
              </LegoGrid.Item>
            ) }
          </LegoGrid>
        </GridCol>
      </Grid>
    </div>
  )
}

export const KarlLegoGrid12Items = () => {
  const cards = Array.apply(null, { length: 12 }).map((_, index) => index)

  return (
    <div className={ karlLegoGridClassName }>
      <Grid>
        <GridCol col="12">
          <LegoGrid
            masonryProps={ masonryProps }
            items-xxs-up="1"
            items-xs-up="3"
            items-s-up="4"
            items-m-up="6"
            items-l-up="12"
          >
            { cards.map(index =>
              <LegoGrid.Item key={ index }>
                <div
                  className="karl-ProjectCard"
                  style={ { height: '200px' } }
                />
              </LegoGrid.Item>
            ) }
          </LegoGrid>
        </GridCol>
      </Grid>
    </div>
  )
}
