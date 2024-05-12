import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import SkeletonCard from './SkeletonCard'

describe('Skeleton', () => {
  test('should render', () => {
    render(<SkeletonCard />)
    expect(screen.getByRole('article')).toBeDefined()
  })
})
