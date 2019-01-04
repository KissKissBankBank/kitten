import { configure } from '@storybook/react'
import { addDecorator } from '@storybook/react'
import GridDecorator from './decorators/grid'
import './stylesheets/app-kitten.scss'

// automatically import all files ending in *.stories.js
function loadStories() {
  const req = require.context('../assets/javascripts', true, /.stories.js$/)
  req.keys().forEach(filename => req(filename))
}

addDecorator(GridDecorator)
configure(loadStories, module)
