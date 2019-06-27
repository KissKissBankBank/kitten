import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Marger } from '../../../components/layout/marger'
import { CommentAvatar } from '../../../components/comments/comment-avatar'
import { Text } from '../../../components/typography/text'
import { ScreenConfig } from '../../../constants/screen-config'
import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'

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
  left: -${pxToRem(20)};
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

  @media (min-width: ${ScreenConfig.S.min}px) {
    margin-left: ${pxToRem(35)},
  },
`

const StyledCommentContent = styled.div`
  border-width: ${pxToRem(2)};
  background-color: ${COLORS.background3};
  border-color: ${COLORS.background3};
  color: ${COLORS.font1};
  padding: ${pxToRem(30)};
  font-size: ${stepToRem(0)};
`

const StyledBottomNotes = styled(Text)`
  padding-left: ${pxToRem(30)};
`

export class Comment extends PureComponent {
  static propTypes = {
    text: PropTypes.node.isRequired,
    ownerName: PropTypes.string.isRequired,
    avatarImgProps: PropTypes.object.isRequired,
    commentDate: PropTypes.string.isRequired,
    bottomNotes: PropTypes.node,
  }

  static defaultProps = {
    bottomNotes: '',
  }

  render() {
    const {
      text,
      ownerName,
      avatarImgProps,
      commentDate,
      bottomNotes,
      ...props
    } = this.props

    return (
      <StyledGrid>
        <CommentAvatar
          avatarImgProps={avatarImgProps}
          commentDate={commentDate}
        />
        <StyledCommentContainer>
          <StyledCommentContent>
            <Marger bottom="1">
              <Text color="font1" size="tiny" weight="regular">
                {ownerName}
              </Text>
            </Marger>
            <Marger top="1">
              <StyledContentText color="font1" weight="light">
                {text}
              </StyledContentText>
            </Marger>
            <StyledCommentArrow />
          </StyledCommentContent>

          {bottomNotes && (
            <Marger top=".5">
              <StyledBottomNotes
                tag="p"
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
}
