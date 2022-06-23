import React from 'react'
import {
  DashboardLayout,
  DropdownSelectWithInput,
  TextCopy,
  Button,
  Text,
  COLORS,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  GlobeIcon,
} from 'kitten'

const options = [
  {
    value: 'facebook',
    label: 'https://www.facebook.com/',
    icon: <FacebookIcon width="8" height="15" />,
  },
  {
    value: 'twitter',
    label: 'https://www.twitter.com/',
    icon: <TwitterIcon width="15" height="14" />,
  },
  {
    value: 'linkedin',
    label: 'https://www.linkedin.com/',
    icon: <LinkedinIcon width="14" height="14" />,
  },
  {
    value: 'instagram',
    label: 'https://www.instagram.com/',
    icon: <InstagramIcon width="17" height="17" />,
  },
  {
    value: 'youtube',
    label: 'https://www.youtube.com/',
    icon: <YoutubeIcon width="17" height="12" />,
  },
  {
    value: 'website',
    label: 'https://www.…',
    icon: <GlobeIcon width="16" height="16" />,
  },
]

export const StoryWithFlow = ({
  flowLoading,
  flowShowTwoButtons,
  flowShowUnsavedText,
}) => (
  <DashboardLayout.Flow loading={flowLoading}>
    <DashboardLayout.Flow.Title modifier="quinary">
      Ridiculus sociis natoque penatibus
    </DashboardLayout.Flow.Title>
    <DashboardLayout.Flow.TitleAside>
      <Button mobileFit="fluid" fit="content" modifier="helium">
        <span>
          <span aria-hidden>+</span> Ajouter un item
        </span>
      </Button>
    </DashboardLayout.Flow.TitleAside>
    <DashboardLayout.Flow.Content>
      <p className="k-u-weight-400 k-u-margin-none">
        Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel
        augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel
        augue laoreet rutrum faucibus dolor auctor.
      </p>

      <div className="k-u-flex k-u-flex-gap-triple k-u-flex-direction-column k-u-padding-vertical-triple k-u-padding-horizontal-triple k-u-border-radius-l k-u-box-shadow-m">
        <p className="k-u-weight-400 k-u-margin-none">
          Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel
          augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel
          augue laoreet rutrum faucibus dolor auctor.
        </p>
        <DropdownSelectWithInput
          id="DropdownSelectWithInput"
          hideLabel
          labelText="Facebook"
          options={options}
          highlightOptionBox
          defaultSelectedValue="facebook"
          deactivateDropdown
        />
        <p className="k-u-weight-400 k-u-margin-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis,
          est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
          sem nec elit. Sed posuere consectetur est at lobortis. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus
          varius blandit sit amet non magna. Etiam porta sem malesuada magna
          mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <TextCopy
          buttonText="Copier l’URL"
          textToCopy="https://www.kisskissbankbank.com/fr/projects/test-de-campagne-par-joachim/?secret-reward=hileo6"
        >
          https://www.kisskissbankbank.com/fr/projects/test-de-campagne-par-joachim/?secret-reward=hileo6
        </TextCopy>
        <p className="k-u-weight-400 k-u-margin-none">
          Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus
          magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
          augue laoreet rutrum faucibus dolor auctor. Donec id elit non mi porta
          gravida at eget metus. Maecenas sed diam eget risus varius blandit sit
          amet non magna. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus.
        </p>
        <p className="k-u-weight-400 k-u-margin-none">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
          risus varius blandit sit amet non magna. Maecenas sed diam eget risus
          varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed
          consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
          venenatis vestibulum.
        </p>
        <p className="k-u-weight-400 k-u-margin-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo
          quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
          Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna
          mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris
          condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis,
          est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
          sem nec elit.
        </p>
        <p className="k-u-weight-400 k-u-margin-none">
          Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus
          magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
          augue laoreet rutrum faucibus dolor auctor. Donec id elit non mi porta
          gravida at eget metus. Maecenas sed diam eget risus varius blandit sit
          amet non magna. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus.
        </p>
        <p className="k-u-weight-400 k-u-margin-none">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
          risus varius blandit sit amet non magna. Maecenas sed diam eget risus
          varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed
          consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
          venenatis vestibulum.
        </p>
        <p className="k-u-weight-400 k-u-margin-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo
          quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
          Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna
          mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris
          condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis,
          est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
          sem nec elit.
        </p>
      </div>
    </DashboardLayout.Flow.Content>
    <DashboardLayout.Flow.Aside
      mobileAsideProps={{
        openLabel: 'Open help',
        closeLabel: 'Close help',
      }}
    >
      <DashboardLayout.Flow.AsideCard>
        <DashboardLayout.Flow.AsideCard.Title>
          Side content in Title
        </DashboardLayout.Flow.AsideCard.Title>
        <DashboardLayout.Flow.AsideCard.Paragraph>
          Side content in Paragraph
        </DashboardLayout.Flow.AsideCard.Paragraph>
        <DashboardLayout.Flow.AsideCard.List>
          <li className="k-u-weight-400">Side content in List (item 1)</li>
          <li className="k-u-weight-400">Side content in List (item 2)</li>
        </DashboardLayout.Flow.AsideCard.List>
      </DashboardLayout.Flow.AsideCard>
    </DashboardLayout.Flow.Aside>
    <DashboardLayout.Flow.Nav twoButtons={flowShowTwoButtons}>
      {flowShowTwoButtons ? (
        <Button modifier="hydrogen" type="button" disabled={flowLoading}>
          Back
        </Button>
      ) : flowShowUnsavedText ? (
        <Text
          weight="400"
          cssColor={COLORS.font3}
          size="small"
          className="k-u-hidden@xs-down"
          style={{ alignSelf: 'center' }}
        >
          You have unsaved changes
        </Text>
      ) : null}
      <Button modifier="helium" type="button" disabled={flowLoading}>
        Save
      </Button>
    </DashboardLayout.Flow.Nav>
  </DashboardLayout.Flow>
)
