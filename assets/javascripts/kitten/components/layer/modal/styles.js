import { pxToRem } from '../../../helpers/utils/typography'
import { mq } from '../../../constants/screen-config'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body.k-Modal__body--open {
    overflow: hidden;
  }

  .k-Modal__wrapper {
    --modal-width: ${pxToRem(600)};
    --modal-wrapperMaxWidth: 100vw;
    --modal-contentMargin: ${pxToRem(40)};
    --modal-headerHeight: 0px;

    flex: 1 0 auto;
    position: relative;
    background-color: var(--color-grey-000);
    border-radius: var(--border-radius-l);
    box-sizing: border-box;
    transform: scale(0.94);

    margin: auto;
    width: calc(100vw - (2 * var(--modal-contentMargin) ));
    max-width: var(--modal-width);
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;

    @media ${mq.mobile} {
      --modal-contentMargin: ${pxToRem(20)}
    }

    &.k-Modal__wrapper--small {
      @media ${mq.tabletAndDesktop} {
        --modal-width: ${pxToRem(300)};
      }
    }

    &.k-Modal__wrapper--large {
      @media ${mq.tabletAndDesktop} {
        --modal-width: ${pxToRem(900)};
      }
    }
  }

  .k-Modal__main {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(30)};
    margin: ${pxToRem(50)} ${pxToRem(20)};

    @media ${mq.tablet} {
      margin: ${pxToRem(50)} ${pxToRem(30)};
    }
    @media ${mq.desktop} {
      margin: ${pxToRem(50)} ${pxToRem(40)};
    }
  }

  .k-Modal__title {
    font-size: var(--font-size-6) !important; 
    
    @media ${mq.desktop} {
      font-size: var(--font-size-10) !important;
    }
  }

  .k-Modal__actions {
    display: flex;
    justify-content: center;
    gap: ${pxToRem(10)};

    @media ${mq.mobile} {
      flex-direction: column;
    }
  }

  .k-Modal__content {
    display: grid;
    gap: ${pxToRem(30)};
  }

  /* FORM STYLES */

  .k-Modal__form {
    display: grid;
  }

  .k-Modal__form--twoColumns {
    @media ${mq.tabletAndDesktop} {
      grid-template-columns: 50% 50%;
      gap: ${pxToRem(10)};
    }
  }

  .k-Modal__closeButton {
    position: absolute;
    right: 0;
    top: 0;
    border-top-right-radius: var(--border-radius-s);
    border-right: none;
    border-top: none;
    z-index: 1;
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
    z-index: var(--modal-zIndex, 110);

    &::before,
    &::after {
      content: '';
      flex: 1 1 33%;
      min-height: ${pxToRem(50)};

      @media ${mq.tabletAndDesktop} {
        min-height: ${pxToRem(80)};
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
