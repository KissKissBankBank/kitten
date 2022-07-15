import { pxToRem } from '../../../helpers/utils/typography'
import { mq } from '../../../constants/screen-config'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body.k-SlideModal__body--open {
    overflow: hidden;
  }

  /* OVERLAY STYLES */

  .k-SlideModal__overlay {
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(34, 34, 34, .8);
    z-index: var(--modal-zIndex, 110);
  }


  .k-SlideModal__wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: calc(100vw - var(--modal-contentMargin, 30vw) );
    background-color: var(--color-grey-000);
    box-sizing: border-box;

    @media ${mq.mobile} {
      --modal-contentMargin: ${pxToRem(50)}
    }
  }

  .k-SlideModal__main {
    height: calc(100% - (2 * var(--modal-padding)));
    display: flex;
    flex-direction: column;
    gap: var(--modal-padding);
    padding: var(--modal-padding) 0;
    --modal-padding: ${pxToRem(20)};

    @media ${mq.tablet} {
      --modal-padding: ${pxToRem(30)};
    }
    @media ${mq.desktop} {
      --modal-padding: ${pxToRem(40)};
    }
  }

  .k-SlideModal__title {
    padding: 0 var(--modal-padding);
    font-size: var(--font-size-6) !important; 
    
    @media ${mq.desktop} {
      font-size: var(--font-size-10) !important;
    }
  }

  .k-SlideModal__actions {
    padding: 0 var(--modal-padding);
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    gap: ${pxToRem(10)};

    @media ${mq.mobile} {
      flex-direction: column;
    }
  }

  .k-SlideModal__content {
    padding: 0 var(--modal-padding);
    flex: 1 1 auto;
    overflow: scroll;

    &.k-SlideModal__content--gradientScroll {
      position: relative;
      margin-bottom: calc(-1 * var(--modal-padding));

      &::after {
        content: "";
        display: block;
        position: sticky;
        left: 0;
        right: 0;
        bottom: 0;
        height: ${pxToRem(30)};
        background: linear-gradient(to bottom, transparent, var(--color-grey-000));
      }
    }
  }

  .k-SlideModal__closeButton {
    background-color: transparent;
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0;
    border: 0 !important;
  }

  /* ANIMATIONS */

  .k-SlideModal__overlay {
    opacity: 0;
  }
  .k-SlideModal__overlay--afterOpen {
    transition: opacity .3s ease;
    opacity: 1;
  }
  .k-SlideModal__overlay--beforeClose {
    opacity: 0;
  }

  .k-SlideModal__wrapper {
    transform: translateX(100%);
  }
  .k-SlideModal__wrapper--afterOpen {
    transition: opacity .3s ease, transform .3s ease;
    transform: translateX(0%);
  }
  .k-SlideModal__wrapper--beforeClose {
    transition: opacity .3s ease, transform .5s ease;
    transform: translateX(100%);
  }
`
