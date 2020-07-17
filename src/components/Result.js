import React from 'react'
import styles from './styles.module.css'
import ironRank from '../assets/images/Emblem_Iron.png';
import bronzeRank from '../assets/images/Emblem_Bronze.png';
import silverRank from '../assets/images/Emblem_Silver.png';
import goldRank from '../assets/images/Emblem_Gold.png';
import platinumRank from '../assets/images/Emblem_Platinum.png';
import diamondRank from '../assets/images/Emblem_Diamond.png';
import masterRank from '../assets/images/Emblem_Master.png';
import grandmasterRank from '../assets/images/Emblem_Grandmaster.png';
import challengerRank from '../assets/images/Emblem_Challenger.png';

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
function Result({ result }) {
    return (
        <div className={styles.card}>

            <div className={styles.cardbody}>
                <div className="ui small image">
                <img src={rankedPics[result.tier]}>
                </img>
                </div>
                
                <h1 className="card-title">{result.summonerName}</h1>
                <h5 className="card-title">Queue: {result.queueType}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Rank: {result.tier} {result.rank}</h6>
                <p className="card-text">Wins: {result.wins} Losses: {result.losses}</p>
            </div>
        </div>
        
    )
}

export default Result