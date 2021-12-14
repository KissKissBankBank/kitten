import React from 'react'
import { 
  FacebookIconNext,
  LinkedinIconNext,
  TwitterIconNext,
  InstagramIconNext,
  YoutubeIcon,
  Button,
} from 'kitten'

export const SocialButton = props => {
  return (
    <div className="k-Footer__socialButton" { ...props }>
      <Button fit="icon" modifier="beryllium" rounded>
        <FacebookIconNext />
      </Button>
      <Button fit="icon" modifier="beryllium" rounded>
        <LinkedinIconNext />
      </Button>
      <Button fit="icon" modifier="beryllium" rounded>
        <TwitterIconNext />
      </Button>
      <Button fit="icon" modifier="beryllium" rounded>
        <InstagramIconNext />
      </Button>
      <Button fit="icon" modifier="beryllium" rounded>
        <YoutubeIcon width="23" height="16" />
      </Button>
    </div>
  )
}
