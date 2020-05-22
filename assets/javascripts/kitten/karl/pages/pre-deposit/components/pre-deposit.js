import React from 'react'
import styled from 'styled-components'
import HeaderWithBackground from './header-with-background'
import KeySection from './key-section'
import SolutionsTriptych from './triptych/solutions-triptych'
import TimelineSection from './timeline-section'
import TipsSection from './tips/tips-section'
import CarouselSection from './carousel-section'
import PartnersSection from './partners-section'

import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'
import {
  CONTAINER_PADDING,
  CONTAINER_PADDING_MOBILE,
} from '../../../../constants/grid-config'
import COLORS from '../../../../constants/colors-config'

const StyledPreDeposit = styled.div`
  .PreDeposit__header {
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-size: cover;
    padding-top: ${pxToRem(50)};
    padding-bottom: ${pxToRem(50)};
    margin-bottom: ${pxToRem(50)};
    background-color: #cbf4fd;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      padding-top: ${pxToRem(80)};
      padding-bottom: ${pxToRem(80)};
      margin-bottom: ${pxToRem(80)};
    }
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      padding-top: ${pxToRem(100)};
      padding-bottom: ${pxToRem(100)};
      margin-bottom: ${pxToRem(100)};
    }

    .PreDeposit__header__container {
      padding-top: ${pxToRem(50)};
      padding-bottom: ${pxToRem(50)};
      padding-right: ${pxToRem(CONTAINER_PADDING)};
      padding-left: ${pxToRem(CONTAINER_PADDING)};
      background-color: ${COLORS.background1};

      @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
        padding-top: ${pxToRem(40)};
        padding-bottom: ${pxToRem(40)};
        padding-right: ${pxToRem(CONTAINER_PADDING_MOBILE)};
        padding-left: ${pxToRem(CONTAINER_PADDING_MOBILE)};
      }
    }
  }

  .PreDeposit__timeline__title {
    color: ${COLORS.font1};

    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      text-align: 'center';
    }
  }

  .PreDeposit__tips__image {
    background-color: #caf4fe;
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    width: 100%;
    padding-bottom: calc(416 / 555 * 100%);

    @media (min-width: ${pxToRem(
        ScreenConfig.S.min,
      )}) and (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      margin-left: ${pxToRem(-CONTAINER_PADDING)};
      width: calc(100% + ${pxToRem(CONTAINER_PADDING)});
    }
  }

  .PreDeposit__triptych__card {
    .PreDeposit__triptych__card__image {
      width: 100%;
      display: block;
    }
    .PreDeposit__triptych__card__notice {
      line-height: 0;
    }
    .PreDeposit__triptych__card__button {
      @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
        min-width: 100%;
      }
    }
  }

  .PreDeposit__carousel {
    position: relative;
    overflow: hidden;
    padding: ${pxToRem(100)} 0;
    margin-top: ${pxToRem(60)};

    background: linear-gradient(
      to right,
      ${COLORS.background1} 0%,
      ${COLORS.background1} 50%,
      #ecfcff 50%,
      #ecfcff 100%
    );

    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      padding: ${pxToRem(50)} 0;
      margin-top: ${pxToRem(20)};
    }

    .PreDeposit__carousel__carousel {
      position: relative;
    }

    .PreDeposit__carousel__svg {
      position: absolute;
      z-index: 1;
      top: pxToRem(50);
      right: calc(50% - ${pxToRem(455)});
    }
    .PreDeposit__carousel__content {
      position: relative;
      z-index: 2;
    }
    .PreDeposit__carousel__flex {
      display: flex;
      align-items: center;
    }
    .PreDeposit__carousel__spaceBetween {
      justify-content: space-between;
      align-items: flex-end;
    }
    .PreDeposit__carousel__title {
      margin-left: ${pxToRem(-50)};

      @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
        margin-left: 0;
      }
    }
    .PreDeposit__carousel__stroke {
      margin-right: ${pxToRem(20)};
      flex-shrink: 0;

      @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
        order: 2;
        width: 100%;
        margin-left: ${pxToRem(20)};
        margin-right: 0;
      }

      @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
        display: none;
      }
    }
  }

  .PreDeposit__partners {
    .PreDeposit__partners__title {
      color: ${COLORS.font1};
      text-align: center;
    }
    .PreDeposit__partners__text {
      color: ${COLORS.font1};
      font-size: ${pxToRem(14)};
    }
    .PreDeposit__partners__logosMargin {
      margin: 0;

      @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
        margin-bottom: ${pxToRem(40)};
      }
    }
    .PreDeposit__partners__logos {
      height: ${pxToRem(100)};

      @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
        height: 100%;
      }
    }
  }

  .PreDeposit__keySection {
    .PreDeposit__keySection__text {
      color: ${COLORS.font1};

      @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
        text-align: center;
      }
    }
    .PreDeposit__keySection__horizontalStroke {
      width: ${pxToRem(50)};
      color: ${COLORS.font1};

      @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
        margin: auto;
        width: ${pxToRem(40)};
      }
    }
    .PreDeposit__keySection__image {
      background-color: #caf4fe;
      background-size: cover;
      background-position: center bottom;
      background-repeat: no-repeat;
      width: 100%;
      padding-bottom: calc(416 / 555 * 100%);

      @media (min-width: ${pxToRem(
          ScreenConfig.S.min,
        )}) and (max-width: ${pxToRem(ScreenConfig.M.max)}) {
        margin-right: ${pxToRem(-CONTAINER_PADDING)};
        width: calc(100% + ${pxToRem(CONTAINER_PADDING)});
      }
    }
    .PreDeposit__keySection__bulletList {
      line-height: 1.6;
      color: ${COLORS.font1};
    }
    .PreDeposit__keySection__button {
      @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
        text-align: center;
      }
    }
    .PreDeposit__keySection__item {
      font-size: ${stepToRem(0)};

      @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
        font-size: ${stepToRem(-1)};
      }
    }
  }
`

const PreDeposit = () => (
  <StyledPreDeposit>
    <HeaderWithBackground />
    <KeySection />
    <SolutionsTriptych />
    <TimelineSection />
    <TipsSection />
    <CarouselSection />
    <PartnersSection />
  </StyledPreDeposit>
)

export default PreDeposit
