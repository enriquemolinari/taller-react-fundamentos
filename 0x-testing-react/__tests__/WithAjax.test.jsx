/* global expect */

import { test, afterEach, beforeAll, afterAll } from 'vitest'
import '@testing-library/jest-dom'
import { render, screen, cleanup, within } from '@testing-library/react'
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'
import WithAjax from '../src/components/WithAjax.jsx'

const server = setupServer(
    http.get('https://jsonplaceholder.typicode.com/posts', () => {
        return HttpResponse.json([
            {
                userId: 7,
                id: 42,
                title: 'Testing title',
                body: 'Testing body',
            },
            {
                userId: 8,
                id: 43,
                title: 'Another testing title',
                body: 'Another testing body',
            },
        ])
    })
)

beforeAll(() => {
    server.listen({ onUnhandledRequest: 'error' })
})

afterAll(() => {
    server.close()
})

afterEach(() => {
    cleanup()
})

test('renders fetched post data in the table after loading', async () => {
    render(<WithAjax />)

    const table = await screen.findByRole('table')
    expect(table).toBeVisible()

    const row = await screen.findByRole('row', { name: '7 42 Testing title Testing body' })
    expect(within(row).getByRole('cell', { name: '7' })).toBeVisible()
    expect(within(row).getByRole('cell', { name: '42' })).toBeVisible()
    expect(within(row).getByRole('cell', { name: 'Testing title' })).toBeVisible()
    expect(within(row).getByRole('cell', { name: 'Testing body' })).toBeVisible()

    const row2 = await screen.findByRole('row', { name: '8 43 Another testing title Another testing body' })
    expect(within(row2).getByRole('cell', { name: '8' })).toBeVisible()
    expect(within(row2).getByRole('cell', { name: '43' })).toBeVisible()
    expect(within(row2).getByRole('cell', { name: 'Another testing title' })).toBeVisible()
    expect(within(row2).getByRole('cell', { name: 'Another testing body' })).toBeVisible()
})
