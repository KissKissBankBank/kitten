import React from 'react'
import { NavTabCarousel } from './index'
import { COLORS } from '../../../..'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Structure/Carousels/NavTabCarousel',
  component: NavTabCarousel,
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          filenames={[
            'index.js',
            'components/next.js',
            'components/pagination.js',
            'components/prev.js',
            'components/styled-components.js',
          ]}
          importString="NavTabCarousel"
        />
      ),
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  argTypes: {
    prevHoverColor: { control: 'color' },
    prevChildren: { control: 'text' },
    nextHoverColor: { control: 'color' },
    nextChildren: { control: 'text' },
    paginationActiveColor: { control: 'color' },
    paginationLinks: { control: 'object' },
    paginationActiveIndex: { control: 'number' },
    paginationTotalIndex: { control: 'number' },
  },
  args: {
    prevHoverColor: COLORS.primary1,
    prevChildren: 'Previous Button',
    nextHoverColor: COLORS.primary1,
    nextChildren: 'Next Button',
    paginationActiveColor: COLORS.primary1,
    paginationLinks: [
      'http://www.kisskissbankbank.com',
      'http://www.lendopolis.com',
      'http://www.goodeed.com',
      'https://www.microdon.org',
    ],
    paginationActiveIndex: 2,
    paginationTotalIndex: 5,
  },
}

export const WithLinks = ({
  prevHoverColor,
  prevChildren,
  paginationActiveIndex,
  paginationLinks,
  paginationActiveColor,
  nextHoverColor,
  nextChildren,
}) => (
  <NavTabCarousel>
    <NavTabCarousel.Prev hoverColor={prevHoverColor} children={prevChildren} />
    <NavTabCarousel.Pagination
      activeIndex={paginationActiveIndex}
      links={paginationLinks}
      activeColor={paginationActiveColor}
    />
    <NavTabCarousel.Next hoverColor={nextHoverColor} children={nextChildren} />
  </NavTabCarousel>
)

export const WithNoPrev = ({
  paginationActiveIndex,
  paginationTotalIndex,
  paginationActiveColor,
  prevHoverColor,
  prevChildren,
}) => (
  <NavTabCarousel>
    <NavTabCarousel.Pagination
      activeIndex={paginationActiveIndex}
      totalIndex={paginationTotalIndex}
      activeColor={paginationActiveColor}
    />
    <NavTabCarousel.Next hoverColor={prevHoverColor} children={prevChildren} />
  </NavTabCarousel>
)

export const WithNoNext = ({
  prevHoverColor,
  prevChildren,
  paginationActiveIndex,
  paginationTotalIndex,
  paginationActiveColor,
}) => (
  <NavTabCarousel>
    <NavTabCarousel.Prev hoverColor={prevHoverColor} children={prevChildren} />
    <NavTabCarousel.Pagination
      activeIndex={paginationActiveIndex}
      totalIndex={paginationTotalIndex}
      activeColor={paginationActiveColor}
    />
  </NavTabCarousel>
)

export const WithTotalIndex = ({
  prevHoverColor,
  prevChildren,
  paginationActiveIndex,
  paginationTotalIndex,
  paginationActiveColor,
  nextHoverColor,
  nextChildren,
}) => (
  <NavTabCarousel>
    <NavTabCarousel.Prev hoverColor={prevHoverColor} children={prevChildren} />
    <NavTabCarousel.Pagination
      activeIndex={paginationActiveIndex}
      totalIndex={paginationTotalIndex}
      activeColor={paginationActiveColor}
    />
    <NavTabCarousel.Next hoverColor={nextHoverColor} children={nextChildren} />
  </NavTabCarousel>
)
