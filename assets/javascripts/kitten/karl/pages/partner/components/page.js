import React, { Fragment } from 'react'
import { HeaderNav, KissKissBankBankLogo } from '../../../..'
import TextWithVideo from './text-with-video'
import TextWithIconsList from './text-with-icon-list'
import TextWithImages from './text-with-images'
import Title from './title'
import TextWithImage from './text-with-image'
import Triptych from './triptych'
import FormWithImage from './form-with-image'

const PartnerPage = () => (
  <Fragment>
    <HeaderNav>
      <HeaderNav.Logo href="#">
        <KissKissBankBankLogo />
      </HeaderNav.Logo>
    </HeaderNav>
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
