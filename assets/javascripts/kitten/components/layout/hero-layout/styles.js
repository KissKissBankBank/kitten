import styled from 'styled-components'
import {
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
} from '../../../constants/grid-config'
import { HEADER_HEIGHT } from '../../navigation/header-nav/config'
import { mq } from '../../../constants/screen-config'
import { pxToRem } from '../../../helpers/utils/typography'

export const StyledLayout = styled.div`
  --container-padding: ${pxToRem(CONTAINER_PADDING_THIN)};
  --heroLayout-imageHeight: ${pxToRem(300)};

  @media ${mq.tabletAndDesktop} {
    --container-padding: ${pxToRem(CONTAINER_PADDING)};
  }
  @media ${mq.desktop} {
    --heroLayout-imageHeight: ${pxToRem(500)};
  }

  display: block;
  position: relative;

  .k-HeroLayout__hero {
    position: relative;
    z-index: 6;
    padding: ${pxToRem(135)} var(--container-padding) ${pxToRem(50)};

    @media ${mq.desktop} {
      display: flex;
      flex-direction: column;
      justify-content: end;

      box-sizing: border-box;
      margin-bottom: ${pxToRem(50)};
    }
  }

  .k-HeroLayout__hero__grid {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: ${pxToRem(25)};

    @media ${mq.desktop} {
      position: relative;
      gap: ${pxToRem(65)};
    }
  }

  .k-HeroLayout__hero__background,
  .k-HeroLayout__page__background {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--color-grey-000);
    height: var(--heroLayout-imageHeight);

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .k-HeroLayout__hero__background::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    height: var(--heroLayout-imageHeight);
    background: linear-gradient(
      to bottom,
      hsla(0deg, 0%, 100%, 0) 15%,
      hsla(0deg, 0%, 100%, 0.3) 30%,
      hsla(0deg, 0%, 100%, 0.9) 70%,
      var(--color-grey-000)
    );
  }

  .k-HeroLayout__hero__block {
    position: relative;
    z-index: 2;
    text-align: center;
  }

  .k-HeroLayout__promo {
    background-color: var(--color-grey-200);
    padding: ${pxToRem(30)} 0;
    position: relative;
    z-index: 5;

    @media ${mq.tabletAndDesktop} {
      padding: ${pxToRem(60)} 0;
    }
  }

  .k-HeroLayout__page__background {
    --heroLayout-imageHeight: ${pxToRem(260)};

    @media ${mq.desktop} {
      --heroLayout-imageHeight: ${pxToRem(200)};
    }
  }

  .k-HeroLayout__page {
    margin: 0 var(--container-padding) ${pxToRem(60)};
    display: grid;
    gap: ${pxToRem(50)} ${pxToRem(50)};

    @media ${mq.mobileAndTablet} {
      grid-template-columns: 1fr;

      .k-HeroLayout__topMenu,
      .k-HeroLayout__topMenuBg {
        grid-row: 1 / span 1;
        grid-column: 1 / span 1;
      }
    }

    @media ${mq.desktop} {
      margin: ${pxToRem(70)} ${pxToRem(70)} ${pxToRem(100)};
      grid-template-columns:
        minmax(${pxToRem(210)}, 1fr)
        minmax(auto, ${pxToRem(670)})
        minmax(${pxToRem(210)}, 1fr);

      .k-HeroLayout__firstAside {
        grid-row: 1 / span 1;
        grid-column: 1 / span 1;
      }
      .k-HeroLayout__lastAside {
        grid-row: 1 / span 1;
        grid-column: 3 / span 1;
      }
      .k-HeroLayout__loading,
      .k-HeroLayout__content {
        grid-row: 1 / span 1;
        grid-column: 2 / span 1;
      }

      &.k-HeroLayout__page--hasTopMenu {
        margin-top: 0;
        padding-top: ${pxToRem(120)};
        grid-template-rows: ${pxToRem(200 - 50 - 120)} ${pxToRem(60)} auto;

        .k-HeroLayout__firstAside {
          grid-row: 1 / span 3;
          grid-column: 1 / span 1;
        }
        .k-HeroLayout__lastAside {
          grid-row: 3 / span 1;
          grid-column: 3 / span 1;
        }
        .k-HeroLayout__loading,
        .k-HeroLayout__content {
          grid-row: 3 / span 1;
          grid-column: 2 / span 1;
        }

        .k-HeroLayout__topMenuBg {
          grid-row: 2 / span 2;
          grid-column: 1 / span 3;
        }
        .k-HeroLayout__topMenu {
          grid-row: 2 / span 2;
          grid-column: 2 / span 1;
        }
      }
    }

    .k-HeroLayout__topMenuBg,
    .k-HeroLayout__topMenu {
      position: relative;
      z-index: 5;
      pointer-events: none;

      .k-HeroLayout__sticky__insideTop {
        pointer-events: all;
      }
    }

    .k-HeroLayout__topMenuBg {
      margin-inline: ${pxToRem(-70)};

      .k-HeroLayout__sticky__insideTop {
        background-color: var(--color-grey-000);
        box-shadow: var(--box-shadow-m);
        height: ${pxToRem(60)};
      }
    }

    .k-HeroLayout__topMenu {
      max-width: calc(100vw - (2 * var(--container-padding)));
    }

    .k-HeroLayout__firstAside {
      position: relative;
      z-index: 7 !important;
    }

    .k-HeroLayout__lastAside {
      position: relative;
      z-index: 6 !important;
    }

    .k-HeroLayout__loading,
    .k-HeroLayout__content {
      position: relative;
      z-index: 2;
    }

    .k-HeroLayout__loading {
      justify-self: center;
      align-self: center;
    }
  }

  @media ${mq.mobileAndTablet} {
    .k-HeroLayout__sticky--both,
    .k-HeroLayout__sticky--mobile {
      transition: top var(--transition);
      position: sticky !important;
      z-index: 4 !important;
      top: 0;
    }
  }

  @media ${mq.desktop} {
    .k-HeroLayout__firstAside {
      justify-self: end;
    }

    .k-HeroLayout__lastAside {
      justify-self: start;
    }

    .k-HeroLayout__sticky--both .k-HeroLayout__sticky__insideTop,
    .k-HeroLayout__sticky--both .k-HeroLayout__sticky__inside,
    .k-HeroLayout__sticky--desktop .k-HeroLayout__sticky__insideTop,
    .k-HeroLayout__sticky--desktop .k-HeroLayout__sticky__inside {
      transition: top var(--transition);
      position: sticky;
      top: 0;
      bottom: ${pxToRem(20)};
    }

    .k-HeroLayout__sticky--both .k-HeroLayout__sticky__inside,
    .k-HeroLayout__sticky--desktop .k-HeroLayout__sticky__inside {
      top: ${pxToRem(HEADER_HEIGHT + 20)};
    }
  }
`
