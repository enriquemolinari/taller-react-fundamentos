import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import App from '../src/App'

test('muestra el título con la instrucción para incrementar el contador', () => {
  render(<App />)

  expect(
    screen.getByRole('heading', {
      level: 3,
      name: /click en el botón para incrementar el contador/i,
    }),
  ).toBeTruthy()
})

test('incrementa el contador cuando el usuario hace click en Count is', async () => {
  const user = userEvent.setup()
  render(<App />)

  const countButtons = screen.getAllByRole('button', { name: /count is 0/i })
  const countButton = countButtons[0]

  await user.click(countButton)

  expect(
    screen.getByRole('button', {
      name: /count is 1/i,
    }),
  ).toBeTruthy()
})

test('reinicia el contador a cero cuando el usuario hace click en Reset', async () => {
  const user = userEvent.setup()
  render(<App />)

  const countButtons = screen.getAllByRole('button', { name: /count is 0/i })
  const countButton = countButtons[0]
  const resetButtons = screen.getAllByRole('button', { name: /reset/i })
  const resetButton = resetButtons[0]

  await user.click(countButton)
  await user.click(countButton)
  await user.click(resetButton)

  const countIsZero = screen.getAllByRole('button', {
    name: /count is 0/i,
  })
  expect(countIsZero.length).toBeGreaterThan(0)
})
