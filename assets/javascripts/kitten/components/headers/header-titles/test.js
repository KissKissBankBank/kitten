import React from 'react'
import { HeaderTitles } from '../../../components/headers/header-titles'

describe('<HeaderTitles />', () => {
  const titles = shallow(<HeaderTitles />)

  it('renders a <div class="k-Header__titles" />', () => {
    expect(titles.hasClass('k-Header__titles')).toBe(true)
  })

  it('renders a default title', () => {
    const title = titles.find('.k-Header__title')

    expect(title.text()).toBe('You forgot the title!')
  })

  describe('with title and subtitle', () => {
    const titles = shallow(
      <HeaderTitles title="Custom title" subtitle="Custom subtitle" />,
    )

    it('renders a title', () => {
      const title = titles.find('.k-Header__title')

      expect(title).toHaveLength(1)
      expect(title.text()).toBe('Custom title')
    })

    it('renders a subtitle', () => {
      const subtitle = titles.find('.k-Header__subtitle')

      expect(subtitle).toHaveLength(1)
      expect(subtitle.text()).toBe('Custom subtitle')
    })
  })

  describe('with custom class', () => {
    const titles = shallow(
      <HeaderTitles
        className="custom-class"
        titleClassName="title-custom-class"
        subtitleClassName="subtitle-custom-class"
        subtitle="Custom subtitle"
      />,
    )

    it('has the right classes', () => {
      expect(titles.hasClass('custom-class')).toBe(true)
      expect(titles.find('.title-custom-class').exists()).toBe(true)
      expect(titles.find('.subtitle-custom-class').exists()).toBe(true)
    })
  })
})
