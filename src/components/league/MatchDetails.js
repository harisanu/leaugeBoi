import React, { Component } from 'react';
import Spinner from '../layout/Spinner';
import axios from 'axios';
import { Link } from 'react-router-dom';
class MatchDetails extends Component {
    state = {
        match: {},
        matchDetails: {}
    }

    componentDidMount(){
        axios.get(`http://127.0.0.1:8081/match/${this.props.match.params.id}`)
            .then(res => {
                console.log(res.data)
                this.setState({matchDetails: res.data});  
            })
            .catch(err=>console.log(err));
    }

    render() {
        const {matchDetails} = this.state;
        if(matchDetails===undefined || Object.keys(matchDetails).length === 0){
            return <Spinner/>
        }else{
            return (
                <React.Fragment>
                    <Link to="/" className="btn btn-dark btn-sm mb-4">Go back</Link>
                    <div className="card">
                        <div className="card-header">
                        <ul className="list-group mt-3">
                            <li className="list-group-item">
                                   {matchDetails.participants.map((participant, index) =>(
                 <p>{participant.stats.kills}/{participant.stats.deaths}/{participant.stats.assists}     {matchDetails.participantidentities[index].player.summonerName}
                </p>
                
            ))}
                            </li>

                        </ul>
                        </div>
                        
                       
                    </div>
                </React.Fragment>
            )
        }
        
    }
}

export default MatchDetails;