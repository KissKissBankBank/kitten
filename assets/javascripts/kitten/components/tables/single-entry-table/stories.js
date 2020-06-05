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
        {[...Array(12)].map((key, index) => (
          <SingleEntryTableComponent.HeaderCol key={`header_${index}`}>
            Header {index + 1}
          </SingleEntryTableComponent.HeaderCol>
        ))}
      </SingleEntryTableComponent.Header>

      <SingleEntryTableComponent.Body>
        {[...Array(12)].map((key, index) => (
          <SingleEntryTableComponent.Row key={`row_${index}`}>
            {[...Array(12)].map((key, jndex) => (
              <SingleEntryTableComponent.Col key={`row_${index}_col_${jndex}`}>
                Content {jndex + 1}
              </SingleEntryTableComponent.Col>
            ))}
          </SingleEntryTableComponent.Row>
        ))}
      </SingleEntryTableComponent.Body>
    </SingleEntryTableComponent>
  </Container>
)
