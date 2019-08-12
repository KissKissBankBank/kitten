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
              <ListTable.Col isHeader colNumber={1}>
                Header 1
              </ListTable.Col>
              <ListTable.Col isHeader colNumber={2}>
                Header 2
              </ListTable.Col>
              <ListTable.Col isHeader colNumber={3}>
                Header 3
              </ListTable.Col>
            </ListTable.Header>

            <ListTable.Body>
              <ListTable.Row selected>
                <ListTable.Col colNumber={1}>Content 1</ListTable.Col>
                <ListTable.Col colNumber={2}>Content 2</ListTable.Col>
                <ListTable.Col colNumber={3}>Content 3</ListTable.Col>
              </ListTable.Row>
              <ListTable.Row>
                <ListTable.Col colNumber={1}>Content 1</ListTable.Col>
                <ListTable.Col colNumber={2}>Content 2</ListTable.Col>
                <ListTable.Col colNumber={3}>Content 3</ListTable.Col>
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
