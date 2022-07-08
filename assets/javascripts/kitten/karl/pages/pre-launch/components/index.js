import React from 'react'
import styled from 'styled-components'
import Footer from '../../footer'
import { KissKissBankBankHeaderNavStory } from '../../../../components/navigation/header-nav/stories/kisskissbankbank'

import {
  mq,
  pxToRem,
  CONTAINER_PADDING,
  CONTAINER_PADDING_THIN,
  HEADER_HEIGHT,
  Title,
  Text,
  HorizontalStroke,
  TextInputWithButton,
  Field,
} from 'kitten'

const PageWrapper = styled.div`
  min-height: calc(100vh - ${pxToRem(HEADER_HEIGHT)});
  box-sizing: border-box;
  padding: ${pxToRem(75)} ${pxToRem(CONTAINER_PADDING_THIN)};
  background: linear-gradient(
    var(--color-grey-000) -${pxToRem(HEADER_HEIGHT)},
    var(--color-primary-300)
  );
  border: var(--border-light);
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${mq.tabletAndDesktop} {
    padding: ${pxToRem(150)} ${pxToRem(CONTAINER_PADDING)};
  }

  .kiss-PreLaunch__box {
    position: relative;
    border-radius: var(--border-radius-m);
    box-shadow: var(--box-shadow-xl);
    padding: ${pxToRem(100)} ${pxToRem(20)} ${pxToRem(30)};
    background: var(--color-grey-000);
    width: min(100%, ${pxToRem(670)});
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(30)};
    align-items: center;
    text-align: center;

    @media ${mq.tabletAndDesktop} {
      padding: ${pxToRem(100)} ${pxToRem(50)} ${pxToRem(50)};
    }
  }

  .kiss-PreLaunch__box__avatar {
    --avatar-size: ${pxToRem(100)};
    position: absolute;
    left: 0;
    right: 0;
    top: calc(-1 * var(--avatar-size) / 2);

    @media ${mq.tabletAndDesktop} {
      --avatar-size: ${pxToRem(140)};
    }

    img {
      box-sizing: border-box;
      border: ${pxToRem(10)} solid var(--color-grey-000);
      border-radius: var(--border-radius-rounded);
      box-shadow: var(--box-shadow-s);
      width: var(--avatar-size);
      height: var(--avatar-size);
    }
  }

  .kiss-PreLaunch__content {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(20)};

    @media ${mq.tabletAndDesktop} {
      gap: ${pxToRem(30)};
    }
  }

  .kiss-PreLaunch__form {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(10)};
  }

  .kiss-PreLaunch__box__image img {
    aspect-ratio: 16 / 10;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    display: block;
  }

  .kiss-PreLaunch__box__title,
  .kiss-PreLaunch__box__slogan {
    margin: 0;
  }
`

const PreLaunch = () => (
  <>
    <KissKissBankBankHeaderNavStory />
    <PageWrapper>
      <section className="kiss-PreLaunch__box">
        <div className="kiss-PreLaunch__content">
          <picture className="kiss-PreLaunch__box__avatar">
            <img src="/kitten-3.jpg" alt="" />
          </picture>
          <Text
            size="small"
            className="k-u-letter-spacing-10"
            transform="uppercase"
          >
            Bientôt sur KissKissBankBank
          </Text>
          <Title modifier="tertiary" className="kiss-PreLaunch__box__title">
            Un chaton pour la Fabrique !
          </Title>
          <picture className="kiss-PreLaunch__box__image">
            <img src="/kitten-0.jpg" alt="" />
          </picture>
          <Text tag="p" className="kiss-PreLaunch__box__slogan">
            Plus que quelques jours avant le lancement de notre nouvelle
            campagne ! Nous vous avons préparé plein de surprises et notamment
            une contrepartie exclusive pour les 100 premiers contributeurs ! Ne
            passez pas à côté !
          </Text>
        </div>
        <HorizontalStroke align="center" />
        <form className="kiss-PreLaunch__form">
          <Field.Label center labelProps={{ htmlFor: 'textInput' }}>
            Inscrivez-vous pour recevoir un mail le jour du lancement
          </Field.Label>
          <TextInputWithButton
            id="textInput"
            placeholder="Entrez votre adresse email"
            buttonValue="M’informer du lancement"
            modifier="helium"
            buttonProps={{
              type: 'submit',
            }}
          />
          <Field.Help>
            Votre adresse email sera utilisée uniquement pour vous alerter du
            lancement de ce projet.
          </Field.Help>
        </form>
      </section>
    </PageWrapper>
    <Footer variant="minimalist" />
  </>
)

export default PreLaunch
