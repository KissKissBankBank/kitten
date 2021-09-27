import React from  'react'
import styled from 'styled-components'
import {
  ScreenConfig,
  pxToRem,
  COLORS,
  Title,
  Button,
  GlobeIcon,
} from 'kitten'

const CardHolder = styled.div`
  display: grid;
  gap: ${pxToRem(10)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    gap: ${pxToRem(15)};
  }

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${pxToRem(30)};
  }

  > div {
    border: ${pxToRem(2)} solid ${COLORS.line1};
    border-radius: ${pxToRem(6)};
    padding: ${pxToRem(20)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      border-radius: ${pxToRem(8)};
      padding: ${pxToRem(30)};
    }
  }
`


export const StoryWithDashboard = () => (
  <>
    <div
      className="k-u-flex k-u-flex-direction-column@m-down k-u-flex-alignItems-start k-u-flex-justifyContent-sb k-u-margin-bottom-triple"
      style={{ '--gap': '30px' }}
    >
      <Title modifier="quinary" className="k-u-margin-none">
        Curabitur blandit tempus porttitor.
      </Title>
      <Button borderRadius={6}>
        <GlobeIcon width="16" height="16" />
        <span>Voir ma page projet</span>
      </Button>
    </div>
    <CardHolder>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </CardHolder>
  </>
)

