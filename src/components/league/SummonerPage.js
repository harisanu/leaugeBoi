import React from 'react'
import ironRank from '../../assets/images/Emblem_Iron.png';
import bronzeRank from '../../assets/images/Emblem_Bronze.png';
import silverRank from '../../assets/images/Emblem_Silver.png';
import goldRank from '../../assets/images/Emblem_Gold.png';
import platinumRank from '../../assets/images/Emblem_Platinum.png';
import diamondRank from '../../assets/images/Emblem_Diamond.png';
import masterRank from '../../assets/images/Emblem_Master.png';
import grandmasterRank from '../../assets/images/Emblem_Grandmaster.png';
import challengerRank from '../../assets/images/Emblem_Challenger.png';

var rankedPics = {
    "IRON": ironRank,
    "BRONZE": bronzeRank,
    "SILVER": silverRank,
    "GOLD": goldRank,
    "PLATINUM": platinumRank,
    "DIAMOND": diamondRank,
    "MASTER": masterRank,
    "GRANDMASTER": grandmasterRank,
    "CHALLENGER": challengerRank
}
function SummonerPage ({ result }) {
    return (

<div className="float-left">
<div className="card"  style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white'}}>
                <img src={rankedPics[result.tier]} style={{width: '100px', height: '100px'}}/>
            
                <h1 className="card-title">{result.summonerName}</h1>
                <h5 className="card-title">{result.queueType}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Rank: {result.tier} {result.rank}</h6>
                <p className="card-text">Wins: {result.wins} Losses: {result.losses}</p>
            </div>
</div>
)
}

export default React.memo(SummonerPage)