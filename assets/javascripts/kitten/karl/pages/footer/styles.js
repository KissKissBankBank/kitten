import styled from 'styled-components'
import { pxToRem, mq, TYPOGRAPHY } from 'kitten'

export const StyledFooter = styled.footer`
  padding: ${pxToRem(80)} ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(20)};
  background-color: var(--color-grey-900);
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;

  @media ${mq.mobileAndTablet} {
    padding-top: ${pxToRem(20)};
  }

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

    @media ${mq.mobile} {
      grid-template-columns: 1fr;
      text-align: center;
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
    text-align: left;
    margin-top: ${pxToRem(40)};

    @media ${mq.tablet} {
      width: 50%;
      margin-top: 0;
    }
    @media ${mq.mobile} {
      width: 100%;
      margin-top: ${pxToRem(20)};
      text-align: center;
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

  /* LISTITEMS */

  .k-Footer__linkList  {
    list-style-type: none;
    padding-inline-start: ${pxToRem(20)} ;
    
    @media ${mq.mobile} {
      padding-inline-start: 0;
    }

    :not(.k-Footer__linkSecondList) {
      padding-inline-start: 0;
      margin-block-start: ${pxToRem(10)};
      margin-block-end: 0;

      @media ${mq.mobile} {
        gap: ${pxToRem(30)};
      }
    }
  }

  .k-Footer__linkList--item {
    display: inline-block;
    cursor: pointer;
    margin-bottom: ${pxToRem(5)};
    color: var(--color-grey-000);
    font-size: ${pxToRem(14)};
    line-height: 1.2;
    text-decoration: none;
    font-family: ${TYPOGRAPHY.fontStyles.regular.fontFamily};
    font-weight: ${TYPOGRAPHY.fontStyles.light.fontWeight};

    @media ${mq.mobile} {
      font-size: ${pxToRem(12)};
    }

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
    
  .k-Footer__ecosystem--title {
    font-size: ${pxToRem(14)};
    text-align: center;

    @media ${mq.mobileAndTablet} {
      font-size: ${pxToRem(12)};
    }
    @media ${mq.mobile} {
      margin-bottom: ${pxToRem(30)};
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

    .k-Footer__partners--block {
      display: flex;
      align-items: center;
      gap: ${pxToRem(20)};
    }

    .k-Footer__partners--text {
      font-size: ${pxToRem(14)};
      @media ${mq.mobile} {
        font-size: ${pxToRem(12)};
      }
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
      gap: ${pxToRem(20)};
    }
  }

  .k-Footer__legal--list {
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    display: flex;
    justify-content: center;
    gap: ${pxToRem(24)};

    @media ${mq.tablet} {
      margin: ${pxToRem(30)} 0;
    }

    @media ${mq.mobile} {
      flex-direction: column;
      gap: 0;
    }
  }

  .k-Footer__legal--select {
    width: ${pxToRem(125)};
  }
`
