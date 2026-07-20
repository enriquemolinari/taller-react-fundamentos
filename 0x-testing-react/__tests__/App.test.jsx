import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect, afterEach } from 'vitest'
import App from '../src/App'

afterEach(() => {
  cleanup()
})

test('displays the title with instruction to increment the counter on initial render', () => {
  render(<App />)

  expect(
    screen.getByRole('heading', {
      level: 3,
      name: /click en el botón para incrementar el contador/i,
    }),
  ).toBeTruthy()
})

test('displays the counter button starting at zero', () => {
  render(<App />)

  expect(screen.getByRole('button', { name: /count is 0/i })).toBeTruthy()
})

test('increments the counter by one when user clicks the count button', async () => {
  const user = userEvent.setup()
  render(<App />)

  const countButton = screen.getByRole('button', { name: /count is 0/i })
  await user.click(countButton)

  expect(screen.getByRole('button', { name: /count is 1/i })).toBeTruthy()
})

test('increments the counter multiple times when user clicks the count button repeatedly', async () => {
  const user = userEvent.setup()
  render(<App />)

  const countButton = screen.getByRole('button', { name: /count is 0/i })
  await user.click(countButton)
  await user.click(countButton)
  await user.click(countButton)

  expect(screen.getByRole('button', { name: /count is 3/i })).toBeTruthy()
})

test('resets the counter to zero when user clicks the reset button', async () => {
  const user = userEvent.setup()
  render(<App />)

  const countButton = screen.getByRole('button', { name: /count is 0/i })
  const resetButton = screen.getByRole('button', { name: /reset/i })

  await user.click(countButton)
  await user.click(countButton)
  await user.click(resetButton)

  expect(screen.getByRole('button', { name: /count is 0/i })).toBeTruthy()
})

test('keeps the counter at zero when user clicks reset without incrementing first', async () => {
  const user = userEvent.setup()
  render(<App />)

  const resetButton = screen.getByRole('button', { name: /reset/i })
  await user.click(resetButton)

  expect(screen.getByRole('button', { name: /count is 0/i })).toBeTruthy()
})
