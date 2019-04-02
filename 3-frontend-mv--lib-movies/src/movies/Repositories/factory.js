import ApiMoviesRepository from './ApiMoviesRepository'
import MockMoviesRepository from './MockMoviesRepository'

import MoviesMappersFactory from '../Mappers/factory'

import fetch from 'isomorphic-fetch'

export default class MoviesRepositoriesFactory {
  static apiMoviesRepository = ({config}) =>
    new ApiMoviesRepository({
      fetch,
      config,
      searchMapper: MoviesMappersFactory.fromApiMoviesRepositorySearchResponseToSearchUseCaseResponse()
    })

  static mockMoviesRepository = () =>
    new MockMoviesRepository({
      detailMapper: MoviesMappersFactory.fromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse(),
      searchMapper: MoviesMappersFactory.fromMockMoviesRepositorySearchResponseToSearchUseCaseResponse()
    })
}
