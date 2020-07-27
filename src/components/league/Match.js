import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector} from "react-redux";
const Match = (props) =>{
    const {match} = props;
    var champions = require('../../assets/data/champions.json');

    const champ = champions.find((champ) => champ.key === String(match.champion))
    return (
    
        <div className="col-md-4" >
            <div className="card mb-4 shadow-sm" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                <div className="card-body" style={{color: 'white'}}>
                    <h5>Lane: {match.lane}</h5>
                    <h5>Season: {match.season}</h5>
                    <h5>Champion: {champ.id}</h5> <img src={champ.icon}></img>
                    <h5>Mode: {match.role}</h5>
                    <h5>GameId: {match.gameId}</h5>
                    <Link to={`matches/match/${match.gameId}`} className="btn btn-dark btn-block">
                        <i className="fa fa-chevron-right"></i> View Matches
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Match;
