import { Hono } from 'hono'

const app = new Hono().basePath('/api')

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const movies = [
  { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
  { id: 2, title: 'The Matrix', director: 'The Wachowskis', year: 1999 },
  { id: 3, title: 'Parasite', director: 'Bong Joon-ho', year: 2019 },
  { id: 4, title: 'Interstellar', director: 'Christopher Nolan', year: 2014 },
  { id: 5, title: 'The Grand Budapest Hotel', director: 'Wes Anderson', year: 2014 },
]

app.get('/movies', (c) => {
  return c.json(movies)
})

export default app