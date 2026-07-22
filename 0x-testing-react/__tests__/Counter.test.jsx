/* global expect */

import { test, afterEach } from 'vitest'
import '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../src/components/Counter.jsx'

afterEach(() => {
  cleanup()
})

test('displays the counter button starting at zero', () => {
  render(<Counter />)

  const countButton = screen.getByRole('button', { name: 'increment-button' })

  expect(countButton).toHaveTextContent('Count is 0')
})

test('increments the counter multiple times when user clicks the count button', async () => {
  const user = userEvent.setup()
  render(<Counter />)

  const countButton = screen.getByRole('button', { name: 'increment-button' })

  await user.click(countButton)
  await user.click(countButton)
  await user.click(countButton)

  expect(countButton).toHaveTextContent('Count is 3')
})

test('resets the counter to zero when user clicks the reset button', async () => {
  const user = userEvent.setup()
  render(<Counter />)

  const countButton = screen.getByRole('button', { name: 'increment-button' })
  const resetButton = screen.getByRole('button', { name: 'reset-button' })

  await user.click(countButton)
  await user.click(countButton)

  expect(countButton).toHaveTextContent('Count is 2')

  await user.click(resetButton)

  expect(countButton).toHaveTextContent('Count is 0')
})

test('keeps the counter at zero when user clicks reset without incrementing first', async () => {
  const user = userEvent.setup()
  render(<Counter />)

  const resetButton = screen.getByRole('button', { name: 'reset-button' })

  await user.click(resetButton)

  const countButton = screen.getByRole('button', { name: 'increment-button' })
  expect(countButton).toHaveTextContent('Count is 0')
})
