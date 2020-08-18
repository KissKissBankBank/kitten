import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

export const StyledRewardCard = styled.div`
  background-color: ${COLORS.background1};
  width: 100%;
  padding: ${pxToRem(15)} 0;
  box-sizing: border-box;
  border: ${pxToRem(2)} solid ${COLORS.line1};

  .k-RewardCard__diamondBadge,
  .k-RewardCard__starredBadge {
    display: flex;
    line-height: 1rem;
    align-items: center;
    margin-bottom: ${pxToRem(20)};

    & > * + * {
      margin-left: ${pxToRem(10)};
    }

    &.k-RewardCard__diamondBadge--disabled,
    &.k-RewardCard__starredBadge--disabled {
      color: ${COLORS.font2};
      cursor: not-allowed;
    }
  }
  .k-RewardCard__diamondBadge__content,
  .k-RewardCard__starredBadge__content {
    display: flex;
    flex-direction: column;
  }
  .k-RewardCard__diamondBadge__diamondIcon {
    height: ${pxToRem(28)};
    width: ${pxToRem(19)};
  }
  .k-RewardCard__starredBadge__starredIcon {
    height: ${pxToRem(14)};
    width: ${pxToRem(14)};
  }

  .k-RewardCard__title {
    &.k-RewardCard__title--disabled {
      color: ${COLORS.font2};
      cursor: not-allowed;
    }
  }

  .k-RewardCard__image {
    width: 100%;

    &.k-RewardCard__image--disabled {
      filter: grayscale(1) opacity(0.4);
      cursor: not-allowed;
    }
  }

  .k-RewardCard__video {
    width: 100%;

    &.k-RewardCard__video--disabled {
      filter: grayscale(1) opacity(0.4);
      cursor: not-allowed;
    }
  }

  .k-RewardCard__infos {
    display: block;
    line-height: ${pxToRem(20)};

    &.k-RewardCard__infos--hasBottomMargin {
      margin-bottom: ${pxToRem(10)};
    }

    &.k-RewardCard__infos--disabled {
      color: ${COLORS.font2};
      cursor: not-allowed;
    }
  }

  .k-RewardCard__cardRow {
    display: flex;
    flex-wrap: wrap;
    padding: 0 ${pxToRem(15)};
  }

  .k-RewardCard__rowContent {
    /* We use an arbitrary huge ratio value for the flex-grow rule so that the
       <div> can take the maximum space left (by its siblings) in its
       container. */
    flex-grow: 9999;
    flex-basis: ${pxToRem(275)}; /* content min-width */
    margin: ${pxToRem(15)};
    max-width: calc(100% - ${pxToRem(15)});
  }

  .k-RewardCard__rowSide {
    flex-grow: 1;
    flex-basis: ${pxToRem(190)}; /* based on image max-width */
    margin-left: ${pxToRem(15)};
    margin-right: ${pxToRem(15)};

    &.k-RewardCard__rowSide--hasMargins {
      margin-top: ${pxToRem(15)};
      margin-bottom: ${pxToRem(15)};
    }
  }

  .k-RewardCard__checkedSection {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 ${pxToRem(15)};
    margin-top: ${pxToRem(10)};
    margin-bottom: ${pxToRem(5)};
  }

  .k-RewardCard__checkedIconLine {
    border-top: ${pxToRem(2)} ${COLORS.line1} solid;
    margin-top: ${pxToRem(20)};
    display: flex;
    justify-content: center;
  }

  .k-RewardCard__iconBadge {
    margin-top: ${pxToRem(-15)};
  }

  &.k-rewardCard--withoutBorder {
    border: none;
  }
  &.k-RewardCard--isDisabled {
    .k-RewardCard__diamondBadge,
    .k-RewardCard__starredBadge {
      color: ${COLORS.font2};
      cursor: not-allowed;
    }

    .k-RewardCard__title {
      color: ${COLORS.font2};
      cursor: not-allowed;
    }

    .k-RewardCard__image,
    .k-RewardCard__video {
      filter: grayscale(1) opacity(0.4);
      cursor: not-allowed;
    }

    .k-RewardCard__infos {
      color: ${COLORS.font2};
      cursor: not-allowed;
    }
  }
`
