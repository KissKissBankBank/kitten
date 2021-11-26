import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Container,
  Comment,
  CommentForm,
  Grid,
  GridCol,
  Marger,
  Text,
  stepToRem,
  mq,
  pxToRem,
} from 'kitten'

export default {
  title: 'pages/Comments',
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
            <Text as="button" weight="regular" size="micro" className="k-u-reset-button k-u-link k-u-link-font1">
              Reply
            </Text>
            <Text as="button" weight="regular" size="micro" className="k-u-reset-button k-u-link k-u-link-font1">
              Delete
            </Text>
          </>
        )
      }
    />
  )
}

export const Default = () => (
  <Container className="k-u-margin-vertical-quadruple">
    <Grid>
      <GridCol col-m="8" offset-m="2">
        <CommentForm
          avatarImgProps={{
            src: '/kitten.jpg',
            alt: '',
          }}
          placeholder="Laisser un commentaire sur le projet"
          buttonText="Commenter"
          className="k-u-margin-bottom-triple"
          aria-label="Laisser un commentaire sur le projet"
        />

        <StyledFlex>
          <div>
            <ProxyComment
              avatarImgProps={{
                src: '/kitten.jpg',
                alt: '',
              }}
              ownerName="Axel-Blablabla"
              commentDate="10 heures"
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
          >
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod.
          </ProxyComment>
        </StyledFlex>
      </GridCol>
    </Grid>
  </Container>
)

export const AsAdmin = () => (
  <Container className="k-u-margin-vertical-quadruple">
    <Grid>
      <GridCol col-m="8" offset-m="2">
        <CommentForm
          avatarImgProps={{
            src: '/kitten.jpg',
            alt: '',
          }}
          placeholder="Laisser un commentaire sur le projet"
          buttonText="Commenter"
          className="k-u-margin-bottom-triple"
          aria-label="Laisser un commentaire sur le projet"
        />

        <StyledFlex>
          <ProxyComment
            avatarImgProps={{
              src: '/kitten.jpg',
              alt: '',
            }}
            ownerName="Axel-Blablabla"
            commentDate="10 heures"
            isAdmin
          >
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </ProxyComment>
          <CommentForm
            avatarImgProps={{
              src: '/kitten.jpg',
              alt: '',
            }}
            placeholder="Laisser un commentaire sur le projet"
            buttonText="Modifier"
            defaultValue="Thank you!!!"
            aria-label="Laisser un commentaire sur le projet"
          />
          <ProxyComment
            avatarImgProps={{
              src: '/kitten.jpg',
              alt: '',
            }}
            ownerName="Claude-Contributor"
            commentDate="20 jours"
            isAdmin
          >
            Cras justo odio, dapibus ac facilisis in! !!!
          </ProxyComment>
          <CommentForm
            avatarImgProps={{
              src: '/kitten.jpg',
              alt: '',
            }}
            placeholder="Laisser un commentaire sur le projet"
            buttonText="Commenter"
            aria-label="Laisser un commentaire sur le projet"
          />
          <ProxyComment
            avatarImgProps={{
              src: '/kitten.jpg',
              alt: '',
            }}
            ownerName="Mimi123"
            commentDate="3 mois"
            isAdmin
          >
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod.
          </ProxyComment>
          <CommentForm
            avatarImgProps={{
              src: '/kitten.jpg',
              alt: '',
            }}
            placeholder="Laisser un commentaire sur le projet"
            buttonText="Commenter"
            aria-label="Laisser un commentaire sur le projet"
          />
        </StyledFlex>
      </GridCol>
    </Grid>
  </Container>
)
