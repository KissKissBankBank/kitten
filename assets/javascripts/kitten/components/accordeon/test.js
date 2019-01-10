import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Accordeon } from './index'

describe('<Accordeon />', () => {
  let component
  let handleChange

  describe('with one item', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Accordeon>
            <Accordeon.Item>
              <Accordeon.Header>Header</Accordeon.Header>
              <Accordeon.Content>Content</Accordeon.Content>
            </Accordeon.Item>
          </Accordeon>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with two items', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Accordeon>
            <Accordeon.Item>
              <Accordeon.Header>Header</Accordeon.Header>
              <Accordeon.Content>Content</Accordeon.Content>
            </Accordeon.Item>

            <Accordeon.Item>
              <Accordeon.Header>Header</Accordeon.Header>
              <Accordeon.Content>Content</Accordeon.Content>
            </Accordeon.Item>
          </Accordeon>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with the first selected item', () => {
    beforeEach(() => {
      component = mount(
        <Accordeon>
          <Accordeon.Item>
            <Accordeon.Header>Header</Accordeon.Header>
            <Accordeon.Content>Content</Accordeon.Content>
          </Accordeon.Item>

          <Accordeon.Item>
            <Accordeon.Header>Header</Accordeon.Header>
            <Accordeon.Content>Content</Accordeon.Content>
          </Accordeon.Item>
        </Accordeon>,
      )

      component.setState({ selectedItem: 0 })
    })

    it('has selected styles', () => {
      const item = component.find(Accordeon.Item).first()
      const header = item.find(Accordeon.Header).first()
      const content = item.find(Accordeon.Content).first()

      expect(header).toHaveStyleRule('border-bottom-left-radius', '0')
      expect(content).toHaveStyleRule('display', 'block')
    })
  })

  describe('with the second selected item after click simulate', () => {
    beforeEach(() => {
      component = mount(
        <Accordeon>
          <Accordeon.Item>
            <Accordeon.Header>Header #1</Accordeon.Header>
            <Accordeon.Content>Content</Accordeon.Content>
          </Accordeon.Item>

          <Accordeon.Item>
            <Accordeon.Header>Header #2</Accordeon.Header>
            <Accordeon.Content>Content</Accordeon.Content>
          </Accordeon.Item>
        </Accordeon>,
      )

      component
        .find(Accordeon.Header)
        .last()
        .simulate('click')
    })

    it('has selected styles', () => {
      const item = component.find(Accordeon.Item).last()
      const header = item.find(Accordeon.Header).first()
      const content = item.find(Accordeon.Content).first()

      expect(header).toHaveStyleRule('border-bottom-left-radius', '0')
      expect(content).toHaveStyleRule('display', 'block')
    })
  })

  describe('with onChange prop', () => {
    beforeEach(() => {
      handleChange = jest.fn()
      component = mount(
        <Accordeon onChange={handleChange}>
          <Accordeon.Item>
            <Accordeon.Header>Header #1</Accordeon.Header>
            <Accordeon.Content>Content</Accordeon.Content>
          </Accordeon.Item>
        </Accordeon>,
      )

      component
        .find(Accordeon.Header)
        .first()
        .simulate('click')
    })

    it('trigger method', () => {
      expect(handleChange).toHaveBeenCalled()
    })
  })

  it('should onChange give item id if setted', () => {
    let id = 0
    expect(id).toEqual(0)
    component = mount(
      <Accordeon onChange={item => (id = item)}>
        <Accordeon.Item id="CLICKED">
          <Accordeon.Header>Header #1</Accordeon.Header>
          <Accordeon.Content>Content</Accordeon.Content>
        </Accordeon.Item>
      </Accordeon>,
    )
    component
      .find(Accordeon.Header)
      .first()
      .simulate('click')
    expect(id).toEqual('CLICKED')
  })
})
