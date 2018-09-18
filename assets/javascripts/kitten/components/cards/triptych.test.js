import React from 'react'
import renderer from 'react-test-renderer'
import { Triptych } from 'kitten/components/cards/triptych'
import { Title } from 'kitten/components/typography/title'
import { VerticalCardWithAction } from 'kitten/components/cards/vertical-card-with-action'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<Triptych />', () => {
  let originalMatchMedia
  let component

  beforeEach(() => {
    originalMatchMedia = window.matchMedia
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  describe('by default', () => {
    beforeEach(() => {
      window.matchMedia = createMockMediaMatcher(false)

      component = renderer.create(<Triptych title="Custom title" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with some props', () => {
    beforeEach(() => {
      window.matchMedia = createMockMediaMatcher(false)

      component = renderer
        .create(
          <Triptych
            title={
              <Title tag="h2" modifier="secondary" margin={false}>
                Main title goes here !
              </Title>
            }
            item1={
              <VerticalCardWithAction
                imageProps={{
                  src: `http://via.placeholder.com/349x465/19b4fa/19b4fa`,
                  alt: '',
                }}
                title="Lorem ipsum dolor sit amet"
                button="Lorem"
              />
            }
            item2={
              <VerticalCardWithAction
                imageProps={{
                  src: `http://via.placeholder.com/349x465/ff8846/ff8846`,
                  alt: '',
                }}
                title="Donsectetur adipiscing elit"
                description="Nulla ut orci velit. Orci varius natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus."
                button="Ipsum"
              />
            }
            item3={
              <VerticalCardWithAction
                imageProps={{
                  src: `http://via.placeholder.com/349x465/61d079/61d079`,
                  alt: '',
                }}
                title="Praesent tincidunt ultrices sem"
                button="Dolor"
              />
            }
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
