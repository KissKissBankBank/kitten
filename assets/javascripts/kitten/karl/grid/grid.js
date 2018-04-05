import React from 'react'
import { Grid, GridCol } from 'kitten/components/grid/grid'

export const KarlGridTwelveColumns = () => {
  return (
    <Grid>
      <GridCol col="1">
        <div className="karl-GridBox" />
      </GridCol>
      <GridCol col="1">
        <div className="karl-GridBox" />
      </GridCol>
      <GridCol col="1">
        <div className="karl-GridBox" />
      </GridCol>
      <GridCol col="1">
        <div className="karl-GridBox" />
      </GridCol>
      <GridCol col="1">
        <div className="karl-GridBox" />
      </GridCol>
      <GridCol col="1">
        <div className="karl-GridBox" />
      </GridCol>
      <GridCol col="1">
        <div className="karl-GridBox" />
      </GridCol>
      <GridCol col="1">
        <div className="karl-GridBox" />
      </GridCol>
      <GridCol col="1">
        <div className="karl-GridBox" />
      </GridCol>
      <GridCol col="1">
        <div className="karl-GridBox" />
      </GridCol>
      <GridCol col="1">
        <div className="karl-GridBox" />
      </GridCol>
      <GridCol col="1">
        <div className="karl-GridBox" />
      </GridCol>
    </Grid>
  )
}

export const KarlGridInGrid = () => {
  return (
    <Grid>
      <GridCol col="6">
        <Grid>
          <GridCol col="1">
            <div className="karl-GridBox" />
          </GridCol>
          <GridCol col="1">
            <div className="karl-GridBox" />
          </GridCol>
          <GridCol col="1">
            <div className="karl-GridBox" />
          </GridCol>
          <GridCol col="1">
            <div className="karl-GridBox" />
          </GridCol>
          <GridCol col="1">
            <div className="karl-GridBox" />
          </GridCol>
          <GridCol col="1">
            <div className="karl-GridBox" />
          </GridCol>
          <GridCol col="1">
            <div className="karl-GridBox" />
          </GridCol>
          <GridCol col="1">
            <div className="karl-GridBox" />
          </GridCol>
          <GridCol col="1">
            <div className="karl-GridBox" />
          </GridCol>
          <GridCol col="1">
            <div className="karl-GridBox" />
          </GridCol>
          <GridCol col="1">
            <div className="karl-GridBox" />
          </GridCol>
          <GridCol col="1">
            <div className="karl-GridBox" />
          </GridCol>
        </Grid>
      </GridCol>
      <GridCol col="6">
        <div className="karl-GridBox" />
      </GridCol>
    </Grid>
  )
}

export const KarlGridSmall = () => {
  return (
    <Grid>
      <GridCol col-s="2">
        <div className="karl-GridBox" />
      </GridCol>
      <GridCol col-s="4">
        <div className="karl-GridBox" />
      </GridCol>
      <GridCol col-s="6">
        <div className="karl-GridBox" />
      </GridCol>
    </Grid>
  )
}

export const KarlGridWithOffset = () => {
  return (
    <Grid>
      <GridCol col-l="6">
        <div className="karl-GridBox" />
      </GridCol>
      <GridCol col-l="4" offset-l="2">
        <div className="karl-GridBox" />
      </GridCol>
    </Grid>
  )
}
