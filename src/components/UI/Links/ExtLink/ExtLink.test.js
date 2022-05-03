import { render, screen } from '@testing-library/react'
import { ExtLink } from './ExtLink'

const setup = () => {
  const utils = render(<ExtLink label='I am a link' to='https://www.samutorres.com' />)
  const extLink = screen.getByRole('link', {
    name: /I am a link/i
  })
  return {
    extLink,
    ...utils
  }
}

describe('ExtLink', () => {
  it('Link | Should render without crashing', () => {
    const { extLink } = setup()
    expect(extLink).toBeInTheDocument()
  })

  it('ExtLink | Should have an anchor link', () => {
    const { extLink } = setup()
    expect(extLink).toHaveAttribute('href', 'https://www.samutorres.com')
  })

  it('ExtLink | Should have an attr rel with noopener noreferrer values', () => {
    const { extLink } = setup()
    expect(extLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
