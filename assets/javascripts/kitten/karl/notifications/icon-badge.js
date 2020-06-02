import React from 'react'
import { pxToRem } from '../../helpers/utils/typography'
import { Grid, GridCol } from '../../components/grid/grid'
import { IconBadge } from '../../components/notifications/icon-badge'
import { CheckedIcon } from '../../components/icons/checked-icon'
import { KarlExampleTitle } from '../../karl/examples/title'
import styled from 'styled-components'

const StyledGrid = styled(Grid)`
  .karl-Badge {
    width: ${pxToRem(30)};
    height: ${pxToRem(30)};
  }

  .karl-Badge--big {
    width: ${pxToRem(40)};
    height: ${pxToRem(40)};
  }

  .karl-Badge--huge {
    width: ${pxToRem(50)};
    height: ${pxToRem(50)};
  }

  .karl-IconSVG {
    display: block;
    margin: 0;
    padding: 0;
    width: ${pxToRem(11)};
    height: ${pxToRem(11)};
  }
`

export const KarlIconBadge = props => (
  <StyledGrid>
    <GridCol>
      <Grid>
        <GridCol col-s="3">
          <KarlExampleTitle>With on character</KarlExampleTitle>
          <div className="karl-Badge">
            <IconBadge {...props}>C</IconBadge>
          </div>
        </GridCol>

        <GridCol col-s="3">
          <KarlExampleTitle>With two characters</KarlExampleTitle>
          <div className="karl-Badge">
            <IconBadge {...props}>A+</IconBadge>
          </div>
        </GridCol>

        <GridCol col-s="3">
          <KarlExampleTitle>With svg</KarlExampleTitle>
          <div className="karl-Badge">
            <IconBadge valid {...props}>
              <CheckedIcon className="karl-IconSVG" />
            </IconBadge>
          </div>
        </GridCol>
      </Grid>
    </GridCol>

    <GridCol>
      <Grid>
        <GridCol col-s="3">
          <KarlExampleTitle>With big badge</KarlExampleTitle>
          <div className="karl-Badge--big">
            <IconBadge big {...props}>
              A+
            </IconBadge>
          </div>
        </GridCol>

        <GridCol col-s="3">
          <KarlExampleTitle>With huge badge</KarlExampleTitle>
          <div className="karl-Badge--huge">
            <IconBadge huge {...props}>
              A+
            </IconBadge>
          </div>
        </GridCol>
      </Grid>
    </GridCol>
  </StyledGrid>
)
