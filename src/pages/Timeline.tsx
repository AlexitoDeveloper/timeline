import { useState, useEffect } from 'react'
import Card from '../components/card/Card'
import { type Post } from '../interfaces/Post'
import { getPosts } from '../services/posts'
import './Timeline.scss'

const Timeline = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts()
      setPosts(response)
    }

    fetchPosts()
  }, [])

  return (
    <section>
      {posts?.map(post => (<Card post={post} key={post.id} />))}
    </section>
  )
}

export default Timeline
