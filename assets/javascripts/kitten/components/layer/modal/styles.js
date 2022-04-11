import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import { mq } from '../../../constants/screen-config'
import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  body.k-Modal__body--open {
    overflow: hidden;
  }

  .k-Modal__content {
    flex: 1 0 auto;
    position: relative;
    background-color: var(--color-grey-000);
    border: var(--border);
    border-radius: var(--border-radius-l);
    box-sizing: border-box;
    transform: scale(0.94);
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(30)};

    margin: 0;
    width: calc(100vw - ${pxToRem(2 * 30 )});
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
  }

  .k-Modal__content--small {
    width: ${pxToRem(300)};
  }

  .k-Modal__content--medium {
    width: ${pxToRem(600)};
  }

  .k-Modal__content--large {
    width: ${pxToRem(900)};
  }

  .k-Modal__main {
    margin:${pxToRem(50)} ${pxToRem(20)};

    @media ${mq.tablet} {
      margin: ${pxToRem(50)} ${pxToRem(30)};
    }
    @media ${mq.desktop} {
      margin: ${pxToRem(50)} ${pxToRem(40)};
    }
  }

  .k-Modal__title {
    font-size: var(--font-size-6);
    
    @media ${mq.desktop} {
      font-size: var(--font-size-10);
    }
  }


  /* OVERLAY STYLES */

  .k-Modal__overlay {
    position: fixed;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    background-color: rgba(34, 34, 34, .8);

    &:not(.k-Modal__overlay--large):not(.k-Modal__overlay--fullSize) {
      &::before,
      &::after {
        content: '';
        flex: 1 1 33%;
        min-height: ${pxToRem(50)};

        @media ${mq.desktop} {
          min-height: ${pxToRem(80)};
        }
      }
    }
    &.k-Modal__overlay--giant {
      &::before,
      &::after {
        @media ${mq.mobileAndTablet} {
          content: '';
          flex: 1 1 33%;
          min-height: ${pxToRem(50)};
        }

        @media ${mq.desktop} {
          min-height: ${pxToRem(80)};
        }
      }
    }

    &.k-Modal__overlay--fullSize {
      background: white;
    }

    @media ${mq.mobile} {
      &.k-Modal__overlay--fullSizeOnMobile {
        background: white;

        .k-Modal__content {
          flex: 1;
        }

        &::before, &::after {
          min-height: 0 !important;
          flex: 0 !important;
        }
      }
    }
  }

  .k-Modal__overlay--afterOpen {
    transition: opacity .3s ease;
    opacity: 1;
  }
  .k-Modal--afterOpen {
    transition: opacity .3s ease, transform .3s ease;
    transform: scale(1);
    opacity: 1;
  }

  .k-Modal__overlay--beforeClose {
    opacity: 0;
  }
  .k-Modal--beforeClose {
    transition: opacity .3s ease, transform .5s ease;
    transform: scale(1.06);
    opacity: 0;
  }
`
