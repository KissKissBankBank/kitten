import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'

const Actions = styled.div`
  display: flex;
  margin-right: ${pxToRem(20)};

  > :not(:first-child) {
    margin-left: -${pxToRem(2)};
  }

  > :hover:not(:disabled),
  > :focus:not(:disabled) {
    z-index: 1;
  }

  > .is-selected {
    z-index: 2;
  }
`

export default Actions
