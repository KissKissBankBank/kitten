import React from 'react'
import { Hero } from './index'
import { Container } from '../../../components/grid/container'
import renderer from 'react-test-renderer'

describe('<Hero />', () => {
  let component
  let renderedComponent

  describe('by default', () => {
    beforeEach(() => {
      component = mount(<Hero>FooBar</Hero>)
      renderedComponent = renderer.create(<Hero>FooBar</Hero>).toJSON()
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

    it('matches with snapshot', () => {
      expect(renderedComponent).toMatchSnapshot()
    })
  })
})
