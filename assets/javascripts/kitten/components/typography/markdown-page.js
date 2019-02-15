import React, { Fragment } from 'react'
import styled from 'styled-components'
import Markdown from 'react-markdown'
import PropTypes from 'prop-types'
import slugify from 'slugify'
import { Marger } from '../../components/layout/marger'
import { Title } from '../../components/typography/title'
import { Paragraph } from '../../components/typography/paragraph'
import { BulletList } from '../../components/lists/bullet-list'
import { LinkList } from '../../components/links/link-list'
import { HorizontalStroke } from '../../components/layout/horizontal-stroke'
import { scrollTo } from '../../helpers/utils/scroll-to'
import { pxToRem } from '../../helpers/utils/typography'
import { ScreenConfig } from '../../constants/screen-config'

export const MarkdownPage = props => (
  <Markdown
    source={props.content}
    renderers={markdownRenderers}
    escapeHtml={false}
  />
)

MarkdownPage.propTypes = {
  content: PropTypes.string.isRequired,
}

const MarkdownParagraph = props => {
  return (
    <Marger bottom="2.6">
      <Paragraph modifier="primary" margin={false}>
        {props.children}
      </Paragraph>
    </Marger>
  )
}

MarkdownParagraph.propTypes = {
  children: PropTypes.node.isRequired,
}

const MarkdownBlockquote = props => {
  const items = props.children.map(item => ({
    key: item.key,
    item: item.props.children[0],
  }))

  return (
    <Marger top="4" bottom="4">
      <LinkListstyle color="dark" items={items} className="kiss-LinkList" />
    </Marger>
  )
}

MarkdownBlockquote.propTypes = {
  children: PropTypes.node.isRequired,
}

const MarkdownListComponent = props => {
  const items = props.children.map(item => ({
    key: item.key,
    item: item.props.children[0],
  }))

  return (
    <Marger top="3" bottom="3">
      <BulletListStyle className="kiss-BulletList" big items={items} />
    </Marger>
  )
}

MarkdownListComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

const handleLinkClick = url => {
  if (url.match(/^#/)) {
    scrollTo(document.getElementById(url.replace('#', '')), 500)
  }
}

const MarkdownLink = props => {
  return (
    <a
      href={props.href}
      className="k-Paragraph__link"
      onClick={() => {
        handleLinkClick(props.href)
      }}
    >
      {props.children}
    </a>
  )
}

MarkdownLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

const MarkdownHeading = ({ ...props }) => {
  let modifier
  let tag

  switch (props.level) {
    case 1:
      modifier = 'secondary'
      tag = 'h1'
      break
    case 2:
      modifier = 'quaternary'
      tag = 'h2'
      break
    case 3:
      modifier = 'quinary'
      tag = 'h3'
      break
    default:
      modifier = 'senary'
      tag = 'h4'
      break
  }

  const renderHorizontalStroke = () => {
    if (props.level > 1) return

    return (
      <Marger top="2" bottom="4">
        <HorizontalStroke size="big" />
      </Marger>
    )
  }

  const id = slugify(props.children[0].props.value, {
    lower: true,
    remove: /[']/g,
  })

  return (
    <Fragment>
      <TitleMarger>
        <Title modifier={modifier} tag={tag} id={id}>
          {props.children}
        </Title>
      </TitleMarger>
      {renderHorizontalStroke()}
    </Fragment>
  )
}

MarkdownHeading.defaultProps = {
  level: null,
}

MarkdownHeading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node.isRequired,
}

const markdownRenderers = {
  paragraph: MarkdownParagraph,
  link: MarkdownLink,
  heading: MarkdownHeading,
  blockquote: MarkdownBlockquote,
}

const LinkListstyle = styled(LinkList)`
  margin: 0;

  li {
    text-align: left;
  }
`

const BulletListStyle = styled(BulletList)`
  li: {
    lineheight: '1.8rem';
  }
`

const TitleMarger = styled(Marger)`
  margin-top: ${pxToRem(100)};
  margin-bottom: ${pxToRem(20)};

  @media (max-width: ${ScreenConfig.S.max}px) {
    margin-top: ${pxToRem(80)};
  }
`
