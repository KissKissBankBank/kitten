import React, { Fragment } from 'react'
import Example from '../../app/example'

export default () => {
  return (
    <Fragment>
      <div className="k-Grid">
        <Example title="5 elements with a fluid element in the middle">
          <div className="k-VerticalGrid" style={{ height: '200px' }}>
            <div className="k-VerticalGrid__page">
              <div className="karl-RowBox" />
              <div className="karl-RowBox" />
              <div className="karl-RowBox k-VerticalGrid__fluid" />
              <div className="karl-RowBox" />
              <div className="karl-RowBox" />
            </div>
          </div>
        </Example>
      </div>
    </Fragment>
  )
}
