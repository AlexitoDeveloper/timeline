import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Post } from '../../interfaces/Post'

interface PostsState {
  posts: Post[]
  isLoading: boolean
}

const initialState: PostsState = {
  posts: [],
  isLoading: true
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload
    },
    removePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter(post => post.id !== action.payload)
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  }
})

export default postsSlice.reducer
export const { setPosts, removePost, setIsLoading } = postsSlice.actions
