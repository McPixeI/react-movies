import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Toggle } from './Toggle'

const setup = () => {
  const utils = render(<Toggle name='toggle' data-testid='testToggle' />)
  const toggle = screen.getByTestId('testToggle')
  return {
    toggle,
    ...utils
  }
}

describe('Toggle', () => {
  it('Toggle | Should render without crashing', () => {
    const { toggle } = setup()
    expect(toggle).toBeInTheDocument()
  })

  it('Toggle | Should be checked and unchecked on user click', () => {
    const { toggle } = setup()
    const toggleInput = screen.getByRole('checkbox')
    expect(toggleInput).toHaveProperty('checked', false)
    userEvent.click(toggle)
    expect(toggleInput).toHaveProperty('checked', true)
    userEvent.click(toggle)
    expect(toggleInput).toHaveProperty('checked', false)
  })
})
