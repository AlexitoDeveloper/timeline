import Card from '../components/card/Card'
import './Timeline.scss'
import useTimeline from '../hooks/useTimeline'

const Timeline = () => {
  const { posts, handlerRemovePost, isLoading } = useTimeline()

  const renderLoader = () => {
    return <p>Loading...</p>
  }

  const renderPosts = () => {
    if (posts.length === 0) return <p>No posts published</p>

    return posts.map(post => <Card key={post.id} post={post} handlerRemovePost={() => handlerRemovePost(post.id)} />)
  }

  return (
    <section>
      {isLoading && renderLoader()}
			{!isLoading && renderPosts()}
    </section>
  )
}

export default Timeline
