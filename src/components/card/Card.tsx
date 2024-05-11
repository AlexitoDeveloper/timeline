import { type Post } from '../../interfaces/Post'
import './Card.scss'
import Avatar from '../../assets/images/avatar.png'
import { type MenuProps } from 'antd'
import { Dropdown } from 'antd'
import ThreeDotsIcon from '../../assets/icons/ThreeDotsIcon'

interface Props {
  post: Post
}

const Card = ({ post }: Props) => {
  const items: MenuProps['items'] = [
    { label: 'Edit', key: crypto.randomUUID(), onClick: () => console.log('Edit') },
    { label: 'Delete', key: crypto.randomUUID(), onClick: () => console.log('Delete') }
  ]

  return (
		<article className='card'>
			<header className='card__header'>
				<img className='card__header--avatar' src={Avatar} alt='avatar' />
				<span className='card__header--user'>@{`User_${post.userId}`}</span>
				<span className='card__header--title'>{post.title}</span>
				<Dropdown menu={{ items }} trigger={['click']} placement='bottomRight' className='card__header--dropdown'>
          <i><ThreeDotsIcon color='white' /></i>
        </Dropdown>
			</header>
			<div className='card__body'>
				<p>{post.body}</p>
			</div>
    </article>
  )
}

export default Card
