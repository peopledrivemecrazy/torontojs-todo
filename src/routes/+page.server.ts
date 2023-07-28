import type { PageServerLoad } from './$types';

let todos = ['todo 1', 'todo 2'];
export const load = (async () => {
	return {
		todos
	};
}) satisfies PageServerLoad;

export const actions = {
	add: async ({ request }) => {
		const form = await request.formData();
		const todo = form.get('todo') as string;
		todos.push(todo);
	},
	remove: async ({ request }) => {
		const form = await request.formData();
		const todo = form.get('todo');
		todos = todos.filter((t) => t !== todo);
	}
};
