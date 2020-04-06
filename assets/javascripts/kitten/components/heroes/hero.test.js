import React from 'react'
import { Hero } from '../../components/heroes/hero'
import { Container } from '../../components/grid/container'
import { StyleRoot } from 'radium'

describe('<Hero />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = mount(
        <StyleRoot>
          <Hero>FooBar</Hero>
        </StyleRoot>,
      )
    })

    it('has a <Container /> component', () => {
      expect(component.find(Container).exists()).toBe(true)
    })

    it('has a <Grid /> component', () => {
      expect(component.find('.k-Grid').exists()).toBe(true)
    })

    it('has two <GridCol /> components', () => {
      expect(component.find('.k-Grid__col--12')).toHaveLength(2)
    })

    it('renders children value in the first GridCol', () => {
      expect(component.find('.k-Grid__col--12').first().text()).toBe('FooBar')
    })
  })
})
