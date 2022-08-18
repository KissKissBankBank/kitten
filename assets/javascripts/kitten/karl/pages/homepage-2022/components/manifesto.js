import React from 'react'
import { Button, mq, pxToRem } from 'kitten'
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

  @media ${mq.tabletAndDesktop} {
    padding: var(--padding-top-desktop) ${pxToRem(40)}
      var(--padding-bottom-desktop);
  }

  .k-Title {
    margin: 0;
  }
`

const Manifesto = ({ title, className, top = [], bottom = [] }) => {
  return (
    <ManifestoWrapper
      className={className}
      style={{
        '--padding-top-mobile': pxToRem(top[0]),
        '--padding-bottom-mobile': pxToRem(bottom[0]),
        '--padding-top-desktop': pxToRem(top[1]),
        '--padding-bottom-desktop': pxToRem(bottom[1]),
      }}
    >
      {title}
      <Button modifier="hydrogen">lire notre manifeste</Button>
    </ManifestoWrapper>
  )
}

export default Manifesto
