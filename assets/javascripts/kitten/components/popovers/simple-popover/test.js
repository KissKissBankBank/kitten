import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { SimplePopover } from './index'

describe('<SimplePopover />', () => {
  let component

  describe('simple SimplePopover ', () => {
    beforeEach(() => {
      component = renderer.create(<SimplePopover />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('SimplePopover with multiple props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <SimplePopover
            isVisible={true}
            onCloseClick={() => {}}
            titleId="popover-title"
            closeButtonLabel="Close"
            title="This popover has a title"
            text="Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. "
            illustration={<p>illus</p>}
            buttons={[
              {
                label: 'J’ai compris',
                modifier: 'hydrogen',
                tiny: true,
                clickOptions: {
                  closeOnClick: true,
                },
              },
              {
                label: 'Mes préférences',
                modifier: 'helium',
                tiny: true,
                onClick: () => {},
              },
            ]}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
