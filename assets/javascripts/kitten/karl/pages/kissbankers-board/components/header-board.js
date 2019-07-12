import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'
// import { Marger } from '../../../../components/layout/marger'
import { Text } from '../../../../components/typography/text'
import { Checkbox } from '../../../components/form/checkbox'
import COLORS from '../../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'

const StyledContainer = styled.div`
  color: ${COLORS.font1};
  height: ${pxToRem(90)};
  flex: 1;
`

export class HeaderBoard extends PureComponent {
  render() {
    return (
      <Container>
        <Grid>
          <GridCol>
            <StyledContainer />
          </GridCol>
        </Grid>
      </Container>
    )
  }
}
