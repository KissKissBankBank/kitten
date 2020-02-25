import React from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'

const Container = styled.div`
  padding: ${pxToRem(10)};
  display: flex;
  align-items: center;
`

export const Logo = props => <Container>{props.children}</Container>
