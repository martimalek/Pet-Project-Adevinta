import {EntryPointFactory} from '@s-ui/domain'
import MoviesUseCasesFactory from './movies/UseCases/factory'

const config = {
  API_ENDPOINT: 'http://www.omdbapi.com/',
  API_KEY: '?apikey=c0118fe6'
}

const useCases = {
  /* Movies */
  search_movies_use_case: MoviesUseCasesFactory.searchMoviesUseCase({config}),
  detail_movies_use_case: MoviesUseCasesFactory.detailMoviesUseCase({config})
}

const Domain = EntryPointFactory({useCases})
export default new Domain()
