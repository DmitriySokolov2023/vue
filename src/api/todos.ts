import type { Todo } from '../types/todo'

const API = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = async (params?: {
	userId?: number
	limit?: number
}) => {
	const userId = params?.userId ?? 1
	const limit = params?.limit ?? 15

	const res = await fetch(`${API}?userId=${userId}&_limit=${limit}`)

	if (!res.ok) throw new Error(`HTTP ${res.status}`)

	return (await res.json()) as Todo[]
}
