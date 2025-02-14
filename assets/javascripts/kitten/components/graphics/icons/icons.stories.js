import styled from 'styled-components'
import { AlignCenterIcon } from './align-center-icon'
import { AlignLeftIcon } from './align-left-icon'
import { AlignRightIcon } from './align-right-icon'
import { ArrowIcon } from './arrow-icon'
import { LongArrowIcon } from './long-arrow-icon'
import { BancontactIcon } from './bancontact-icon'
import { BlockquoteIcon } from './blockquote-icon'
import { BoldIcon } from './bold-icon'
import { BubbleIcon } from './bubble-icon'
import { BurgerIcon } from './burger-icon'
import { ButtonIcon as EditorButtonIcon } from './button-icon'
import { CameraIcon } from './camera-icon'
import { Cart } from './cart'
import { CbIcon } from './cb-icon'
import { CheckedCircleIcon } from './checked-circle-icon'
import { CheckedIcon } from './checked-icon'
import { ClockCircleIcon } from './clock-circle-icon'
import { ClockIcon } from './clock-icon'
import { CopyIcon } from './copy-icon'
import { CrossCircleIcon } from './cross-circle-icon'
import { CrossIcon } from './cross-icon'
import { DocIcon } from './doc-icon'
import { DocumentIconEmpty } from './document-icon-empty'
import { DocumentIconHouse } from './document-icon-house'
import { DocumentIconPerson } from './document-icon-person'
import { DotIcon } from './dot-icon'
import { DoubleArrowIcon } from './double-arrow-icon'
import { DownloadIcon } from './download-icon'
import { EditIcon } from './edit-icon'
import { EllipsisIcon } from './ellipsis-icon'
import { EmailIcon } from './email-icon'
import { EmbedIcon } from './embed-icon'
import { EnvelopeIcon } from './envelope-icon'
import { ExportIconAlternate } from './export-icon-alternate'
import { FacebookIcon } from './facebook-icon'
import { FacebookIconWithBackground } from './facebook-icon-with-background'
import { FileIcon } from './file-icon'
import { FilterIcon } from './filter-icon'
import { FlagIcon, flagList } from './flag-icon'
import { FlashCircleIcon } from './flash-circle-icon'
import { GarbageIcon } from './garbage-icon'
import { GiropayIcon } from './giropay-icon'
import { GlobeIcon } from './globe-icon'
import { GrabberIcon } from './grabber-icon'
import { HeartIcon } from './heart-icon'
import { HomeIcon } from './home-icon'
import { HourglassIcon } from './hourglass-icon'
import { IdealIcon } from './ideal-icon'
import { ImageIcon } from './image-icon'
import { InstagramIcon } from './instagram-icon'
import { InstrumentTagIcon } from './instrument-tag-icon'
import { ItalicIcon } from './italic-icon'
import { KissKissBankBankIcon } from './kisskissbankbank-icon'
import { LinkedinIcon } from './linkedin-icon'
import { LinkIcon } from './link-icon'
import { ListIcon } from './list-icon'
import { LocationIcon } from './location-icon'
import { LockIcon } from './lock-icon'
import { LoudspeakerIcon } from './loudspeaker-icon'
import { MaestroIcon } from './maestro-icon'
import { MasterCardIcon } from './mastercard-icon'
import { MenuIcon } from './menu-icon'
import { MessengerIcon } from './messenger-icon'
import { NoImageIcon } from './no-image-icon'
import { ParagraphIcon } from './paragraph-icon'
import { PasswordIcon } from './password-icon'
import { PayPalIcon } from './paypal-icon'
import { PeopleIcon } from './people-icon'
import { PhoneIcon } from './phone-icon'
import { QuestionMarkIcon } from './question-mark-icon'
import { RocketCircleIcon } from './rocket-circle-icon'
import { RocketIcon } from './rocket-icon'
import { SaveIcon } from './save-icon'
import { SearchIcon } from './search-icon'
import { ShieldIcon } from './shield-icon'
import { ShieldCheckIcon } from './shield-check-icon'
import { SofortIcon } from './sofort-icon'
import { SpeechBubbleIcon } from './speech-bubble-icon'
import { StarIcon } from './star-icon'
import { StatsIcon } from './stats-icon'
import { StrokeIcon } from './stroke-icon'
import { TagIcon } from './tag-icon'
import { Title1Icon } from './title-1-icon'
import { Title2Icon } from './title-2-icon'
import { Title3Icon } from './title-3-icon'
import { Title4Icon } from './title-4-icon'
import { TwitterIcon } from './twitter-icon'
import { TypologyTagIcon } from './typology-tag-icon'
import { UploadIcon } from './upload-icon'
import { VideoIcon } from './video-icon'
import { VisaIcon } from './visa-icon'
import { WaitingIcon } from './waiting-icon'
import { WarningIcon } from './warning-icon'
import { WarningCircleIcon } from './warning-circle-icon'
import { WhatsAppIcon } from './whatsapp-icon'
import { YoutubeIcon } from './youtube-icon'

import flagFile from 'icons/flags.png'

import { Text, Title, pxToRem } from 'kitten'
import React from 'react'
import LinkTo from '@storybook/addon-links/react'

