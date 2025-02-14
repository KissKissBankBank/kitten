import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { IconList } from './index'
import { LockIcon } from '../../graphics/icons/lock-icon'
import { Text } from '../../typography/text'

describe('<IconList />', () => {
  let component

  describe('with all sub-components', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <IconList containerProps={{ as: 'nav' }}>
            <IconList.Item
              icon={<LockIcon color="#333" />}
              iconProps={{
                style: { backgroundColor: '#FFEBE0', borderColor: '#FFEBE0' },
              }}
            >
              <Text weight="400">
                <Text weight="500">Foo</Text>Bar
              </Text>
            </IconList.Item>
            <IconList.Item>FooBar</IconList.Item>
            <IconList.Item>FooBar</IconList.Item>
            <IconList.Item>FooBar</IconList.Item>
          </IconList>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
