import Card from '../components/card/Card'
import './Timeline.scss'
import useTimeline from '../hooks/useTimeline'

const Timeline = () => {
  const { posts, handlerRemovePost } = useTimeline()
  return (
    <section>
      {posts?.map(post => (<Card key={post.id} post={post} handlerRemovePost={() => handlerRemovePost(post.id)} />))}
    </section>
  )
}

export default Timeline
