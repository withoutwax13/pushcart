import { createStore, applyMiddleware } from 'redux'
import reducers from './Reducers'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage
}
  
const persistedReducer = persistReducer(persistConfig, reducers)
  
  
let store = createStore(persistedReducer, applyMiddleware(thunk))

export default store