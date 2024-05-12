import { Input } from 'antd'
import AvatarImage from '../../assets/images/avatar.png'
import { type Post } from '../../interfaces/Post'
import TextArea from 'antd/es/input/TextArea'
import './EditCard.scss'
import { useState } from 'react'

interface Props {
  post: Post
  closeEditPost: () => void
  handlerEditPost: (post: Post) => void
}

const EditCard = ({ post, handlerEditPost, closeEditPost }: Props) => {
  const [title, setTitle] = useState(post.title)
  const [body, setBody] = useState(post.body)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    handlerEditPost({ ...post, title, body })
    closeEditPost()
  }

  const handleCancel = () => {
    setTitle(post.title)
    setBody(post.body)
    closeEditPost()
  }

  return (
    <form onSubmit={handleSubmit}>
			<article className='edit-card'>
				<header className='edit-card__header'>
					<img className='edit-card__header--avatar' src={AvatarImage} alt="Avatar" />
					<span className='edit-card__header--user'>@{`User_${post.userId}:`}</span>
					<Input name='title' placeholder='Write a title...' value={title} onChange={(e) => setTitle(e.target.value)} required />
				</header>
				<div className='edit-card__body'>
					<TextArea name='body' value={body} placeholder='Write a body content...' onChange={(e) => setBody(e.target.value)} required />
				</div>
				<div className='edit-card__footer'>
					<button type='button' onClick={handleCancel}>Cancel</button>
					<button type='submit'>Save</button>
				</div>
			</article>
		</form>
  )
}

export default EditCard
