import { catsService } from '../services/CatsService.js'
import BaseController from '../utils/BaseController'

export class CatsController extends BaseController {
  constructor() {
    super('api/cats')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  getAll(req, res, next) {
    try {
      const cats = catsService.getAll()
      res.send(cats)
    } catch (error) {
      next(error)
    }
  }

  getById(req, res, next) {
    try {
      const burger = catsService.getById(req.params.id)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  create(req, res, next) {
    try {
      const burger = catsService.create(req.body)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const burger = catsService.edit(req.bod)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  delete(req, res, next) {
    try {
      catsService.delete(req.params.id)
      res.send('deleted')
    } catch (error) {
      next(error)
    }
  }
}
