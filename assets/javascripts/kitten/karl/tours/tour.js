import React from 'react'
import classNames from 'classnames'
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'
import { CrossCircleIcon } from 'kitten/components/icons/cross-circle-icon'
import { MixIllustration } from 'kitten/components/illustrations/mix-illustration'
import { LoudspeakerIllustration } from 'kitten/components/illustrations/loudspeaker-illustration'

export const KarlHeaderTour1 = props => {
  return (
      <div class="k-Popover"
           role="dialog"
           aria-hidden="true"
           aria-labelledby="dialogtitle">

        <div class="k-Popover__container k-Tour__popover__container">

          <div class="k-Tour__popover__illustration">
            <MixIllustration className="k-Tour__popover__svg--primary" />

          <div class="k-Tour__popover__content">
            <p id="dialogtitle" class="k-Tour__popover__title">What's new</p>
            <p class="k-Tour__popover__text">Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.</p>
            <div class="k-Tour__popover__navigation">
              <p class="k-Tour__popover__numbering">1 on 2</p>
              <div class="k-Tour__popover__buttons">
                <button title="Précédent" class="k-Tour__popover__button
                                                 k-Button
                                                 k-Button--hydrogen
                                                 k-Button--tiny
                                                 k-Button--icon"
                                                 disabled>
                  <ArrowIcon
                    direction="left"
                    className="k-Button__icon"
                  />
                  Back
                </button>
                <button title="Suivant" class="k-Tour__popover__button
                                               k-Tour__popover__button--right
                                               k-Button
                                               k-Button--helium
                                               k-Button--tiny
                                               k-Button--icon
                                               k-Button--iconRight">
                  Next
                  <ArrowIcon
                    direction="right"
                    className="k-Button__icon"
                  />
                </button>
              </div>
            </div>
          </div>
          <div class="k-Popover__close">
            <button class="k-ButtonIcon
                           k-ButtonIcon--hydrogen
                           k-ButtonIcon--tiny">
              <CrossCircleIcon
                className={ classNames('k-ButtonIcon__svg',
                                       'k-ButtonIcon__svg--rotate') }
              />
            </button>
          </div>
        </div>
      </div>
  </div>



          )
}
