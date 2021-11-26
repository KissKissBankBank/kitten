import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Button,
  Container,
  Comment,
  CommentForm,
  Grid,
  GridCol,
  Marger,
  Text,
  stepToRem,
  CheckedCircleIcon,
  mq,
  pxToRem,
  ModalNext as Modal,
  ModalFooterInput,
  LargeArrowIconNext,
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

const ProxyComment = ({ isAdmin = false, ...args }) => {
  const [hasLiked, setHasLiked] = useState(false)

  const handleReplyClick = (event) => {
    document.getElementById('Input').focus()
    event.target.closest('.k-Comment').scrollIntoView({ behavior: 'smooth', block: 'center' })

    if (args.isSecondary) {
      console.log(event.target.parentNode.previousSibling.innerText)
      document.getElementById('Input').value = event.target.parentNode.previousSibling.innerText
    }
  }

  return (
    <Comment
      {...args}
      headerActions={
        <Comment.LikeButton
          hasLiked={hasLiked}
          children={hasLiked ? '101' : '100'}
          onClick={() => setHasLiked(!hasLiked)}
          accessibilityLabel={hasLiked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        />
      }
      footer={
        isAdmin && (
          <>
            <Text as="button" weight="regular" size="micro" className="k-u-reset-button k-u-link k-u-link-font1" onClick={handleReplyClick}>
              {args.isSecondary ? 'Modifier' : 'Répondre'}
            </Text>
            <Text as="button" weight="regular" size="micro" className="k-u-reset-button k-u-link k-u-link-font1">
              Supprimer
            </Text>
          </>
        )
      }
    />
  )
}

const CommentsList = ({isAdmin = false}) => (
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
      >
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
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
    >
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod.
    </ProxyComment>
  </StyledFlex>
)

export const Default = () => (
  <div className="story-Container k-u-align-center">
    <Modal
    isOpen
      trigger={
        <Button modifier="beryllium" size="huge">
          Comments Modal
        </Button>
      }
    >
      {() => <>
        <Modal.Title className="k-u-margin-bottom-double">
          Comments
        </Modal.Title>
        <Modal.Block className="k-u-margin-bottom-double">
          <CommentsList />
        </Modal.Block>
        <Modal.Actions
          sticky
          fullSize
        >
          <ModalFooterInput
            id="Input"
            placeholder="Praesent commodo cursus magna, vel scelerisque."
            buttonContent={<>
              <LongArrowIcon direction="up" />
              <span className="k-u-a11y-visuallyHidden">
                Send comment
              </span>
            </>}
          />
        </Modal.Actions>
      </>}
    </Modal>
  </div>
)

export const AsAdmin = () => (
  <div className="story-Container k-u-align-center">
    <Modal
    isOpen
      trigger={
        <Button modifier="beryllium" size="huge">
          Comments Modal
        </Button>
      }
    >
      {() => <>
        <Modal.Title className="k-u-margin-bottom-double">
          Comments
        </Modal.Title>
        <Modal.Block className="k-u-margin-bottom-double">
          <CommentsList isAdmin />
        </Modal.Block>
        <Modal.Actions
          sticky
          fullSize
        >
          <ModalFooterInput
            id="Input"
            placeholder="Praesent commodo cursus magna, vel scelerisque."
            buttonContent={<>
              <LargeArrowIconNext direction="up" />
              <span className="k-u-a11y-visuallyHidden">
                Send comment
              </span>
            </>}
          />
        </Modal.Actions>
      </>}
    </Modal>
  </div>
)
