import React from 'react'
import { render, screen } from '@testing-library/react'
import { Card, CardBody, CardHeading } from './Card'

describe('Card', () => {
  it('Card | Should render without errors', () => {
    render(<Card>Im a card</Card>)
    expect(screen.getByText(/Im a card/i)
    ).toBeVisible()
  })

  it('Card | Should render properly with composition', () => {
    render(
      <Card>
        <CardHeading />
        <CardBody>Im a card</CardBody>
      </Card>
    )
    expect(screen.getByText(/Im a card/i)
    ).toBeVisible()
  })

  it('Card | Should have an anchor when link prop is passed', () => {
    const link = 'https://samutorres.com/'
    render(<Card link={link}>Im a card</Card>)
    const card = screen.getByText(/Im a card/i)
    expect(card).toHaveAttribute('href', link)
  })
})
