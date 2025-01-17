import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

import auth from './auth-slice/auth'

// Redux Persist configuration for specific slices
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

// Combine all the reducers
const rootReducer = combineReducers({
  auth: auth,
})

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Create the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE','persist/PURGE'] // Ignore redux-persist actions
      }
    })
})

// Setup persistor
export const persistor = persistStore(store)
export default store
