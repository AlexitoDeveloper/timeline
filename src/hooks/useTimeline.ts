import { useState, useEffect } from 'react'
import { type Post } from '../interfaces/Post'
import { getPosts } from '../services/posts'

const useTimeline = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts()
      setPosts(response)
    }

    fetchPosts()
  }, [])

  const handlerRemovePost = (id: string) => {
    const updatedPosts = posts?.filter(post => post.id !== id)
    setPosts(updatedPosts)
  }

  return { posts, handlerRemovePost }
}

export default useTimeline
