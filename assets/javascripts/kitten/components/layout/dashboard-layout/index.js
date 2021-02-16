import React, { useState } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

import {
  NUM_COLUMNS,
  CONTAINER_MAX_WIDTH,
  GUTTER,
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
} from '../../../constants/grid-config'
import COLORS from '../../../constants/colors-config'
import { ScreenConfig } from '../../../constants/screen-config'
import { pxToRem } from '../../../helpers/utils/typography'

const ALL_COLS = `(var(--DashboardLayout-width) - ${pxToRem(
  2 * CONTAINER_PADDING + (NUM_COLUMNS - 1) * GUTTER,
)})`
const ONE_COL = `(${ALL_COLS} / ${NUM_COLUMNS})`
const THREE_COLS_PLUS_GUTTER = `(${ALL_COLS} / 4 + ${pxToRem(
  3 * GUTTER + CONTAINER_PADDING,
)})`
const SIX_COLS = `(${ALL_COLS} / 2 + ${pxToRem(
  5 * GUTTER + CONTAINER_PADDING,
)})`

const StyledDashboard = styled.div`
  position: relative;

  * {
    box-sizing: border-box;
  }

  .k-DashboardLayout {
    --DashboardLayout-width: 100vw;
    min-height: 100vh;
    display: grid;

    .k-DashboardLayout__sideBar {
      background-color: ${COLORS.font1};
    }
  }

  @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
    overflow-x: hidden;

    .k-DashboardLayout {
      --DashboardLayout-main-margin: calc(
        ${ONE_COL} + ${pxToRem(GUTTER + CONTAINER_PADDING)}
      );

      width: calc(${SIX_COLS} + 100vw);
      grid-template-columns: calc(${SIX_COLS}) calc(100vw + ${pxToRem(2)});
      transform: translateX(calc(-1 * ${SIX_COLS} - ${pxToRem(2)}));
      transition: transform 0.3s ease-in-out;

      &.k-DashboardLayout--isOpen {
        transform: none;
        transition: transform 0.3s ease-in-out;
      }

      .k-DashboardLayout__sideBar {
        padding: ${pxToRem(30)};

        .k-DashboardLayout__heading {
          display: none;
        }
      }

      .k-DashboardLayout__mainBar {
        width: calc(100vw + ${pxToRem(2)});

        .k-DashboardLayout__heading {
          padding: ${pxToRem(15)} ${pxToRem(CONTAINER_PADDING)};
          height: ${pxToRem(80)};
          background-color: ${COLORS.font1};
          border-left: ${pxToRem(2)} solid ${COLORS.font2};
        }

        .k-DashboardLayout__main {
          margin-left: ${pxToRem(2)};

          *:not(.k-DashboardLayout__fullWidth) {
            margin-left: var(--DashboardLayout-main-margin);
            margin-right: var(--DashboardLayout-main-margin);
          }
        }
      }
    }
  }

  @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
    .k-DashboardLayout {
      --DashboardLayout-main-margin: ${pxToRem(CONTAINER_PADDING_THIN)};
      width: calc(200vw - ${pxToRem(50 + 2)});
      grid-template-columns: calc(100vw - ${pxToRem(50)}) calc(
          100vw + ${pxToRem(2)}
        );
      transform: translateX(calc(-100vw + ${pxToRem(50 - 2)}));

      .k-DashboardLayout__sideBar {
        padding: ${pxToRem(20)};
      }
      .k-DashboardLayout__mainBar {
        .k-DashboardLayout__heading {
          padding: ${pxToRem(15)} ${pxToRem(CONTAINER_PADDING_THIN)};
        }
      }
    }
  }

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    .k-DashboardLayout {
      --DashboardLayout-three-cols: calc(${THREE_COLS_PLUS_GUTTER});

      grid-template-columns: var(--DashboardLayout-three-cols) 1fr;

      .k-DashboardLayout__sideBar {
        display: flex;
        flex-direction: column;
        height: 100vh;
        position: sticky;
        top: 0;
        overflow: scroll;

        .k-DashboardLayout__heading,
        .k-DashboardLayout__navigation,
        .k-DashboardLayout__footer {
          margin-left: ${pxToRem(CONTAINER_PADDING)};
          margin-right: ${pxToRem(GUTTER)};
        }

        .k-DashboardLayout__heading {
          flex: 0 1 auto;
        }
        .k-DashboardLayout__navigation {
          flex: 1 1 100%;
        }
        .k-DashboardLayout__footer {
          flex: 0 1 auto;
        }
      }

      .k-DashboardLayout__mainBar {
        .k-DashboardLayout__heading {
          display: none;
        }

        .k-DashboardLayout__main {
          *:not(.k-DashboardLayout__fullWidth) {
            margin-left: calc(${ONE_COL} + ${pxToRem(GUTTER)});
            margin-right: ${pxToRem(CONTAINER_PADDING)};
          }
        }
      }
    }
  }

  @media (min-width: ${pxToRem(ScreenConfig.XL.min)}) {
    --DashboardLayout-width: ${pxToRem(CONTAINER_MAX_WIDTH)};
    --DashboardLayout-page-margin: calc(
      (100vw - var(--DashboardLayout-width)) / 2
    );
    --DashboardLayout-three-cols: calc(
      ${THREE_COLS_PLUS_GUTTER} + var(--DashboardLayout-page-margin)
    );

    .k-DashboardLayout__sideBar {
      padding-left: var(--DashboardLayout-page-margin);
    }

    .k-DashboardLayout__mainBar {
      .k-DashboardLayout__main {
        *:not(.k-DashboardLayout__fullWidth) {
          margin-right: calc(
            var(--DashboardLayout-page-margin) + ${pxToRem(CONTAINER_PADDING)}
          );
        }
      }
    }
  }
`

