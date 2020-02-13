import React from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import { GarbageIcon } from '../../../../components/icons/garbage-icon'
import { EditIcon } from '../../../../components/icons/edit-icon'
import { ButtonIcon } from '../../../../components/buttons/button-icon'
import { Title } from '../../../../components/typography/title'
import { Text } from '../../../../components/typography/text'
import { Button } from '../../../../components/buttons/button/button'

const borderWidth = 2
const wrapperPadding = 30

const Wrapper = styled.div`
  position: relative;
  margin-top: ${pxToRem(30)};
  border: ${pxToRem(borderWidth)} solid ${COLORS.line1};
  padding: ${pxToRem(wrapperPadding)};
`

const GarbagButton = styled(ButtonIcon)`
  position: absolute;
  top: -${pxToRem(borderWidth)};
  right: -${pxToRem(borderWidth)};
`

const Publication = styled.div`
  margin-bottom: ${pxToRem(15)};
`

const Splitter = styled.div`
  display: flex;
`

const Body = styled(Text)`
  margin-top: ${pxToRem(10)};
  margin-right: ${pxToRem(20)};
`

const Actions = styled.div`
  display: flex;
  align-items: flex-end;
`

const PublishButton = styled(Button)`
  margin-left: ${pxToRem(20)};
`

const ShowMoreLink = styled(Text)`
  display: block;
  cursor: pointer;
  margin-top: ${pxToRem(15)};
`

const NewsCard = ({ title, children, publishedAt }) => {
  return (
    <Wrapper>
      <GarbagButton
        type="button"
        title="Garbage Button"
        aria-label="Garbage Button"
        modifier="beryllium"
        size="tiny"
      >
        <GarbageIcon className="k-ButtonIcon__svg" />
      </GarbagButton>
      {publishedAt && (
        <Publication>
          <Text weight="light" color="font1">
            Programmé pour le{' '}
          </Text>
          <Text weight="bold" color="font1">
            {publishedAt}
          </Text>
        </Publication>
      )}
      <Title tag="h3" modifier="quaternary" margin={false}>
        {title}
      </Title>
      <Splitter>
        <div>
          <Body weight="light" size="default" tag="div">
            {children}
          </Body>
          <ShowMoreLink weight="bold" color="primary1" tag="a">
            Voir tout
          </ShowMoreLink>
        </div>
        <Actions>
          <ButtonIcon modifier="hydrogen">
            <EditIcon className="k-ButtonIcon__svg" />
          </ButtonIcon>
          <PublishButton modifier="helium">Publier</PublishButton>
        </Actions>
      </Splitter>
    </Wrapper>
  )
}

export default NewsCard
