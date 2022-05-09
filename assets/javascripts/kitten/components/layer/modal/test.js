import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { Modal } from './index'

describe('<Modal />', () => {
  describe('with trigger', () => {
    const component = mount(
      <Modal trigger={<span className="trigger-example" />} />,
    )

    it('contains the trigger', () => {
      expect(component.find('.trigger-example').exists()).toBe(true)
    })
  })

  describe('with content prop', () => {
    const component = mount(<Modal className="content-example" as="strong" />)

    it('contains the content', () => {
      expect(component.render().hasClass('content-example')).toBe(true)
      expect(component.render().hasClass('k-Modal')).toBe(true)
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
            <Modal size="medium" trigger={<button>Open</button>}>
              <Modal.Title>Oops… Quelque chose s’est mal passé.</Modal.Title>
              <Modal.Content>
                <p>
                  Notre équipe a été automatiquement notifiée et fait en sorte
                  de résoudre ce problème au plus vite.
                </p>
                <Modal.Actions>
                  <button>Retour à la page d’accueil</button>
                  <button>Recharger la page</button>
                </Modal.Actions>
              </Modal.Content>
            </Modal>,
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
            <Modal
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
                  <Modal.Header>
                    <Modal.Title>
                      Oops… Quelque chose s’est mal passé.
                    </Modal.Title>
                    <Modal.HeaderRight>Hello</Modal.HeaderRight>
                    <Modal.HeaderLeft>World</Modal.HeaderLeft>
                  </Modal.Header>
                  <Modal.Content>
                    <p>
                      Notre équipe a été automatiquement notifiée et fait en
                      sorte de résoudre ce problème au plus vite.
                    </p>
                    <Modal.Actions>
                      <button onClick={close}>
                        Retour à la page d’accueil
                      </button>
                      <button onClick={close}>Recharger la page</button>
                    </Modal.Actions>
                  </Modal.Content>
                </>
              )}
            </Modal>,
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
