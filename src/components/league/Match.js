import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector} from "react-redux";
const Match = (props) =>{
    const {match} = props;
    const summonerDetails = useSelector(state => state.details.summonerDetails);
    
   
    return (
    
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>Lane: {match.lane}</h5>
                    <h5>Season: {match.season}</h5>
                    <h5>Champion: {match.champion}</h5>
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
