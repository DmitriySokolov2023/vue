export type Todo = {
	userId: number
	id: number
	title: string
	completed: boolean
}
export type Filter = 'all' | 'active' | 'completed'
