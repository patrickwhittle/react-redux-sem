import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers/combined'
import DocReady from 'es6-docready'
import App from '../containers/App'
import '../styles/bootstrap.min.css!'
import '../styles/rp.css!'

const store = applyMiddleware(thunk)(createStore)(reducers);

DocReady(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
})

