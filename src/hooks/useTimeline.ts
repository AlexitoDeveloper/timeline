import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '../store/'
import { removePost, setPosts, setIsLoading } from '../store/posts/slice'
import { getPosts } from '../services/posts'

const useTimeline = () => {
  const { posts, isLoading } = useSelector((state: RootState) => state.postsState)
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

  return { posts, handlerRemovePost, isLoading }
}

export default useTimeline
