import React from 'react'
import Layout from './components/layout'
import Toolbar from './components/toolbar'
import Actions from './components/actions'
import Button from './components/button'
import TagList from './components/tag-list'
import {
  BoldIcon,
  ItalicIcon,
  BlockquoteIcon,
  ListIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  ImageIcon,
  VideoIcon,
  LinkIcon,
  ButtonIcon
} from 'kitten'

export default {
  title: 'pages/Editor',
}

export const Example = () => {
  return (
    <Layout>
      <Toolbar>
        <Actions>
          <TagList />
        </Actions>

        <Actions>
          <Button title="Mettre le texte en gras">
            <BoldIcon />
          </Button>

          <Button title="Mettre le texte en italique">
            <ItalicIcon />
          </Button>

          <Button title="Ajouter une citation">
            <BlockquoteIcon />
          </Button>
        </Actions>

        <Actions>
          <Button title="Ajouter une liste">
            <ListIcon />
          </Button>
        </Actions>

        <Actions>
          <Button disabled title="Aligner le texte à gauche">
            <AlignLeftIcon />
          </Button>

          <Button title="Aligner le texte au centre">
            <AlignCenterIcon />
          </Button>

          <Button className="is-selected" title="Aligner le texte à droite">
            <AlignRightIcon />
          </Button>
        </Actions>

        <Actions>
          <Button title="Ajouter une image">
            <ImageIcon />
          </Button>

          <Button title="Ajouter une vidéo">
            <VideoIcon />
          </Button>

          <Button title="Ajouter un lien">
            <LinkIcon />
          </Button>
        </Actions>

        <Actions>
          <Button style={{ width: 80 }} title="Ajouter un bouton">
            <ButtonIcon />
          </Button>
        </Actions>
      </Toolbar>
    </Layout>
  )
}
