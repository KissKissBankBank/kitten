import React, { Component, Fragment } from 'react'
import classNames from 'classnames'
import Radium, { StyleRoot } from 'radium'
import { card } from 'kitten/hoc/card'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import { Title as TitleBase } from 'kitten/components/typography/title'
import { Text as TextBase } from 'kitten/components/typography/text'
import { parseHtml } from 'kitten/helpers/utils/parser'
import { HorizontalStroke as HorizontalStrokeBase }
  from 'kitten/components/layout/horizontal-stroke'
import { ButtonImage } from 'kitten/components/buttons/button-image'
import { Progress } from 'kitten/components/meters/progress'
import COLORS from 'kitten/constants/colors-config'
import Truncate from 'react-truncate'

const Text = Radium(TextBase)
const Title = Radium(TitleBase)
const HorizontalStroke = Radium(HorizontalStrokeBase)
const Marger = Radium(MargerBase)

class CrowdfundingCardComponent extends Component {
  removeCurrentFocus = () => {
    document.activeElement.blur()
  }

  render() {
    const {
      imageProps,
      avatarProps,
      titleProps,
      ownerTitle,
      ownerDescription,
      cardTitle,
      cardSubTitle,
      titlesMinHeight,
      titleTruncate,
      info1,
      info2,
      info3,
      progress,
      state,
      loading,
      ...others,
    } = this.props

    const Tag = this.props.href ? 'a' : 'div'

    // TODO: Remove radiumConfig when it is fixed in Radium.
    return (
      <StyleRoot radiumConfig={{ userAgent: 'all' }}>
        <Tag
          { ...others }
          style={ styles.card }
          onClick={ this.removeCurrentFocus }
        >
          { this.renderImage() }
          { this.renderHeader() }

          <Marger
            bottom="2"
            style={ titlesMinHeight && styles.titles }
          >
            { this.renderTitle() }
            { this.renderSubtitle() }
          </Marger>

          { this.renderInformations() }
          { this.renderProgress() }
          { this.renderState() }
          { this.renderLoading() }
        </Tag>
      </StyleRoot>
    )
  }

  renderImage() {
    const {
      alt,
      ...imageProps,
    } = this.props.imageProps

    const imageClassName = classNames(
      'k-Card__image',
      imageProps.className,
    )

    return (
      <Marger
        className="k-Card__imageContainer"
        style={ styles.imageContainer }
      >
        { !this.props.loading &&
          <img
            { ...imageProps }
            alt={ alt || '' }
            className={ imageClassName }
            style={ { ...imageProps.style, ...styles.image } }
          />
        }
      </Marger>
    )
  }

  renderHeader() {
    return (
      <div style={ styles.header.grid }>
        <Marger
          top="1"
          bottom="1"
        >
          <ButtonImage
            tag="span"
            img={ !this.props.loading && this.props.avatarProps }
            withoutPointerEvents
            style={ styles.header.avatar }
          />
        </Marger>

        <div
          style={ styles.header.owner }
        >
          <Text
            tag="div"
            size="micro"
            weight="regular"
            style={[ this.props.loading && styles.header.owner.titleLoading ]}
          >
            { !this.props.loading && parseHtml(this.props.ownerTitle) }
          </Text>

          <Text
            tag="div"
            size="micro"
            weight="light"
            style={
              [ this.props.loading && styles.header.owner.descriptionLoading ]
            }
          >
            { !this.props.loading && parseHtml(this.props.ownerDescription) }
          </Text>
        </div>
      </div>
    )
  }

  renderTitle() {
    const className = classNames(
      'k-Card__title',
      this.props.titleProps.className,
    )

    return (
      <Marger
        bottom="1"
        style={ styles.title }
      >
        { !this.props.loading &&
          <Title
            tag="p"
            { ...this.props.titleProps }
            modifier="senary"
            margin={ false }
            className={ className }
          >
            { this.props.titleTruncate &&
              <Truncate lines={ 2 }>
                { parseHtml(this.props.cardTitle) }
              </Truncate>
            }

            { !this.props.titleTruncate && parseHtml(this.props.cardTitle) }
          </Title>
        }

        { this.props.loading &&
          <div>
            <span style={ styles.title.loading } />
            <span style={{
              ...styles.title.loading,
              ...styles.title.loading.small,
            }} />
          </div>
        }
      </Marger>
    )
  }

  renderSubtitle() {
    const horizontalStroke = [
      styles.stroke,
      this.props.loading && styles.stroke.loading,
    ]

    return (
      <Marger
        top="1"
        style={ styles.subtitle }
      >
        <HorizontalStroke
          size="tiny"
          style={ horizontalStroke }
        />

        { (this.props.cardSubTitle && !this.props.loading) &&
          <Text
            size="micro"
            weight="regular"
          >
            { parseHtml(this.props.cardSubTitle) }
          </Text>
        }

        { this.props.loading &&
          <span style={ styles.subtitle.loading } />
        }
      </Marger>
    )
  }

  renderInformations() {
    if (!this.props.info1 && !this.props.info2 && !this.props.info3) return

    return (
      <Marger
        top="1.5"
        bottom="1.5"
        style={ styles.informations }
      >
        { this.renderInfo(this.props.info1) }
        { this.renderInfo(this.props.info2) }
        { this.renderInfo(this.props.info3, true) }
      </Marger>
    )
  }

