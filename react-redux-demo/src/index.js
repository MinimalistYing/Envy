import React from 'react'
import { render } from 'react-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

import { Provider } from './../../react-redux'
import { createStore } from './../../redux'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
