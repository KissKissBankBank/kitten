import React from 'react'
import { action } from '@storybook/addon-actions'
import { EditorBar } from './index'
import { DocsPage } from 'storybook/docs-page'

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
  ScrollableContainer,
} from 'kitten'

export default {
  component: EditorBar,
  title: 'Interaction/EditorBar',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="EditorBar" />,
    },
    component: EditorBar,
  },
  args: {
    theme: 'white',
    align: 'start',
  },
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['grey', 'white'],
    },
    align: {
      control: 'select',
      options: [
        'flex-start',
        'start',
        'center',
        'flex-end',
        'end',
        'space-between',
        'space-around',
      ],
    },
  },
}

export const Default = ({ ...args }) => {
  return (
    <ScrollableContainer
      shadowColor={`var(--color-grey-${args.theme === 'grey' ? 2 : 0}00)`}
      className={`k-u-background`}
    >
      <EditorBar {...args} className="k-u-flex-grow-single">
        <EditorBar.List currentIcon={<Title3Icon />}>
          <EditorBar.Item onClick={action('Clicked Title1')}>
            <Title1Icon />
          </EditorBar.Item>
          <EditorBar.Item onClick={action('Clicked Title2')}>
            <Title2Icon />
          </EditorBar.Item>
          <EditorBar.Item onClick={action('Clicked Title3')} active>
            <Title3Icon />
          </EditorBar.Item>
          <EditorBar.Item onClick={action('Clicked Title4')}>
            <Title4Icon />
          </EditorBar.Item>
          <EditorBar.Item onClick={action('Clicked Paragraph')}>
            <ParagraphIcon />
          </EditorBar.Item>
        </EditorBar.List>
        <EditorBar.Group>
          <EditorBar.Button onClick={action('Clicked AlignLeft')} active>
            <AlignLeftIcon />
          </EditorBar.Button>
          <EditorBar.Button onClick={action('Clicked AlignCenter')}>
            <AlignCenterIcon />
          </EditorBar.Button>
          <EditorBar.Button onClick={action('Clicked AlignRight')}>
            <AlignRightIcon />
          </EditorBar.Button>
        </EditorBar.Group>
        <EditorBar.Group>
          <EditorBar.Button onClick={action('Clicked Bold')} active>
            <BoldIcon />
          </EditorBar.Button>
          <EditorBar.Button onClick={action('Clicked Italic')}>
            <ItalicIcon />
          </EditorBar.Button>
        </EditorBar.Group>
        <EditorBar.Group>
          <EditorBar.Button onClick={action('Clicked Link')} disabled>
            <LinkIcon />
          </EditorBar.Button>
          <EditorBar.Button onClick={action('Clicked EditorButton')} wide>
            <EditorButtonIcon />
          </EditorBar.Button>
        </EditorBar.Group>
      </EditorBar>
    </ScrollableContainer>
  )
}
