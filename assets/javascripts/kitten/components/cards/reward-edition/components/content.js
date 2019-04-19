import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'

const borderWidth = pxToRem(2)
const borderColor = COLORS.line1

const StyledContainerContent = styled.div`
  height: ${pxToRem(500)};
  padding: ${pxToRem(40)};
`

export const Content = props => <StyledContainerContent />
