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

  .k-SubscriptionDetails__listWrapper {
    display: flex;
    align-items: center;
    align-content: flex-start;
    width: 100%;
    gap: ${pxToRem(20)};
    margin-bottom: ${pxToRem(5)};
  }

  .k-SubscriptionDetails__subtitle {
    flex: 1;
  }

  .k-SubscriptionDetails__gridWrapper {
    display: flex;
    gap: ${pxToRem(30)};

    @media ${mq.mobile} {
      display: block;
    }
  }

  .k-SubscriptionDetails__imageWrapper {
    position: relative;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    width: ${pxToRem(231)};
    height: ${pxToRem(137)};
    
    @media ${mq.mobile} {
      height: ${pxToRem(186)};
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
      height: 100%;
      object-fit: cover;
      object-position: center center;
      transition: transform 0.2s ease-in-out;
    }
  }

  .k-SubscriptionDetails__list {
    list-style-type: none;
    padding-inline-start: 0;
  }

  .k-SubscriptionDetails__listItem {
    svg {
      margin-right: ${pxToRem(10)};
    }
  }

  .k-SubscriptionDetails__details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: start;
  }
`
