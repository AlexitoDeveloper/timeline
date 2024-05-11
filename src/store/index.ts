import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './posts/slice'

export const store = configureStore({
  reducer: {
    postsState: postsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
