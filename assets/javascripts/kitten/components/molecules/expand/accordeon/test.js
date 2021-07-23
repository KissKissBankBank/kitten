import React from 'react'
import renderer from 'react-test-renderer'
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
        <Accordeon selectedItem={0}>
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
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
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

      component.find(Accordeon.Header).last().simulate('click')
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
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

      component.find(Accordeon.Header).first().simulate('click')
    })

    it('trigger method', () => {
      expect(handleChange).toHaveBeenCalled()
    })
  })

  it('should onChange give item id if set', () => {
    let id = 0
    expect(id).toEqual(0)
    component = mount(
      <Accordeon onChange={item => (id = item)}>
        <Accordeon.Item>
          <Accordeon.Header>Header #1</Accordeon.Header>
          <Accordeon.Content>Content</Accordeon.Content>
        </Accordeon.Item>
        <Accordeon.Item id="CLICKED">
          <Accordeon.Header>Header #1</Accordeon.Header>
          <Accordeon.Content>Content</Accordeon.Content>
        </Accordeon.Item>
      </Accordeon>,
    )
    component.find(Accordeon.Header).last().simulate('click')
    expect(id).toEqual('CLICKED')
  })

  it('should onChange give item id if not set', () => {
    let id = 0
    expect(id).toEqual(0)
    component = mount(
      <Accordeon onChange={item => (id = item)} id="CLICKED">
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
    component.find(Accordeon.Header).last().simulate('click')
    expect(id).toEqual('CLICKED-1')
  })

  describe('with isAnimated prop set to `false`', () => {
    beforeEach(() => {
      component = mount(
        <Accordeon isAnimated={false}>
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
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with an ID', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Accordeon id="custom_id">
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

  describe('with an variant', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Accordeon variant="orion">
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
})
