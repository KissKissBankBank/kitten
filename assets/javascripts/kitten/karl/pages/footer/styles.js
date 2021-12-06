import styled from 'styled-components'
import { pxToRem, mq, TYPOGRAPHY } from 'kitten'

export const StyledFooter = styled.footer`
  padding: ${pxToRem(30)};
  background-color: var(--color-grey-900);
  max-width: 100%;
  display: block;
  overflow: hidden;
  box-sizing: border-box;

  .k-Footer__gridWrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;

    @media ${mq.mobileAndTablet} {
      grid-template-columns: 1fr;
    }
  }
  .k-Footer__listWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;

    @media ${mq.mobile} {
      display: block;
      text-align: center;
    }
  }

  .k-Footer__baseline {
    text-align: center;
  }


  /* LISTITEM */

  .k-Footer__linkList {
    list-style-type: none;
    padding-inline-start: 0;
    margin-block-start: ${pxToRem(10)};
  }

  .k-Footer__stroke {
    color: var(--color-grey-000);
    margin: ${pxToRem(10)} 0;

    @media ${mq.mobile} {
      margin: 0 auto;
    }
  }

  .k-Footer__linkList--item {
    display: inline-block;
    margin-bottom: ${pxToRem(5)};
    color: var(--color-grey-000);
    font-size: ${pxToRem(14)};
    line-height: 1.2;
    text-decoration: none;
    font-family: ${TYPOGRAPHY.fontStyles.regular.fontFamily};
    font-weight: ${TYPOGRAPHY.fontStyles.regular.fontWeight};

    &:active {
      color: var(--color-primary-900);
    }
    &:hover,
    &:focus {
      color: var(--color-primary-500);
    }
    transition: color 0.2s;
  }
`
