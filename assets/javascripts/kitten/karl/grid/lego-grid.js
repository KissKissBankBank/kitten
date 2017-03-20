import React from 'react'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { LegoGrid } from 'kitten/components/grid/lego-grid'

const renderCard = () => {
  const randWidth = Math.random() * 300 + 100 // Random between 100 and 400px.
  const styles = {
    border: '1px solid #eee',
    height: `${randWidth}px`,
    background: '#fff',
    boxShadow: '0 5px 10px #ccc',
    margin: '0 10px 20px',
  }

  return (
    <div style={ styles } />
  )
}

export const KarlLegoGrid = () => {
  const containerStyles = { outline: "none" }
  const masonryProps = {
    options: {
      transitionDuration: 0,
    }
  }

  return (
    <div className="k-DevGrid__container" style={ containerStyles }>
      <Grid>
        <GridCol col="12">
          <LegoGrid masonryProps={ masonryProps }>
            <LegoGrid.Item>{ renderCard() }</LegoGrid.Item>
            <LegoGrid.Item>{ renderCard() }</LegoGrid.Item>
            <LegoGrid.Item>{ renderCard() }</LegoGrid.Item>
            <LegoGrid.Item>{ renderCard() }</LegoGrid.Item>
            <LegoGrid.Item>{ renderCard() }</LegoGrid.Item>
            <LegoGrid.Item>{ renderCard() }</LegoGrid.Item>
            <LegoGrid.Item>{ renderCard() }</LegoGrid.Item>
            <LegoGrid.Item>{ renderCard() }</LegoGrid.Item>
            <LegoGrid.Item>{ renderCard() }</LegoGrid.Item>
            <LegoGrid.Item>{ renderCard() }</LegoGrid.Item>
          </LegoGrid>
        </GridCol>
      </Grid>
    </div>
  )
}
