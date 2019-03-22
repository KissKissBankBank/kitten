import React from 'react'
import renderer from 'react-test-renderer'
import { Grid, GridCol } from './index'

describe('<Grid />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Grid>
            <GridCol col={4}>Test</GridCol>
            <GridCol col={8}>Test</GridCol>
          </Grid>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with some props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Grid colNumber={10} colAlign="center">
            <GridCol col={4} offset={3} col-s={5} offset-s={0} col-l={2}>
              Test
            </GridCol>
            <GridCol col-s={3} offset-s={2} col-l={6} offset-l={1}>
              Test
            </GridCol>
          </Grid>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
