import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Post } from '../../interfaces/Post'

interface PostsState {
  posts: Post[]
  isLoading: boolean
  selectedPost: Post | null
}

const initialState: PostsState = {
  posts: [],
  isLoading: true,
  selectedPost: null
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
    },
    editPost: (state, action: PayloadAction<Post>) => {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.id) return action.payload
        return post
      })
    },
    setSelectedPost: (state, action: PayloadAction<Post | null>) => {
      state.selectedPost = action.payload
    }
  }
})

export default postsSlice.reducer
export const { setPosts, removePost, setIsLoading, editPost, setSelectedPost } = postsSlice.actions
