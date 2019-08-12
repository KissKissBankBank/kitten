import React from 'react'
import renderer from 'react-test-renderer'
import { ListTable } from './index'

describe('<ListTable />', () => {
  let component

  describe('with a complete structure', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ListTable id="TestListTable">
            <ListTable.Header>
              <ListTable.Col>Header 1</ListTable.Col>
              <ListTable.Col>Header 2</ListTable.Col>
              <ListTable.Col>Header 3</ListTable.Col>
            </ListTable.Header>

            <ListTable.Body>
              <ListTable.Row selected>
                <ListTable.Col>Content 1</ListTable.Col>
                <ListTable.Col>Content 2</ListTable.Col>
                <ListTable.Col>Content 3</ListTable.Col>
              </ListTable.Row>
              <ListTable.Row>
                <ListTable.Col>Content 1</ListTable.Col>
                <ListTable.Col>Content 2</ListTable.Col>
                <ListTable.Col>Content 3</ListTable.Col>
              </ListTable.Row>
            </ListTable.Body>
          </ListTable>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
