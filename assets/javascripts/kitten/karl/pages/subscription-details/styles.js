import styled from 'styled-components'
import { pxToRem, mq } from 'kitten'

export const StyledWrapper = styled.div`
  border: var(--border);
  border-radius: var(--border-radius-m);
  padding: ${pxToRem(30)};


  .k-SubscriptionDetails__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


`
