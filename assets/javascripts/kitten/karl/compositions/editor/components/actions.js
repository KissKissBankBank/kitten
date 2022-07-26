import styled from 'styled-components'
import { pxToRem, ScreenConfig } from 'kitten'

const Actions = styled.div`
  display: flex;

  > * {
    position: relative;
    margin-left: -${pxToRem(2)};
  }

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    margin-right: ${pxToRem(20)};

    > :not(:first-child) {
      margin-left: -${pxToRem(2)};
    }
  }

  > :hover:not(:disabled) {
    z-index: 1;
  }

  .is-selected {
    z-index: 2;
  }

  > :focus:not(:disabled) {
    z-index: 3;
  }
`

export default Actions
