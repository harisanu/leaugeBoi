import React from 'react'

function Result({ result }) {
    return (
        <div className="card">
            <div className="card-body">
    <h1 className="card-title">{result.summonerName}</h1>
    <h5 className="card-title">Queue: {result.queueType}</h5>
    <h6 className="card-subtitle mb-2 text-muted">Rank: {result.tier} {result.rank}</h6>
    <p className="card-text">Wins: {result.wins} Losses: {result.losses}</p>
            </div>
        </div>
    )
}

export default Result