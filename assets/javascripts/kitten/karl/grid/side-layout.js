import React from 'react'
import classNames from 'classnames'
import { SideLayout } from 'kitten/components/grid/side-layout'
import { InformationBox } from 'kitten/components/box/information-box'

export const renderInformationBox = () => {
  return (
    <div className={ classNames('k-u-margin-top-quadruple',
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

export const KarlSideLayout = () => {
  return (
    <SideLayout className="k-VerticalGrid__fluid"
                title="Your title here"
                sidebarContent={ renderInformationBox() }>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Nulla assumenda, corporis, esse accusantium minus ex vel officia unde
      rerum labore explicabo voluptatem facere omnis suscipit neque distinctio
      dolores dolor minima!
    </SideLayout>
  )
}
