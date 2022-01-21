import styled from 'styled-components'
import { pxToRem } from 'kitten'


export const StyledRecurringDonation = styled.div`  
  .k-RecurringDonation__thumbnailsThreesome {
    display: flex;
    justify-content: center;
    gap: ${pxToRem(5)};
  }

  .k-RecurringDonation__thumbnail {
    text-align: center;
    border: var(--border);
    padding: ${pxToRem(24)} ${pxToRem(18)};
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
