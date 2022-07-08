import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { SlideModal } from './index'

describe('<SlideModal />', () => {
  describe('with trigger', () => {
    const component = mount(
      <SlideModal trigger={<span className="trigger-example" />} />,
    )

    it('contains the trigger', () => {
      expect(component.find('.trigger-example').exists()).toBe(true)
    })
  })

  describe('with content prop', () => {
    const component = mount(<SlideModal className="content-example" as="strong" />)

    it('contains the content', () => {
      expect(component.render().hasClass('content-example')).toBe(true)
      expect(component.render().hasClass('k-SlideModal')).toBe(true)
      expect(component.render().is('strong')).toBe(true)
    })
  })

  let component

  describe('snapshot tests', () => {
    describe('is closed', () => {
      beforeEach(() => {
        ReactDOM.createPortal = jest.fn(element => {
          return element
        })

        component = renderer
          .create(
            <SlideModal size="medium" trigger={<button>Open</button>}>
              <SlideModal.Title>Oops… Quelque chose s’est mal passé.</SlideModal.Title>
              <SlideModal.Content>
                <p>
                  Notre équipe a été automatiquement notifiée et fait en sorte
                  de résoudre ce problème au plus vite.
                </p>
              </SlideModal.Content>
              <SlideModal.Actions>
                <button>Retour à la page d’accueil</button>
                <button>Recharger la page</button>
              </SlideModal.Actions>
            </SlideModal>,
          )
          .toJSON()
      })

      afterEach(() => {
        ReactDOM.createPortal.mockClear()
      })

      it('matches with snapshot', () => {
        expect(component).toMatchSnapshot()
      })
    })

    describe('is open', () => {
      beforeEach(() => {
        ReactDOM.createPortal = jest.fn(element => {
          return element
        })

        component = renderer
          .create(
            <SlideModal
              size="medium"
              isOpen
              modalProps={{
                style: {
                  content: {
                    wordSpacing: 10,
                    lineHeight: 20,
                  },
                  overlay: {
                    background: '#fff',
                  },
                },
              }}
            >
              {({ close }) => (
                <>
                  <SlideModal.Title>
                    Oops… Quelque chose s’est mal passé.
                  </SlideModal.Title>
                  <SlideModal.Content>
                    <p>
                      Notre équipe a été automatiquement notifiée et fait en
                      sorte de résoudre ce problème au plus vite.
                    </p>
                  </SlideModal.Content>
                  <SlideModal.Actions>
                    <button onClick={close}>
                      Retour à la page d’accueil
                    </button>
                    <button onClick={close}>Recharger la page</button>
                  </SlideModal.Actions>
                </>
              )}
            </SlideModal>,
          )
          .toJSON()
      })

      afterEach(() => {
        ReactDOM.createPortal.mockClear()
      })

      it('matches with snapshot', () => {
        expect(component).toMatchSnapshot()
      })
    })
  })
})
