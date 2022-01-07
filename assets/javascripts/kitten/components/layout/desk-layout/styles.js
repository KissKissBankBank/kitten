import styled from 'styled-components'
import {
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
  CONTAINER_MAX_WIDTH,
} from '../../../constants/grid-config'
import { mq } from '../../../constants/screen-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { HEADER_HEIGHT } from '../../../components/organisms/header-nav/config'

export const StyledLayout = styled.div`
  --deskLayout-menu-width: ${pxToRem(220)};
  --deskLayout-gutter: ${pxToRem(80)};
  --deskLayout-offset: calc(
    var(--deskLayout-menu-width) + var(--deskLayout-gutter)
  );

  height: 100%;
  min-height: calc(100vh - ${pxToRem(HEADER_HEIGHT)});
  box-sizing: border-box;
  margin: 0;
  background-color: var(--color-grey-100);

  padding: ${pxToRem(20)} ${pxToRem(CONTAINER_PADDING_THIN)};

  @media ${mq.tabletAndDesktop} {
    padding: ${pxToRem(40)} ${pxToRem(CONTAINER_PADDING)};
  }

  @media ${mq.desktop} {
    padding: ${pxToRem(60)} ${pxToRem(CONTAINER_PADDING)};
  }

  .k-DeskLayout {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(20)} var(--deskLayout-gutter);
    max-width: ${pxToRem(CONTAINER_MAX_WIDTH - 2 * CONTAINER_PADDING_THIN)};
    margin: 0 auto;

    @media ${mq.tabletAndDesktop} {
      max-width: ${pxToRem(CONTAINER_MAX_WIDTH - 2 * CONTAINER_PADDING)};
    }

    @media ${mq.desktop} {
      flex-direction: row;
    }
  }

  .k-DeskLayout__menu {
    &:empty {
      display: none;
    }

    @media ${mq.desktop} {
      width: var(--deskLayout-menu-width);
      flex: 0 0 var(--deskLayout-menu-width);
      position: relative;

      .k-DeskLayout__menu__inside {
        position: sticky;
        top: ${pxToRem(HEADER_HEIGHT + 20)};
        bottom: ${pxToRem(20)};
        transition: top var(--transition);
      }
    }
  }

  @media ${mq.desktop} {
    .k-DeskLayout__content {
      max-width: ${pxToRem(670)};
      flex: 1 1 ${pxToRem(670)};
      margin-top: ${pxToRem(35)};
    }

    .k-DeskLayout__content--fullWidth {
      max-width: calc(100% - var(--deskLayout-offset));
      flex: 1 1 calc(100% - var(--deskLayout-offset));
    }
  }

  .k-DeskLayout__loading {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${mq.desktop} {
      max-width: calc(100% - (2 * var(--deskLayout-offset)));
      flex: 1 1 calc(100% - (2 * var(--deskLayout-offset)));
    }
  }
`
