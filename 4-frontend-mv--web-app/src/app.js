import React from 'react'
import ReactDOM from 'react-dom'

import {Router, browserHistory, match} from 'react-router'

import routes from './routes'

import './styles.scss'

const matchOptions = {routes, history: browserHistory}
const onMatch = (err, redirectLocation, renderProps) => {
  if (err) {
    console.error(err)
  }

  ReactDOM.render(<Router {...renderProps} />, document.getElementById('app'))
}

match(matchOptions, onMatch)