export const DashboardLayout = props => {
  const [isOpen, setOpen] = useState(false)

  return (
    <StyledDashboard className="k-DashboardLayout__wrapper">
      <div
        className={classNames('k-DashboardLayout', props.className, {
          'k-DashboardLayout--isOpen': isOpen,
        })}
      >
        <div className="k-DashboardLayout__sideBar">
          <header className="k-DashboardLayout__heading">
            <p className="k-u-color-background1">Heading</p>
          </header>
          <section className="k-DashboardLayout__navigation">
            <ul>
              <li className="k-u-color-background1">1</li>
              <li className="k-u-color-background1">2</li>
              <li className="k-u-color-background1">3</li>
              <li className="k-u-color-background1">4</li>
            </ul>
          </section>
          <footer className="k-DashboardLayout__footer">
            <p className="k-u-color-background1">Help?</p>
          </footer>
        </div>
        <div className="k-DashboardLayout__mainBar">
          <header className="k-DashboardLayout__heading">
            <button
              onClick={() => {
                setOpen(current => {
                  return !current
                })
              }}
            >
              ->
            </button>
            <p className="k-u-color-background1">Heading</p>
          </header>
          <section className="k-DashboardLayout__main">
            <p>
              Donec id elit non mi porta gravida at eget metus. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Curabitur blandit tempus
              porttitor. Maecenas sed diam eget risus varius blandit sit amet
              non magna. Cras mattis consectetur purus sit amet fermentum.
            </p>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque
              ornare sem lacinia quam venenatis vestibulum. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Morbi leo risus, porta ac consectetur
              ac, vestibulum at eros. Aenean lacinia bibendum nulla sed
              consectetur.
            </p>
            <p>
              Integer posuere erat a ante venenatis dapibus posuere velit
              aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
              venenatis vestibulum. Sed posuere consectetur est at lobortis.
              Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus
              mollis interdum. Sed posuere consectetur est at lobortis.
            </p>
            <p className="k-DashboardLayout__fullWidth">
              Donec id elit non mi porta gravida at eget metus. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Curabitur blandit tempus
              porttitor. Maecenas sed diam eget risus varius blandit sit amet
              non magna. Cras mattis consectetur purus sit amet fermentum.
            </p>
            <p className="k-DashboardLayout__fullWidth">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque
              ornare sem lacinia quam venenatis vestibulum. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Morbi leo risus, porta ac consectetur
              ac, vestibulum at eros. Aenean lacinia bibendum nulla sed
              consectetur.
            </p>
            <p>
              Integer posuere erat a ante venenatis dapibus posuere velit
              aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
              venenatis vestibulum. Sed posuere consectetur est at lobortis.
              Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus
              mollis interdum. Sed posuere consectetur est at lobortis.
            </p>
            <p>
              Donec id elit non mi porta gravida at eget metus. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Curabitur blandit tempus
              porttitor. Maecenas sed diam eget risus varius blandit sit amet
              non magna. Cras mattis consectetur purus sit amet fermentum.
            </p>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque
              ornare sem lacinia quam venenatis vestibulum. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Morbi leo risus, porta ac consectetur
              ac, vestibulum at eros. Aenean lacinia bibendum nulla sed
              consectetur.
            </p>
            <p>
              Integer posuere erat a ante venenatis dapibus posuere velit
              aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
              venenatis vestibulum. Sed posuere consectetur est at lobortis.
              Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus
              mollis interdum. Sed posuere consectetur est at lobortis.
            </p>
          </section>
        </div>
      </div>
    </StyledDashboard>
  )
}
