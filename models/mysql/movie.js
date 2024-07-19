import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class MovieModel {
  static async getAll({ genre }) {
    console.log('HACIENDO CONSULTA AL ORM')
    const movies = await prisma.movie.findMany()
    return movies
  }

  static async getById({ id }) {
    const movie = await prisma.movie.findFirst({
      where: { id }
    })

    return movie
  }

  static async create({ input }) {
    const newMovie = await prisma.movie.create({
      data: input
    })

    return newMovie
  }

  static async update({ id, input }) {

  }

  static async delete({ id }) {

  }
}
