import React from 'react'
import { Text, List } from 'kitten'
import concat from 'lodash/concat'
import { Subheading } from '@storybook/addon-docs'

export const FileImport = ({ importString }) => (
  <>
    <Subheading>Import</Subheading>
    <pre className="k-u-margin-top-singleHalf k-u-margin-bottom-quadruple">
      import {`{ ${importString} }`} from '@kisskissbankbank/kitten'
    </pre>
  </>
)
