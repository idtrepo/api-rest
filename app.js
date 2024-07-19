import express, { json } from 'express'
import { createMovieRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'
import logger from 'morgan'

export const createApp = ({ movieModel }) => {
  const PORT = process.env.PORT ?? 10000
  const app = express()

  app.disable('x-powered-by')

  app.use(logger('dev'))
  app.use(json())
  app.use(corsMiddleware())
  app.use('/movies', createMovieRouter({ movieModel }))
  app.get('/', (req, res) => {
    console.log(req.headers)
    console.log(req.body)
    console.log(req.method)
    res.json({ mensaje: 'hola' })
  })

  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: http://localhost:${PORT}`)
  })
}
