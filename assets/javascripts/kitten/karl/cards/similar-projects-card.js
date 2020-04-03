import React, { Component } from 'react'
import { SimilarProjectsCard } from '../../components/cards/similar-projects-card'

const projectsWithImage = [
  {
    imageSrc: 'https://placehold.it/400x200/caf4fe/caf4fe',
    title: 'Title 1',
    description:
      'Intellectum est enim mihi quidem in multis, et maxime in me ipso',
    link: {
      href: 'http://www.kisskissbankbank.com',
    },
  },
  {
    imageSrc: 'https://placehold.it/400x200/3b75f0/3b75f0',
    title: 'Title 2',
    description: 'Sed paulo ante in omnibus, cum M. Marcellum senatui',
    link: {
      href: 'http://www.hellomerci.com',
    },
  },
  {
    imageSrc: 'https://placehold.it/400x200/2c66e1/2c66e1',
    title: 'Title 3',
    description:
      'Ille quidem fructum omnis ante actae vitae hodierno die maximum cepit',
    link: {
      href: 'http://www.lendopolis.com',
    },
  },
]

const tags = [
  { key: 'tag-1', item: 'Tag 1' },
  { key: 'tag-2', item: 'Tag 2' },
]

const tagLists = [
  {
    items: [
      { key: 'tag-1', item: 'Tag 1' },
      { key: 'tag-2', item: 'Tag 2' },
    ],
  },
  {
    items: [
      { key: 'tag-3', item: 'Tag 3' },
      { key: 'tag-4', item: 'Tag 4' },
    ],
  },
]

const infos = [
  { key: 'info-1', text: 'Info 1', value: 'xx', locked: false },
  { key: 'info-2', text: 'Info 2', value: 'xx', locked: false },
  { key: 'info-3', text: 'Info 3', value: 'xx', locked: false },
]

const projectsWithInfos = [
  {
    title: 'Title 1',
    description:
      'Excogitatum est super his, ut homines quidam ignoti, vilitate ipsa parum cavendi ad colligendos rumores per Antiochiae latera cuncta destinarentur ',
    link: {
      href: 'http://www.kisskissbankbank.com',
    },
    tags: tags,
    infos: infos,
  },
  {
    title: 'Title 2',
    description:
      'Relaturi quae audirent. hi peragranter et dissimulanter honoratorum circulis adsistendo pervadendoque divites domus egentium habitu quicquid ',
    link: {
      href: 'http://www.hellomerci.com',
    },
    tagLists: tagLists,
    infos: infos,
  },
  {
    title: 'Title 3',
    description:
      'Noscere poterant vel audire latenter intromissi per posticas in regiam nuntiabant, id observantes conspiratione concordi, ut fingerent quaedam',
    link: {
      href: 'http://www.lendopolis.com',
    },
    tags: tags,
    infos: infos,
  },
]

class KarlSimilarProjectsCardBase extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: this.props.projects,
    }

    this.handleOnRefreshClick = this.handleOnRefreshClick.bind(this)
  }

  newProjectsList() {
    const projects = this.state.projects

    return [...projects.slice(1), projects[0]]
  }

  handleOnRefreshClick() {
    this.setState({ projects: this.newProjectsList() })
  }

  render() {
    return (
      <SimilarProjectsCard
        onRefreshClick={this.handleOnRefreshClick}
        projects={this.state.projects}
      />
    )
  }
}

export const KarlSimilarProjectsCard = () => (
  <KarlSimilarProjectsCardBase projects={projectsWithImage} />
)

export const KarlSimilarProjectsWithInfosCard = () => (
  <KarlSimilarProjectsCardBase projects={projectsWithInfos} />
)
