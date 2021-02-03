import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import PropTypes from 'prop-types'
import TYPOGRAPHY from '../../../constants/typography-config'
import COLORS from '../../../constants/colors-config'

const StyledLinkList = styled.ul`
  text-align: center;
  list-style-type: none;
  padding: 0;

  @media (min-width: ${ScreenConfig.S.min}px) {
    text-align: left;
  }

  &.k-LinkList--withoutMargin {
    margin-top: 0;
    margin-bottom: 0;
  
    .k-LinkList__item:last-child {
      margin-bottom: 0;
    }
  }

  .k-LinkList__item {
    margin-bottom: ${pxToRem(5)};
  }

  .k-LinkList__item--double {
    margin-bottom: ${pxToRem(10)};
  }
  
  .k-LinkList__item--triple {
    margin-bottom: ${pxToRem(15)};
  }
  
  .k-LinkList__link {
    ${TYPOGRAPHY.fontStyles.regular};
    font-size: ${stepToRem(-1)};
    text-decoration: none;
  
    &:active,
    &.k-LinkList__link--isActive {
     color: ${COLORS.primary3};
    }
  
    &:hover {
      color: ${COLORS.primary1};
    }
  
    transition: color .2s;
  }
  
  .k-LinkList__item--regular,
  .k-LinkList__link--regular {
    ${TYPOGRAPHY.fontStyles.regular};
  }
  
  .k-LinkList__item--light,
  .k-LinkList__link--light {
    ${TYPOGRAPHY.fontStyles.light};
  }
  
  .k-LinkList__link--normalLineHeight {
    line-height: normal;
  }
  
  .k-LinkList__link--light {
    color: ${COLORS.background1};
  }
  
  .k-LinkList__link--dark {
    color: ${COLORS.font1};
  }
`

export const LinkList = ({
  className,
  margin,
  items,
  lineHeight,
  itemMargin,
  color,
  weight,
  href,
  active,
  ...others
}) => {

  return (
    <StyledLinkList
      {...others}
      className={classNames(
        'k-LinkList',
        {'k-LinkList--withoutMargin': !margin}
      )}
    >
      {items.map(({ item, key, href, active }) => (
        <li className={classNames(
          'k-LinkList__item',
          `k-LinkList__item--${itemMargin}`,   
        )}
          key={key}
        >
          <a 
            {...others}
            href={href}
            className={classNames(
              'k-LinkList__link',
              `k-LinkList__link--${color}`,
              `k-LinkList__item--${weight}`,
              {
                'k-LinkList__link--isActive': active,
                'k-LinkList__link--regular': weight == 'regular' && !weight,
                'k-LinkList__link--light': weight == 'light' && !weight,
              },
            )}
          >
            {item}
          </a>
        </li>
      ))}
    </StyledLinkList>
  )
}

LinkList.propTypes = {
  color: PropTypes.oneOf(['light', 'dark']),
  lineHeight: PropTypes.oneOf(['normal']),
  itemMargin: PropTypes.oneOf(['double', 'triple']),
  weight: PropTypes.oneOf(['regular', 'light']),
  margin: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string.isRequired,
      key: PropTypes.string,
      href: PropTypes.string,
      weight: PropTypes.string,
      active: PropTypes.bool,
    }),
  )
}

LinkList.defaultProps = {
  className: null,
  margin: true,
  items: [], // Eg: [{ key: …, item: …, href: …, weight: …, }]
  color: 'dark',
  lineHeight: null,
  itemMargin: null,
  weight: 'regular',
  active: false,
}
