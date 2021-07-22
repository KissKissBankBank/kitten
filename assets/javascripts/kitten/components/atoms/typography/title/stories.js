import React from 'react'
import { Title } from './index'
import { Container } from '../../../..'

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
    control: {type: 'color'},
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
   <div class="k-u-margin-top-quadruple">
       <Title
         modifier={modifier}
         italic={italic}
         noMargin={noMargin}
         cssColor={cssColor}
         {...props}
       >
        Lorem ipsum dolor sit amet
       </Title>
     </div>
   </Container>
);

Default.args = args;
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
  title: 'Atoms/Typography/Title',
  parameters: {
    component: Title,
    componentSubtitle: 'List of Title',
  },
  args,
  argTypes,
}
