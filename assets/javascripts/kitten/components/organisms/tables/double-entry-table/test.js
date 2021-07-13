import React from 'react'
import renderer from 'react-test-renderer'
import { DoubleEntryTable } from './index'

describe('<DoubleEntryTable />', () => {
  let component

  describe('with a complete structure and custom classes', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <DoubleEntryTable id="DestBoubleEntryTable" className="customClass">
            <DoubleEntryTable.Header className="customHeaderClass">
              <DoubleEntryTable.HeaderCol>Header 1</DoubleEntryTable.HeaderCol>
              <DoubleEntryTable.HeaderCol>Header 2</DoubleEntryTable.HeaderCol>
              <DoubleEntryTable.HeaderCol className="customHeaderColClass">
                Header 3
              </DoubleEntryTable.HeaderCol>
            </DoubleEntryTable.Header>

            <DoubleEntryTable.Body>
              <DoubleEntryTable.Row>
                <DoubleEntryTable.TitleCol className="customTitleColClass">
                  Content 1
                </DoubleEntryTable.TitleCol>
                <DoubleEntryTable.Col className="customColClass">
                  Content 2
                </DoubleEntryTable.Col>
                <DoubleEntryTable.Col>Content 3</DoubleEntryTable.Col>
              </DoubleEntryTable.Row>
              <DoubleEntryTable.Row className="customRowClass">
                <DoubleEntryTable.TitleCol>Content 1</DoubleEntryTable.TitleCol>
                <DoubleEntryTable.Col>Content 2</DoubleEntryTable.Col>
                <DoubleEntryTable.Col>Content 3</DoubleEntryTable.Col>
              </DoubleEntryTable.Row>
            </DoubleEntryTable.Body>
          </DoubleEntryTable>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
