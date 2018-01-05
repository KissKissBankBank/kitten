import React from 'react'

import {
  SideGrid,
  SideGridContent,
  SideGridAside,
} from 'kitten/components/grid/side-grid'

describe('<SideGrid />', () => {
  const component = shallow(
    <SideGrid>
      <p>Test</p>
    </SideGrid>
  )

  test('renders a <div class="k-SideGrid" />', () => {
    expect(component.hasClass('k-SideGrid')).toBe(true)
  })

  test('renders children', () => {
    expect(component).to.have.text('Test')
  })

  describe('with aside options', () => {
    const component = shallow(
      <SideGrid asidePosition="start" asideSize="large" />
    )

    test('has the right classes', () => {
      expect(component.hasClass('k-SideGrid--asideStart')).toBe(true)
      expect(component.hasClass('k-SideGrid--asideLarge')).toBe(true)
    })
  })

  describe('with custom class', () => {
    const component = shallow(
      <SideGrid className="custom-class"
                containerClassName="container-custom-class"
                rowClassName="row-custom-class" />
    )

    test('has the right classes', () => {
      expect(component.hasClass('custom-class')).toBe(true)
      expect(component).to.have.descendants('.container-custom-class')
      expect(component).to.have.descendants('.row-custom-class')
    })
  })
})

describe('<SideGridContent />', () => {
  const component = shallow(
    <SideGridContent>
      <p>Test</p>
    </SideGridContent>
  )

  test('renders a <div class="k-SideGrid__content" />', () => {
    expect(component.hasClass('k-SideGrid__content')).toBe(true)
  })

  test('renders children', () => {
    expect(component).to.have.text('Test')
  })
})

describe('<SideGridAside />', () => {
  const component = shallow(
    <SideGridAside>
      <p>Test</p>
    </SideGridAside>
  )

  test('renders a <div class="k-SideGrid__content" />', () => {
    expect(component.hasClass('k-SideGrid__aside')).toBe(true)
  })

  test('renders children', () => {
    expect(component).to.have.text('Test')
  })

  test('renders a child <div class="k-SideGrid__asideContent" />', () => {
    const child = component.children().first()
    expect(child.hasClass('k-SideGrid__asideContent')).toBe(true)
  })
})
