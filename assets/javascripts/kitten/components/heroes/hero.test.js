import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { Hero } from 'kitten/components/heroes/hero'
import { Container } from 'kitten/components/grid/container'

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
      expect(component).to.have.descendants('.k-Grid')
    })

    it('has two <GridCol /> components', () => {
      expect(component).to.have.exactly(2).descendants('.k-Grid__col--12')
    })

    it('renders children value in the first GridCol', () => {
      expect(component.find('.k-Grid__col--12').first()).to.have.text('FooBar')
    })
  })
})
