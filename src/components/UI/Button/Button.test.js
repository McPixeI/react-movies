
import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Button } from './Button'

const clickEvent = jest.fn()

const Component = (props) =>
  <Button
    {...props}
    id='test'
  >
    Test text
  </Button>

describe('Button', () => {
  test('Button | Renders without errors', async () => {
    render(Component)
  })
  test('Button | Onclick event is working', async () => {
    const btnElement = screen.getByRole('button', { name: 'Test text' })
    fireEvent.click(btnElement)
    await waitFor(() => expect(clickEvent).toHaveBeenCalled())
  })
})
