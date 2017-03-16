import React from 'react'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { LegoGrid } from 'kitten/components/grid/lego-grid'

const randomColorHexa = () => {
  return "#000000".replace(/0/g, () => {
    return (~~(Math.random() * 16)).toString(16)
  })
}

const addCard = () => {
  const randWidth = Math.random() * 300 + 100 // Random between 100 and 400px.
  const styles = {
    border: '1px solid #eee',
    height: `${randWidth}px`,
    background: randomColorHexa(),
    'box-shadow': '0 5px 10px #ccc',
    'margin': '0 10px 20px',
  }

  return (
    <div style={ styles } />
  )
}

export const KarlLegoGrid = () => {
  return (
    <div className="k-DevGrid__container" style={{ outline: "none" }}>
      <Grid>
        <GridCol col="12">
          <LegoGrid>
            <LegoGrid.Item>{ addCard() }</LegoGrid.Item>
            <LegoGrid.Item>{ addCard() }</LegoGrid.Item>
            <LegoGrid.Item>{ addCard() }</LegoGrid.Item>
            <LegoGrid.Item>{ addCard() }</LegoGrid.Item>
            <LegoGrid.Item>{ addCard() }</LegoGrid.Item>
            <LegoGrid.Item>{ addCard() }</LegoGrid.Item>
            <LegoGrid.Item>{ addCard() }</LegoGrid.Item>
            <LegoGrid.Item>{ addCard() }</LegoGrid.Item>
            <LegoGrid.Item>{ addCard() }</LegoGrid.Item>
            <LegoGrid.Item>{ addCard() }</LegoGrid.Item>
          </LegoGrid>
        </GridCol>
      </Grid>
    </div>
  )
}
