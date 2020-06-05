import styled from 'styled-components'
import { ArrowIcon } from './arrow-icon'
import { BancontactIcon } from './bancontact-icon'
import { BubbleIcon } from './bubble-icon'
import { BurgerIcon } from './burger-icon/index'
import { Cart } from './cart'
import { CbIcon } from './cb-icon'
import { CheckedCircleIcon } from './checked-circle-icon'
import { CheckedIcon } from './checked-icon'
import { ClockCircleIcon } from './clock-circle-icon'
import { ClockIcon } from './clock-icon'
import { CopyIcon } from './copy-icon'
import { CrossCircleIcon } from './cross-circle-icon'
import { CrossIcon } from './cross-icon'
import { DoubleArrowIcon } from './double-arrow-icon'
import { EditIcon } from './edit-icon'
import { EmailIcon } from './email-icon'
import { ExportIcon } from './export-icon'
import { ExportIconAlternate } from './export-icon-alternate'
import { FacebookIcon } from './facebook-icon'
import { FacebookIconWithBackground } from './facebook-icon-with-background'
import { FilterIcon } from './filter-icon'
import { FlashCircleIcon } from './flash-circle-icon'
import { GarbageIcon } from './garbage-icon'
import { GiropayIcon } from './giropay-icon'
import { GrabberIcon } from './grabber-icon'
import { HeartIcon } from './heart-icon'
import { IdealIcon } from './ideal-icon'
import { InstagramIcon } from './instagram-icon'
import { InstrumentTagIcon } from './instrument-tag-icon'
import { LinkedinIcon } from './linkedin-icon'
import { LocationIcon } from './location-icon'
import { LockIcon } from './lock-icon'
import { MaestroIcon } from './maestro-icon'
import { MasterCardIcon } from './mastercard-icon'
import { MenuIcon } from './menu-icon'
import { MessengerIcon } from './messenger-icon'
import { PasswordIcon } from './password-icon'
import { PayPalIcon } from './paypal-icon'
import { PhoneIcon } from './phone-icon'
import { PinterestIcon } from './pinterest-icon'
import { QuestionMarkIcon } from './question-mark-icon'
import { SearchIcon } from './search-icon'
import { SofortIcon } from './sofort-icon'
import { StarIcon } from './star-icon'
import { StrokeIcon } from './stroke-icon'
import { TwitterIcon } from './twitter-icon'
import { TypologyTagIcon } from './typology-tag-icon'
import { VisaIcon } from './visa-icon'
import { WaitingIcon } from './waiting-icon'
import { WarningIcon } from './warning-icon'
import { WarningCircleIcon } from './warning-circle-icon'
import { WhatsAppIcon } from './whatsapp-icon'
import { YoutubeIcon } from './youtube-icon'
import { KissKissBankBankIcon } from './kisskissbankbank-icon'
import { EmbedIcon } from './embed-icon'
import { GiftIcon } from './gift-icon'
import { SaveIcon } from './save-icon'
import { DocIcon } from './doc-icon'
import { CameraIcon } from './camera-icon'
import { RocketIcon } from './rocket-icon'
import { RocketCircleIcon } from './rocket-circle-icon'
import { BoldIcon } from './bold-icon'
import { BlockquoteIcon } from './blockquote-icon'
import { ListIcon } from './list-icon'
import { VideoIcon } from './video-icon'
import { Title1Icon } from './title-1-icon'
import { Title2Icon } from './title-2-icon'
import { Title3Icon } from './title-3-icon'
import { Title4Icon } from './title-4-icon'
import { ParagraphIcon } from './paragraph-icon'
import { ItalicIcon } from './italic-icon'
import { ImageIcon } from './image-icon'
import { LinkIcon } from './link-icon'
import { ButtonIcon } from './button-icon'
import { AlignLeftIcon } from './align-left-icon'
import { AlignCenterIcon } from './align-center-icon'
import { AlignRightIcon } from './align-right-icon'

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

export const AllIcons = () => {
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
        <IconContainer children={<WhatsAppIcon />} />
      </Group>

      <Group title="Editor">
        <IconContainer children={<BoldIcon />} />
        <IconContainer children={<BlockquoteIcon />} />
        <IconContainer children={<ListIcon />} />
        <IconContainer children={<VideoIcon />} />
        <IconContainer children={<Title1Icon />} />
        <IconContainer children={<Title2Icon />} />
        <IconContainer children={<Title3Icon />} />
        <IconContainer children={<Title4Icon />} />
        <IconContainer children={<ParagraphIcon />} />
        <IconContainer children={<ItalicIcon />} />
        <IconContainer children={<ImageIcon />} />
        <IconContainer children={<LinkIcon />} />
        <IconContainer children={<ButtonIcon />} />
        <IconContainer children={<AlignLeftIcon />} />
        <IconContainer children={<AlignCenterIcon />} />
        <IconContainer children={<AlignRightIcon />} />
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
        <IconContainer children={<DoubleArrowIcon />} />
        <IconContainer children={<FilterIcon />} />
        <IconContainer children={<FlashCircleIcon />} />
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
        <IconContainer children={<BubbleIcon />} />
        <IconContainer children={<ExportIcon />} />
        <IconContainer children={<ExportIconAlternate />} />
        <IconContainer children={<StrokeIcon />} />
        <IconContainer children={<KissKissBankBankIcon width="70" />} />
        <IconContainer children={<EmbedIcon />} />
        <IconContainer children={<GiftIcon />} />
        <IconContainer children={<EditIcon />} />
        <IconContainer children={<SaveIcon />} />
        <IconContainer children={<DocIcon />} />
        <IconContainer children={<CameraIcon />} />
        <IconContainer children={<RocketIcon />} />
        <IconContainer children={<RocketCircleIcon />} />
      </Group>
    </Container>
  )
}

export default { title: 'Icons/List' }
