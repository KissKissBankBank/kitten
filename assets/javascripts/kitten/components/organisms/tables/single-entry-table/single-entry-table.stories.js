import React from 'react'
import { boolean, number } from '@storybook/addon-knobs'
import { SingleEntryTable } from './index'

export const Default = () => (
  <SingleEntryTable
    id="TestSingleEntryTable"
    isSliding={boolean('isSliding', false)}
  >
    <SingleEntryTable.Header className="customHeaderClass">
      {[...Array(6)].map((key, index) => (
        <SingleEntryTable.HeaderCol
          key={`header_${index}`}
          style={{ width: number(`Column ${index + 1} width`, 100) }}
        >
          Header {index + 1}
        </SingleEntryTable.HeaderCol>
      ))}
    </SingleEntryTable.Header>

    <SingleEntryTable.Body>
      {[...Array(12)].map((key, index) => (
        <SingleEntryTable.Row key={`row_${index}`}>
          {[...Array(6)].map((key, jndex) => (
            <SingleEntryTable.Col key={`row_${index}_col_${jndex}`}>
              Content {jndex + 1}
            </SingleEntryTable.Col>
          ))}
        </SingleEntryTable.Row>
      ))}
    </SingleEntryTable.Body>
  </SingleEntryTable>
)

Default.decorators = [
  Story => (
    <div className="story-Container">
      <Story />
    </div>
  ),
]
