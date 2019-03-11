import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { IconList } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Text } from '../../typography/text'
import { LockIcon } from '../../icons/lock-icon'

const info = {
  text: `
    # IconList
    &nbsp;

    ## Import
    ~~~js
    import { IconList } from '@kisskissbankbank/kitten/src/components/lists/icon-list'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <IconList>
      <IconList.Item>Foo</IconList.Item>
      <IconList.Item>Bar</IconList.Item>
    </IconList>
    ~~~

    #### With custom icon
    ~~~js
    <IconList>
      <IconList.Item
        icon={ <MyIcon /> }
        iconProps={ {
          style: { backgroundColor: '#FFEBE0', borderColor: '#FFEBE0' },
        } }
      >
        Foo
      </IconList.Item>
      <IconList.Item>Bar</IconList.Item>
    </IconList>
    ~~~
  `,
  header: false,
  propTables: false,
}

storiesOf('List/IconList', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'default',
    () => (
      <Container>
        <Marger top="5" bottom="5">
          <IconList>
            <IconList.Item
              icon={<LockIcon color="#333" />}
              iconProps={{
                style: { backgroundColor: '#FFEBE0', borderColor: '#FFEBE0' },
              }}
            >
              <Text weight="light">
                <Text weight="regular">Donnez de la visibilité</Text> et du sens
                à votre marque, entreprise, collectivité, association,
                fondation…
              </Text>
            </IconList.Item>
            <IconList.Item>
              Donnez de la visibilité et du sens à votre marque, entreprise,
              collectivité, association, fondation…
            </IconList.Item>
            <IconList.Item>
              Donnez de la visibilité et du sens à votre marque, entreprise,
              collectivité, association, fondation…
            </IconList.Item>
            <IconList.Item>
              Donnez de la visibilité et du sens à votre marque, entreprise,
              collectivité, association, fondation…
            </IconList.Item>
          </IconList>
        </Marger>
      </Container>
    ),
    { info },
  )
