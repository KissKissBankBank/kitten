import { css } from 'styled-components'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

export const FLUID = css`
  --Button-min-width: initial;
  min-width: initial;
  width: 100%;
`

export const ROUNDED = css`
  border-radius: var(--border-radius-rounded);
`

export const MEDIUM = css`
  --Button-min-width: ${pxToRem(200)};
  min-width: ${pxToRem(200)};
  min-height: ${pxToRem(50)};
  padding: ${pxToRem(10)} ${pxToRem(30)};
  font-size: ${stepToRem(-1)};
`

export const NANO = css`
  --Button-min-width: ${pxToRem(100)};
  min-width: ${pxToRem(100)};
  min-height: ${pxToRem(20)};
  padding: 0 ${pxToRem(6)};
  font-size: ${stepToRem(-2)};
`

export const MICRO = css`
  --Button-min-width: ${pxToRem(130)};
  min-width: ${pxToRem(130)};
  min-height: ${pxToRem(30)};
  padding: ${pxToRem(5)} ${pxToRem(10)};
  font-size: ${stepToRem(-2)};
`

export const SMALL = css`
  --Button-min-width: ${pxToRem(160)};
  min-width: ${pxToRem(160)};
  min-height: ${pxToRem(40)};
  padding: ${pxToRem(7)} ${pxToRem(20)};
  font-size: ${stepToRem(-1)};
`

export const LARGE = css`
  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    --Button-min-width: ${pxToRem(220)};
    min-width: ${pxToRem(220)};
    min-height: ${pxToRem(70)};
    padding: ${pxToRem(10)} ${pxToRem(40)};
    font-size: ${stepToRem(0)};
  }
`

export const HUGE = css`
  min-height: ${pxToRem(70)};
  font-size: ${stepToRem(-1)};
  padding: ${pxToRem(10)} ${pxToRem(10)};

  @media (min-width: ${ScreenConfig.M.min}px) {
    --Button-min-width: ${pxToRem(220)};
    min-width: ${pxToRem(220)};
    min-height: ${pxToRem(80)};
    font-size: ${stepToRem(0)};
    padding: ${pxToRem(10)} ${pxToRem(40)};
  }
`

export const GIANT = css`
  min-height: ${pxToRem(70)};
  font-size: ${stepToRem(-1)};
  padding: ${pxToRem(10)} ${pxToRem(10)};

  @media (min-width: ${ScreenConfig.M.min}px) {
    --Button-min-width: ${pxToRem(220)};
    min-width: ${pxToRem(220)};
    min-height: ${pxToRem(90)};
    font-size: ${stepToRem(0)};
    padding: ${pxToRem(10)} ${pxToRem(40)};
  }
`

export const ICON = css`
  --Button-min-width: initial;
  min-width: initial;
  min-height: initial;
  width: ${pxToRem(50)};
  height: ${pxToRem(50)};
  padding: 0;
`

export const ICON_NANO = css`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
`

export const ICON_MICRO = css`
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};
`

export const ICON_SMALL = css`
  width: ${pxToRem(40)};
  height: ${pxToRem(40)};
`

export const ICON_LARGE = css`
  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    --Button-min-width: 0;
    min-width: 0;
    min-height: 0;
    padding: 0;
    width: ${pxToRem(70)};
    height: ${pxToRem(70)};
  }
`

export const ICON_HUGE = css`
  --Button-min-width: initial;
  min-width: initial;
  width: ${pxToRem(70)};
  height: ${pxToRem(70)};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    --Button-min-width: initial;
    min-width: initial;
    width: ${pxToRem(80)};
    height: ${pxToRem(80)};
  }
`

export const ICON_GIANT = css`
  --Button-min-width: initial;
  min-width: initial;
  width: ${pxToRem(70)};
  height: ${pxToRem(70)};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    --Button-min-width: initial;
    min-width: initial;
    width: ${pxToRem(90)};
    height: ${pxToRem(90)};
  }
`
