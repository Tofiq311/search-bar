import React from 'react'
import "./SearchResult.css"

const SearchResult = ({ result }) => {
  return (
    <div className="search-result"
    onClick={(e) => alert(`You selected ${result}!`)} >
    {result}
  </div>
  )
}

export default SearchResult
