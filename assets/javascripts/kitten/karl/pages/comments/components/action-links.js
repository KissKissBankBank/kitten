import React, { Component } from 'react'
import compose from 'ramda/src/compose'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Text } from '../../../../components/typography/text'
import PropTypes from 'prop-types'

const StyledActionLinks = styled(Text)`
  cursor: pointer;
  text-decoration: underline;
`

export class ActionLinks extends Component {
  static propTypes = {
    deleteComment: PropTypes.func.isRequired,
  }

  handleOnDelete = () => {
    const { uuid, t, deleteComment } = this.props

    // TODO: use a Kitten alert box.
    /* eslint-disable no-alert, no-restricted-globals */
    if (confirm(t('project_comments.delete_comment_confirm'))) {
      /* eslint-enable no-alert, no-restricted-globals */
      deleteComment(uuid)
    }
  }

  render() {
    const {
      t,
      isCurrentUserOwner,
      isCurrentUserAdmin,
      getCurrentUserSlug,
      ownerSlug,
    } = this.props

    return (
      (isCurrentUserOwner ||
        isCurrentUserAdmin ||
        ownerSlug === getCurrentUserSlug) && (
        <StyledActionLinks
          color="font1"
          weight="bold"
          type="button"
          tag="button"
          onClick={this.handleOnDelete}
        >
          Supprimer
        </StyledActionLinks>
      )
    )
  }
}

const mapDispatchToProps = {
  deleteComment,
}
