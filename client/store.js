import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/index'
import logger from 'redux-logger'
import reduxThunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(logger, reduxThunk)) )

if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

export default store
