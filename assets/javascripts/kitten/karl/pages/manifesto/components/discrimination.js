import React from 'react'
import {
  pxToRem,
  Title,
  Button,
  Text,
  ScreenConfig,
} from 'kitten'
import styled from 'styled-components'

const DiscriminationWrapper = styled.section`
  margin-top: ${pxToRem(100)};
  
  .kiss-Manifesto__discrimination__circle {
    position: absolute;
    background: var(--color-danger-300);
    width: ${pxToRem(871)};
    height: ${pxToRem(827)};
    border-top-right-radius: 100%;
    flex-shrink: 0;
    margin: 0 0 auto;
  }
  
  .kiss-Manifesto__discrimination__container {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(20)};
    align-items: flex-start;
    margin: ${pxToRem(200)} 0 0 ${pxToRem(70)};

    .k-Title {
      margin-bottom: ${pxToRem(20)};
    }

    .k-Button {
      margin-top: ${pxToRem(20)};
    }
  }
`

const Discrimination = () => (
  <DiscriminationWrapper>
    <div className="kiss-Manifesto__discrimination__circle">
        <div className="kiss-Manifesto__discrimination__container">
        <Title modifier="primary" noMargin style={{ lineHeight: "75%" }}>
          La lutte contre<br /> toutes les<br /> discriminations
        </Title>
        <Text size="large" className="k-u-padding-right-decuple@sm-up">
          Il n’y a pas de monde juste dans un monde où certain·es sont 
          victimes <br />de discriminations.
        </Text>
        <Text size="large">
          KissKissBankBank s’engage fermement contre toutes les formes de<br />
          discriminations&nbsp;:&nbsp;racisme, sexisme, homophobie, lesbophobie,<br />
          transphobie, grossophobie, validisme, âgisme, classisme.
        </Text>
        <Text size="large">
          C’est pour nous une évidence qu’il faut pourtant souligner&nbsp;:&nbsp;un<br />
          projet qui irait à l’encontre de ces valeurs, de quelque manière que ce soit,<br />
          n’a pas sa place sur notre plateforme.
        </Text>
        <Button modifier="helium">Créer mon projet</Button>
      </div>
    </div>
  </DiscriminationWrapper>
)

export default Discrimination
