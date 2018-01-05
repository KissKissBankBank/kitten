import React from 'react'

import { Grid, GridCol } from 'kitten/components/grid/grid'

describe('<Grid />', () => {
  const grid = shallow(
    <Grid>
      <p>Test</p>
    </Grid>
  )

  test('renders a <div class="k-Grid" />', () => {
    expect(grid.hasClass('k-Grid')).to.equal(true)
  })

  test('renders children', () => {
    expect(grid).to.have.text('Test')
  })

  describe('with className prop', () => {
    const grid = shallow(<Grid className="custom__class" />)

    test('has good class', () => {
      expect(grid.hasClass('custom__class')).to.equal(true)
    })
  })

  describe('with other prop', () => {
    const grid = shallow(<Grid aria-hidden="true" />)

    test('has an aria-hidden attribute', () => {
      expect(grid).to.have.attr('aria-hidden', 'true')
    })
  })
})

describe('<GridCol />', () => {
  const gridCol = shallow(
    <GridCol>
      <p>Test</p>
    </GridCol>
  )

  test('renders a default grid with 12 columns', () => {
    expect(gridCol.hasClass('k-Grid__col--12')).to.equal(true)
  })

  test('renders children', () => {
    expect(gridCol).to.have.text('Test')
  })

  describe('with more options', () => {
    const gridCol = shallow(
      <GridCol col-xs="10"
               offset-xs="1"
               col-s="8"
               offset-s="2"
               col-m="6"
               offset-m="3"
               col-l="4"
               offset-l="4" />
    )

    test('renders the right column classes', () => {
      expect(gridCol.hasClass('k-Grid__col--12')).to.equal(true)
      expect(gridCol.hasClass('k-Grid__col--10@xs')).to.equal(true)
      expect(gridCol.hasClass('k-Grid__col--8@s')).to.equal(true)
      expect(gridCol.hasClass('k-Grid__col--6@m')).to.equal(true)
      expect(gridCol.hasClass('k-Grid__col--4@l')).to.equal(true)
    })

    test('renders the right offset classes', () => {
      expect(gridCol.hasClass('k-Grid__col--offset-1@xs')).to.equal(true)
      expect(gridCol.hasClass('k-Grid__col--offset-2@s')).to.equal(true)
      expect(gridCol.hasClass('k-Grid__col--offset-3@m')).to.equal(true)
      expect(gridCol.hasClass('k-Grid__col--offset-4@l')).to.equal(true)
    })
  })

  describe('with className prop', () => {
    const gridCol = shallow(<GridCol className="custom__class" />)

    test('has good class', () => {
      expect(gridCol.hasClass('custom__class')).to.equal(true)
    })
  })

  describe('with other prop', () => {
    const gridCol = shallow(<GridCol aria-hidden />)

    test('has an aria-hidden attribute', () => {
      expect(gridCol).to.have.attr('aria-hidden', 'true')
    })
  })
})
