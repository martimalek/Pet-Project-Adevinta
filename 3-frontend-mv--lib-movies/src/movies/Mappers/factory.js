import FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse from './FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse'
import FromMockMoviesRepositorySearchResponseToSearchUseCaseResponse from './FromMockMoviesRepositorySearchResponseToSearchUseCaseResponse'
import FromApiMoviesRepositorySearchResponseToSearchUseCaseResponse from './FromApiMoviesRepositorySearchResponseToSearchUseCaseResponse'

export default class MoviesMappers {
  static fromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse = () =>
    new FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse()

  static fromMockMoviesRepositorySearchResponseToSearchUseCaseResponse = () =>
    new FromMockMoviesRepositorySearchResponseToSearchUseCaseResponse()

  static fromApiMoviesRepositorySearchResponseToSearchUseCaseResponse = () =>
    new FromApiMoviesRepositorySearchResponseToSearchUseCaseResponse()
}
