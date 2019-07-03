import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Marger } from '../../../components/layout/marger'
import { CommentAvatar } from '../../../components/comments/comment-avatar'
import { Button } from '../../../components/buttons/button'
import { Text } from '../../../components/typography/text'
import { ScreenConfig } from '../../../constants/screen-config'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'

const StyledGrid = styled.div`
  display: flex;
`

const StyledGridCol = styled.div`
  flex: 1;
  margin-left: ${pxToRem(20)};
  @media (min-width: ${ScreenConfig.S.min}px) {
    margin-left: ${pxToRem(35)};
  }
`
const StyledInput = styled.div`
  margin-bottom: ${pxToRem(0.5)};
  display: flex;
  position: relative;
`

const StyledTextarea = styled.textarea`
  color: ${COLORS.font2};
  ${TYPOGRAPHY.fontStyles.light};
  width: 100%;
  overflow-y: hidden;
  resize: none;
  box-sizing: border-box;
  border-width: ${pxToRem(2)};
  border-style: solid;
  border-color: ${COLORS.line1};
  color: ${COLORS.font1};
  padding: ${pxToRem(30)};
  font-size: ${stepToRem(-1)};

  @media (min-width: ${ScreenConfig.S.min}px) {
    font-size: ${stepToRem(0)};
  }

  :focus {
    outline: none;
    border-color: ${COLORS.line2};
    color: ${COLORS.font1};
  }

  ::placeholder {
    color: ${COLORS.font2};
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      border-color: ${COLORS.line1};
      color: ${COLORS.font2};
      background-color: ${COLORS.line1};
    `}

  ${({ error }) =>
    error &&
    css`
      border-color: ${COLORS.error3};
      color: ${COLORS.error3};
    `}
`

const StyledArrow = styled.div`
  position: absolute;
  top: ${pxToRem(20)};
  display: block;
  width: 0;
  height: 0;
  border-width: ${pxToRem(10)};
  border-style: solid;
  border-color: transparent;
  border-right-color: ${COLORS.line1};
  left: -${pxToRem(20)};

  @media (min-width: ${ScreenConfig.S.min}px) {
    top: ${pxToRem(35)};
  }

  ${StyledTextarea}:focus + & {
    border-right-color: ${COLORS.line2};
  }

  ${({ error }) =>
    error &&
    css`
      border-right-color: ${COLORS.error3};
    `}
`

const StyledArrowBefore = styled.span`
  position: absolute;
  width: 0;
  height: 0;
  margin-top: -${pxToRem(10)};
  border-width: ${pxToRem(10)};
  border-style: solid;
  border-color: transparent;
  border-right-color: ${COLORS.background1};
  left: -${pxToRem(7)};
`

export class CommentForm extends PureComponent {
  static propTypes = {
    avatarImgProps: PropTypes.object.isRequired,
    isDisabled: PropTypes.bool,
    placeholder: PropTypes.string.isRequired,
    commentButton: PropTypes.string,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    onSubmit: PropTypes.func,
    defaultValue: PropTypes.string,
    commentLabel: PropTypes.string,
    ariaId: PropTypes.string,
  }

  static defaultProps = {
    onSubmit: () => {},
    error: false,
    errorMessage: '',
    isDisabled: false,
    commentButton: '',
    defaultValue: '',
    ariaId: '',
    commentLabel: '',
  }

  constructor(props) {
    super(props)

    this.state = {
      isFocused: false,
      value: this.props.defaultValue,
      height: 'auto',
    }
  }

  handleFocus = () => {
    this.setState({ isFocused: true })
  }

  handleBlur = () => {
    this.setState({ isFocused: false })
  }

  handleChange = e => {
    const element = e.target

    this.setState(
      {
        value: element.value,
        height: 'auto',
      },
      () => {
        this.setState({
          height: element.scrollHeight,
        })
      },
    )
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.value)
  }

  render() {
    const { avatarImgProps } = this.props

    return (
      <StyledGrid>
        <CommentAvatar avatarImgProps={avatarImgProps} />
        {this.renderInput()}
      </StyledGrid>
    )
  }

  renderInput() {
    const {
      isDisabled,
      placeholder,
      defaultValue,
      commentLabel,
      ariaId,
      error,
      errorMessage,
    } = this.props

    return (
      <StyledGridCol>
        <StyledInput>
          <StyledTextarea
            aria-label={commentLabel}
            aria-describedby={ariaId}
            aria-invalid="false"
            aria-required="true"
            defaultValue={defaultValue}
            key="comment-form"
            disabled={isDisabled}
            placeholder={placeholder}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            rows="1"
          />
          <StyledArrow>
            <StyledArrowBefore />
          </StyledArrow>
        </StyledInput>
        {this.renderError()}
        {this.renderButton()}
      </StyledGridCol>
    )
  }

  renderButton() {
    if (!this.state.value) return

    const { commentButton } = this.props

    return (
      <Marger top="2">
        <Button
          type="button"
          modifier="helium"
          onClick={this.handleSubmit}
          className="k-u-margin-right-single"
        >
          {commentButton}
        </Button>
      </Marger>
    )
  }

  renderError() {
    const { error, errorMessage, ariaId } = this.props

    if (!error) return

    return (
      <Marger top=".5">
        <Text id={ariaId} color="error" size="micro" weight="regular">
          {errorMessage}
        </Text>
      </Marger>
    )
  }
}
