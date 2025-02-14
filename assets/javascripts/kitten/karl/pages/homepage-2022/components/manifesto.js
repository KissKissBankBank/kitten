import React from 'react'
import {
  Button,
  mq,
  pxToRem,
  Text,
  PencilIllustration,
  RainbowIllustration,
  HandAndFlowerIllustration,
} from 'kitten'
import styled from 'styled-components'

const ManifestoWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${pxToRem(30)};
  background-color: var(--color-grey-900);
  color: var(--color-grey-000);
  text-align: center;
  padding: var(--padding-top-mobile) ${pxToRem(20)} var(--padding-bottom-mobile);

  @media ${mq.tablet} {
    padding: var(--padding-top-desktop) ${pxToRem(100)}
      var(--padding-bottom-desktop);
  }

  @media ${mq.desktop} {
    padding: var(--padding-top-desktop) ${pxToRem(250)}
      var(--padding-bottom-desktop);
  }

  .k-Title {
    margin: 0;
  }

  .kiss-Homepage__manifesto__illustrations {
    display: flex;
    gap: ${pxToRem(30)};
    flex-wrap: wrap;
    justify-content: center;
  }

  .kiss-Homepage__manifesto__illustration {
    flex-direction: column;
  }
`

const Manifesto = ({
  title,
  className,
  illustration,
  top = [],
  bottom = [],
  ...props
}) => {
  return (
    <ManifestoWrapper
      className={className}
      style={{
        '--padding-top-mobile': pxToRem(top[0]),
        '--padding-bottom-mobile': pxToRem(bottom[0]),
        '--padding-top-desktop': pxToRem(top[1]),
        '--padding-bottom-desktop': pxToRem(bottom[1]),
      }}
      {...props}
    >
      {title}

      {illustration && (
        <div className="kiss-Homepage__manifesto__illustrations">
          <div className="kiss-Homepage__manifesto__illustration">
            <PencilIllustration />
            <Text tag="p" size="large" cssColor="var(--color-grey-000)">
              Défendons la culture <br />
              indépendante
            </Text>
          </div>
          <div className="kiss-Homepage__manifesto__illustration">
            <RainbowIllustration />
            <Text tag="p" size="large" cssColor="var(--color-grey-000)">
              Luttons contre les <br />
              discriminations
            </Text>
          </div>
          <div className="kiss-Homepage__manifesto__illustration">
            <HandAndFlowerIllustration />
            <Text tag="p" size="large" cssColor="var(--color-grey-000)">
              Protégeons l’environnement et <br />
              la biodiversité
            </Text>
          </div>
        </div>
      )}

      <Button modifier="hydrogen">Lire notre manifeste</Button>
    </ManifestoWrapper>
  )
}

export default Manifesto
