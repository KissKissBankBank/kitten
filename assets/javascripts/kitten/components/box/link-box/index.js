import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ArrowIcon } from '../../../components/icons/arrow-icon'
import { Text } from '../../../components/typography/text'
import { Marger } from '../../../components/layout/marger'
import COLORS from '../../../constants/colors-config'
import { ScreenConfig } from '../../../constants/screen-config'
import { pxToRem } from '../../../helpers/utils/typography'

const Link = styled.a`
  display: flex;
  color: ${COLORS.font1};
  text-decoration: none;
`

const ParagraphMarger = styled(Marger)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  padding-left: ${pxToRem(20)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    padding-left: ${pxToRem(30)};
  }
`

const Icon = styled.div`
  display: none;
  margin-top: ${pxToRem(-2)};
  margin-left: ${pxToRem(-2)};
  margin-bottom: ${pxToRem(-2)};
  align-items: center;
  justify-content: center;
  min-width: ${pxToRem(90)};
  background-color: ${COLORS.primary4};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    display: flex;
  }
`

const Arrow = styled(props => (
  <div {...props}>
    <ArrowIcon className="k-ButtonIcon__svg" />
  </div>
))`
  display: flex;
  align-items: center;
  padding: ${pxToRem(15)} ${pxToRem(22)} ${pxToRem(15)} ${pxToRem(18)};
  transition: all 0.4s ease-in-out;

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    padding-left: ${pxToRem(30)};
    padding-right: ${pxToRem(32)};
  }
`

const Container = styled.div`
  display: flex;
  min-height: ${pxToRem(90)};
  width: 100%;
  box-sizing: border-box;
  color: ${COLORS.font1};
  background-color: ${COLORS.background1};
  border: ${pxToRem(2)} solid ${COLORS.line1};

  &:hover {
    background-color: ${COLORS.background2};

    ${Arrow} {
      transform: translate(${pxToRem(5)}, ${pxToRem(0)});
    }
  }

  &:active {
    background-color: ${COLORS.background3};
  }
`

export const LinkBox = ({
  title,
  titleTag,
  isExternal,
  href,
  text,
  textTag,
  linkProps,
  viewportIsMobile,
  displayIcon,
  children,
}) => {
  const target = isExternal ? { target: '_blank', rel: 'noopener' } : {}

  return (
    <Link {...linkProps} href={href} {...target}>
      <Container>
        {!!displayIcon && <Icon>{children}</Icon>}

        <ParagraphMarger top="2" bottom="2">
          <Marger bottom={text ? 0.5 : 0}>
            <Text
              tag={titleTag}
              weight="regular"
              size={viewportIsMobile ? 'tiny' : 'default'}
              color="font1"
              style={{ lineHeight: 1 }}
            >
              {title}
            </Text>
          </Marger>

          {text && (
            <Text
              tag={textTag}
              weight="light"
              size="tiny"
              color="font1"
              style={{ lineHeight: 1.3 }}
            >
              {text}
            </Text>
          )}
        </ParagraphMarger>

        <Arrow />
      </Container>
    </Link>
  )
}

LinkBox.propTypes = {
  displayIcon: PropTypes.bool,
  href: PropTypes.string,
  isExternal: PropTypes.bool,
  title: PropTypes.string.isRequired,
  titleTag: PropTypes.string,
  text: PropTypes.string,
  textTag: PropTypes.string,
  linkProps: PropTypes.object,
}

LinkBox.defaultProps = {
  displayIcon: false,
  href: '#',
  isExternal: false,
  titleTag: 'span',
  text: '',
  textTag: 'span',
}

// DEPRECATED: do not use default export.
export default LinkBox
