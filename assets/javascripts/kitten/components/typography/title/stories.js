import React from 'react'
import { Title } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import COLORS from '../../../constants/colors-config'

const argTypes = {
  modifier: {
    name: 'modifier',
    description: 'Title have seven modifiers. With different size depending on the device (desktop, tablet and mobile)',
    options: [ 
      'primary',
      'secondary',
      'tertiary',
      'quaternary',
      'quinary',
      'senary',
      'septenary',
    ],
    control: {type: 'select'},
  },
  noMargin: {
    name: 'noMargin',
    description: 'Remove default margins of `title` attribut.',
    control: {type: 'boolean'},
  },
  cssColor: {
    name: 'cssColor',
    description: 'Specify a color (use a CSS color string).',
    control: {type: 'color', presetColor: '#eee'},
  },
  italic: {
    name: 'italic',
    description: 'Use `font-style: italic`.',
    control: { type: 'boolean'},
  },
}

const args = {
  tag: 'h1',
  modifier: 'primary',
  noMargin: false,
  italic: false,
  cssColor: null,
}

export const Default = ({
  modifier,
  noMargin,
  italic,
  cssColor,
  ...props
}) => (
  <Container>
   <Marger top="4">
       <Title
         modifier={modifier}
         italic={italic}
         noMargin={noMargin}
         cssColor={COLORS.font1}
         {...props}
       >
        Lorem ipsum dolor sit amet
       </Title>
     </Marger>
   </Container>
);

Default.args = args;
Default.parameters = {
  docs: {
    description: {
      story: "By default, the content is centered.",
    },
  },
}
Default.argTypes = argTypes;

export const WithoutMargin = Default.bind({});
WithoutMargin.args = {
  ...Default.args,
  noMargin: true,
}

WithoutMargin.parameters = {
  docs: {
    description: {
      story: "Without margin"
    }
  }
}

export const WithItalic = Default.bind({});
WithItalic.args = {...Default.args, italic: true};
WithItalic.parameters = {
  docs: {
    description: {
      story: "With italic style"
    }
  }
}

export default {
  component: Title,
  title: 'Typography/Title',
  parameters: {
    component: Title,
    componentSubtitle: 'List of Title',
  },
  args,
  argTypes,
}
