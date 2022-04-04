import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import {
  Button,
  Comment,
  Text,
  mq,
  pxToRem,
  ModalNext as Modal,
  ModalFooterInput,
  LargeArrowIconNext,
  FlexWrapper,
} from 'kitten'

export default {
  title: 'pages/CommentsModal',
  component: Comment,
}

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(5)};

  @media ${mq.tabletAndDesktop} {
    gap: ${pxToRem(20)};
  }
`

const ProxyComment = ({ isAdmin = false, onReply = () => {}, ...args }) => {
  const commentRef = useRef(null)
  const [hasLiked, setHasLiked] = useState(false)

  const handleReplyClick = () => {
    onReply({ args, commentRef })
  }

  return (
    <Comment
      {...args}
      ref={commentRef}
      headerActions={
        <Comment.LikeButton
          hasLiked={hasLiked}
          children={hasLiked ? '101' : '100'}
          onClick={() => setHasLiked(!hasLiked)}
          accessibilityLabel={
            hasLiked ? 'Retirer des favoris' : 'Ajouter aux favoris'
          }
        />
      }
      footer={
        isAdmin && (
          <>
            <Text
              as="button"
              weight="regular"
              size="micro"
              className="k-u-reset-button k-u-link k-u-link-font1"
              onClick={handleReplyClick}
            >
              {args.isSecondary ? 'Modifier' : 'Répondre'}
            </Text>
            <Text
              as="button"
              weight="regular"
              size="micro"
              className="k-u-reset-button k-u-link k-u-link-font1"
            >
              Supprimer
            </Text>
          </>
        )
      }
    />
  )
}

const CommentsList = ({ isAdmin = false, onReply = () => {} }) => (
  <StyledFlex>
    <div>
      <ProxyComment
        avatarImgProps={{
          src: '/kitten.jpg',
          alt: '',
        }}
        ownerName="Axel-Blablabla"
        commentDate="10 heures"
        isAdmin={isAdmin}
        onReply={onReply}
      >
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus
        commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
        amet risus. Cras mattis consectetur purus sit amet fermentum. Vivamus
        sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      </ProxyComment>
      <ProxyComment
        avatarImgProps={{
          src: '/kitten.jpg',
          alt: '',
        }}
        ownerName="Owner-1"
        commentDate="5 minutes"
        isSecondary
        className="k-u-margin-top-noneHalf"
        isAdmin={isAdmin}
        onReply={onReply}
      >
        Thank you!!!
      </ProxyComment>
    </div>
    <ProxyComment
      avatarImgProps={{
        src: '/kitten.jpg',
        alt: '',
      }}
      ownerName="Claude-Contributor"
      commentDate="20 jours"
      isAdmin={isAdmin}
      onReply={onReply}
    >
      Cras justo odio, dapibus ac facilisis in! !!!
    </ProxyComment>
    <ProxyComment
      avatarImgProps={{
        src: '/kitten.jpg',
        alt: '',
      }}
      ownerName="Mimi123"
      commentDate="3 mois"
      isAdmin={isAdmin}
      onReply={onReply}
    >
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Curabitur
      blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod.
      Etiam porta sem malesuada magna mollis euismod.
    </ProxyComment>
  </StyledFlex>
)

export const Default = () => (
  <div className="story-Container k-u-align-center">
    <Modal
      fullSizeOnMobile
      isOpen
      trigger={
        <Button modifier="beryllium" size="huge">
          Comments Modal
        </Button>
      }
    >
      {() => (
        <>
          <Modal.Title className="k-u-margin-bottom-double">
            Comments
          </Modal.Title>
          <Modal.Block className="k-u-margin-bottom-double">
            <CommentsList />
          </Modal.Block>
          <Modal.Actions sticky fullSize>
            <ModalFooterInput
              id="Input"
              placeholder="Praesent commodo cursus magna, vel scelerisque."
              buttonContent={
                <>
                  <LargeArrowIconNext direction="up" />
                  <span className="k-u-a11y-visuallyHidden">Send comment</span>
                </>
              }
            />
          </Modal.Actions>
        </>
      )}
    </Modal>
  </div>
)

export const AsAdmin = () => {
  const [replyText, setReplyTextTo] = useState(null)
  const inputRef = useRef(null)

  const handleReply = ({ args, commentRef }) => {
    const { isSecondary, ownerName, children } = args
    const inputElement = inputRef.current
    const parentCommentEl = commentRef.current

    // Retire le highlight du commentaire précédemment répondu
    document
      .querySelector('.k-Comment--isHighlighted')
      ?.classList.toggle('k-Comment--isHighlighted')

    // Définit les données du texte d'annonce de réponse
    setReplyTextTo({ ownerName, isEdit: isSecondary })

    // Focus sur l'input
    inputElement.focus()

    // Scroll sur le commentaire
    parentCommentEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
    // Toggle la class de higlight sur le commentaire
    // (pourrait être fait avec la prop `isHighlighted`)
    parentCommentEl.classList.toggle('k-Comment--isHighlighted')

    // Remplit l'input au cas où le commentaire est modifiable
    // ici on se base sur la prop `isSecondary` mais c'est pas la meilleure
    // manière de cibler
    if (isSecondary) {
      inputElement.value = children
    }
  }

  const handleCancel = () => {
    inputRef.current.value = ''

    // Annule le texte d'annonce de réponse
    setReplyTextTo(null)

    // Retire le highlight du commentaire précédemment répondu
    document
      .querySelector('.k-Comment--isHighlighted')
      ?.classList.toggle('k-Comment--isHighlighted')
  }

  return (
    <div className="story-Container k-u-align-center">
      <Modal
        fullSizeOnMobile
        isOpen
        trigger={
          <Button modifier="beryllium" size="huge">
            Comments Modal
          </Button>
        }
      >
        {() => (
          <>
            <Modal.Title className="k-u-margin-bottom-double">
              Comments
            </Modal.Title>
            <Modal.Block className="k-u-margin-bottom-double">
              <CommentsList isAdmin onReply={handleReply} />
            </Modal.Block>
            <Modal.Actions sticky fullSize>
              <div style={{ width: '100%' }}>
                {!!replyText && (
                  <FlexWrapper
                    id="reply-announce"
                    padding={[pxToRem(5), pxToRem(10)]}
                    gap={pxToRem(5)}
                    direction="row"
                    className="k-u-flex-alignItems-baseline"
                  >
                    <Text size="small">
                      {replyText.isEdit ? (
                        <>Modification de votre réponse</>
                      ) : (
                        <>
                          En réponse à{' '}
                          <span className="k-u-weight-regular">
                            {replyText.ownerName}
                          </span>
                        </>
                      )}
                    </Text>
                    <span aria-hidden>·</span>
                    <Text
                      onClick={handleCancel}
                      type="button"
                      tag="button"
                      size="micro"
                      className="k-u-reset-button k-u-link k-u-link-grey1"
                      weight="regular"
                    >
                      Annuler
                    </Text>
                  </FlexWrapper>
                )}
                <ModalFooterInput
                  ref={inputRef}
                  id="Input"
                  aria-describedby="reply-announce"
                  aria-label="Laisser un commentaire"
                  placeholder="Laisser un commentaire"
                  buttonContent={
                    <>
                      <LargeArrowIconNext direction="up" />
                      <span className="k-u-a11y-visuallyHidden">
                        Send comment
                      </span>
                    </>
                  }
                />
              </div>
            </Modal.Actions>
          </>
        )}
      </Modal>
    </div>
  )
}
