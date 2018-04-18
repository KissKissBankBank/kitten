import { configure } from '@storybook/react'
import './decorators/grid'
import './stylesheets/app-kitten.scss'

// automatically import all files ending in *.stories.js
const req = require.context('../assets/javascripts', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
