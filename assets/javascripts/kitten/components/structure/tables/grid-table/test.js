import React from 'react'
import renderer from 'react-test-renderer'
import { GridTable } from './index'

describe('<GridTable />', () => {
  let component

  describe('with a complete structure and custom classes', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <GridTable id="TestGridTable" className="CustomGridTable">
            <GridTable.Header
              className="customHeaderClass"
              listProps={{ className: 'customListClass' }}
            >
              <GridTable.Col>Header 1</GridTable.Col>
              <GridTable.Col>Header 2</GridTable.Col>
              <GridTable.Col>Header 3</GridTable.Col>
            </GridTable.Header>

            <GridTable.Body>
              <GridTable.Row isHighlighted>
                <GridTable.Col>Content 1</GridTable.Col>
                <GridTable.Col>Content 2</GridTable.Col>
                <GridTable.Col>Content 3</GridTable.Col>
              </GridTable.Row>
              <GridTable.Row
                className="customRowClass"
                listProps={{ className: 'customListClass' }}
              >
                <GridTable.Col>Content 1</GridTable.Col>
                <GridTable.Col>Content 2</GridTable.Col>
                <GridTable.Col>Content 3</GridTable.Col>
              </GridTable.Row>
            </GridTable.Body>
          </GridTable>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
