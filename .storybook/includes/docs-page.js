import React from 'react'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  Heading,
  PRIMARY_STORY,
} from '@storybook/addon-docs'
import { FileUrl } from 'storybook/file-url'
import { FileImport } from 'storybook/file-import'

export const DocsPage = ({ filepath, filenames, importString }) => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <details className="docs-page-details">
      <summary>
        <Heading>Source</Heading>
      </summary>
      <FileUrl filepath={filepath} filenames={filenames} />
      <FileImport importString={importString} />
    </details>
    <Heading>Usage</Heading>
    <Primary />
    <ArgsTable story={PRIMARY_STORY} />
    <Stories />
  </>
)
