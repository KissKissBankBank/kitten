import React from 'react'
import {
  SideGrid,
  SideGridContent,
  SideGridAside,
} from '../../../components/grid/side-grid'

describe('<SideGrid />', () => {
  const component = shallow(
    <SideGrid>
      <p>Test</p>
    </SideGrid>,
  )

  it('renders a <div class="k-SideGrid" />', () => {
    expect(component.hasClass('k-SideGrid')).toBe(true)
  })

  it('renders children', () => {
    expect(component.text()).toBe('Test')
  })

  describe('with aside options', () => {
    const component = shallow(
      <SideGrid asidePosition="start" asideSize="large" />,
    )

    it('has the right classes', () => {
      expect(component.hasClass('k-SideGrid--asideStart')).toBe(true)
      expect(component.hasClass('k-SideGrid--asideLarge')).toBe(true)
    })
  })

  describe('with custom class', () => {
    const component = shallow(
      <SideGrid
        className="custom-class"
        containerClassName="container-custom-class"
        rowClassName="row-custom-class"
      />,
    )

    it('has the right classes', () => {
      expect(component.hasClass('custom-class')).toBe(true)
      expect(component.find('.container-custom-class').exists()).toBe(true)
      expect(component.find('.row-custom-class').exists()).toBe(true)
    })
  })
})

describe('<SideGridContent />', () => {
  const component = shallow(
    <SideGridContent>
      <p>Test</p>
    </SideGridContent>,
  )

  it('renders a <div class="k-SideGrid__content" />', () => {
    expect(component.hasClass('k-SideGrid__content')).toBe(true)
  })

  it('renders children', () => {
    expect(component.text()).toBe('Test')
  })
})

describe('<SideGridAside />', () => {
  const component = shallow(
    <SideGridAside>
      <p>Test</p>
    </SideGridAside>,
  )

  it('renders a <div class="k-SideGrid__content" />', () => {
    expect(component.hasClass('k-SideGrid__aside')).toBe(true)
  })

  it('renders children', () => {
    expect(component.text()).toBe('Test')
  })

  it('renders a child <div class="k-SideGrid__asideContent" />', () => {
    const child = component.children().first()
    expect(child.hasClass('k-SideGrid__asideContent')).toBe(true)
  })
})
