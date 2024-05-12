import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Navbar from './Navbar'

describe('Navbar', () => {
  test('should render', () => {
    render(<Navbar />)
    expect(screen.getByText('Idrica')).toBeDefined()
    expect(screen.getByText('Posts')).toBeDefined()
    expect(screen.getByText('About us')).toBeDefined()
  })
})
