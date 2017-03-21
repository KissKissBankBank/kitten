import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { SideLayout } from 'kitten/components/grid/side-layout'
import { InformationBox } from 'kitten/components/box/information-box'
import { Paragraph } from 'kitten/components/typography/paragraph'

describe('<SideLayout />', () => {
  const informationBox = shallow(
    <InformationBox title="InformationBox title here">
      Lorem ipsum dolor…
    </InformationBox>
  )

  const component = mount(
    <SideLayout className="myAwesomeClass"
                title="SideLayout title here"
                sidebarContent={ informationBox }>
      <Paragraph>
        Lorem ipsum dolor…
      </Paragraph>
    </SideLayout>
  )

  const mainContentTitle = component.find('.k-Title')
  const mainContentText = component.find('Paragraph')
  const informationBoxTitle = component.find('.k-InformationBox__title')
  const informationBoxText = component.find('.k-InformationBox__content')

  it('renders a <div class="myAwesomeClass" />', () => {
    expect(component).to.have.className('myAwesomeClass')
  })

  it('has a title', () => {
    expect(mainContentTitle).to.have.text('SideLayout title here')
  })

  it('has a text', () => {
    expect(mainContentText).to.have.text('Lorem ipsum dolor…')
  })

  it('has an aside title', () => {
    expect(informationBoxTitle).to.have.text('InformationBox title here')
  })

  it('has an aside text', () => {
    expect(informationBoxText).to.have.text('Lorem ipsum dolor…')
  })
})
