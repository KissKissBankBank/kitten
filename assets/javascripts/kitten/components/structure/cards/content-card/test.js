import React from 'react'
import renderer from 'react-test-renderer'
import { ContentCard } from './index'

describe('<ContentCard />', () => {
  describe('default', () => {
    const component = renderer
      .create(
        <ContentCard>
          <ContentCard.Header>15 novembre 2021</ContentCard.Header>
          <ContentCard.Title>
            Aenean lacinia bibendum nulla sed !
          </ContentCard.Title>
          <ContentCard.Content>
            <p>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum massa justo sit amet risus. Sed posuere
              consectetur est at lobortis. Donec sed odio dui. Donec ullamcorper
              nulla non metus auctor fringilla.
            </p>
            <img alt="" src="img.jpg" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce
              dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
              ut fermentum massa justo sit amet risus. Vivamus sagittis lacus
              vel augue laoreet rutrum faucibus dolor auctor.
            </p>
          </ContentCard.Content>
          <ContentCard.Footer>Footer content</ContentCard.Footer>
        </ContentCard>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
