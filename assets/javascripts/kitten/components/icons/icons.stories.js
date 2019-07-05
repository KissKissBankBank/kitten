import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { BurgerIcon } from './burger-icon/index'
import { GarbageIcon } from './garbage-icon'
import { LockIcon } from './lock-icon'
import { SearchIcon } from './search-icon'
import { WaitingIcon } from './waiting-icon'
import { WarningIcon } from './warning-icon'
import { ArrowIcon } from './arrow-icon'
import { BancontactIcon } from './bancontact-icon'
import { Cart } from './cart'
import { CbIcon } from './cb-icon'
import { CheckedCircleIcon } from './checked-circle-icon'
import { CheckedIcon } from './checked-icon'
import { ClockCircleIcon } from './clock-circle-icon'
import { ClockIcon } from './clock-icon'
import { CrossCircleIcon } from './cross-circle-icon'
import { CrossIcon } from './cross-icon'
import { EmailIcon } from './email-icon'
import { FacebookIcon } from './facebook-icon'
import { FacebookIconWithBackground } from './facebook-icon-with-background'
import { FilterIcon } from './filter-icon'
import { GiropayIcon } from './giropay-icon'
import { GrabberIcon } from './grabber-icon'
import { HeartIcon } from './heart-icon'
import { IdealIcon } from './ideal-icon'
import { InstagramIcon } from './instagram-icon'
import { InstrumentTagIcon } from './instrument-tag-icon'
import { LinkedinIcon } from './linkedin-icon'
import { LocationIcon } from './location-icon'
import { MaestroIcon } from './maestro-icon'
import { MasterCardIcon } from './mastercard-icon'
import { MenuIcon } from './menu-icon'
import { PasswordIcon } from './password-icon'
import { PayPalIcon } from './paypal-icon'
import { PhoneIcon } from './phone-icon'
import { PinterestIcon } from './pinterest-icon'
import { QuestionMarkIcon } from './question-mark-icon'
import { SofortIcon } from './sofort-icon'
import { StarIcon } from './star-icon'
import { TwitterIcon } from './twitter-icon'
import { TypologyTagIcon } from './typology-tag-icon'
import { VisaIcon } from './visa-icon'
import { WarningCircleIcon } from './warning-circle-icon'
import { YoutubeIcon } from './youtube-icon'
import { CopyIcon } from './copy-icon'
import { MessengerIcon } from './messenger-icon'
import { WhatsappIcon } from './whatsapp-icon'

import { Text } from '../..'
import React from 'react'
import { pxToRem } from '../../helpers/utils/typography'

const Container = styled.div`
  padding: ${pxToRem(40)};
  background-color: lightgray;
`

const Group = styled(({ className, children, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <div className={className}>{children}</div>
    </>
  )
})`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const SvgWrapper = styled.div`
  width: ${pxToRem(25)};
  height: ${pxToRem(25)};
  margin: auto;
  padding: ${pxToRem(15)};
`

const IconContainer = styled(({ className, children }) => {
  return (
    <div className={className}>
      <SvgWrapper>{children}</SvgWrapper>
      <Text size="micro">{children.type.name}</Text>
    </div>
  )
})`
  text-align: center;
  padding: ${pxToRem(10)};
`

storiesOf('Icons/List', module).add('default', () => {
  return (
    <Container>
      <Group title="Bank">
        <IconContainer children={<BancontactIcon />} />
        <IconContainer children={<CbIcon />} />
        <IconContainer children={<GiropayIcon />} />
        <IconContainer children={<IdealIcon />} />
        <IconContainer children={<MaestroIcon />} />
        <IconContainer children={<MasterCardIcon />} />
        <IconContainer children={<PayPalIcon />} />
        <IconContainer children={<SofortIcon />} />
        <IconContainer children={<VisaIcon />} />
      </Group>
      <Group title="Social">
        <IconContainer children={<EmailIcon />} />
        <IconContainer children={<FacebookIcon />} />
        <IconContainer children={<FacebookIconWithBackground />} />
        <IconContainer children={<InstagramIcon />} />
        <IconContainer children={<LinkedinIcon />} />
        <IconContainer children={<TwitterIcon />} />
        <IconContainer children={<YoutubeIcon />} />
        <IconContainer children={<MessengerIcon />} />
        <IconContainer children={<WhatsappIcon />} />
      </Group>
      <Group title="Others">
        <IconContainer children={<BurgerIcon />} />
        <IconContainer children={<GarbageIcon />} />
        <IconContainer children={<LockIcon />} />
        <IconContainer children={<SearchIcon />} />
        <IconContainer children={<WaitingIcon color="#000" />} />
        <IconContainer children={<WarningIcon color="#000" />} />
        <IconContainer children={<ArrowIcon />} />
        <IconContainer children={<Cart />} />
        <IconContainer children={<CheckedCircleIcon />} />
        <IconContainer children={<CheckedIcon />} />
        <IconContainer children={<ClockCircleIcon />} />
        <IconContainer children={<ClockIcon />} />
        <IconContainer children={<CrossCircleIcon />} />
        <IconContainer children={<CrossIcon />} />
        <IconContainer children={<FilterIcon />} />
        <IconContainer children={<GrabberIcon />} />
        <IconContainer children={<HeartIcon />} />
        <IconContainer children={<InstagramIcon />} />
        <IconContainer children={<InstrumentTagIcon />} />
        <IconContainer children={<LocationIcon />} />
        <IconContainer children={<MenuIcon />} />
        <IconContainer children={<PasswordIcon />} />
        <IconContainer children={<PhoneIcon />} />
        <IconContainer children={<PinterestIcon />} />
        <IconContainer children={<QuestionMarkIcon />} />
        <IconContainer children={<StarIcon />} />
        <IconContainer children={<TypologyTagIcon />} />
        <IconContainer children={<WarningCircleIcon />} />
        <IconContainer children={<CopyIcon />} />
      </Group>
    </Container>
  )
})
