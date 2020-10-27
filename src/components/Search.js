import React from 'react'

function SearchBox({handleInput, search}) {
    return (
        <section  className="searchbox-wrap">
            <input 
            type="text" 
            placeholder="Search movie" 
            className="searchbox" 
            onChange={handleInput}
            onKeyPress={search}>
            </input>
        </section>
    )
}

export default SearchBox

