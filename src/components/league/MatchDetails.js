

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import { useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import { FETCH_MATCH_DETAILS } from "../../actions";
const MatchDetails = props => {
  //const [matchDetails, setMatchDetails] = useState({});

  const dispatch = useDispatch();
  const detailsList = useSelector(state => state.details.matchDetails);
  const RenderPlayerStats = React.memo(({data})=>{
    return data[0].participants.map((participant, index) => {
      return(
        
        <div>
        {participant.stats.kills}/{participant.stats.deaths}/{participant.stats.assists} {data[0].participantidentities[index].player.summonerName}

        </div>
      )
    })
  })


  useEffect(() => {
    if(props.match.params.id){
      dispatch({
        type: FETCH_MATCH_DETAILS,
        payload: props.match.params.id,
      });
    }
  }, [props.match.params.id])

  if (
    detailsList === undefined ||
    Object.keys(detailsList).length === 0
  ) {
    console.log(detailsList)
    return <Spinner />;
  } else {
    return (
      <>
      <div className="card">
            <div className="card-header">
            <ul className="list-group mt-3">
                <li className="list-group-item">
      <Link to="/" className="btn btn-dark btn-sm mb-4">Go back</Link>
      <RenderPlayerStats data ={detailsList}/>
      </li>
            </ul>
            </div>
            
           
        </div>
        
      </>
    );
  }
};

export default React.memo(MatchDetails);

