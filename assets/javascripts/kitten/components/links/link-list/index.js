import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'
import PropTypes from 'prop-types'

const StyledLinkList = styled.ul`
  .k-LinkList {
    text-align: center;
    list-style-type: none;
    padding: 0;

    @media (min-width: ${ScreenConfig.S.min}px) {
      text-align: left;
    }
  }
  .k-LinkList__item {
    margin-bottom: k-px-to-rem(5px);
  }
  .k-LinkList__item--doubleMargin {
    margin-bottom: $double-margin;
  }
  
  .k-LinkList__item--tripleMargin {
    margin-bottom: $triple-margin;
  }
  
  .k-LinkList__link {
    @include k-typographyFont($font);
    @include k-typographyFontSize($font-size);
  
    text-decoration: none;
  
    &:active,
    &.is-active {
     color: $active-color;
    }
  
    &:hover {
      color: $hover-color;
    }
  
    transition: color .2s;
  }
  
  .k-LinkList__item--regularWeight,
  .k-LinkList__link--regularWeight {
    @include k-typographyFont($font);
  }
  
  .k-LinkList__item--lightWeight,
  .k-LinkList__link--lightWeight {
    @include k-typographyFont($font-light);
  }
  
  .k-LinkList__link--normalLineHeight {
    line-height: $normal-line-height;
  }
  
  .k-LinkList__link--light {
    color: $light-link-color;
  }
  
  .k-LinkList__link--dark {
    color: $dark-link-color;
  }
  
  .k-LinkList--withoutMargin {
    margin-top: 0;
    margin-bottom: 0;
  
    .k-LinkList__item:last-child {
      margin-bottom: 0;
    }
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
  ...others
}) => {

  return (
    <ul
      {...others}
      className={classNames(
        'k-LinkList',
        {'k-LinkList--withoutMargin': !margin}
      )}
    >
      {items.map(({ item, key }) => (
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
                'k-LinkList__link--regularWeight': weight == 'regular' && !weight,
                'k-LinkList__link--lightWeight': weight == 'light' && !weight,
              },
            )}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  )
}

LinkList.propTypes = {
  color: PropTypes.oneOf(['light', 'dark']),
  lineHeight: PropTypes.oneOf(['normal']),
  itemMargin: PropTypes.oneOf(['double', 'triple']),
  weight: PropTypes.oneOf(['regular', 'light']),
}

LinkList.defaultProps = {
  className: null,
  margin: true,
  items: [], // Eg: [{ key: …, item: …, href: …, weight: …, }]
  color: 'dark',
  lineHeight: null,
  itemMargin: null,
  weight: 'regular',
}
