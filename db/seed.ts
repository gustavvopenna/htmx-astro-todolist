import { db, Todo } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Todo).values([
		{ id: 1, text: 'Learn Astro', completed: false },
		{ id: 2, text: 'Build a project', completed: false },
		{ id: 3, text: 'Deploy to the web', completed: false },
	])
}
