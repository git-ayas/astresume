import { defineDb, defineTable, column } from 'astro:db';

const Posts = defineTable({
  columns: {
    title: column.text(),
    description: column.text(),
    pubDate: column.date(),
    heroImage: column.text(),                               
    body: column.text(),
  }
})

export default defineDb({
  tables: { Posts },
})