import React from 'react'
import renderer from 'react-test-renderer'
import { EditorBar } from './index'

import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  LinkIcon,
  EditorButtonIcon,
  ParagraphIcon,
  Title1Icon,
  Title2Icon,
  Title3Icon,
  Title4Icon,
} from 'kitten'

describe('<EditorBar />', () => {
  let component

  describe('minimal', () => {
    beforeEach(() => {
      component = renderer.create(<EditorBar />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with mucho props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <EditorBar align="center" theme="grey">
            <EditorBar.List currentIcon={<Title3Icon />}>
              <EditorBar.Item>
                <Title1Icon />
              </EditorBar.Item>
              <EditorBar.Item>
                <Title2Icon />
              </EditorBar.Item>
              <EditorBar.Item active>
                <Title3Icon />
              </EditorBar.Item>
              <EditorBar.Item>
                <Title4Icon />
              </EditorBar.Item>
              <EditorBar.Item>
                <ParagraphIcon />
              </EditorBar.Item>
            </EditorBar.List>
            <EditorBar.Group>
              <EditorBar.Button active>
                <AlignLeftIcon />
              </EditorBar.Button>
              <EditorBar.Button>
                <AlignCenterIcon />
              </EditorBar.Button>
              <EditorBar.Button>
                <AlignRightIcon />
              </EditorBar.Button>
            </EditorBar.Group>
            <EditorBar.Group>
              <EditorBar.Button active>
                <BoldIcon />
              </EditorBar.Button>
              <EditorBar.Button>
                <ItalicIcon />
              </EditorBar.Button>
            </EditorBar.Group>
            <EditorBar.Group>
              <EditorBar.Button disabled>
                <LinkIcon />
              </EditorBar.Button>
              <EditorBar.Button wide>
                <EditorButtonIcon />
              </EditorBar.Button>
            </EditorBar.Group>
          </EditorBar>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
