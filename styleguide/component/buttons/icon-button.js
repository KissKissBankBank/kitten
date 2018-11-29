import React from 'react'
import {
  KarlButtonIconHeart,
  KarlButtonIconNano,
} from '../../../assets/javascripts/kitten/karl/buttons/button-icon'
import {
  YoutubeButtonIcon,
  TwitterButtonIcon,
  PinterestButtonIcon,
  LinkedinButtonIcon,
  InstagramButtonIcon,
  FacebookButtonIcon,
} from '../../../assets/javascripts/kitten/components/buttons/social-button-icon'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--2@l">
        <Example title="Nano" className="k-Grid__col--3@s k-Grid__col--12@l">
          <KarlButtonIconNano size="nano" rounded />
        </Example>
        <Example title="Micro" className="k-Grid__col--3@s k-Grid__col--12@l">
          <KarlButtonIconHeart size="micro" />
        </Example>
        <Example title="Tiny" className="k-Grid__col--3@s k-Grid__col--12@l">
          <KarlButtonIconHeart size="tiny" />
        </Example>
        <Example title="Normal" className="k-Grid__col--3@s k-Grid__col--12@l">
          <KarlButtonIconHeart />
        </Example>
        <Example title="Big" className="k-Grid__col--3@s k-Grid__col--12@l">
          <KarlButtonIconHeart size="big" />
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--2@l">
        <Example
          title="Hydrogen"
          className="k-Grid__col--3@s k-Grid__col--12@l"
        >
          <KarlButtonIconHeart />
        </Example>
        <Example title="Helium" className="k-Grid__col--3@s k-Grid__col--12@l">
          <KarlButtonIconHeart modifier="helium" />
        </Example>
        <Example title="Lithium" className="k-Grid__col--3@s k-Grid__col--12@l">
          <KarlButtonIconHeart modifier="lithium" />
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--2@l">
        <Example
          title="Beryllium"
          className="k-Grid__col--3@s k-Grid__col--12@l"
        >
          <KarlButtonIconHeart modifier="beryllium" />
        </Example>
        <Example title="Carbon" className="k-Grid__col--3@s k-Grid__col--12@l">
          <KarlButtonIconHeart modifier="carbon" />
        </Example>
        <Example title="Azote" className="k-Grid__col--3@s k-Grid__col--12@l">
          <KarlButtonIconHeart modifier="azote" />
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--2@l">
        <Example title="Oxygen" className="k-Grid__col--3@s k-Grid__col--12@l">
          <KarlButtonIconHeart modifier="oxygen" />
        </Example>
        <Example
          title="Disabled"
          className="k-Grid__col--3@s k-Grid__col--12@l"
        >
          <KarlButtonIconHeart disabled />
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--2@l">
        <Example title="Social" className="k-Grid__col--3@s k-Grid__col--12@l">
          <FacebookButtonIcon className="k-u-margin-bottom-single" />
          <br />
          <TwitterButtonIcon className="k-u-margin-bottom-single" />
          <br />
          <LinkedinButtonIcon className="k-u-margin-bottom-single" />
          <br />
          <InstagramButtonIcon className="k-u-margin-bottom-single" />
          <br />
          <YoutubeButtonIcon className="k-u-margin-bottom-single" />
          <br />
          <PinterestButtonIcon className="k-u-margin-bottom-single" />
        </Example>
      </div>
    </div>
  )
}
