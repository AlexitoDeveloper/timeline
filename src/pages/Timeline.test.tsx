import { render, screen } from '@testing-library/react'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import Timeline from './Timeline'
import { type Post } from '../interfaces/Post'

const mockPosts: Post[] = [
  { id: '1', title: 'Title 1', body: 'Body 1', userId: 1 },
  { id: '2', title: 'Title 2', body: 'Body 2', userId: 2 },
  { id: '3', title: 'Title 3', body: 'Body 3', userId: 3 }
]

vi.mock('../hooks/useTimeline', () => ({
  default: () => ({
    posts: mockPosts,
    handlerRemovePost: vi.fn(),
    handlerSetSelectedPost: vi.fn(),
    selectedPost: null,
    handlerEditPost: vi.fn(),
    isLoading: false
  })
}))

describe('Timeline', () => {
  beforeAll(() => {
    render(<Timeline />)
  })

  test('should render', () => {
    expect(screen.getByTestId('timeline')).toBeDefined()
  })

  test('renders all posts', () => {
    expect(screen.getByTestId('timeline')).toBeDefined()

    mockPosts.forEach(post => {
      expect(screen.getByText(post.title)).toBeDefined()
      expect(screen.getByText(post.body)).toBeDefined()
    })
  })
})
