import React from 'react'
import renderer from 'react-test-renderer'
import { SingleEntryTable } from './index'

describe('<SingleEntryTable />', () => {
  let component

  describe('with a complete structure and custom classes', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <SingleEntryTable id="SingleEntryTable">
            <SingleEntryTable.Header className="customHeaderClass">
              <SingleEntryTable.HeaderCol>Header 1</SingleEntryTable.HeaderCol>
              <SingleEntryTable.HeaderCol>Header 2</SingleEntryTable.HeaderCol>
              <SingleEntryTable.HeaderCol>Header 3</SingleEntryTable.HeaderCol>
            </SingleEntryTable.Header>

            <SingleEntryTable.Body>
              <SingleEntryTable.Row>
                <SingleEntryTable.Col>Content 1</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 2</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 3</SingleEntryTable.Col>
              </SingleEntryTable.Row>
              <SingleEntryTable.Row className="customRowClass">
                <SingleEntryTable.Col>Content 1</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 2</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 3</SingleEntryTable.Col>
              </SingleEntryTable.Row>
            </SingleEntryTable.Body>
          </SingleEntryTable>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
