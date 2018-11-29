import React from 'react'
import { FacebookIcon } from '../../../assets/javascripts/kitten/components/icons/facebook-icon'
import { LinkedinIcon } from '../../../assets/javascripts/kitten/components/icons/linkedin-icon'
import { TwitterIcon } from '../../../assets/javascripts/kitten/components/icons/twitter-icon'
import { CbIcon } from '../../../assets/javascripts/kitten/components/icons/cb-icon'
import { MasterCardIcon } from '../../../assets/javascripts/kitten/components/icons/mastercard-icon'
import { VisaIcon } from '../../../assets/javascripts/kitten/components/icons/visa-icon'
import { ArrowIcon } from '../../../assets/javascripts/kitten/components/icons/arrow-icon'
import { CheckedIcon } from '../../../assets/javascripts/kitten/components/icons/checked-icon'
import { ClockIcon } from '../../../assets/javascripts/kitten/components/icons/clock-icon'
import { LockIcon } from '../../../assets/javascripts/kitten/components/icons/lock-icon'
import { GrabberIcon } from '../../../assets/javascripts/kitten/components/icons/grabber-icon'
import { HeartIcon } from '../../../assets/javascripts/kitten/components/icons/heart-icon'
import { CrossIcon } from '../../../assets/javascripts/kitten/components/icons/cross-icon'
import { MenuIcon } from '../../../assets/javascripts/kitten/components/icons/menu-icon'
import { LocationIcon } from '../../../assets/javascripts/kitten/components/icons/location-icon'
import { QuestionMarkIcon } from '../../../assets/javascripts/kitten/components/icons/question-mark-icon'
import { TypologyTagIcon } from '../../../assets/javascripts/kitten/components/icons/typology-tag-icon'
import { InstrumentTagIcon } from '../../../assets/javascripts/kitten/components/icons/instrument-tag-icon'
import { SearchIcon } from '../../../assets/javascripts/kitten/components/icons/search-icon'
import { LinkBoxIllustration } from '../../../assets/javascripts/kitten/components/illustrations/link-box-illustration'
import IconExample from '../../app/icon-exemple'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12">
        <div className="k-Grid">
          <IconExample title="Facebook">
            <FacebookIcon width="18" />
          </IconExample>
          <IconExample title="Linkedin">
            <LinkedinIcon width="20" />
          </IconExample>
          <IconExample title="Twitter">
            <TwitterIcon width="20" />
          </IconExample>
        </div>
        <div className="k-Grid">
          <IconExample title="Cb">
            <CbIcon width="45" />
          </IconExample>
          <IconExample title="MasterCard">
            <MasterCardIcon width="45" />
          </IconExample>
          <IconExample title="Visa">
            <VisaIcon width="45" />
          </IconExample>
        </div>
        <div className="k-Grid">
          <IconExample title="Arrow">
            <ArrowIcon width="20" />
          </IconExample>
          <IconExample title="Check">
            <CheckedIcon width="20" />
          </IconExample>
          <IconExample title="Clock">
            <ClockIcon width="20" />
          </IconExample>
          <IconExample title="Lock">
            <LockIcon width="20" />
          </IconExample>
          <IconExample title="Grabber">
            <GrabberIcon width="20" />
          </IconExample>
          <IconExample title="Heart">
            <HeartIcon width="20" />
          </IconExample>
        </div>
        <div className="k-Grid">
          <IconExample title="Cross">
            <CrossIcon width="20" />
          </IconExample>
          <IconExample title="Menu">
            <MenuIcon width="20" />
          </IconExample>
          <IconExample title="Location">
            <LocationIcon width="20" />
          </IconExample>
          <IconExample title="QuestionMark">
            <QuestionMarkIcon width="20" />
          </IconExample>
          <IconExample title="TypologyTag">
            <TypologyTagIcon width="20" />
          </IconExample>
          <IconExample title="InstrumentTag">
            <InstrumentTagIcon width="20" />
          </IconExample>
        </div>
        <div className="k-Grid">
          <IconExample title="Search">
            <SearchIcon height="20" width="20" />
          </IconExample>
        </div>
        <div className="k-Grid">
          <IconExample title="Link box">
            <LinkBoxIllustration />
          </IconExample>
        </div>
      </div>
    </div>
  )
}
