import styled from 'styled-components'
import {
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
} from '../../../constants/grid-config'
import { mq } from '../../../constants/screen-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { HEADER_HEIGHT } from '../../../components/organisms/header-nav/config'

export const StyledLayout = styled.div`
  --deskLayout-menu-width: ${pxToRem(210)};
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
        top: ${pxToRem(20)};
        bottom: ${pxToRem(20)};
        transition: top var(--transition);
      }
    }
  }

  @media ${mq.desktop} {
    .k-DeskLayout__content {
      max-width: calc(100% - (2 * var(--deskLayout-offset)));
      flex: 1 1 calc(100% - (2 * var(--deskLayout-offset)));
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
