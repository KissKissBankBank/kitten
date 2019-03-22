import React from 'react'
import { Grid, GridCol } from '../../components/grid/grid'

describe('<Grid />', () => {
  const grid = shallow(
    <Grid>
      <p>Test</p>
    </Grid>,
  )

  it('renders a <div class="k-Grid" />', () => {
    expect(grid.hasClass('k-Grid')).toBe(true)
  })

  it('renders children', () => {
    expect(grid.text()).toBe('Test')
  })

  describe('with className prop', () => {
    const grid = shallow(<Grid className="custom__class" />)

    it('has good class', () => {
      expect(grid.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with other prop', () => {
    const grid = shallow(<Grid aria-hidden="true" />)

    it('has an aria-hidden attribute', () => {
      expect(grid.props()['aria-hidden']).toBe('true')
    })
  })
})

describe('<GridCol />', () => {
  const gridCol = shallow(
    <GridCol>
      <p>Test</p>
    </GridCol>,
  )

  it('renders a default grid with 12 columns', () => {
    expect(gridCol.hasClass('k-Grid__col--12')).toBe(true)
  })

  it('renders children', () => {
    expect(gridCol.text()).toBe('Test')
  })

  describe('with more options', () => {
    const gridCol = shallow(
      <GridCol
        col-xs="10"
        offset-xs="1"
        col-s="8"
        offset-s="2"
        col-m="6"
        offset-m="3"
        col-l="4"
        offset-l="4"
      />,
    )

    it('renders the right column classes', () => {
      expect(gridCol.hasClass('k-Grid__col--12')).toBe(true)
      expect(gridCol.hasClass('k-Grid__col--10@xs')).toBe(true)
      expect(gridCol.hasClass('k-Grid__col--8@s')).toBe(true)
      expect(gridCol.hasClass('k-Grid__col--6@m')).toBe(true)
      expect(gridCol.hasClass('k-Grid__col--4@l')).toBe(true)
    })

    it('renders the right offset classes', () => {
      expect(gridCol.hasClass('k-Grid__col--offset-1@xs')).toBe(true)
      expect(gridCol.hasClass('k-Grid__col--offset-2@s')).toBe(true)
      expect(gridCol.hasClass('k-Grid__col--offset-3@m')).toBe(true)
      expect(gridCol.hasClass('k-Grid__col--offset-4@l')).toBe(true)
    })
  })

  describe('with className prop', () => {
    const gridCol = shallow(<GridCol className="custom__class" />)

    it('has good class', () => {
      expect(gridCol.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with other prop', () => {
    const gridCol = shallow(<GridCol aria-hidden />)

    it('has an aria-hidden attribute', () => {
      expect(gridCol.props()['aria-hidden']).toBeTruthy()
    })
  })
})
