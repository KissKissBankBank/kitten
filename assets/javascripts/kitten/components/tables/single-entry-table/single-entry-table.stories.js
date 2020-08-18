import React from 'react'
import { SingleEntryTable as SingleEntryTableComponent } from './index'

export const Default = () => (
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
)
