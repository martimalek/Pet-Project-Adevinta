import {Repository} from '@s-ui/domain'

export default class MoviesRepository extends Repository {
  getDetail() {
    throw new Error('[getDetail] method must be implemented')
  }
  getResults() {
    throw new Error('[getResults] method must be implemented')
  }
}
