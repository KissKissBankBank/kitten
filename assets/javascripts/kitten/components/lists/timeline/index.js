import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from '../../../components/typography/text'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { ScreenConfig } from '../../../constants/screen-config'
import { pxToRem } from '../../../helpers/utils/typography'
import classNames from 'classnames'

const circleSize = 50

const StyledTimeline = styled.div`
  position: relative;

  @media (max-width: ${ScreenConfig.XS.max}) {
    margin-left: ${pxToRem(20)};
  }

  .k-Timeline__verticalLine {
    background-image: linear-gradient(
      ${COLORS.line1} 50%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: right;
    background-size: ${pxToRem(2)} ${pxToRem(8)};
    background-repeat: repeat-y;
    position: absolute;
    height: 100%;
    top: 0;
    left: ${pxToRem(-1)};
    width: ${pxToRem(2)};
  }

  .k-Timeline__list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .k-Timeline__listItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .k-Timeline__listItem__bullet {
    box-sizing: border-box;
    height: ${pxToRem(circleSize)};
    width: ${pxToRem(circleSize)};
    border: ${pxToRem(2)} solid ${COLORS.line1};
    background-color: ${COLORS.background1};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${pxToRem(40)};
    margin-left: ${pxToRem(-circleSize / 2)};
    line-height: 0;
    flex: 0 0 ${pxToRem(circleSize)};
    position: relative;
    ${TYPOGRAPHY.fontStyles.bold};

    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      margin-right: ${pxToRem(20)};
    }
  }

  &.k-Timeline--thin .k-Timeline__listItem__bullet {
    margin-top: ${pxToRem(40)};
    margin-bottom: ${pxToRem(40)};

    @media (min-width: ${pxToRem(
        ScreenConfig.S.min,
      )}) and (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      margin-top: ${pxToRem(20)};
      margin-bottom: ${pxToRem(20)};
    }
  }
  &.k-Timeline--large .k-Timeline__listItem__bullet {
    margin-top: ${pxToRem(80)};
    margin-bottom: ${pxToRem(80)};

    @media (min-width: ${pxToRem(
        ScreenConfig.S.min,
      )}) and (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      margin-top: ${pxToRem(60)};
      margin-bottom: ${pxToRem(60)};
    }
  }

  .k-Timeline__listItem__content {
    margin: ${pxToRem(25)} 0;
    flex-grow: 1;
    align-items: center;
  }
`

export const Timeline = ({ children, itemHeight, ...props }) => {
  return (
    <StyledTimeline
      className={classNames('k-Timeline', `k-Timeline--${itemHeight}`)}
      {...props}
    >
      <span className="k-Timeline__verticalLine" />

      <ol className="k-Timeline__list">
        {React.Children.map(children, (child, index) => (
          <li className="k-Timeline__listItem">
            <Text
              size="tiny"
              className="k-Timeline__listItem__bullet"
              aria-hidden
            >
              {++index}
            </Text>
            <div className="k-Timeline__listItem__content">{child}</div>
          </li>
        ))}
      </ol>
    </StyledTimeline>
  )
}

Timeline.propTypes = {
  children: PropTypes.node.isRequired,
  itemHeight: PropTypes.oneOf(['thin', 'large']),
}

Timeline.defaultProps = {
  itemHeight: 'large',
}
