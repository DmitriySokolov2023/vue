import axios from 'axios'
import type { CardInterface } from '../../types/card'

export interface ApiResponse {
	items: CardInterface[]
	total?: number
	page?: number
}

export interface ApiParams {
	title?: string
	sortBy?: string
	searchQuery?: string
}

const API = 'https://604781a0efa572c1.mokky.dev'

export const getSneakers = async (path: string, params?: ApiParams) => {
	try {
		const { data } = await axios.get<ApiResponse>(`${API}/${path}`, {
			params: {
				title: `*${params?.searchQuery || ''}*`,
				sortBy: params?.sortBy || null,
			},
		})
		if (data && Array.isArray(data.items)) {
			return data.items
		} else if (Array.isArray(data)) {
			return data
		}

		console.warn('API вернул неожиданную структуру данных:', data)
		return []
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error('Ошибка API:', error.response?.data || error.message)
		} else {
			console.error('Неизвестная ошибка:', error)
		}

		throw error
	}
}
