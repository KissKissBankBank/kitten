import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import {
  pxToRem,
  TYPOGRAPHY,
  Text,
  HorizontalStroke,
  ChronoIconNext,
  InfiniteIconNext,
  FlexWrapper,
} from 'kitten'

const StyledButtonWithLink = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: ${pxToRem(30 - 2)}; // 30px padding - 2px border
  padding-bottom: ${pxToRem(2 * 30 + 18)};
  height: 100%;

  .kiss-buttonWithLink__button {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    width: 100%;

    border-radius: var(--border-radius-s);

    box-shadow: var(--box-shadow-s);

    border: ${pxToRem(2)} solid transparent;
    transition: border-color var(--transition), box-shadow var(--transition);

    &:hover {
      box-shadow: var(--box-shadow-hover-s);
      border-color: var(--color-primary-300);
    }

    &[aria-checked='true'] {
      border-color: var(--color-primary-500);

      &:hover {
        border-color: var(--color-primary-700);
      }
    }
  }

  .kiss-buttonWithLink__link {
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    right: 0;
    padding: ${pxToRem(30)};
    text-align: center;
    ${TYPOGRAPHY.fontStyles.regular};
    color: var(--color-primary-500);
    transition: color var(--transition);
    text-decoration: none;
    line-height: ${pxToRem(18)};
    font-size: ${pxToRem(14)};

    &:hover,
    &:active,
    &:focus {
      color: var(--color-primary-700);
    }
  }
`

export default {
  title: 'compositions/Button with link',
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
}

const ButtonWithLink = ({
  buttonProps,
  linkProps,
  children,
  className,
  isActive,
  ...props
}) => (
  <StyledButtonWithLink
    {...props}
    className={classNames('kiss-buttonWithLink__wrapper', className)}
  >
    <button
      {...buttonProps}
      aria-checked={isActive}
      className={classNames(
        'kiss-buttonWithLink__button',
        'k-u-reset-button',
        buttonProps.className,
      )}
    />
    {children}
    <a
      href=""
      {...linkProps}
      className={classNames('kiss-buttonWithLink__link', linkProps.className)}
    />
  </StyledButtonWithLink>
)

export const Example = () => {
  const [isFirstActive, setFirstActive] = React.useState(false)
  const [isSecondActive, setSecondActive] = React.useState(false)

  return (
    <>
      <ButtonWithLink
        isActive={isFirstActive}
        buttonProps={{
          onClick: () => {
            setFirstActive(true)
            setSecondActive(false)
          },
          'aria-label': 'Sélectionner l’option Campagne',
        }}
        linkProps={{
          children: 'En savoir plus',
          href: 'https://link.link',
          target: '_blank',
        }}
      >
        <FlexWrapper
          className="k-u-align-center k-u-flex-alignItems-center"
          gap={30}
        >
          <div>
            <ChronoIconNext
              width="40"
              height="40"
              className="k-u-margin-bottom-single"
              color="var(--color-primary-500)"
            />
            <Text
              as="div"
              weight="regular"
              letterSpacing="10%"
              size="small"
              cssColor="var(--color-primary-500)"
              transform="uppercase"
              lineHeight="1"
            >
              Campagne
            </Text>
          </div>
          <div>
            <Text weight="bold" as="div" lineHeight="1.2">
              Lancer une campagne limitée dans le temps avec un objectif à
              atteindre.
            </Text>
            <HorizontalStroke
              customSize={{ width: 6, height: 3 }}
              className="k-u-margin-horizontal-auto k-u-margin-vertical-single"
            />
            <Text weight="light" size="small" as="div" lineHeight="1.2">
              Idéal pour booster le lancement d’un nouveau projet.
            </Text>
          </div>
        </FlexWrapper>
      </ButtonWithLink>
      <ButtonWithLink
        isActive={isSecondActive}
        buttonProps={{
          onClick: () => {
            setFirstActive(false)
            setSecondActive(true)
          },
          'aria-label': 'Sélectionner l’option Projet Permanent',
        }}
        linkProps={{
          children: 'En savoir plus',
          href: 'https://link.link',
          target: '_blank',
        }}
      >
        <FlexWrapper
          className="k-u-align-center k-u-flex-alignItems-center"
          gap={30}
        >
          <div>
            <InfiniteIconNext
              width="40"
              height="40"
              className="k-u-margin-bottom-single"
              color="var(--color-primary-500)"
            />
            <Text
              as="div"
              weight="regular"
              letterSpacing="10%"
              size="small"
              cssColor="var(--color-primary-500)"
              transform="uppercase"
              lineHeight="1"
            >
              Permanent
            </Text>
          </div>
          <div>
            <Text weight="bold" as="div" lineHeight="1.2">
              Générer un revenu sur la durée grâce à des contributeurs
              récurrents.
            </Text>
            <HorizontalStroke
              customSize={{ width: 6, height: 3 }}
              className="k-u-margin-horizontal-auto k-u-margin-vertical-single"
            />
            <Text weight="light" size="small" as="div" lineHeight="1.2">
              Idéal si vous avez du contenu mensuel ou trimestriel à offrir à
              vos contributeurs.
            </Text>
          </div>
        </FlexWrapper>
      </ButtonWithLink>
    </>
  )
}
