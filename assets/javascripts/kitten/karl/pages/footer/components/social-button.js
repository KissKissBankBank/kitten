import React from 'react'
import { 
  FacebookIconNext,
  LinkedinIconNext,
  TwitterIconNext,
  InstagramIconNext,
  YoutubeIcon,
  Button,
} from 'kitten'
import classNames from 'classnames'

export const SocialButton = ({ className, ...props }) => (
  <div className={classNames(
    'k-Footer__socialButton',
    className,
  )}
    { ...props }
  >
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
