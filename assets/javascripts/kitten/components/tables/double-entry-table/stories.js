import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, number, select } from '@storybook/addon-knobs'
import { DoubleEntryTable } from './index'
import { Container } from '../../grid/container'

import { ScreenConfig } from '../../../constants/screen-config'
import { VisuallyHidden } from '../../accessibility/visually-hidden'
import { pxToRem } from '../../../helpers/utils/typography'

const info = {
  text: `
    # DoubleEntryTable
    &nbsp;

    ## Import
    ~~~js
    import { DoubleEntryTable } from '@kisskissbankbank/kitten/src/components/tables/double-entry-table'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <DoubleEntryTable id="…">
      <DoubleEntryTable.Header
        {...props}
        headerRowProps={{…}}
      >
        <DoubleEntryTable.HeaderCol />
          …
        <DoubleEntryTable.HeaderCol />
      </DoubleEntryTable.Header>

      <DoubleEntryTable.Body>
        <DoubleEntryTable.Row>
          <DoubleEntryTable.TitleCol />
          <DoubleEntryTable.Col>
            …
          </DoubleEntryTable.Col>
        </DoubleEntryTable.Row>
        <DoubleEntryTable.Row>
          <DoubleEntryTable.TitleCol />
          <DoubleEntryTable.Col>
            …
          </DoubleEntryTable.Col>
        </DoubleEntryTable.Row>
      </DoubleEntryTable.Body>
    </DoubleEntryTable>
    ~~~

  `,
  header: false,
  propTables: false,
}

storiesOf('Tables/DoubleEntryTable', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'default',
    () => {
      return (
        <Container style={{ marginTop: '5em', marginBottom: '5em' }}>
          <DoubleEntryTable id="TestDoubleEntryTable">
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
              <DoubleEntryTable.Row isHighlighted>
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
        </Container>
      )
    },
    { info },
  )
