import styled from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

export const StyledLegacyRewardCard = styled.div`
  border-width: ${pxToRem(2)};
  border-style: solid;
  border-color: ${COLORS.line1};

  .k-LegacyRewardCard__element--disabled {
    filter: grayscale(1) opacity(0.4);
    cursor: not-allowed;
  }

  .k-LegacyRewardCard__row {
    padding-left: ${pxToRem(20)};
    padding-right: ${pxToRem(20)};
  }

  &:not(.k-LegacyRewardCard--tinyVersion) .k-LegacyRewardCard__row {
    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      padding-left: ${pxToRem(30)};
      padding-right: ${pxToRem(30)};
    }
    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      padding-left: ${pxToRem(40)};
      padding-right: 0;
    }
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      padding-left: ${pxToRem(115)};
      padding-right: 0;
    }
  }

  .LegacyRewardCard__col_image {
    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      padding-right: ${pxToRem(50)};
    }
  }

  &.k-LegacyRewardCard--tinyVersion .LegacyRewardCard__col_image {
    padding-right: ${pxToRem(10)};
  }

  .k-LegacyRewardCard__list {
    font-size: ${stepToRem(-1)};
    margin-right: 0;
  }

  &:not(.k-LegacyRewardCard--tinyVersion) .k-LegacyRewardCard__list {
    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      font-size: ${stepToRem(0)};
      margin-right: ${pxToRem(30)};
    }
  }

  .k-LegacyRewardCard__choiceButton {
    padding-left: ${pxToRem(20)};
    padding-right: ${pxToRem(20)};
  }
  &:not(.k-LegacyRewardCard--tinyVersion) .k-LegacyRewardCard__choiceButton {
    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      padding-left: ${pxToRem(30)};
      padding-right: ${pxToRem(30)};
    }
  }

  .k-LegacyRewardCard__button {
    width: 100%;
    position: relative;
    box-sizing: border-box;
  }
  &:not(.k-LegacyRewardCard--tinyVersion) .k-LegacyRewardCard__button {
    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1.3rem;
      padding: ${pxToRem(22)} ${pxToRem(30)};
    }
  }

  .k-LegacyRewardCard__myContribution {
    display: flex;
    align-items: center;
  }
  .k-LegacyRewardCard__myContribution__text {
    display: flex;
    line-height: normal;
  }

  .k-LegacyRewardCard__iconBadge {
    margin-right: ${pxToRem(10)};
  }

  .k-LegacyRewardCard__image {
    width: 100%;
    display: block;
  }
`
