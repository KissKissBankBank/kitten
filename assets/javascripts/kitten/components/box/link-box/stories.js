import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { LinkBox } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { FlashCircleIcon } from '../../icons/flash-circle-icon'
import { Text } from '../../typography/text'
import COLORS from '../../../constants/colors-config'

const info = {
  text: `
    # LinkBox

    ## Import
    ~~~js
    import { LinkBox } from '@kisskissbankbank/kitten/src/components/box/link-box'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <LinkBox />
    ~~~

    ### With icon
    ~~~js
    <LinkBox>
      <LinkBox.Icon>
        <Icon />
      </LinkBox.Icon>
    </LinkBox>
    ~~~

    ### With text
    ~~~js
    <LinkBox>
      <LinkBox.Text>
        <Text>
          foobar
        </Text>
      </LinkBox.Text>
    </LinkBox>
    ~~~

    ### Link props
    ~~~js
    <LinkBox
      href="#anchor"
      isExternal
      linkProps={{ aria-hidden: true }}
    />
    ~~~
  `,
  header: false,
  propTables: false,
}

storiesOf('Box', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'LinkBox',
    () => (
      <Container>
        <Marger top="5" bottom="5">
          <LinkBox
            href={text('Href', '#anchor')}
            isExternal={boolean('External?', false)}
          >
            <LinkBox.Icon>
              <FlashCircleIcon
                circleColor="#caf4fe"
                flashColor={COLORS.primary1}
                width="60"
                height="60"
              />
            </LinkBox.Icon>

            <LinkBox.Text>
              <Text size="micro" lineHeight="normal">
                Partie 1
              </Text>

              <Text size="tiny" weight="regular" lineHeight="normal">
                Les différents types de financement participatif
              </Text>
            </LinkBox.Text>
          </LinkBox>
        </Marger>
      </Container>
    ),
    { info },
  )
