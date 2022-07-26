import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ChatLayout } from './index'

describe('<ChatLayout />', () => {
  let component

  describe('compare with snapshot', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ChatLayout>
            <ChatLayout.Column isPrimaryColumn title="Messagerie" name="list">
              Hello world
            </ChatLayout.Column>

            <ChatLayout.Column
              name="chat"
              hasMobileHeader
              fullWidthContent
              title={<p>Title</p>}
              backAction={({ setActiveColumn }) => {
                setActiveColumn('list')
                document.getElementById('list')?.focus({ preventScroll: true })
              }}
              backActionText="Back action text"
              nextAction={({ setActiveColumn }) => {
                setActiveColumn('info')
                document.getElementById('info')?.focus({ preventScroll: true })
              }}
              nextActionText="Next action text"
            >
              Hello world
            </ChatLayout.Column>

            <ChatLayout.Column
              name="info"
              hasMobileHeader
              title="Title"
              centeredHeader
              backAction={({ setActiveColumn }) => {
                setActiveColumn('chat')
                document.getElementById('chat')?.focus({ preventScroll: true })
              }}
              backActionText="Back action text"
            >
              Hello world
            </ChatLayout.Column>
          </ChatLayout>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
