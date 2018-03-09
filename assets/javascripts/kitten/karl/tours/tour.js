import React from 'react';
import classNames from 'classnames';
import { Button } from 'kitten/components/buttons/button';
import { Marger } from 'kitten/components/layout/marger';
import { Title } from 'kitten/components/typography/title';
import { Paragraph } from 'kitten/components/typography/paragraph';
import { Text } from 'kitten/components/typography/text';
import { CloseButton } from 'kitten/components/buttons/close-button';
import { ArrowIcon } from 'kitten/components/icons/arrow-icon';
import { MixIllustration } from 'kitten/components/illustrations/mix-illustration';
import { LoudspeakerIllustration } from 'kitten/components/illustrations/loudspeaker-illustration';

export const KarlHeaderTour1 = props => (
  <div
    className="k-Popover"
    role="dialog"
    aria-hidden="true"
    aria-labelledby="dialogtitle"
  >
    <div
      className={classNames(
        'k-Popover__container',
        'k-Tour__popover__container'
      )}
    >
      <div className="k-Tour__popover__illustration">
        <MixIllustration className="k-Tour__popover__svg--primary" />
      </div>
      <Marger top="4" className="k-Tour__popover__content">
        <Marger bottom="1">
          <Title tag="p" modifier="senary" id="dialogtitle" margin={false}>
            What‘s new
          </Title>
        </Marger>
        <Marger top="1">
          <Paragraph margin={false} modifier="quaternary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </Marger>
        <div className="k-Tour__popover__navigation">
          <Text className="k-Tour__popover__step" size="tiny" weight="regular">
            1 on 2
          </Text>
          <div className="k-Tour__popover__buttons">
            <Button
              title="Précédent"
              className="k-Tour__popover__button"
              modifier="hydrogen"
              size="tiny"
              icon
              disabled
            >
              <ArrowIcon direction="left" className="k-Button__icon" />
              Back
            </Button>
            <Button
              title="Suivant"
              className={classNames(
                'k-Tour__popover__button',
                'k-Tour__popover__button--right'
              )}
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
      </Marger>
      <div>
        <CloseButton modifier="beryllium" size="tiny" />
      </div>
    </div>
  </div>
);

export const KarlHeaderTour2 = props => (
  <div
    className="k-Popover"
    role="dialog"
    aria-hidden="true"
    aria-labelledby="dialogtitle"
  >
    <div
      className={classNames(
        'k-Popover__container',
        'k-Tour__popover__container'
      )}
    >
      <div className="k-Tour__popover__illustration">
        <LoudspeakerIllustration className="k-Tour__popover__svg--primary" />
      </div>
      <Marger top="4" className="k-Tour__popover__content">
        <Marger bottom="1">
          <Title modifier="senary" margin={false} id="dialogtitle">
            What‘s new
          </Title>
        </Marger>
        <Marger top="1">
          <Paragraph modifier="quaternary" margin={false}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </Paragraph>
        </Marger>
        <div className="k-Tour__popover__navigation">
          <Text className="k-Tour__popover__step" size="tiny" weight="regular">
            1 on 2
          </Text>
          <div className="k-Tour__popover__buttons">
            <Button
              title="Précédent"
              className="k-Tour__popover__button"
              modifier="helium"
              size="tiny"
              icon
            >
              <ArrowIcon direction="left" className="k-Button__icon" />
              Back
            </Button>
            <Button
              title="Suivant"
              className={classNames(
                'k-Tour__popover__button',
                'k-Tour__popover__button--right'
              )}
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
      </Marger>
      <div>
        <CloseButton modifier="beryllium" size="tiny" />
      </div>
    </div>
  </div>
);
