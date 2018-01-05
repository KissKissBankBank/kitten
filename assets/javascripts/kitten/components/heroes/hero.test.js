import React from 'react'
import { mount } from 'enzyme'
import { Hero } from 'kitten/components/heroes/hero'
import { Container } from 'kitten/components/grid/container'
import { Grid, GridCol } from 'kitten/components/grid/grid'

describe('<Hero />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = mount(<Hero>FooBar</Hero>)
    })

    it('has a <Container /> component', () => {
      expect(component).to.have.descendants(Container)
    })

    it('has a <Grid /> component', () => {
      expect(component).to.have.descendants(Grid)
    })

    it('has two <GridCol /> components', () => {
      expect(component).to.have.exactly(2).descendants(GridCol)
    })

    it('renders children value in the first GridCol', () => {
      expect(component.find(GridCol).first()).to.have.text('FooBar')
    })
  })
})
