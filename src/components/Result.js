import React from 'react'

function Result({ result, openPopup }) {
    return (
        <div className="result" onClick={() => openPopup(result.imdbID)}>
            <img src={result.Poster}></img>
            <h3>{result.Title}</h3>
            <h3>{result.Year}</h3>
        </div>
    )
}

export default Result
