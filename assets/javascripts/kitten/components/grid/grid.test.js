import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Grid, GridCol } from 'kitten/components/grid/grid'

describe('<Grid />', () => {
  const grid = shallow(
    <Grid>
      <p>Test</p>
    </Grid>
  )

  it('renders a <div class="k-Grid" />', () => {
    expect(grid).to.have.className('k-Grid')
  })

  it('renders children', () => {
    expect(grid).to.have.text('Test')
  })
})

describe('<GridCol />', () => {
  const gridCol = shallow(
    <GridCol>
      <p>Test</p>
    </GridCol>
  )

  it('renders a default grid with 12 columns', () => {
    expect(gridCol).to.have.className('k-Grid__col--12')
  })

  it('renders children', () => {
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

    it('renders the right column classes', () => {
      expect(gridCol).to.have.className('k-Grid__col--12')
      expect(gridCol).to.have.className('k-Grid__col--10@xs')
      expect(gridCol).to.have.className('k-Grid__col--8@s')
      expect(gridCol).to.have.className('k-Grid__col--6@m')
      expect(gridCol).to.have.className('k-Grid__col--4@l')
    })

    it('renders the right offset classes', () => {
      expect(gridCol).to.have.className('k-Grid__col--offset-1@xs')
      expect(gridCol).to.have.className('k-Grid__col--offset-2@s')
      expect(gridCol).to.have.className('k-Grid__col--offset-3@m')
      expect(gridCol).to.have.className('k-Grid__col--offset-4@l')
    })
  })
})
