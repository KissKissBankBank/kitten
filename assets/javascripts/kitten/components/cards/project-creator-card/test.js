import React from 'react'
import { ProjectCreatorCard } from '../../../components/cards/project-creator-card'
import renderer from 'react-test-renderer'

describe('<ProjectCreatorCard />', () => {
  it('default snapshot', () => {
    const tree = renderer.create(<ProjectCreatorCard />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('snapshot with notifications', () => {
    const tree = renderer
      .create(
        <ProjectCreatorCard
          date="This is a text"
          href="URL"
          isExternal={true}
          linkText="This is the text"
          statusBackgroundColor="#00F"
          statusBorderColor="#FF0"
          statusText="Custom Text"
        >
          Children
        </ProjectCreatorCard>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
