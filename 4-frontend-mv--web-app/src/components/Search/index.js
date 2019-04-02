import React, {useState} from 'react'
import PropTypes from 'prop-types'

import AtomInput, {inputSizes} from '@s-ui/react-atom-input'
import Button from '@schibstedspain/sui-atom-button'

function Search({changeQuery, searchSubmit}) {
  const [query, setQuery] = useState('')

  changeQuery = search => {
    search && setQuery(search)
  }

  function formSubmit() {
    searchSubmit(query)
  }

  return (
    <section className="search">
      <form
        className="search-form"
        onSubmit={() => {
          return formSubmit(query)
        }}
      >
        <div className="search-form-input">
          <AtomInput
            size={inputSizes.MEDIUM}
            type="text"
            placeholder="Search for a movie..."
            onChange={ev => {
              ev.preventDefault()
              return changeQuery(ev.target.value)
            }}
          />
        </div>
        <div className="search-form-button">
          <Button>Search</Button>
        </div>
      </form>
    </section>
  )
}

Search.propTypes = {
  changeQuery: PropTypes.string,
  searchSubmit: PropTypes.string
}

export default Search
