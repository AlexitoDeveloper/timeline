import Card from '../components/card/Card'
import './Timeline.scss'
import useTimeline from '../hooks/useTimeline'
import { type Post } from '../interfaces/Post'
import EditCard from '../components/edit-card/EditCard'
import SkeletonCard from '../components/skeleton-card/SkeletonCard'

const Timeline = () => {
  const { posts, handlerRemovePost, isLoading, selectedPost, handlerEditPost, handlerSetSelectedPost } = useTimeline()

  const renderLoader = () => {
    return Array.from({ length: 5 }).map((_, idx) => <SkeletonCard key={idx} />)
  }

  const renderPosts = () => {
    if (posts.length === 0) return <p>No posts published</p>

    return posts.map(post => selectedPost?.id !== post.id
      ? <Card key={post.id} post={post} handlerRemovePost={() => handlerRemovePost(post.id)} openEditPost={() => handlerSetSelectedPost(post)} />
      : <EditCard key={post.id} post={post} handlerEditPost={(post: Post) => handlerEditPost(post)} closeEditPost={() => handlerSetSelectedPost(null)} />
    )
  }

  return (
    <section data-testid="timeline">
      {isLoading && renderLoader()}
			{!isLoading && renderPosts()}
    </section>
  )
}

export default Timeline
