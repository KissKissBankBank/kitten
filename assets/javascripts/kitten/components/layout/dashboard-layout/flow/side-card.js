import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { Text } from '../../../typography/text'
import { Paragraph as SideParagraph } from '../../../typography/paragraph/next'
import { ScreenConfig } from '../../../../constants/screen-config'
import COLORS from '../../../../constants/colors-config'

const StyledSideCard = styled.div`
  background-color: ${COLORS.primary5};
  width: 100%;
  box-sizing: border-box;

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    padding: ${pxToRem(30)};
    border-radius: var(--border-radius-m);
    margin-bottom: ${pxToRem(15)};
  }

  .k-DashboardLayout__flow__sideCard__title {
    margin-bottom: ${pxToRem(20)};
  }

  .k-DashboardLayout__flow__sideCard__list {
    list-style: disc;
    margin-left: ${pxToRem(15)};
    padding: 0;

    li {
      margin-bottom: ${pxToRem(10)};
      line-height: ${pxToRem(22)};
      font-size: ${stepToRem(-2)};

      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        font-size: ${stepToRem(-1)};
      }
    }
  }
`

const Title = ({ className, ...props }) => {
  return (
    <Text
      size="small"
      tag="h3"
      weight="700"
      color="font1"
      lineHeight="1.3"
      className={classNames(
        'k-DashboardLayout__flow__sideCard__title',
        className,
      )}
      {...props}
    />
  )
}

const Paragraph = ({ className, ...props }) => {
  return (
    <SideParagraph
      modifier="tertiary"
      margin={false}
      className={classNames(
        'k-DashboardLayout__flow__sideCard__paragraph',
        className,
      )}
      {...props}
    />
  )
}

const List = ({ className, ...props }) => {
  return (
    <ul
      className={classNames(
        'k-DashboardLayout__flow__sideCard__list',
        className,
      )}
      {...props}
    />
  )
}

export const SideCard = ({ className, ...props }) => {
  return (
    <StyledSideCard
      className={classNames('k-DashboardLayout__flow__sideCard', className)}
      {...props}
    />
  )
}

SideCard.Title = Title
SideCard.Paragraph = Paragraph
SideCard.List = List
