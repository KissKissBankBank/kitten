import React from 'react'
import styled from 'styled-components'
import {
  pxToRem,
  COLORS,
  GarbageIcon,
  EditIcon,
  Title,
  Text,
  Button,
  ScreenConfig,
} from 'kitten'

const borderWidth = 2
const wrapperPadding = 30

const Wrapper = styled.div`
  position: relative;
  margin-top: ${pxToRem(30)};
  border: ${pxToRem(borderWidth)} solid ${COLORS.line1};
  padding: ${pxToRem(wrapperPadding)};
`

const GarbageButton = styled(Button)`
  position: absolute;
  top: -${pxToRem(borderWidth)};
  right: -${pxToRem(borderWidth)};
`

const Publication = styled.div`
  margin-bottom: ${pxToRem(15)};
`

const Splitter = styled.div`
  display: flex;
  @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
    flex-direction: column;
  }
`

const Actions = styled.div`
  display: flex;
  align-items: flex-end;
  @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
    margin-top: ${pxToRem(30)};
  }
`

const ShowMoreLink = styled(Text)`
  display: block;
  margin-top: ${pxToRem(15)};
`

const NewsCard = ({ title, children, publishedAt }) => {
  return (
    <Wrapper>
      <GarbageButton
        type="button"
        fit="icon"
        title="Garbage Button"
        aria-label="Supprimer cet item"
        modifier="beryllium"
        size="small"
      >
        <GarbageIcon />
      </GarbageButton>
      {publishedAt && (
        <Publication>
          <Text weight="light" color="font1">
            Programmé pour le{' '}
          </Text>
          <strong className="k-u-strong">{publishedAt}</strong>
        </Publication>
      )}
      <Title tag="h3" modifier="quaternary" margin={false}>
        {title}
      </Title>
      <Splitter>
        <div>
          <Text
            weight="light"
            size="default"
            tag="div"
            className="k-u-margin-top-single k-u-margin-right-double"
          >
            {children}
          </Text>
          <ShowMoreLink weight="bold" color="primary1" tag="a" href="#">
            Voir tout
          </ShowMoreLink>
        </div>
        <Actions>
          <Button fit="icon" modifier="hydrogen">
            <EditIcon aria-label="Éditer" />
          </Button>
          <Button modifier="helium" className="k-u-margin-left-double">
            Publier
          </Button>
        </Actions>
      </Splitter>
    </Wrapper>
  )
}

export default NewsCard
