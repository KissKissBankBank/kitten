import styled from 'styled-components'
import { pxToRem, mq } from 'kitten'

export const StyledWrapper = styled.div`
  @media ${mq.mobileAndTablet} {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(20)};

    .kiss-Pricing__table__col_features {
      display: none;
    }

    .kiss-Pricing__table__col_plan {
      background-color: var(--color-grey-000);
      border-radius: var(--border-radius-m);
      box-shadow: var(--box-shadow-s);
      padding: ${pxToRem(20)};
    }

    .kiss-Pricing__table__col_plan--main {
      border: ${pxToRem(2)} solid var(--color-primary-500);
    }

    .kiss-Pricing__table__cell_feature + .kiss-Pricing__table__cell_category {
      margin-top: ${pxToRem(20)};
    }

    .kiss-Pricing__table__cell_feature {
      display: flex;
      gap: ${pxToRem(15)};
      align-items: center;
    }

    .kiss-Pricing__table__cell_title {
      margin-bottom: ${pxToRem(20)};
    }

    .kiss-Pricing__table__cell__bottom {
      margin-top: ${pxToRem(20)};
    }
  }

  @media ${mq.desktop} {
    display: grid;
    grid-template-columns: ${pxToRem(300)} 1fr 1fr 1fr;
    grid-template-rows: repeat(var(--rows-count), auto);
    grid-auto-flow: column;
    gap: ${pxToRem(12)} ${pxToRem(60)};

    .kiss-Pricing__table__col_features,
    .kiss-Pricing__table__col_plan {
      display: contents;
    }

    .kiss-Pricing__table__col_plan::before {
      display: block;
      content: '';
      grid-column: var(--current-col) / span 1;
      grid-row: 1 / span var(--rows-count);
      margin: -${pxToRem(20)};

      background-color: var(--color-grey-000);
      border-radius: var(--border-radius-m);
      box-shadow: var(--box-shadow-s);
    }
    .kiss-Pricing__table__col_plan--main::before {
      margin-block: -${pxToRem(40)};
      border: ${pxToRem(2)} solid var(--color-primary-500);
    }

    .kiss-Pricing__table__cell_title {
      grid-column: var(--current-col) / span 1;
      grid-row: var(--current-row) / span 1;
    }

    .kiss-Pricing__table__cell_category {
      grid-column: var(--current-col) / span 1;
      grid-row: var(--current-row) / span 1;
    }

    .kiss-Pricing__table__cell_feature {
      grid-column: var(--current-col) / span 1;
      grid-row: var(--current-row) / span 1;
      align-self: center;
    }

    .kiss-Pricing__table__cell_feature + .kiss-Pricing__table__cell_category {
      margin-top: ${pxToRem(38)};
    }

    .kiss-Pricing__table__description {
      flex: 1 0 auto;
      min-height: ${pxToRem(78)};
    }
  }

  .kiss-Pricing__table__cell_title {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(10)};
  }

  .kiss-Pricing__table__cell_category {
    margin: ${pxToRem(8)} ${pxToRem(0)};
  }

  .kiss-Pricing__table__cell_feature {
  }

  .kiss-Pricing__table__col_features .kiss-Pricing__table__cell_feature {
    display: flex;
    gap: ${pxToRem(10)};
    justify-content: space-between;
    align-items: center;
  }

  .kiss-Pricing__table__col_plan .kiss-Pricing__table__cell_feature {
    justify-self: center;
  }

  .kiss-Pricing__table__title {
  }
  .kiss-Pricing__table__rate {
    font-weight: 700;
    font-size: var(--font-size-10);
    line-height: 1;
  }
`
