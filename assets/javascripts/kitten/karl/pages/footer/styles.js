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

  .k-Footer__stroke {
    color: var(--color-grey-000);
    margin: ${pxToRem(10)} 0;

    @media ${mq.mobile} {
      margin: ${pxToRem(10)} auto;
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

  /* BASELINE */

  .k-Footer__baseline {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${mq.tablet} {
      flex-direction: row;
      justify-content: space-around;
      align-items: start;
    }
  }

  .k-Footer__baselineText {
    width: 70%;
    text-align: center;
    margin-top: ${pxToRem(40)};

    @media ${mq.tablet} {
      width: 50%;
      text-align: left;
      margin-top: 0;
    }
    @media ${mq.mobile} {
      width: 100%;
      margin-top: ${pxToRem(20)};
    }
  }

  /* SOCIALBUTTON */
  
  .k-Footer__socialButton {
    display: flex;
    gap: ${pxToRem(18)};
    @media ${mq.desktop} {
      margin-bottom: ${pxToRem(50)};
    }

    @media ${mq.mobile} {
      gap: ${pxToRem(15)};
      justify-content: space-between;

    }
  }

  /* LISTITEM */

  .k-Footer__linkList  {
    list-style-type: none;

    :not(.k-Footer__linkSecondList) {
      padding-inline-start: 0;
      margin-block-start: ${pxToRem(10)};

      @media ${mq.mobile} {
        gap: ${pxToRem(30)};

      }
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
      align-items: center;
      gap: ${pxToRem(50)};
    }
  }
    
  .k-Footer__ecosystem--title {
    font-size: ${pxToRem(14)};
    text-align: left;

    @media ${mq.mobileAndTablet} {
      font-size: ${pxToRem(12)};
      text-align: center;
    }
  }
  .k-Footer__ecosystem--logos {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${mq.desktop} {
      flex: 1 1 auto;
    }
    @media ${mq.mobile} {
      flex-direction: column;
      gap: ${pxToRem(30)};
      align-items: center;
    }
  }

  /* PARTNERS */

  .k-Footer__partners {
    display: flex;
    gap: ${pxToRem(80)};
    
    @media ${mq.mobile} {
      flex-direction: column;
      gap: ${pxToRem(30)};
    }

    div {
      display: flex;
      gap: ${pxToRem(20)};
    }
  }

  /* LEGAL */

  .k-Footer__legal {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media ${mq.mobileAndTablet} {
      flex-direction: column;
    }
  }

  .k-Footer__legal--list {
    margin: ${pxToRem(30)} 0;
    list-style-type: none;
    margin-block-start: ${pxToRem(30)};
    padding-inline-start: 0;
    display: flex;
    justify-content: center;
    gap: ${pxToRem(24)};

    @media ${mq.mobile} {
      flex-direction: column;
      gap: 0;
    }
  }

  .k-Footer__legal--select {
    width: ${pxToRem(125)};
  }
`
