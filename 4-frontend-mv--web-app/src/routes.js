import React from 'react'
import {Route, Router, IndexRoute} from 'react-router'
import loadPage from '@s-ui/react-initial-props/lib/loadPage'

import Root from './Root'
// import DetailPage from './pages/Detail'

import contextFactory from './contextFactory'

const LoadHomePage = loadPage(contextFactory, () => import('./pages/Home'))

const loadDetailPage = loadPage(contextFactory, () => import('./pages/Detail'))

export default (
  <Router>
    <Route component={Root}>
      <Route path="/">
        <IndexRoute getComponent={LoadHomePage} />
        <Route path="detail/:id" getComponent={loadDetailPage} />
      </Route>
    </Route>
  </Router>
)
