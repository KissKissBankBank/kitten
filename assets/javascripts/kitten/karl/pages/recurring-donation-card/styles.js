import styled from 'styled-components'
import { pxToRem } from 'kitten'

export const StyledRecurringDonation = styled.div`  
  .k-RecurringDonation__thumbnailsThreesome {
    display: flex;
    justify-content: center;
    gap: ${pxToRem(5)};
  }

  .k-RecurringDonation__thumbnail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border: var(--border);
    width: ${pxToRem(93)};
    height: ${pxToRem(89)};
    box-sizing: border-box;
    border-radius: var(--border-radius-m);

    &:hover,
    &:focus {
      border-color: var(--color-blue-300);
    }

    &:active {
      border-color: var(--color-blue-500);
      background-color: var(--color-blue-100);
    }
  }

  .k-RecurringDonation__button {
    width: ${pxToRem(162)};
    margin: 0 auto;
    margin-bottom: ${pxToRem(30)};
  }

  .k-RecurringDonation__unitInput {
    font-size: ${pxToRem(14)};
  }

  .k-RecurringDonation__form {
    text-align: center;
    padding: 0 ${pxToRem(40)};
  }
`
