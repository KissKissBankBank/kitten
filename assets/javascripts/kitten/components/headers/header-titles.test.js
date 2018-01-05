import React from 'react'

import { HeaderTitles } from 'kitten/components/headers/header-titles'

describe('<HeaderTitles />', () => {
  const titles = shallow(<HeaderTitles />)

  test('renders a <div class="k-Header__titles" />', () => {
    expect(titles.hasClass('k-Header__titles')).to.equal(true)
  })

  test('renders a default title', () => {
    const title = titles.find('.k-Header__title')

    expect(title).to.have.text('You forgot the title!')
  })

  describe('with title and subtitle', () => {
    const titles = shallow(
      <HeaderTitles title="Custom title" subtitle="Custom subtitle" />
    )

    test('renders a title', () => {
      const title = titles.find('.k-Header__title')

      expect(title).toHaveLength(1)
      expect(title).to.have.text('Custom title')
    })

    test('renders a subtitle', () => {
      const subtitle = titles.find('.k-Header__subtitle')

      expect(subtitle).toHaveLength(1)
      expect(subtitle).to.have.text('Custom subtitle')
    })
  })

  describe('with custom class', () => {
    const titles = shallow(
      <HeaderTitles className="custom-class"
                    titleClassName="title-custom-class"
                    subtitleClassName="subtitle-custom-class"
                    subtitle="Custom subtitle" />
    )

    test('has the right classes', () => {
      expect(titles.hasClass('custom-class')).to.equal(true)
      expect(titles).to.have.descendants('.title-custom-class')
      expect(titles).to.have.descendants('.subtitle-custom-class')
    })
  })
})
