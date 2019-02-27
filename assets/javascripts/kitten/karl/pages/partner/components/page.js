import React, { Component, Fragment } from 'react'
import TextWithVideo from './text-with-video'
import TextWithIconsList from './text-with-icons-list'
import TextWithImages from './text-with-images'
import Title from './title'
import TextWithImage from './text-with-image'
import Triptych from './triptych'
import FormWithImage from './form-with-image'

class PartnerPage extends Component {
  render() {
    return (
      <Fragment>
        <TextWithVideo />
        <TextWithIconsList />
        <TextWithImages />
        <Title />
        <TextWithImage />
        <TextWithImage imagePosition="right" />
        <TextWithImage />
        <Triptych />
        <FormWithImage />
      </Fragment>
    )
  }
}

export default PartnerPage
