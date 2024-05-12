import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import EditCard from './EditCard'
import { type Post } from '../../interfaces/Post'

const mockProps = {
  post: { id: '1', title: 'Title', body: 'Body', userId: 1 } satisfies Post,
  handlerEditPost: vi.fn(),
  closeEditPost: vi.fn()
}

describe('EditCard', () => {
  beforeAll(() => {
    render(<EditCard {...mockProps} />)
  })

  test('should render all info', () => {
    expect(screen.queryByText(`@User_${mockProps.post.userId}:`)).toBeDefined()

    const inputElement = screen.getByDisplayValue(mockProps.post.title)
    const textAreaElement = screen.getByDisplayValue(mockProps.post.body)
    const buttonElement = screen.getByText('Save')

    expect(inputElement).toBeDefined()
    expect(textAreaElement).toBeDefined()
    expect(buttonElement).toBeDefined()
  })

  test('cancel card info', async () => {
    const inputElement = screen.getByDisplayValue(mockProps.post.title) as HTMLInputElement
    fireEvent.change(inputElement, { target: { value: 'New title' } })
    expect(inputElement.value).toBe('New title')

    const textAreaElement = screen.getByDisplayValue(mockProps.post.body) as HTMLTextAreaElement
    fireEvent.change(textAreaElement, { target: { value: 'New body' } })
    expect(textAreaElement.value).toBe('New body')

    fireEvent.click(screen.getByText('Cancel'))

    await waitFor(() => {
      expect(screen.getByDisplayValue(mockProps.post.title)).toBeDefined()
      expect(screen.getByDisplayValue(mockProps.post.body)).toBeDefined()
    })
  })

  test('update card info', () => {
    const inputElement = screen.getByDisplayValue(mockProps.post.title) as HTMLInputElement
    fireEvent.change(inputElement, { target: { value: 'New title' } })
    expect(inputElement.value).toBe('New title')

    const textAreaElement = screen.getByDisplayValue(mockProps.post.body) as HTMLTextAreaElement
    fireEvent.change(textAreaElement, { target: { value: 'New body' } })
    expect(textAreaElement.value).toBe('New body')

    fireEvent.click(screen.getByText('Save'))
    waitFor(() => {
      expect(screen.getByText('New title')).toBeDefined()
      expect(screen.getByText('New body')).toBeDefined()
    })
  })
})
