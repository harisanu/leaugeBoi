import React, { useContext } from 'react'
import { Context } from '../../context'
import Spinner from '../layout/Spinner'
import Match from '../league/Match'
import { useSelector } from 'react-redux'


const Matches =() => {


const match_list = useSelector(state => state.details.matches)

                    if (match_list === undefined || match_list.length === 0) {
                        return <Spinner />
                    } else {
                        return (
                            <>
                                
                                <div className="row">
                                    {match_list.matches.map(item =>(
                                        
                                        <Match key={item.gameId} match={item}/>
                                    ))}                                    
                                </div>
                            </>

                        );


                    }
    }

export default Matches;