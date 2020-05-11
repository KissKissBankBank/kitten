import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { SingleEntryTable } from './index'
import { Container } from '../../grid/container'

const info = {
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
}

storiesOf('Tables/SingleEntryTable', module)
  .addDecorator(withInfo)
  .add(
    'default',
    () => {
      return (
        <Container style={{ marginTop: '5em', marginBottom: '5em' }}>
          <SingleEntryTable id="TestSingleEntryTable">
            <SingleEntryTable.Header className="customHeaderClass">
              <SingleEntryTable.HeaderCol>Header 0</SingleEntryTable.HeaderCol>
              <SingleEntryTable.HeaderCol>Header 1</SingleEntryTable.HeaderCol>
              <SingleEntryTable.HeaderCol>Header 2</SingleEntryTable.HeaderCol>
              <SingleEntryTable.HeaderCol>Header 3</SingleEntryTable.HeaderCol>
              <SingleEntryTable.HeaderCol>Header 4</SingleEntryTable.HeaderCol>
              <SingleEntryTable.HeaderCol>Header 5</SingleEntryTable.HeaderCol>
              <SingleEntryTable.HeaderCol>Header 6</SingleEntryTable.HeaderCol>
              <SingleEntryTable.HeaderCol>Header 7</SingleEntryTable.HeaderCol>
              <SingleEntryTable.HeaderCol>Header 8</SingleEntryTable.HeaderCol>
              <SingleEntryTable.HeaderCol>Header 9</SingleEntryTable.HeaderCol>
              <SingleEntryTable.HeaderCol>Header 10</SingleEntryTable.HeaderCol>
              <SingleEntryTable.HeaderCol>Header 11</SingleEntryTable.HeaderCol>
              <SingleEntryTable.HeaderCol>Header 12</SingleEntryTable.HeaderCol>
              <SingleEntryTable.HeaderCol>Header 13</SingleEntryTable.HeaderCol>
            </SingleEntryTable.Header>

            <SingleEntryTable.Body>
              <SingleEntryTable.Row>
                <SingleEntryTable.Col>Content 0</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 1</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 2</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 3</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 4</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 5</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 6</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 7</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 8</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 9</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 10</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 11</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 12</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 13</SingleEntryTable.Col>
              </SingleEntryTable.Row>
              <SingleEntryTable.Row>
                <SingleEntryTable.Col>Content 0</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 1</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 2</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 3</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 4</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 5</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 6</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 7</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 8</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 9</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 10</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 11</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 12</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 13</SingleEntryTable.Col>
              </SingleEntryTable.Row>
              <SingleEntryTable.Row>
                <SingleEntryTable.Col>Content 0</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 1</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 2</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 3</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 4</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 5</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 6</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 7</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 8</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 9</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 10</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 11</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 12</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 13</SingleEntryTable.Col>
              </SingleEntryTable.Row>
              <SingleEntryTable.Row>
                <SingleEntryTable.Col>Content 0</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 1</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 2</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 3</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 4</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 5</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 6</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 7</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 8</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 9</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 10</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 11</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 12</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 13</SingleEntryTable.Col>
              </SingleEntryTable.Row>
              <SingleEntryTable.Row>
                <SingleEntryTable.Col>Content 0</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 1</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 2</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 3</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 4</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 5</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 6</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 7</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 8</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 9</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 10</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 11</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 12</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 13</SingleEntryTable.Col>
              </SingleEntryTable.Row>
              <SingleEntryTable.Row>
                <SingleEntryTable.Col>Content 0</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 1</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 2</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 3</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 4</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 5</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 6</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 7</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 8</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 9</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 10</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 11</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 12</SingleEntryTable.Col>
                <SingleEntryTable.Col>Content 13</SingleEntryTable.Col>
              </SingleEntryTable.Row>
            </SingleEntryTable.Body>
          </SingleEntryTable>
        </Container>
      )
    },
    { info },
  )
