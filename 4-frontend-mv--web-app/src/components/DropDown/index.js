import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import StarRange from '../../../../2-frontend-mv--uilib-components/martiStudio/components/star/range/src/'

const DropDown = ({rangeValue}) => {
  let [inputValue, setInputValue] = useState('')

  useEffect(
    () => {
      rangeValue(inputValue)
    },
    [inputValue]
  )

  return (
    <div className="dropdown">
      <StarRange
        color="jupiter"
        size="dwarf"
        min={1950}
        max={2019}
        onChange={e => setInputValue(e.target.value)}
      />
    </div>
  )
}

DropDown.propTypes = {
  rangeValue: PropTypes.func
}

export default DropDown
