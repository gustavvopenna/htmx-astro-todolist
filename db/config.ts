import { defineDb, defineTable, column } from 'astro:db';

const Todo = defineTable({
  columns: {
    id: column.text({ primaryKey: true, unique: true }),
    text: column.text(),
    completed: column.boolean(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    Todo,
  }
});
