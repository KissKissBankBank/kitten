import styled from 'styled-components'
import {
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
} from '../../../constants/grid-config'
import { HEADER_HEIGHT } from '../../../components/organisms/header-nav/config'
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

  .k-HeroLayout__hero {
    position: relative;
    padding: ${pxToRem(135)} var(--container-padding) ${pxToRem(100)};

    @media ${mq.desktop} {
      display: flex;
      flex-direction: column;
      justify-content: end;

      box-sizing: border-box;
      min-height: calc(100vh - ${pxToRem(HEADER_HEIGHT)});
      padding: ${pxToRem(20)} var(--container-padding) ${pxToRem(20)};
      margin-bottom: ${pxToRem(50)};
    }
  }

  .k-HeroLayout__hero__grid {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: ${pxToRem(25)};

    ::after {
      content: '';
      position: absolute;
      z-index: 1;
      top: 0;
      left: calc(-1 * var(--container-padding));
      right: calc(-1 * var(--container-padding));
      background: linear-gradient(
        to bottom,
        hsla(0deg, 0%, 100%, 0),
        hsla(0deg, 0%, 100%, 0.3) 20%,
        hsla(0deg, 0%, 100%, 0.9) 60%,
        var(--color-grey-000)
      );

      @media ${mq.mobileAndTablet} {
        height: var(--heroLayout-imageHeight);
      }
      @media ${mq.desktop} {
        bottom: calc(
          max(calc(100vh - ${pxToRem(HEADER_HEIGHT)} - ${pxToRem(20)}), 100%) -
            var(--heroLayout-imageHeight)
        );
      }
    }

    @media ${mq.desktop} {
      position: relative;
      gap: ${pxToRem(65)};
    }
  }

  .k-HeroLayout__hero__background {
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

  .k-HeroLayout__hero__block {
    position: relative;
    z-index: 2;
    text-align: center;
  }

  .k-HeroLayout__promo {
    background-color: var(--color-grey-200);
    padding: ${pxToRem(30)} 0;

    @media ${mq.tabletAndDesktop} {
      padding: ${pxToRem(50)} 0 ${pxToRem(30)};
    }
  }

  .k-HeroLayout__page {
    margin: 0 var(--container-padding) ${pxToRem(60)};
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(50)} ${pxToRem(70)};
    display: grid;

    @media ${mq.mobileAndTablet} {
      grid-template-areas: 'menu' 'content' 'aside';
    }

    @media ${mq.desktop} {
      margin: ${pxToRem(50)} ${pxToRem(70)} ${pxToRem(100)};
      grid-template-columns:
        minmax(${pxToRem(210)}, 1fr)
        minmax(auto, ${pxToRem(670)})
        minmax(${pxToRem(210)}, 1fr);
      grid-template-areas: 'menu content aside';
    }

    .k-HeroLayout__menu {
      grid-area: menu;
    }

    .k-HeroLayout__aside {
      grid-area: aside;
    }

    .k-HeroLayout__loading,
    .k-HeroLayout__content {
      grid-area: content;
    }

    .k-HeroLayout__loading {
      justify-self: center;
      align-self: center;
    }
  }

  @media ${mq.mobileAndTablet} {
    .k-HeroLayout__sticky.k-HeroLayout__menu {
      transition: top var(--transition);
      position: sticky;
      top: 0;
      z-index: 2;
    }
  }

  @media ${mq.desktop} {
    .k-HeroLayout__menu {
      justify-self: end;
    }

    .k-HeroLayout__aside {
      justify-self: start;
    }

    .k-HeroLayout__sticky__inside {
      position: sticky;
      top: ${pxToRem(20)};
      bottom: ${pxToRem(20)};
      transition: top var(--transition);
    }
  }
`
