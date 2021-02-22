import React, { Fragment } from 'react'
import TextWithVideo from './text-with-video'
import TextWithIconsList from './text-with-icon-list'
import TextWithImages from './text-with-images'
import Title from './title'
import TextWithImage from './text-with-image'
import Triptych from './triptych'
import FormWithImage from './form-with-image'

const PartnerPage = () => (
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

export default PartnerPage
