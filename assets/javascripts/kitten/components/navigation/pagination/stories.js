import React from 'react'
import { Pagination } from './index'
import { action } from '@storybook/addon-actions'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Pagination" />,
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
  args: {
    margin: true,
    align: 'left',
    onPageClick: action('PageClick'),
    prevButtonLabel: 'Previous page',
    nextButtonLabel: 'Next page',
  },
  argTypes: {
    prevButtonLabel: { control: 'string' },
    nextButtonLabel: { control: 'string' },
    goToPageLabel: { control: null },
    goToPageHref: { control: null },
    onPageClick: { control: null },
    totalPages: { control: 'number' },
    currentPage: { control: 'number' },
    currentPageLabel: { control: null },
    margin: { control: 'bool' },
    align: { control: 'select', options: [null, 'left', 'center', 'right'] },
  },
}

export const Default = args => (
  <>
    <Pagination totalPages={1} currentPage={1} {...args} />
    <Pagination totalPages={2} currentPage={1} {...args} />
    <Pagination totalPages={2} currentPage={2} {...args} />
    <Pagination totalPages={5} currentPage={1} {...args} />
    <Pagination totalPages={7} currentPage={1} {...args} />
    <Pagination totalPages={42} currentPage={1} {...args} />
    <Pagination totalPages={42} currentPage={2} {...args} />
    <Pagination totalPages={42} currentPage={3} {...args} />
    <Pagination totalPages={42} currentPage={4} {...args} />
    <Pagination totalPages={42} currentPage={5} {...args} />
    <Pagination totalPages={42} currentPage={6} {...args} />
    <Pagination totalPages={42} currentPage={38} {...args} />
    <Pagination totalPages={42} currentPage={39} {...args} />
    <Pagination totalPages={42} currentPage={40} {...args} />
    <Pagination totalPages={42} currentPage={41} {...args} />
    <Pagination totalPages={42} currentPage={42} {...args} />
    <Pagination totalPages={9999} currentPage={9042} {...args} />
  </>
)
