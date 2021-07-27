import { fakeDb } from '../db/fakeDb'
import { BadRequest } from '../utils/Errors'

class CatsService {
  getAll() {
    return fakeDb.cats
  }

  getById(id) {
    const cat = fakeDb.cats.find(b => b.id.toString() === id)
    if (!cat) {
      throw new BadRequest('invalid cat id')
    }
    return cat
  }

  create(body) {
    fakeDb.cats.push(body)
    return body
  }

  edit(body) {
    let old = this.getById(body.id)
    old = { ...old, ...body }
    this.delete(old.id)
    fakeDb.cats.push(old)
    return old
  }

  delete(id) {
    const index = fakeDb.cats.findIndex(b => b.id.toString() === id)
    if (index > -1) {
      throw new BadRequest('invalid id')
    }
    fakeDb.cats.splice(index, 1)
  }
}

export const catsService = new CatsService()
