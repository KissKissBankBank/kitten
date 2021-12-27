import styled from 'styled-components'
import {
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
} from '../../../constants/grid-config'
import { mq } from '../../../constants/screen-config'
import { pxToRem } from '../../../helpers/utils/typography'

export const StyledLayout = styled.div`
  --container-padding: ${pxToRem(CONTAINER_PADDING_THIN)};

  @media ${mq.tabletAndDesktop} {
    --container-padding: ${pxToRem(CONTAINER_PADDING)};
  }

  display: block;

  .k-HeroLayout__hero {
    position: relative;
    padding: ${pxToRem(135)} var(--container-padding) ${pxToRem(100)};
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: ${pxToRem(25)};

    @media ${mq.desktop} {
      padding: ${pxToRem(165)} var(--container-padding) ${pxToRem(70)};

      gap: ${pxToRem(65)};
    }
  }

  .k-HeroLayout__hero__background {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${pxToRem(300)};
    background-color: var(--color-grey-000);

    @media ${mq.desktop} {
      height: ${pxToRem(600)};
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50%;
      background: linear-gradient(
        to bottom,
        hsla(0deg, 0%, 100%, 0),
        hsla(0deg, 0%, 100%, 0.3) 20%,
        hsla(0deg, 0%, 100%, 0.9) 60%,
        var(--color-grey-000)
      );
    }
  }

  .k-HeroLayout__hero__block {
    position: relative;
    z-index: 2;
    text-align: center;
  }

  .k-HeroLayout__promo {
    background-color: var(--color-grey-200);
    padding: ${pxToRem(50)} var(--container-padding) ${pxToRem(50)};

    @media ${mq.desktop} {
      padding: ${pxToRem(50)} var(--container-padding) ${pxToRem(30)};
    }
  }

  .k-HeroLayout__page {
    margin: 0 var(--container-padding) ${pxToRem(60)};
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(50)};

    @media ${mq.desktop} {
      margin: ${pxToRem(50)} ${pxToRem(70)} ${pxToRem(100)};
      display: grid;
      grid-template-columns:
        minmax(${pxToRem(210)}, 1fr) minmax(auto, ${pxToRem(670)})
        minmax(${pxToRem(210)}, 1fr);
      gap: ${pxToRem(70)};
    }
  }

  @media ${mq.mobile} {
    .k-HeroLayout__sticky.k-HeroLayout__menu {
      position: sticky;
      top: 0;
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
