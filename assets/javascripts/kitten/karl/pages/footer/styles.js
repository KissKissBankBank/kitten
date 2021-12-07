import styled from 'styled-components'
import { pxToRem, mq, TYPOGRAPHY } from 'kitten'

export const StyledFooter = styled.footer`
  padding: ${pxToRem(20)};
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
      justify-content: center;
    }
  }
  .k-Footer__listWrapper {
    display: grid;
    gap: ${pxToRem(20)};
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;

    @media ${mq.mobile} {
      display: block;
      text-align: center;
      gap: 0;
    }
  }

  .k-Footer__baseline {
    text-align: center;
  }

  /* SOCIALBUTTON */
  
  .k-Footer__socialButton {
    display: flex;
    gap: ${pxToRem(18)};
    margin-bottom: ${pxToRem(50)};

    @media ${mq.mobile} {
      gap: ${pxToRem(15)};
      justify-content: center;

    }
  }

  /* LISTITEM */

  .k-Footer__linkList  {
    margin-block-start: ${pxToRem(10)};
    list-style-type: none;

    :not(.k-Footer__linkSecondList) {
      padding-inline-start: 0;
    }
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
    font-weight: ${TYPOGRAPHY.fontStyles.light.fontWeight};

    &:active {
      color: var(--color-primary-900);
    }
    &:hover,
    &:focus {
      color: var(--color-primary-500);
    }
    transition: color 0.2s;
  }

  /* ECOSYSTEMS */

  .k-Footer__ecosystem {
    @media ${mq.desktop} {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
    

  .k-Footer__ecosystem--title {
    font-size: ${pxToRem(14)};

    @media ${mq.tabletAndTablet} {
      font-size: ${pxToRem(12)};
      text-align: center;
    }
  }

  // .k-Footer__ecosystem--logos {
  //   display: flex;
  //   justify-content: space-between;
  // }
`
