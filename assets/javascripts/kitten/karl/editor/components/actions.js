import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

const Actions = styled.div`
  display: flex;

  > * {
    margin-left: -${pxToRem(2)};
  }

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    margin-right: ${pxToRem(20)};

    > :not(:first-child) {
      margin-left: -${pxToRem(2)};
    }
  }

  > :hover:not(:disabled),
  > :focus:not(:disabled) {
    z-index: 1;
  }

  .is-selected {
    z-index: 2;
  }
`

export default Actions
