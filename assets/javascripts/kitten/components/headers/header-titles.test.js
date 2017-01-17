import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { HeaderTitles } from 'kitten/components/headers/header-titles'

describe('<HeaderTitles />', () => {
  const titles = shallow(<HeaderTitles />)

  it('renders a <div class="k-Header__titles" />', () => {
    expect(titles).to.have.className('k-Header__titles')
  })

  it('renders a default title', () => {
    const title = titles.find('.k-Header__title')

    expect(title).to.have.text('You forgot the title!')
  })

  describe('with title and subtitle', () => {
    const titles = shallow(
      <HeaderTitles title="Custom title" subtitle="Custom subtitle" />
    )

    it('renders a title', () => {
      const title = titles.find('.k-Header__title')

      expect(title).to.have.length(1)
      expect(title).to.have.text('Custom title')
    })

    it('renders a subtitle', () => {
      const subtitle = titles.find('.k-Header__subtitle')

      expect(subtitle).to.have.length(1)
      expect(subtitle).to.have.text('Custom subtitle')
    })
  })
})
