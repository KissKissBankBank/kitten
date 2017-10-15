import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
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

  it('renders a <div class="k-SideGrid" />', () => {
    expect(component).to.have.className('k-SideGrid')
  })

  it('renders children', () => {
    expect(component).to.have.text('Test')
  })

  describe('with aside options', () => {
    const component = shallow(
      <SideGrid asidePosition="start" asideSize="large" />
    )

    it('has the right classes', () => {
      expect(component).to.have.className('k-SideGrid--asideStart')
      expect(component).to.have.className('k-SideGrid--asideLarge')
    })
  })

  describe('with custom class', () => {
    const component = shallow(
      <SideGrid className="custom-class"
                containerClassName="container-custom-class"
                rowClassName="row-custom-class" />
    )

    it('has the right classes', () => {
      expect(component).to.have.className('custom-class')
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

  it('renders a <div class="k-SideGrid__content" />', () => {
    expect(component).to.have.className('k-SideGrid__content')
  })

  it('renders children', () => {
    expect(component).to.have.text('Test')
  })
})

describe('<SideGridAside />', () => {
  const component = shallow(
    <SideGridAside>
      <p>Test</p>
    </SideGridAside>
  )

  it('renders a <div class="k-SideGrid__content" />', () => {
    expect(component).to.have.className('k-SideGrid__aside')
  })

  it('renders children', () => {
    expect(component).to.have.text('Test')
  })

  it('renders a child <div class="k-SideGrid__asideContent" />', () => {
    const child = component.children().first()
    expect(child).to.have.className('k-SideGrid__asideContent')
  })
})
