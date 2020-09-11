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
import { UploadIcon } from './upload-icon'
import { DownloadIcon } from './download-icon'
import { DocumentIconEmpty } from './document-icon-empty'
import { DocumentIconHouse } from './document-icon-house'
import { DocumentIconPerson } from './document-icon-person'

import { Text } from '../..'
import React from 'react'
import { pxToRem } from '../../helpers/utils/typography'
import { color } from '@storybook/addon-knobs'

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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${pxToRem(140)}, 1fr));
  grid-gap: ${pxToRem(40)} ${pxToRem(20)};
  margin-bottom: ${pxToRem(40)};
`

const IconContainer = styled(({ className, children }) => {
  return (
    <div className={className}>
      <div className="svgWrapper">{children}</div>
      <Text size="micro">{children.type.name}</Text>
    </div>
  )
})`
  text-align: center;

  .svgWrapper {
    margin: auto;
    height: ${pxToRem(40)};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: auto;
    height: auto;
    max-width: ${pxToRem(25)};
    max-height: ${pxToRem(25)};
  }

  &.noMaxDimensions svg {
    max-height: initial;
    max-width: initial;
  }
  &.noMaxWidth svg {
    max-width: initial;
  }
`

const colorInput = color('Main color', '#333')
const bgColorInput = color('Background color', '#FFF')

export const AllIcons = () => {
  return (
    <Container>
      <Group title="Bank">
        <IconContainer
          className="noMaxDimensions"
          children={<BancontactIcon />}
        />
        <IconContainer className="noMaxDimensions" children={<CbIcon />} />
        <IconContainer className="noMaxDimensions" children={<GiropayIcon />} />
        <IconContainer className="noMaxDimensions" children={<IdealIcon />} />
        <IconContainer className="noMaxDimensions" children={<MaestroIcon />} />
        <IconContainer
          className="noMaxDimensions"
          children={<MasterCardIcon />}
        />
        <IconContainer className="noMaxDimensions" children={<PayPalIcon />} />
        <IconContainer className="noMaxDimensions" children={<SofortIcon />} />
        <IconContainer className="noMaxDimensions" children={<VisaIcon />} />
      </Group>

      <Group title="Social">
        <IconContainer children={<EmailIcon color={colorInput} />} />
        <IconContainer children={<FacebookIcon color={colorInput} />} />
        <IconContainer
          children={<FacebookIconWithBackground color={colorInput} />}
        />
        <IconContainer children={<InstagramIcon color={colorInput} />} />
        <IconContainer children={<LinkedinIcon color={colorInput} />} />
        <IconContainer children={<MessengerIcon color={colorInput} />} />
        <IconContainer children={<PinterestIcon color={colorInput} />} />
        <IconContainer children={<TwitterIcon color={colorInput} />} />
        <IconContainer children={<WhatsAppIcon color={colorInput} />} />
        <IconContainer children={<YoutubeIcon color={colorInput} />} />
      </Group>

      <Group title="Editor">
        <IconContainer children={<BoldIcon color={colorInput} />} />
        <IconContainer children={<BlockquoteIcon color={colorInput} />} />
        <IconContainer children={<ListIcon color={colorInput} />} />
        <IconContainer children={<VideoIcon color={colorInput} />} />
        <IconContainer children={<Title1Icon color={colorInput} />} />
        <IconContainer children={<Title2Icon color={colorInput} />} />
        <IconContainer children={<Title3Icon color={colorInput} />} />
        <IconContainer children={<Title4Icon color={colorInput} />} />
        <IconContainer children={<ParagraphIcon color={colorInput} />} />
        <IconContainer children={<ItalicIcon color={colorInput} />} />
        <IconContainer children={<ImageIcon color={colorInput} />} />
        <IconContainer children={<LinkIcon color={colorInput} />} />
        <IconContainer
          className="noMaxWidth"
          children={<ButtonIcon color={colorInput} />}
        />
        <IconContainer children={<AlignLeftIcon color={colorInput} />} />
        <IconContainer children={<AlignCenterIcon color={colorInput} />} />
        <IconContainer children={<AlignRightIcon color={colorInput} />} />
      </Group>

      <Group title="Document">
        <IconContainer children={<DocumentIconEmpty />} />
        <IconContainer children={<DocumentIconHouse />} />
        <IconContainer children={<DocumentIconPerson />} />
      </Group>

      <Group title="ArrowIcon">
        <IconContainer
          children={
            <ArrowIcon version="solid" color={colorInput} direction="top" />
          }
        />
        <IconContainer
          children={
            <ArrowIcon version="solid" color={colorInput} direction="bottom" />
          }
        />
        <IconContainer
          children={
            <ArrowIcon version="solid" color={colorInput} direction="left" />
          }
        />
        <IconContainer
          children={
            <ArrowIcon version="solid" color={colorInput} direction="right" />
          }
        />
      </Group>
      <Group title="Others">
        <IconContainer children={<BurgerIcon color={colorInput} />} />
        <IconContainer children={<GarbageIcon color={colorInput} />} />
        <IconContainer children={<LockIcon color={colorInput} />} />
        <IconContainer children={<SearchIcon color={colorInput} />} />
        <IconContainer children={<WaitingIcon color={colorInput} />} />
        <IconContainer children={<WarningIcon color={colorInput} />} />
        <IconContainer children={<Cart color={colorInput} />} />
        <IconContainer
          children={
            <CheckedCircleIcon bgColor={bgColorInput} color={colorInput} />
          }
        />
        <IconContainer children={<CheckedIcon color={colorInput} />} />
        <IconContainer
          children={
            <ClockCircleIcon bgColor={bgColorInput} color={colorInput} />
          }
        />
        <IconContainer
          children={<ClockIcon bgColor={bgColorInput} color={colorInput} />}
        />
        <IconContainer
          children={
            <CrossCircleIcon bgColor={bgColorInput} color={colorInput} />
          }
        />
        <IconContainer children={<CrossIcon color={colorInput} />} />
        <IconContainer children={<DoubleArrowIcon color={colorInput} />} />
        <IconContainer children={<FilterIcon color={colorInput} />} />
        <IconContainer
          children={
            <FlashCircleIcon bgColor={bgColorInput} color={colorInput} />
          }
        />
        <IconContainer children={<GrabberIcon color={colorInput} />} />
        <IconContainer children={<HeartIcon color={colorInput} />} />
        <IconContainer children={<InstrumentTagIcon color={colorInput} />} />
        <IconContainer children={<LocationIcon color={colorInput} />} />
        <IconContainer children={<MenuIcon color={colorInput} />} />
        <IconContainer children={<PasswordIcon color={colorInput} />} />
        <IconContainer children={<PhoneIcon color={colorInput} />} />
        <IconContainer children={<QuestionMarkIcon color={colorInput} />} />
        <IconContainer children={<StarIcon color={colorInput} />} />
        <IconContainer children={<TypologyTagIcon color={colorInput} />} />
        <IconContainer
          children={
            <WarningCircleIcon bgColor={bgColorInput} color={colorInput} />
          }
        />
        <IconContainer children={<CopyIcon color={colorInput} />} />
        <IconContainer children={<BubbleIcon color={colorInput} />} />
        <IconContainer children={<ExportIcon color={colorInput} />} />
        <IconContainer children={<ExportIconAlternate color={colorInput} />} />
        <IconContainer children={<StrokeIcon color={colorInput} />} />
        <IconContainer
          className="noMaxDimensions"
          children={<KissKissBankBankIcon color={colorInput} width="70" />}
        />
        <IconContainer children={<EmbedIcon color={colorInput} />} />
        <IconContainer children={<GiftIcon color={colorInput} />} />
        <IconContainer children={<EditIcon color={colorInput} />} />
        <IconContainer children={<SaveIcon color={colorInput} />} />
        <IconContainer children={<DocIcon color={colorInput} />} />
        <IconContainer children={<CameraIcon color={colorInput} />} />
        <IconContainer children={<RocketIcon color={colorInput} />} />
        <IconContainer
          children={
            <RocketCircleIcon bgColor={bgColorInput} color={colorInput} />
          }
        />
        <IconContainer children={<UploadIcon color={colorInput} />} />
        <IconContainer children={<DownloadIcon color={colorInput} />} />
      </Group>
    </Container>
  )
}

export default { title: 'Icons/List' }
