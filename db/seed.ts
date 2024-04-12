import { db, Todo } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Todo).values([
		{ id: 'a1-2334-asdsa', text: 'Learn Astro', completed: false },
		{ id: 'b2-3434-sdpo', text: 'Build a project', completed: false },
		{ id: 'v3-3434-psaw', text: 'Deploy to the web', completed: false },
	])
}
