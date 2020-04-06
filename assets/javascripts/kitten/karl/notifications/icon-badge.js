import React from 'react'
import { Grid, GridCol } from '../../components/grid/grid'
import { IconBadge } from '../../components/notifications/icon-badge'
import { CheckedIcon } from '../../components/icons/checked-icon'
import { KarlExampleTitle } from '../../karl/examples/title'

export const KarlIconBadge = props => (
  <Grid>
    <GridCol>
      <Grid>
        <GridCol col-s="3">
          <KarlExampleTitle>With on character</KarlExampleTitle>
          <div style={styles.badge}>
            <IconBadge {...props}>C</IconBadge>
          </div>
        </GridCol>

        <GridCol col-s="3">
          <KarlExampleTitle>With two characters</KarlExampleTitle>
          <div style={styles.badge}>
            <IconBadge {...props}>A+</IconBadge>
          </div>
        </GridCol>

        <GridCol col-s="3">
          <KarlExampleTitle>With svg</KarlExampleTitle>
          <div style={styles.badge}>
            <IconBadge valid {...props}>
              <CheckedIcon style={styles.iconSvg} />
            </IconBadge>
          </div>
        </GridCol>
      </Grid>
    </GridCol>

    <GridCol>
      <Grid>
        <GridCol col-s="3">
          <KarlExampleTitle>With big badge</KarlExampleTitle>
          <div style={styles.badge.big}>
            <IconBadge big {...props}>
              A+
            </IconBadge>
          </div>
        </GridCol>

        <GridCol col-s="3">
          <KarlExampleTitle>With huge badge</KarlExampleTitle>
          <div style={styles.badge.huge}>
            <IconBadge huge {...props}>
              A+
            </IconBadge>
          </div>
        </GridCol>
      </Grid>
    </GridCol>
  </Grid>
)

const bigSize = {
  width: 40,
  height: 40,
}

const hugeSize = {
  width: 50,
  height: 50,
}

const styles = {
  badge: {
    width: 30,
    height: 30,
    big: bigSize,
    huge: hugeSize,
  },
  iconSvg: {
    display: 'block',
    margin: 0,
    padding: 0,
    width: 11,
    height: 11,
  },
}
