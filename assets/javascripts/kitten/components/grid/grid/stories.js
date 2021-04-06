import React from 'react'
import { Grid, GridCol } from './index'
import { Container } from '../../..'

export default {
  title: 'Grid/Grid',
  component: Grid,
}

const blockClasses = 'k-u-align-center has-overrides color-background'

export const Default = () => (
  <Container>
    <Grid className="k-u-margin-top-double">
      <GridCol col="1">
        <div className={blockClasses}>col="1"</div>
      </GridCol>
      <GridCol col="1">
        <div className={blockClasses}>col="1"</div>
      </GridCol>
      <GridCol col="1">
        <div className={blockClasses}>col="1"</div>
      </GridCol>
      <GridCol col="1">
        <div className={blockClasses}>col="1"</div>
      </GridCol>
      <GridCol col="1">
        <div className={blockClasses}>col="1"</div>
      </GridCol>
      <GridCol col="1">
        <div className={blockClasses}>col="1"</div>
      </GridCol>
      <GridCol col="1">
        <div className={blockClasses}>col="1"</div>
      </GridCol>
      <GridCol col="1">
        <div className={blockClasses}>col="1"</div>
      </GridCol>
      <GridCol col="1">
        <div className={blockClasses}>col="1"</div>
      </GridCol>
      <GridCol col="1">
        <div className={blockClasses}>col="1"</div>
      </GridCol>
      <GridCol col="1">
        <div className={blockClasses}>col="1"</div>
      </GridCol>
      <GridCol col="1">
        <div className={blockClasses}>col="1"</div>
      </GridCol>
    </Grid>

    <Grid className="k-u-margin-top-double">
      <GridCol col="6">
        <Grid>
          <GridCol col="1">
            <div className={blockClasses}>col="1"</div>
          </GridCol>
          <GridCol col="1">
            <div className={blockClasses}>col="1"</div>
          </GridCol>
          <GridCol col="1">
            <div className={blockClasses}>col="1"</div>
          </GridCol>
          <GridCol col="1">
            <div className={blockClasses}>col="1"</div>
          </GridCol>
          <GridCol col="1">
            <div className={blockClasses}>col="1"</div>
          </GridCol>
          <GridCol col="1">
            <div className={blockClasses}>col="1"</div>
          </GridCol>
          <GridCol col="1">
            <div className={blockClasses}>col="1"</div>
          </GridCol>
          <GridCol col="1">
            <div className={blockClasses}>col="1"</div>
          </GridCol>
          <GridCol col="1">
            <div className={blockClasses}>col="1"</div>
          </GridCol>
          <GridCol col="1">
            <div className={blockClasses}>col="1"</div>
          </GridCol>
          <GridCol col="1">
            <div className={blockClasses}>col="1"</div>
          </GridCol>
          <GridCol col="1">
            <div className={blockClasses}>col="1"</div>
          </GridCol>
        </Grid>
      </GridCol>
      <GridCol col="6">
        <div className={blockClasses}>col="6"</div>
      </GridCol>
    </Grid>

    <Grid className="k-u-margin-top-double">
      <GridCol col-s="2">
        <div className={blockClasses}>col-s="2"</div>
      </GridCol>
      <GridCol col-s="4">
        <div className={blockClasses}>col-s="4"</div>
      </GridCol>
      <GridCol col-s="6">
        <div className={blockClasses}>col-s="6"</div>
      </GridCol>
    </Grid>

    <Grid className="k-u-margin-top-double">
      <GridCol col-l="6">
        <div className={blockClasses}>col-l="6"</div>
      </GridCol>
      <GridCol col-l="4" offset-l="2">
        <div className={blockClasses}>col-l="4" offset-l="2"</div>
      </GridCol>
    </Grid>
  </Container>
)
