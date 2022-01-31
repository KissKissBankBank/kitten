import React from 'react'
import { SingleEntryTable } from './index'

export default {
  title: 'Structure/Tables/SingleEntryTable',
  component: SingleEntryTable,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="SingleEntryTable" />
      ),
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
  args: {
    isSliding: false,
  },
  argTypes: {
    isSliding: { control: 'boolean' },
  },
}

export const Default = args => (
  <SingleEntryTable id="TestSingleEntryTable" {...args}>
    <SingleEntryTable.Header className="customHeaderClass">
      {Array(8)
        .fill(0)
        .map((key, index) => (
          <SingleEntryTable.HeaderCol
            key={`header_${index}`}
            style={{ width: 200 }}
          >
            Header {index + 1}
          </SingleEntryTable.HeaderCol>
        ))}
    </SingleEntryTable.Header>

    <SingleEntryTable.Body>
      {Array(12)
        .fill(0)
        .map((key, index) => (
          <SingleEntryTable.Row key={`row_${index}`}>
            {[...Array(8)].map((key, jndex) => (
              <SingleEntryTable.Col key={`row_${index}_col_${jndex}`}>
                Content {jndex + 1}
              </SingleEntryTable.Col>
            ))}
          </SingleEntryTable.Row>
        ))}
    </SingleEntryTable.Body>
  </SingleEntryTable>
)
