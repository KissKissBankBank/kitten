import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Marger } from '../../../components/layout/marger'
import { CommentAvatar } from '../../../components/comments/comment-avatar'
import { Text } from '../../../components/typography/text'
import { ScreenConfig } from '../../../constants/screen-config'
import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { LikeButton } from './components/like-button'
import domElementHelper from '../../../helpers/dom/element-helper'

const desktopPadding = pxToRem(30)
const tabletAndMobilePadding = pxToRem(20)

const StyledContentText = styled(Text)`
  font-size: ${stepToRem(-1)};

  @media (min-width: ${ScreenConfig.S.min}px) {
    font-size: ${stepToRem(0)};
  }
`

const StyledCommentArrow = styled.span`
  position: absolute;
  top: ${pxToRem(20)};
  display: block;
  width: 0;
  height: 0;
  border-width: ${pxToRem(10)};
  border-style: solid;
  border-color: transparent;
  border-right-color: ${COLORS.background3};
  left: ${pxToRem(-20)};

  @media (min-width: ${ScreenConfig.S.min}px) {
    top: ${pxToRem(35)};
  }
`

const StyledGrid = styled.div`
  display: flex;
`

const StyledCommentContainer = styled.span`
  position: relative;
  margin-left: ${pxToRem(20)};
  flex: 1;

  @media (min-width: ${ScreenConfig.S.min}px) {
    margin-left: ${pxToRem(35)};
  }
`

const StyledCommentContent = styled.div`
  border-width: ${pxToRem(2)};
  background-color: ${COLORS.background3};
  border-color: ${COLORS.background3};
  color: ${COLORS.font1};
  font-size: ${stepToRem(0)};
  padding: ${tabletAndMobilePadding};

  @media (min-width: ${ScreenConfig.M.min}px) {
    padding-top: ${desktopPadding};
    padding-right: ${desktopPadding};
    padding-left: ${desktopPadding};
  }
`

const StyledMargerText = styled.div`
  ${({ hasLikeButton }) =>
    hasLikeButton &&
    css`
      margin-bottom: ${pxToRem(15)};

      @media (min-width: ${ScreenConfig.M.min}px) {
        margin-bottom: ${pxToRem(20)};
      }
    `}

  ${({ ownerName }) =>
    ownerName &&
    css`
      margin-top: ${pxToRem(10)};
    `}
`

const StyledBottomNotes = styled(Text)`
  padding-left: ${pxToRem(30)};
  margin-top: 0;
`

const StyledLikeButtonBox = styled.div`
  position: absolute;
  right: 0;
  margin-top: ${pxToRem(-20)};
  margin-right: ${pxToRem(20)};

  @media (min-width: ${ScreenConfig.M.min}px) {
    margin-right: ${pxToRem(30)};
  }
`

export const Comment = ({
  text,
  ownerName,
  avatarImgProps,
  commentDate,
  bottomNotes,
  likeButtonProps,
  avatarBadge,
  id,
}) => {
  const likeButtonElement = useRef(null)
  const [likeButtonWidth, setLikeButtonWidth] = useState(0)

  useEffect(() => {
    const marginLeftAndRight = 40
    const elementWidth = domElementHelper.getComputedWidth(
      likeButtonElement.current,
    )

    setLikeButtonWidth(elementWidth + marginLeftAndRight)
  }, [])

  return (
    <StyledGrid id={id}>
      <CommentAvatar
        avatarImgProps={avatarImgProps}
        commentDate={commentDate}
        avatarBadge={avatarBadge}
      />
      <StyledCommentContainer>
        <StyledCommentContent>
          {ownerName && (
            <Marger bottom="1">
              <Text color="font1" size="tiny" weight="regular">
                {ownerName}
              </Text>
            </Marger>
          )}

          <StyledMargerText
            hasLikeButton={!!likeButtonProps.children}
            ownerName={ownerName}
          >
            <StyledContentText color="font1" weight="light">
              {text}
            </StyledContentText>
          </StyledMargerText>
          <StyledCommentArrow />
        </StyledCommentContent>

        {likeButtonProps.children && (
          <StyledLikeButtonBox ref={likeButtonElement}>
            <LikeButton {...likeButtonProps} />
          </StyledLikeButtonBox>
        )}

        {bottomNotes && (
          <Marger top=".5" style={{ marginRight: likeButtonWidth }}>
            <StyledBottomNotes
              tag="div"
              color="font1"
              size="micro"
              weight="bold"
            >
              {bottomNotes}
            </StyledBottomNotes>
          </Marger>
        )}
      </StyledCommentContainer>
    </StyledGrid>
  )
}

Comment.propTypes = {
  text: PropTypes.node.isRequired,
  ownerName: PropTypes.string,
  avatarImgProps: PropTypes.object.isRequired,
  commentDate: PropTypes.string.isRequired,
  bottomNotes: PropTypes.node,
  likeButtonProps: PropTypes.object,
  avatarBadge: PropTypes.node,
}

Comment.defaultProps = {
  bottomNotes: '',
  ownerName: '',
  likeButtonProps: {},
  avatarBadge: '',
}
