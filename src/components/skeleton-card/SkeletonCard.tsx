import { Skeleton } from 'antd'
import './SkeletonCard.scss'

const SkeletonCard = () => {
  return (
		<article className="skeleton-card">
			<Skeleton avatar paragraph={{ rows: 3 }} active />
		</article>
  )
}

export default SkeletonCard
