import DetailMoviesUseCase from './DetailMoviesUseCase'
import SearchMoviesUseCase from './SearchMoviesUseCase'
import MoviesRepositories from '../Repositories/factory'

export default class MoviesUseCaseFactory {
  static detailMoviesUseCase = ({config}) =>
    new DetailMoviesUseCase({
      config,
      repository: MoviesRepositories.apiMoviesRepository({config})
    })
  static searchMoviesUseCase = ({config}) =>
    new SearchMoviesUseCase({
      config,
      repository: MoviesRepositories.apiMoviesRepository({config})
    })
}
