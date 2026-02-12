// stores/counter.ts
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
	// State (состояние)
	const title = ref<string>('Меня можно получить в любом из компонентов')
	const count = ref<number>(0)
	const lastUpdated = ref<string>('')

	// Getters (вычисляемые значения)
	const doubleCount = computed(() => count.value * 2)
	const formattedTitle = computed(
		() => `${title.value} | Count: ${count.value}`,
	)

	// Actions (действия/методы)
	function increment(amount: number = 1) {
		count.value += amount
		updateTimestamp()
	}

	function decrement() {
		if (count.value > 0) {
			count.value--
			updateTimestamp()
		}
	}

	function reset() {
		count.value = 0
		updateTimestamp()
	}

	function updateTitle(newTitle: string) {
		title.value = newTitle
		updateTimestamp()
	}

	function updateTimestamp() {
		lastUpdated.value = new Date().toLocaleTimeString()
	}

	return {
		// State
		title,
		count,
		lastUpdated,

		// Getters
		doubleCount,
		formattedTitle,

		// Actions
		increment,
		decrement,
		reset,
		updateTitle,
	}
})
