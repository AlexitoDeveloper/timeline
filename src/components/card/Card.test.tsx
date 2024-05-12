import { beforeAll, describe, expect, test, vi } from 'vitest'
import Card from './Card'
import { fireEvent, render, screen } from '@testing-library/react'
import { type Post } from '../../interfaces/Post'

const mockProps = {
  post: { id: '1', title: 'Title', body: 'Body', userId: 1 } satisfies Post,
  handlerRemovePost: vi.fn(),
  openEditPost: vi.fn()
}

describe('Card', () => {
  beforeAll(() => {
    render(<Card {...mockProps} />)
  })

  test('should render all info', () => {
    expect(screen.queryByText(`@User_${mockProps.post.userId}:`)).toBeDefined()
    expect(screen.getByText(mockProps.post.title)).toBeDefined()
    expect(screen.getByText(mockProps.post.body)).toBeDefined()
  })

  test('remove post called correctly', () => {
    const dropdownButton = screen.getByTestId('dropdown-button')
    fireEvent.click(dropdownButton)

    const deleteButton = screen.getByText('Delete')
    expect(deleteButton).toBeDefined()

    fireEvent.click(deleteButton)
    expect(mockProps.handlerRemovePost).toHaveBeenCalledTimes(1)
  })

  test('edit post called correctly', () => {
    const dropdownButton = screen.getByTestId('dropdown-button')
    fireEvent.click(dropdownButton)

    const editButton = screen.getByText('Edit')
    expect(editButton).toBeDefined()

    fireEvent.click(editButton)
    expect(mockProps.openEditPost).toHaveBeenCalledTimes(1)
  })
})
