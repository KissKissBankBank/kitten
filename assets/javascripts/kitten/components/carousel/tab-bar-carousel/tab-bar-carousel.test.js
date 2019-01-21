import React from 'react'
import renderer from 'react-test-renderer'
import { NavTabCarousel } from './index'

describe('<NavTabCarousel />', () => {
  let component

  beforeEach(() => {
    component = renderer
      .create(
        <NavTabCarousel>
          <NavTabCarousel.Prev>Foobar 1</NavTabCarousel.Prev>
          <NavTabCarousel.Pagination activeIndex={2} />
          <NavTabCarousel.Next>Foobar 2</NavTabCarousel.Next>
        </NavTabCarousel>,
      )
      .toJSON()
  })

  it('matches with snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
