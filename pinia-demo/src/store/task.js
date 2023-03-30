import { defineStore } from 'pinia';

export const useTaskStore = defineStore('task', {
	state: () => ({
		tasks: ['code', 'eat', 'sleep'],
	}),

	actions: {
		addTask(task) {
			this.tasks.push(task);
		},

		removeTask(index) {
			this.tasks.splice(index, 1);
		},
	},
});
