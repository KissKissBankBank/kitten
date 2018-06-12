import React from 'react'
import Radium from 'radium'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { IconBadge } from 'kitten/components/notifications/icon-badge'
import { CheckedIcon } from 'kitten/components/icons/checked-icon'
import COLORS from 'kitten/constants/colors-config'
import { KarlExampleTitle } from 'kitten/karl/examples/title'

export const KarlIconBadge = props => (
  <Grid>
    <GridCol col-s="4">
      <KarlExampleTitle>With on character</KarlExampleTitle>
      <div style={styles.badge}>
        <IconBadge {...props}>C</IconBadge>
      </div>
    </GridCol>

    <GridCol col-s="4">
      <KarlExampleTitle>With two characters</KarlExampleTitle>
      <div style={styles.badge}>
        <IconBadge {...props}>A+</IconBadge>
      </div>
    </GridCol>

    <GridCol col-s="4">
      <KarlExampleTitle>With big badge</KarlExampleTitle>
      <div style={styles.badge.big}>
        <IconBadge big {...props}>
          A+
        </IconBadge>
      </div>
    </GridCol>

    <GridCol col-s="4">
      <KarlExampleTitle>With svg</KarlExampleTitle>
      <div style={styles.badge}>
        <IconBadge valid {...props}>
          <CheckedIcon style={styles.iconSvg} />
        </IconBadge>
      </div>
    </GridCol>
  </Grid>
)

const styles = {
  badge: {
    width: 30,
    height: 30,
    big: {
      width: 40,
      height: 40,
    },
  },
  iconSvg: {
    display: 'block',
    margin: 0,
    padding: 0,
    width: 11,
    height: 11,
  },
}
