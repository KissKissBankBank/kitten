import React from 'react'
import { DoubleEntryTable } from './index'

export default {
  title: 'Organisms/Tables/DoubleEntryTable',
  component: DoubleEntryTable,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="DoubleEntryTable" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container">
        {story()}
      </div>
    ),
  ], args: { firstColWidth: 240 }, argTypes: { firstColWidth: {control: 'number'} }
}

export const Default = (args) => (
  <DoubleEntryTable id="DoubleEntryTableStory" {...args}>
    <DoubleEntryTable.Header className="customHeaderClass">
      <DoubleEntryTable.HeaderCol>Header 0</DoubleEntryTable.HeaderCol>
      <DoubleEntryTable.HeaderCol>Header 1</DoubleEntryTable.HeaderCol>
      <DoubleEntryTable.HeaderCol>Header 2</DoubleEntryTable.HeaderCol>
      <DoubleEntryTable.HeaderCol>Header 3</DoubleEntryTable.HeaderCol>
      <DoubleEntryTable.HeaderCol>Header 4</DoubleEntryTable.HeaderCol>
      <DoubleEntryTable.HeaderCol>Header 5</DoubleEntryTable.HeaderCol>
      <DoubleEntryTable.HeaderCol>Header 6</DoubleEntryTable.HeaderCol>
      <DoubleEntryTable.HeaderCol>Header 7</DoubleEntryTable.HeaderCol>
      <DoubleEntryTable.HeaderCol>Header 8</DoubleEntryTable.HeaderCol>
      <DoubleEntryTable.HeaderCol>Header 9</DoubleEntryTable.HeaderCol>
      <DoubleEntryTable.HeaderCol>Header 10</DoubleEntryTable.HeaderCol>
      <DoubleEntryTable.HeaderCol>Header 11</DoubleEntryTable.HeaderCol>
      <DoubleEntryTable.HeaderCol>Header 12</DoubleEntryTable.HeaderCol>
      <DoubleEntryTable.HeaderCol>Header 13</DoubleEntryTable.HeaderCol>
    </DoubleEntryTable.Header>

    <DoubleEntryTable.Body>
      <DoubleEntryTable.Row>
        <DoubleEntryTable.TitleCol>Content 0</DoubleEntryTable.TitleCol>
        <DoubleEntryTable.Col>Content 1</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 2</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 3</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 4</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 5</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 6</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 7</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 8</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 9</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 10</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 11</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 12</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 13</DoubleEntryTable.Col>
      </DoubleEntryTable.Row>
      <DoubleEntryTable.Row>
        <DoubleEntryTable.TitleCol>Content 0</DoubleEntryTable.TitleCol>
        <DoubleEntryTable.Col>Content 1</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 2</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 3</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 4</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 5</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 6</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 7</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 8</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 9</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 10</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 11</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 12</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 13</DoubleEntryTable.Col>
      </DoubleEntryTable.Row>
      <DoubleEntryTable.Row>
        <DoubleEntryTable.TitleCol>Content 0</DoubleEntryTable.TitleCol>
        <DoubleEntryTable.Col>Content 1</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 2</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 3</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 4</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 5</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 6</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 7</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 8</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 9</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 10</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 11</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 12</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 13</DoubleEntryTable.Col>
      </DoubleEntryTable.Row>
      <DoubleEntryTable.Row>
        <DoubleEntryTable.TitleCol>Content 0</DoubleEntryTable.TitleCol>
        <DoubleEntryTable.Col>Content 1</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 2</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 3</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 4</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 5</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 6</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 7</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 8</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 9</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 10</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 11</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 12</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 13</DoubleEntryTable.Col>
      </DoubleEntryTable.Row>
      <DoubleEntryTable.Row>
        <DoubleEntryTable.TitleCol>Content 0</DoubleEntryTable.TitleCol>
        <DoubleEntryTable.Col>Content 1</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 2</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 3</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 4</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 5</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 6</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 7</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 8</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 9</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 10</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 11</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 12</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 13</DoubleEntryTable.Col>
      </DoubleEntryTable.Row>
      <DoubleEntryTable.Row>
        <DoubleEntryTable.TitleCol>Content 0</DoubleEntryTable.TitleCol>
        <DoubleEntryTable.Col>Content 1</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 2</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 3</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 4</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 5</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 6</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 7</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 8</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 9</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 10</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 11</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 12</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>Content 13</DoubleEntryTable.Col>
      </DoubleEntryTable.Row>
    </DoubleEntryTable.Body>
  </DoubleEntryTable>
)