  renderInfo(text, lastItem = false) {
    const lastItemStyles = lastItem ? styles.informations.info.lastItem : {}

    return (
      <Marger
        top="0.5"
        style={{ ...styles.informations.info, ...lastItemStyles }}
      >
        { !this.props.loading &&
          <Text
            size="micro"
            lineHeight="normal"
            weight="light"
          >
            { parseHtml(text) }
          </Text>
        }

        { this.props.loading &&
          <div>
            <span style={ styles.informations.info.loading } />
            <span style={{
              ...styles.informations.info.loading,
              ...styles.informations.info.loading.large,
            }} />
          </div>
        }
      </Marger>
    )
  }

  renderProgress() {
    if (!this.props.progress) return

    const progressValue = this.props.loading
      ? 65
      : this.props.progress

    return (
      <Marger
        top="1.5"
        bottom="2"
        style={ styles.progress }
      >
        <Progress
          value={ progressValue }
          className={ this.props.loading && 'is-disabled' }
          rampProps={{
            style: { height: '4px' },
          }}
        />
      </Marger>
    )
  }

  renderState() {
    if (!this.props.state || this.props.loading) return

    return (
      <div style={ styles.state }>
        <Text
          size="micro"
          lineHeight="normal"
          weight="regular"
        >
          { this.props.state }
        </Text>
      </div>
    )
  }

  renderLoading() {
    if (!this.props.loading) return

    return (
      <span style={ styles.loading } />
    )
  }
}

const COMPONENT_GUTTER = 10

const loadingKeyframes = Radium.keyframes(
  {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(100%)' },
  },
)

const styles = {
  card: {
    position: 'relative',
    paddingBottom: '10px',
  },
  imageContainer: {
    overflow: 'hidden',
    position: 'relative',
    paddingTop: `${9 / 16 * 100}%`,
    backgroundColor: COLORS.line2,
  },
  image: {
    position: 'absolute',
    top: 0,
    width: '100%',
    display: 'block',
  },
  header: {
    grid: {
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      top: '0',
      marginTop: '-30px',
      backgroundColor: COLORS.background1,
    },
    avatar: {
      marginLeft: `${COMPONENT_GUTTER}px`,
      backgroundColor: COLORS.line2,
    },
    owner: {
      marginLeft: `${COMPONENT_GUTTER}px`,
      marginRight: `${COMPONENT_GUTTER * 2}px`,
      lineHeight: '1.2',

      titleLoading: {
        backgroundColor: COLORS.line2,
        borderBottom: `1px solid ${COLORS.background1}`,
        width: '70px',
        height: '14px',
      },

      descriptionLoading: {
        backgroundColor: COLORS.line2,
        borderTop: `1px solid ${COLORS.background1}`,
        width: '100px',
        height: '14px',
      },
    },
  },
  titles: {
    minHeight: '70px',
  },
  title: {
    padding: `0 ${COMPONENT_GUTTER}px`,
    lineHeight: '1',

    loading: {
      display: 'block',
      backgroundColor: COLORS.line2,
      borderBottom: `1px solid ${COLORS.background1}`,
      height: '24px',

      small: {
        width: '70%',
        borderTop: `1px solid ${COLORS.background1}`,
        borderBottom: 0,
      },
    },
  },
  subtitle: {
    display: 'flex',
    alignItems: 'center',
    lineHeight: '1',
    padding: `0 ${COMPONENT_GUTTER}px`,

    loading: {
      display: 'block',
      backgroundColor: COLORS.line2,
      width: '80px',
      height: '12px',
    },
  },
  stroke: {
    margin: `5px ${COMPONENT_GUTTER}px 5px 0`,

    loading: {
      backgroundColor: COLORS.line2,
    },
  },
  informations: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: `0 ${COMPONENT_GUTTER}px`,
    lineHeight: '1',

    info: {
      marginRight: '30px',

      lastItem: {
        marginRight: 0,
      },

      loading: {
        display: 'block',
        backgroundColor: COLORS.line2,
        borderBottom: `1px solid ${COLORS.background1}`,
        width: '40px',
        height: '16px',

        large: {
          width: '65px',
          borderTop: `1px solid ${COLORS.background1}`,
          borderBottom: 0,
        },
      },
    },
  },
  progress: {
    padding: `0 ${COMPONENT_GUTTER}px`,
  },
  state: {
    position: 'absolute',
    top: '0',
    right: '0',
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: COLORS.background1,
    padding: `${COMPONENT_GUTTER}px`,
    lineHeight: '1',
  },

  loading: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    transform: 'translateX(-100%)',
    background: 'linear-gradient(90deg, rgba(0, 0, 0, 0), \
      rgba(255, 255, 255, .3), rgba(0, 0, 0, 0))',
    animation: 'x 1s linear infinite',
    animationName: loadingKeyframes,
  },
}

CrowdfundingCardComponent.defaultProps = {
  href: null,
  imageProps: {
    src: 'https://placehold.it/350x200/4a84ff/4a84ff',
    alt: '',
  },
  avatarProps: {
    src: 'https://placehold.it/100x100/4a84ff/4a84ff',
    alt: '',
  },
  ownerTitle: 'Owner title',
  ownerDescription: 'Owner description',
  titleProps: {},
  cardTitle: 'Lorem ipsum…',
  cardSubTitle: null,
  titlesMinHeight: true,
  titleTruncate: true,
  info1: '<strong>XX</strong> <br/>lorem ipsum…',
  info2: '<strong>XX</strong> <br/>lorem ipsum…',
  info3: '<strong>XX</strong> <br/>lorem ipsum…',
  progress: 42,
  state: 'Lorem ipsum…',
  loading: false,
}

export const CrowdfundingCard = card(CrowdfundingCardComponent, {
  light: true,
  withoutBoxShadowOnHover: true,
})
