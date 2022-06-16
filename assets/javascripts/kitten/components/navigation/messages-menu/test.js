import React from 'react'
import renderer from 'react-test-renderer'
import { MessagesMenu } from './index'

describe('<MessagesMenu />', () => {
  let component

  describe('compare with snapshot', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <MessagesMenu>
            <MessagesMenu.Message
              status="unread"
              active
              onClick={() => {}}
              avatarProps={{
                src: '/kitten-0.jpg',
              }}
              closeButtonProps={{
                onClick: () => {},
                'aria-label': "Hello world",
              }}
            >
              <div>
                <span>Claude L.</span>
                <span>
                  &nbsp;•&nbsp;Hier{' '}
                  <span className="k-u-a11y-visuallyHidden">à </span>19:30
                </span>
              </div>
              <span>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
                libero, a pharetra augue. Nullam quis risus eget urna mollis
                ornare vel eu leo. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
              </span>
            </MessagesMenu.Message>
            <MessagesMenu.Message
              status="read"
              onClick={() => {}}
              avatarProps={{
                src: '/kitten-0.jpg',
              }}
              closeButtonProps={{
                onClick: () => {},
                'aria-label': "Hello world",
              }}
            >
              <div>
                <span>Claude L.</span>
                <span>
                  &nbsp;•&nbsp;Hier{' '}
                  <span className="k-u-a11y-visuallyHidden">à </span>19:30
                </span>
              </div>
              <span>
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia
                quam venenatis vestibulum.
              </span>
            </MessagesMenu.Message>
          </MessagesMenu>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
