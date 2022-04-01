import styled from 'styled-components'
import { mq } from '../../../constants/screen-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { HEADER_HEIGHT } from '../../../components/navigation/header-nav/config'

export const StyledChatLayout = styled.div`
  overflow: hidden;
  height: calc(100vh - ${pxToRem(HEADER_HEIGHT)});

  /* Interface simple */
  @media ${mq.mobileAndTablet} {
    width: 100vw;

    .k-ChatLayout__grid {
      height: 100%;
      width: 300vw;
      display: grid;
      grid-template-columns: repeat(3, 100vw);
      grid-template-rows: 100%;
      gap: ${pxToRem(10)};

      transform: translateX(calc(-1px * var(--chatLayoutOffset, 0)));
      transition: transform var(--transition);
    }

    .k-ChatLayout__columnHeader {
      box-sizing: border-box;
      height: ${pxToRem(56)};
      padding: 0 ${pxToRem(20)};
      background-color: var(--color-grey-100);
      display: grid;
      gap: ${pxToRem(10)};
      grid-template-columns: auto 1fr auto;
      align-items: stretch;
    }

    .k-ChatLayout__columnHeader__back,
    .k-ChatLayout__columnHeader__next {
      display: flex;
      align-items: center;
    }

    .k-ChatLayout__columnHeader__back {
      padding-inline: ${pxToRem(20)} ${pxToRem(10)};
      margin-inline: ${pxToRem(-20)} ${pxToRem(-10)};
    }

    .k-ChatLayout__columnHeader__next {
      padding-inline: ${pxToRem(10)} ${pxToRem(20)};
      margin-inline: ${pxToRem(-10)} ${pxToRem(-20)};
    }

    .k-ChatLayout__columnHeader__title {
      align-self: center;
      padding-block: ${pxToRem(10)};
    }

    .k-ChatLayout__columnHeader.k-ChatLayout__columnHeader--centeredHeader {
      grid-template-columns: 1fr auto 1fr;

      .k-ChatLayout__columnHeader__back {
        justify-self: start;
      }

      .k-ChatLayout__columnHeader__next {
        justify-self: end;
      }

      .k-ChatLayout__columnHeader__title {
        justify-self: center;
      }
    }

    .k-ChatLayout__column__title {
      padding-inline: ${pxToRem(20)};
    }

    .k-ChatLayout__column__content {
      height: calc(100% - ${pxToRem(56)});
    }

    .k-ChatLayout__column__content.k-ChatLayout__column--isPrimaryColumn {
      height: calc(100% - ${pxToRem(100)});
    }

    .k-ChatLayout__column__content:not(.k-ChatLayout__column__content--fullWidth) {
      padding-inline: ${pxToRem(20)};
    }
  }

  /* Interface triple */
  @media ${mq.desktop} {
    background-color: var(--color-grey-100);
    padding: 0 ${pxToRem(50)};

    .k-ChatLayout__grid {
      height: 100%;
      box-sizing: border-box;
      padding-bottom: ${pxToRem(20)};

      display: grid;
      gap: ${pxToRem(25)};
      grid-template-columns: 1fr 2fr ${pxToRem(240)};
      grid-template-rows: 100%;
      align-items: stretch;

      .k-ChatLayout__columnHeader {
        display: none;
      }

      .k-ChatLayout__column__content {
        height: calc(100% - ${pxToRem(100)});
      }

      .k-ChatLayout__column:not(.k-ChatLayout__column--isPrimaryColumn)
        .k-ChatLayout__column__content {
        padding-top: ${pxToRem(100)};
      }
    }
  }

  .k-ChatLayout__column {
    height: 100% !important;
  }

  /* Communs */
  .k-ChatLayout__column__title {
    line-height: ${pxToRem(100)};
    margin: 0;
  }
`
