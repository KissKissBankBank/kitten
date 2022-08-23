import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import { mq } from '../../../../constants/screen-config'
import {
  CONTAINER_PADDING,
  CONTAINER_PADDING_THIN,
} from '../../../../constants/grid-config'

export const OUTLINE_PLUS_OFFSET = 4

export const StyledCarouselNavigation = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${pxToRem(5)};
  position: relative;
  z-index: 5;

  .k-CarouselNext__navigation__button {
    position: relative;

    &:focus {
      z-index: 1;
    }
  }
`

export const StyledCarouselContainer = styled.div`
  --carousel-innerSpacing: max(
    ${pxToRem(OUTLINE_PLUS_OFFSET)},
    var(--carousel-shadowSize, 0px)
  );

  position: relative;
  display: flex;

  // Carousel Inner

  .k-CarouselNext__inner {
    position: relative;
    margin: calc(-1 * var(--carousel-innerSpacing));
    display: grid;
    grid-template-columns: repeat(var(--carousel-pagesCount), 100%);
    gap: calc(
      (${pxToRem(CONTAINER_PADDING_THIN / 2)}) -
        (var(--carousel-innerSpacing) * 2)
    );

    @media ${mq.tablet} {
      gap: calc(
        (${pxToRem(CONTAINER_PADDING / 2)}) - (var(--carousel-innerSpacing) * 2)
      );
    }

    @media ${mq.desktop} {
      gap: calc(var(--carousel-gapBase) - (var(--carousel-innerSpacing) * 2));
    }

    overflow-x: scroll;
    /* mandatory to combine scroll with this property on iOS */
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    /* Hide scrollbar on Firefox. */
    scrollbar-width: none;
    /* hide scrollbar on Chrome and Safari */
    &::-webkit-scrollbar {
      display: none;
    }

    .k-CarouselNext__inner__pageContainer {
      width: 100%;
      scroll-snap-align: start;
      position: relative;

      .k-CarouselNext__inner__button {
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      &:not(.k-CarouselNext__inner__pageContainer--isActivePage)
        .k-CarouselNext__page__item
        > * {
        pointer-events: none;
      }
    }
  }

  &.k-CarouselNext--showOtherPages .k-CarouselNext__inner {
    --container-padding: ${pxToRem(CONTAINER_PADDING_THIN)};

    @media ${mq.tabletAndDesktop} {
      --container-padding: ${pxToRem(CONTAINER_PADDING)};
    }

    --computed-padding: calc(
      var(--container-padding) - var(--carousel-innerSpacing)
    );

    margin: 0 !important;
    padding-inline: var(--computed-padding);
    scroll-padding: var(--computed-padding);

    .k-CarouselNext__inner__pageContainer {
      &:last-child {
        padding-right: var(--computed-padding) !important;
      }
    }
  }

  // Carousel Page

  .k-CarouselNext__page {
    display: grid;
    grid-template-columns: repeat(var(--carousel-itemsPerPage), 1fr);
    gap: calc(
      ${pxToRem(CONTAINER_PADDING_THIN / 2)} -
        (var(--carousel-innerSpacing) * 2)
    );

    @media ${mq.tablet} {
      gap: calc(
        ${pxToRem(CONTAINER_PADDING / 2)} - (var(--carousel-innerSpacing) * 2)
      );
    }
    @media ${mq.desktop} {
      gap: calc(var(--carousel-gapBase) - (var(--carousel-innerSpacing) * 2));
    }

    .k-CarouselNext__page__item {
      overflow: hidden;
      padding-inline: min(
        var(--carousel-innerSpacing),
        calc(var(--carousel-gapBase) / 2)
      );
      padding-block: var(--carousel-innerSpacing);

      /*       :first-child {
        padding-left: var(--carousel-innerSpacing);
      }
      :last-child {
        padding-right: var(--carousel-innerSpacing);
      } */
    }
  }
`
