import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { SingleEntryTable as SingleEntryTableComponent } from './index'
import { Container } from '../../grid/container'

export default {
  component: SingleEntryTable,
  title: 'Tables/SingleEntryTable',
  decorators: [withInfo],
  parameters: {
    component: SingleEntryTable,
    info: {
      text: `
        # SingleEntryTable
        &nbsp;

        ## Import
        ~~~js
        import { SingleEntryTable } from '@kisskissbankbank/kitten/src/components/tables/double-entry-table'
        ~~~

        ## Usage
        &nbsp;

        #### Default
        ~~~js
        <SingleEntryTable id="…">
          <SingleEntryTable.Header
            {...props}
            headerRowProps={{…}}
          >
            <SingleEntryTable.HeaderCol />
            …
            <SingleEntryTable.HeaderCol />
          </SingleEntryTable.Header>

          <SingleEntryTable.Body>
            <SingleEntryTable.Row>
              <SingleEntryTable.Col />
              <SingleEntryTable.Col>
                …
              </SingleEntryTable.Col>
            </SingleEntryTable.Row>
            <SingleEntryTable.Row>
              <SingleEntryTable.Col />
              <SingleEntryTable.Col>
                …
              </SingleEntryTable.Col>
            </SingleEntryTable.Row>
          </SingleEntryTable.Body>
        </SingleEntryTable>
        ~~~

      `,
      header: false,
      propTables: false,
    },
  },
}

export const SingleEntryTable = () => (
  <Container style={{ marginTop: '5em', marginBottom: '5em' }}>
    <SingleEntryTableComponent id="TestSingleEntryTable">
      <SingleEntryTableComponent.Header className="customHeaderClass">
        <SingleEntryTableComponent.HeaderCol>
          Header 0
        </SingleEntryTableComponent.HeaderCol>
        <SingleEntryTableComponent.HeaderCol>
          Header 1
        </SingleEntryTableComponent.HeaderCol>
        <SingleEntryTableComponent.HeaderCol>
          Header 2
        </SingleEntryTableComponent.HeaderCol>
        <SingleEntryTableComponent.HeaderCol>
          Header 3
        </SingleEntryTableComponent.HeaderCol>
        <SingleEntryTableComponent.HeaderCol>
          Header 4
        </SingleEntryTableComponent.HeaderCol>
        <SingleEntryTableComponent.HeaderCol>
          Header 5
        </SingleEntryTableComponent.HeaderCol>
        <SingleEntryTableComponent.HeaderCol>
          Header 6
        </SingleEntryTableComponent.HeaderCol>
        <SingleEntryTableComponent.HeaderCol>
          Header 7
        </SingleEntryTableComponent.HeaderCol>
        <SingleEntryTableComponent.HeaderCol>
          Header 8
        </SingleEntryTableComponent.HeaderCol>
        <SingleEntryTableComponent.HeaderCol>
          Header 9
        </SingleEntryTableComponent.HeaderCol>
        <SingleEntryTableComponent.HeaderCol>
          Header 10
        </SingleEntryTableComponent.HeaderCol>
        <SingleEntryTableComponent.HeaderCol>
          Header 11
        </SingleEntryTableComponent.HeaderCol>
        <SingleEntryTableComponent.HeaderCol>
          Header 12
        </SingleEntryTableComponent.HeaderCol>
        <SingleEntryTableComponent.HeaderCol>
          Header 13
        </SingleEntryTableComponent.HeaderCol>
      </SingleEntryTableComponent.Header>

      <SingleEntryTableComponent.Body>
        <SingleEntryTableComponent.Row>
          <SingleEntryTableComponent.Col>
            Content 0
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 1
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 2
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 3
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 4
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 5
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 6
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 7
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 8
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 9
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 10
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 11
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 12
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 13
          </SingleEntryTableComponent.Col>
        </SingleEntryTableComponent.Row>
        <SingleEntryTableComponent.Row>
          <SingleEntryTableComponent.Col>
            Content 0
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 1
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 2
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 3
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 4
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 5
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 6
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 7
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 8
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 9
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 10
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 11
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 12
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 13
          </SingleEntryTableComponent.Col>
        </SingleEntryTableComponent.Row>
        <SingleEntryTableComponent.Row>
          <SingleEntryTableComponent.Col>
            Content 0
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 1
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 2
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 3
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 4
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 5
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 6
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 7
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 8
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 9
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 10
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 11
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 12
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 13
          </SingleEntryTableComponent.Col>
        </SingleEntryTableComponent.Row>
        <SingleEntryTableComponent.Row>
          <SingleEntryTableComponent.Col>
            Content 0
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 1
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 2
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 3
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 4
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 5
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 6
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 7
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 8
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 9
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 10
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 11
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 12
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 13
          </SingleEntryTableComponent.Col>
        </SingleEntryTableComponent.Row>
        <SingleEntryTableComponent.Row>
          <SingleEntryTableComponent.Col>
            Content 0
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 1
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 2
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 3
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 4
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 5
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 6
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 7
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 8
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 9
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 10
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 11
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 12
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 13
          </SingleEntryTableComponent.Col>
        </SingleEntryTableComponent.Row>
        <SingleEntryTableComponent.Row>
          <SingleEntryTableComponent.Col>
            Content 0
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 1
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 2
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 3
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 4
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 5
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 6
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 7
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 8
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 9
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 10
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 11
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 12
          </SingleEntryTableComponent.Col>
          <SingleEntryTableComponent.Col>
            Content 13
          </SingleEntryTableComponent.Col>
        </SingleEntryTableComponent.Row>
      </SingleEntryTableComponent.Body>
    </SingleEntryTableComponent>
  </Container>
)
