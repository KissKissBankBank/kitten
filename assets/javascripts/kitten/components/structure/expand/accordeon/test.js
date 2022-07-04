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

  describe('with isAnimated prop set to `false`', () => {
    beforeEach(() => {
      component = renderer.create(
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
      ).toJSON()
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

  describe('with custom classNames', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Accordeon className="custom1" data-test>
            <Accordeon.Item className="custom2">
              <Accordeon.Header className="custom3">Header</Accordeon.Header>
              <Accordeon.Content className="custom4">Content</Accordeon.Content>
            </Accordeon.Item>

            <Accordeon.Item data-test>
              <Accordeon.Header data-test>Header</Accordeon.Header>
              <Accordeon.Content data-test>Content</Accordeon.Content>
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
