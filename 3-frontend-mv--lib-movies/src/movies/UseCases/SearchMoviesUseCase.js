import {UseCase} from '@s-ui/domain'

class SearchMoviesUseCase extends UseCase {
  constructor({config, repository}) {
    super()

    this._config = config

    this._repository = repository
  }
  async execute({query, year}) {
    return this._repository.getResults({query, year})
  }
}

export default SearchMoviesUseCase
