import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '../store/'
import { removePost, setPosts, setIsLoading, setSelectedPost, editPost } from '../store/posts/slice'
import { getPosts } from '../services/posts'
import { type Post } from '../interfaces/Post'

const useTimeline = () => {
  const { posts, isLoading, selectedPost } = useSelector((state: RootState) => state.postsState)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts()
      dispatch(setPosts(response))
      dispatch(setIsLoading(false))
    }

    fetchPosts()
  }, [])

  const handlerRemovePost = (id: string) => {
    dispatch(removePost(id))
  }

  const handlerEditPost = (post: Post) => {
    dispatch(editPost(post))
  }

  const handlerSetSelectedPost = (post: Post | null) => {
    dispatch(setSelectedPost(post))
  }

  return { posts, handlerRemovePost, isLoading, handlerEditPost, handlerSetSelectedPost, selectedPost }
}

export default useTimeline
