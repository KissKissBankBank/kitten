import React from 'react'
import classNames from 'classnames'
import { SideLayout } from 'kitten/components/layout/side-layout'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { InformationBox } from 'kitten/components/box/information-box'
import DocLinkBox from 'kitten/components/box/doc-link-box'

const renderInformationBox = () => {
  return (
    <div key='karlSideLayoutInformationBox'
         className={ classNames('k-u-margin-top-quadruple',
                                'k-u-margin-right-quadruple',
                                'k-u-margin-left-quadruple') }>
      <InformationBox title="Your title here">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum assumenda,
          rem doloribus voluptatem corporis iure sapiente, aperiam eligendi
          officiis nam, repellendus accusamus nulla a quia debitis eveniet
          necessitatibus eum veritatis.
        </p>
      </InformationBox>
    </div>
  )
}

const renderDocLinkBox = (item) => {
  const { id, ...docLinkBoxProps } = item

  return (
    <div key={ id }
         className={ classNames('k-u-margin-top-triple',
                                'k-u-margin-right-double',
                                'k-u-margin-left-quadruple') }>
      <DocLinkBox { ...docLinkBoxProps } />
    </div>
  )
}

const renderDocLinkBoxes = () => {
  return [
    {
      id: 'myLink1',
      href: '#',
      title: 'My title',
      text: 'My text',
    }, {
      id: 'myLink2',
      isExternal: true,
      href: 'http://www.google.com',
      title: 'My title 2',
      text: 'My text 2',
    },
  ].map(renderDocLinkBox)
}

const renderSidebar = () => {
  return [renderDocLinkBoxes(), renderInformationBox()]
}

export const KarlSideLayout = () => {
  return (
    <SideLayout className="k-VerticalGrid__fluid"
                sidebar={ renderSidebar() }>
      <Title>
        Your title here
      </Title>

      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Nulla assumenda, corporis, esse accusantium minus ex vel officia unde
        rerum labore explicabo voluptatem facere omnis suscipit neque distinctio
        dolores dolor minima!
      </Paragraph>
    </SideLayout>
  )
}
