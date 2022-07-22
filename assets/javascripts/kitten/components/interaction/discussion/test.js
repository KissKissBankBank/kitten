import React from 'react'
import renderer from 'react-test-renderer'
import { Discussion } from './index'

describe('<Discussion />', () => {
  let component

  describe('compare with snapshot', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Discussion>
            <p className="k-u-a11y-visuallyHidden">
              Les messages de la discussion sont dans l’ordre antéchronologique
              : le premier message de la liste est le plus récent.
            </p>
            <Discussion.List>
              <Discussion.Message>
                <Discussion.Message.Avatar src="/kitten-3.jpg" />
                <Discussion.Message.Header>Claude L.</Discussion.Message.Header>
                <Discussion.Message.Content>
                  Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula
                  ut id elit. Maecenas faucibus mollis interdum. Nullam id dolor
                  id nibh ultricies vehicula ut id elit. Morbi leo risus, porta
                  ac consectetur ac, vestibulum at eros. Sed posuere consectetur
                  est at lobortis.
                </Discussion.Message.Content>
              </Discussion.Message>
              <Discussion.Message>
                <Discussion.Message.Avatar src="/kitten-0.jpg" />
                <Discussion.Message.Header>Moi</Discussion.Message.Header>
                <Discussion.Message.Content>
                  Nullam quis risus eget urna mollis ornare vel eu leo. Nulla
                  vitae elit libero, a pharetra augue.
                </Discussion.Message.Content>
              </Discussion.Message>
              <Discussion.Message>
                <Discussion.Message.Avatar src="/kitten-3.jpg" />
                <Discussion.Message.Header>Claude L.</Discussion.Message.Header>
                <Discussion.Message.Content>
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                  mattis consectetur purus sit amet fermentum. Integer posuere
                  erat a ante venenatis dapibus posuere velit aliquet. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Integer posuere erat a ante venenatis dapibus posuere velit
                  aliquet. Vestibulum id ligula porta felis euismod semper.
                  Vestibulum id ligula porta felis euismod semper.
                </Discussion.Message.Content>
              </Discussion.Message>
            </Discussion.List>
            <Discussion.Form
              onSubmit={() => {}}
              inputProps={{
                id: 'TextInput',
                'aria-label': 'Texte à envoyer',
                placeholder: 'Envoyer un message',
                onChange: () => {},
              }}
              buttonProps={{
                'aria-label': 'Envoyer',
                onClick: () => {},
              }}
            />
          </Discussion>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