const Container = styled.div`
  padding: ${pxToRem(40)};
  background-color: lightgray;
`

const Group = styled(({ className, children, title }) => {
  return (
    <>
      <Title tag="h2" modifier="septenary">
        {title}
      </Title>
      <div className={className}>{children}</div>
    </>
  )
})`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${pxToRem(140)}, 1fr));
  grid-gap: ${pxToRem(40)} ${pxToRem(20)};
  margin-bottom: ${pxToRem(40)};
`

const IconContainer = styled(({ className, link, children, suffix }) => {
  return (
    <div className={className}>
      <div className="svgWrapper">{children}</div>
      {link ? (
        <LinkTo
          {...link}
          className="k-u-link k-u-link-font1 k-u-size-micro"
          aria-label="go to story"
        >
          {children.type.name} <ArrowIcon direction="right" />
        </LinkTo>
      ) : (
        <Text weight="400" size="micro">
          {children.type.name}
          {suffix && <> {suffix}</>}
        </Text>
      )}
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

export const AllIcons = ({ colorInput, bgColorInput }) => {
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
          children={<EditorButtonIcon color={colorInput} />}
          suffix="as EditorButtonIcon in ESM export"
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
        <IconContainer suffix='direction="top"'>
          <ArrowIcon color={colorInput} direction="top" />
        </IconContainer>
        <IconContainer suffix='direction="bottom"'>
          <ArrowIcon color={colorInput} direction="bottom" />
        </IconContainer>
        <IconContainer suffix='direction="left"'>
          <ArrowIcon color={colorInput} direction="left" />
        </IconContainer>
        <IconContainer suffix='direction="right"'>
          <ArrowIcon color={colorInput} direction="right" />
        </IconContainer>
        <IconContainer suffix='direction="top"'>
          <LongArrowIcon color={colorInput} direction="top" />
        </IconContainer>
        <IconContainer suffix='direction="bottom"'>
          <LongArrowIcon color={colorInput} direction="bottom" />
        </IconContainer>
        <IconContainer suffix='direction="left"'>
          <LongArrowIcon color={colorInput} direction="left" />
        </IconContainer>
        <IconContainer suffix='direction="right"'>
          <LongArrowIcon color={colorInput} direction="right" />
        </IconContainer>
      </Group>

      <Group title="Complex icons">
        <IconContainer
          children={<BurgerIcon />}
          link={{
            kind: 'Icons/BurgerIcon',
            story: 'Default',
          }}
        />

        <IconContainer
          children={<FilterIcon color={colorInput} />}
          link={{
            kind: 'Icons/FilterIcon',
            story: 'Default',
          }}
        />
      </Group>

      <Group title="Other icons">
        <IconContainer children={<GarbageIcon color={colorInput} />} />
        <IconContainer children={<LockIcon color={colorInput} />} />
        <IconContainer children={<SearchIcon color={colorInput} />} />
        <IconContainer children={<WaitingIcon color={colorInput} />} />
        <IconContainer children={<WarningIcon color={colorInput} />} />
        <IconContainer children={<Cart color={colorInput} />} />
        <IconContainer children={<DotIcon color={colorInput} />} />
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
        <IconContainer children={<ExportIconAlternate color={colorInput} />} />
        <IconContainer children={<StrokeIcon color={colorInput} />} />
        <IconContainer
          className="noMaxDimensions"
          children={<KissKissBankBankIcon color={colorInput} width="90" />}
        />
        <IconContainer children={<EmbedIcon color={colorInput} />} />
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
        <IconContainer
          children={<GlobeIcon color={colorInput} width="16" height="16" />}
        />
        <IconContainer children={<FileIcon color={colorInput} />} />
        <IconContainer children={<HomeIcon color={colorInput} />} />
        <IconContainer children={<LoudspeakerIcon color={colorInput} />} />
        <IconContainer children={<ShieldIcon color={colorInput} />} />
        <IconContainer children={<ShieldCheckIcon color={colorInput} />} />
        <IconContainer children={<TagIcon color={colorInput} />} />
        <IconContainer children={<PeopleIcon color={colorInput} />} />
        <IconContainer children={<StatsIcon color={colorInput} />} />
        <IconContainer children={<SpeechBubbleIcon color={colorInput} />} />
        <IconContainer children={<HourglassIcon color={colorInput} />} />
        <IconContainer children={<EllipsisIcon color={colorInput} />} />
        <IconContainer children={<NoImageIcon color={colorInput} />} />
        <IconContainer children={<EnvelopeIcon color={colorInput} />} />
      </Group>
      <Group title="Country flag icons">
        {flagList.map(country => (
          <IconContainer key={country} suffix={`country="${country}"`}>
            <FlagIcon
              country={country}
              countryName={country}
              flagsUrl={flagFile}
            />
          </IconContainer>
        ))}
      </Group>
    </Container>
  )
}

export default {
  title: 'Graphics/Icons',
  args: {
    colorInput: '#333',
    bgColorInput: '#FFF',
  },
  argTypes: {
    colorInput: { control: 'color' },
    bgColorInput: { control: 'color' },
  },
}
