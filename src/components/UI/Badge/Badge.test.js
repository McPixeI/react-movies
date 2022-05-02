import React from 'react'
import { render, screen } from '@testing-library/react'
import { Badge } from './Badge'

describe('Badge', () => {
  it('Badge | Should render without errors', () => {
    render(<Badge>hello</Badge>)
    expect(screen.getByText(/hello/i)
    ).toBeVisible()
  })
})
