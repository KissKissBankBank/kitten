import React from 'react'
import classNames from 'classnames'
import { Button } from 'kitten/components/buttons/button'
import { CloseButton } from 'kitten/components/buttons/close-button'
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'
import { MixIllustration } from 'kitten/components/illustrations/mix-illustration'
import { LoudspeakerIllustration } from 'kitten/components/illustrations/loudspeaker-illustration'

export const KarlHeaderTour1 = props => (
  <div
    className="k-Popover"
    role="dialog"
    aria-hidden="true"
    aria-labelledby="dialogtitle"
  >

    <div
      className={ classNames('k-Popover__container',
                             'k-Tour__popover__container') }
    >

      <div className="k-Tour__popover__illustration">
        <MixIllustration className="k-Tour__popover__svg--primary" />
      </div>
      <div className="k-Tour__popover__content">
        <p
          id="dialogtitle"
          className="k-Tour__popover__title"
        >
          What‘s new
        </p>
        <p className="k-Tour__popover__text">
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <div className="k-Tour__popover__navigation">
          <p className="k-Tour__popover__numbering">
            1 on 2
          </p>
          <div className="k-Tour__popover__buttons">
            <Button
              title="Précédent"
              className="k-Tour__popover__button"
              modifier="hydrogen"
              size="tiny"
              icon
              disabled
            >
              <ArrowIcon
                direction="left"
                className="k-Button__icon"
              />
              Back
            </Button>
            <Button
              title="Suivant"
              className={ classNames('k-Tour__popover__button',
                                     'k-Tour__popover__button--right') }
              modifier="helium"
              size="tiny"
              icon
              iconOnRight
            >
              Next
              <ArrowIcon className="k-Button__icon" />
            </Button>
          </div>
        </div>
      </div>
      <div className="k-Popover__close">
        <CloseButton
          modifier="beryllium"
          size="tiny"
        />
      </div>
    </div>
  </div>
)

export const KarlHeaderTour2 = props => (
  <div
    className="k-Popover"
    role="dialog"
    aria-hidden="true"
    aria-labelledby="dialogtitle"
  >

    <div
      className={ classNames('k-Popover__container',
                             'k-Tour__popover__container') }
    >

      <div className="k-Tour__popover__illustration">
        <LoudspeakerIllustration className="k-Tour__popover__svg--primary" />
      </div>
      <div className="k-Tour__popover__content">
        <p
          id="dialogtitle"
          className="k-Tour__popover__title"
        >
          What‘s new
        </p>
        <p className="k-Tour__popover__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
        <div className="k-Tour__popover__navigation">
          <p className="k-Tour__popover__numbering">
            1 on 2
          </p>
          <div className="k-Tour__popover__buttons">
            <Button
              title="Précédent"
              className="k-Tour__popover__button"
              modifier="helium"
              size="tiny"
              icon
            >
              <ArrowIcon
                direction="left"
                className="k-Button__icon"
              />
              Back
            </Button>
            <Button
              title="Suivant"
              className={ classNames('k-Tour__popover__button',
                                     'k-Tour__popover__button--right') }
              modifier="hydrogen"
              size="tiny"
              icon
              disabled
              iconOnRight
            >
              Next
              <ArrowIcon className="k-Button__icon" />
            </Button>
          </div>
        </div>
      </div>
      <div className="k-Popover__close">
        <CloseButton
          modifier="beryllium"
          size="tiny"
        />
      </div>
    </div>
  </div>
)
