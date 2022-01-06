import styled from 'styled-components'
import { pxToRem, mq } from 'kitten'

export const StyledWrapper = styled.div`
  border: var(--border);
  border-radius: var(--border-radius-m);
  padding: ${pxToRem(30)};
  max-width: ${pxToRem(533)};
  box-sizing: border-box;
  
  @media ${mq.mobile} {
    width: 100%;
  }

  .k-SubscriptionDetails__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .k-SubscriptionDetails__listWrapper {
    display: flex;
    align-items: center;
    align-content: flex-start;
    gap: ${pxToRem(20)};
    margin-bottom: ${pxToRem(5)};
    
    @media ${mq.mobile} {
      gap: ${pxToRem(18)};
    }
  }

  .k-SubscriptionDetails__subtitle {
    flex: 1;
  }

  .k-SubscriptionDetails__gridWrapper {
    gap: ${pxToRem(30)};
    grid-template-columns: 1fr 1fr;
    display: grid;

    @media ${mq.mobile} {
      display: block;
    }
  }

  .k-SubscriptionDetails__imageWrapper {
    position: relative;
    overflow: hidden;
    padding-top: calc((5 / 8) * 100%); /* ratio: 16/10 */
    
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    
    @media ${mq.mobile} {
      width: 100%;
      margin-bottom: ${pxToRem(15)};
    }
    
    img,
    figure,
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      max-height: ${pxToRem(133)};
      object-fit: cover;
      object-position: center center;
      transition: transform 0.2s ease-in-out;
    }
  }

  .k-SubscriptionDetails__listItem {
    span::before {
      content: "–";
      margin-right: ${pxToRem(6);
    }
  }

  .k-SubscriptionDetails__details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: start;
    gap: ${pxToRem(30)};
  }
`
