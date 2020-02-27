import React from 'react'
import renderer from 'react-test-renderer'
import { DoubleEntryTableLite } from './index'

describe('<DoubleEntryTableLite />', () => {
  let component

  describe('with a complete structure and custom classes', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <DoubleEntryTableLite id="DestBoubleEntryTable">
            <DoubleEntryTableLite.Header className="customHeaderClass">
              <DoubleEntryTableLite.HeaderCol>
                Header 1
              </DoubleEntryTableLite.HeaderCol>
              <DoubleEntryTableLite.HeaderCol>
                Header 2
              </DoubleEntryTableLite.HeaderCol>
              <DoubleEntryTableLite.HeaderCol>
                Header 3
              </DoubleEntryTableLite.HeaderCol>
            </DoubleEntryTableLite.Header>

            <DoubleEntryTableLite.Body>
              <DoubleEntryTableLite.Row>
                <DoubleEntryTableLite.TitleCol>
                  Content 1
                </DoubleEntryTableLite.TitleCol>
                <DoubleEntryTableLite.Col>Content 2</DoubleEntryTableLite.Col>
                <DoubleEntryTableLite.Col>Content 3</DoubleEntryTableLite.Col>
              </DoubleEntryTableLite.Row>
              <DoubleEntryTableLite.Row className="customRowClass">
                <DoubleEntryTableLite.TitleCol>
                  Content 1
                </DoubleEntryTableLite.TitleCol>
                <DoubleEntryTableLite.Col>Content 2</DoubleEntryTableLite.Col>
                <DoubleEntryTableLite.Col>Content 3</DoubleEntryTableLite.Col>
              </DoubleEntryTableLite.Row>
            </DoubleEntryTableLite.Body>
          </DoubleEntryTableLite>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
