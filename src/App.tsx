import { useEffect, useState } from 'react'
import './App.scss'
import { getPosts } from './services/posts'
import { type Post } from './interfaces/Post'

const App = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts()
      setPosts(response)
    }

    fetchPosts()
  }, [])

  return (
    <main>
      <ul>
        {posts?.map(post => (<li key={post.id}>{post.title}</li>))}
      </ul>
    </main>
  )
}

export default App
